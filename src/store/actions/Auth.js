import * as actions from './actionTypes'

export const authStart = () => {
    return {
        type: actions.AUTH_START,
    }
}

export const authSuccessCheck = (auth, token) => {
    return (dispatch) => {
        console.log('the auth', auth, token)
        console.log('logged in successfully')

        window.localStorage.setItem('userId', auth)
        localStorage.setItem('token', token)

        // const remainingMilliseconds = 3600 * 1000
        // const expiryDate = new Date(
        //     new Date().getTime() + remainingMilliseconds
        // )
        // localStorage.setItem('expiryDate', expiryDate.toISOString())
        // dispatch(authSuccess(auth, token))

        // setTimeout(() => {
        //     dispatch(logOut())
        // }, remainingMilliseconds)
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

export const noAuthError = (data) => {

    return {
        type: actions.NO_AUTH_ERROR,
        data
    }
}

export const logOut = () => {
    // localStorage.removeItem('token')
    // localStorage.removeItem('userId')
    // localStorage.removeItem('expiryDate')

    return {
        type: actions.AUTH_LOGOUT,
    }
}

export const redirect = (to) => {
    return {
        type: actions.AUTH_REDIRECT,
        to,
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

        fetch('http://localhost:3030/graphql', {
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
                    dispatch(authFailed(resData.errors))
                    throw new Error('Login failed!')
                }

                dispatch(noAuthError(resData.data))
                dispatch(
                    authSuccessCheck(
                        resData.data.login.userId,
                        resData.data.login.token
                    )
                )

                dispatch(redirect('/admin/dashboard'))
            })
            .catch((err) => {
                console.log('Error occurred in login', err)
            })
    }
}

export const initSignup = (authData) => {
    return (dispatch) => {
        dispatch(authStart())
    
        const data = authData.signupForm

        const graphqlQuery = {
            query: ` mutation { createUser(userData: {
            username: "${data.username.value}",
            email: "${data.confirmEmail.value}",
            password: "${data.confirmPassword.value}",
            fullname: "${data.fullname.value}",
            secretQuestion: "${data.secretQuestion.value}",
            secretAnswer: "${data.secretAnswer.value}",
            bitcoinAccount: "${data.bitcoinAccount.value}",
            ethereumAccount: "${data.ethereumAccount.value}"
           }) {  email username }
         }`,
        }

        fetch('http://localhost:3030/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(graphqlQuery),
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                console.log('new user', resData)
                if (resData.errors && resData.errors[0].statusCode === 422) {
                    throw new Error(
                        'Validation failed. Please make sure your input values are correct'
                    )
                }
                if (resData.errors) {
                    throw new Error('Creating a user failed!')
                }

                dispatch(redirect('/Auth/login'))
            })
            .catch((err) => {
                console.log(err)
                dispatch(authFailed(err))
            })
    }
}
