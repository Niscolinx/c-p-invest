import * as actions from './actionTypes'

export const authStart = () => {
    return {
        type: actions.AUTH_START,
    }
}

export const authSuccessCheck = (auth, token) => {
    return (dispatch) => {
        localStorage.setItem('userId', auth)
        localStorage.setItem('token', token)

        const remainingMilliseconds = 3600 * 1000
        const expiryDate = new Date(
            new Date().getTime() + remainingMilliseconds
        )
        localStorage.setItem('expiryDate', expiryDate.toISOString())
        dispatch(authSuccess(auth, token))

        setTimeout(() => {
            dispatch(logOut())
        }, remainingMilliseconds)
    }
}

export const authSuccess = (auth, token) => {
    return {
        type: actions.AUTH_SUCCESS,
        userId: auth,
        tokenId: token,
    }
}

export const authFailed = (error) => {
    return {
        type: actions.AUTH_FAILED,
        error,
    }
}

export const logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expiryDate')

    return {
        type: actions.AUTH_LOGOUT,
    }
}

export const clearError = () => {
    return {
        type: actions.AUTH_CLEAR_ERROR,
    }
}

export const initLogin = (email, password) => {
    return (dispatch) => {
        dispatch(authStart())

        const graphqlQuery = {
            query: `{
                login(email: "${email}", password: "${password}"){
                userId
                token
            }
          }
         `,
        }

        fetch('https://mynode-blog.herokuapp.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(graphqlQuery),
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                console.log('In the res data', resData)
                if (resData.errors && resData.errors[0].statusCode === 422) {
                    throw new Error(
                        'Validation failed. Please make sure your input values are correct'
                    )
                }
                if (resData.errors) {
                    throw new Error('Login failed!')
                }
                dispatch(
                    authSuccessCheck(
                        resData.data.login.userId,
                        resData.data.login.token
                    )
                )

                // setState({
                //     ...state,
                //     isAuth: true,
                //     token: resData.data.login.token,
                //     authLoading: false,
                //     userId: resData.data.login.userId,
                // })
            })
            .catch((err) => {
                console.log('Error occurred in login',err)
                dispatch(authFailed(err))
                // setState({
                //     ...state,
                //     isAuth: false,
                //     authLoading: false,
                //     error: err,
                // })
            })
    }
}

// export const initAuth = (email, password, isLogin) => {

//     return dispatch => {
//         dispatch(authStart())

//         let url = fire.auth().signInWithEmailAndPassword(email, password)
//         if (!isLogin) {
//             url = fire.auth().createUserWithEmailAndPassword(email, password)
//         }
//         url.then(res => {
//             window.confirmationResult.confirm(password);

//             dispatch(authSuccessCheck(res.user.uid))
//         })
//             .catch(err => {
//                 dispatch(authFailed(err.message))
//             })
//     }
// }
