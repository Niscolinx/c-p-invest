import * as actions from './actionTypes'

export const authStart = () => {
    return {
        type: actions.AUTH_START,
    }
}

export const authSuccessCheck = (auth, token, role, email) => {
    return (dispatch) => {
        sessionStorage.setItem('userId', auth)
        sessionStorage.setItem('token', token)

        const remainingMilliseconds = 3600 * 1000
        const expiryDate = new Date(
            new Date().getTime() + remainingMilliseconds
        )

        //After set this to calculate the expiration based on the sessionStorage
        sessionStorage.setItem('expiryTime', remainingMilliseconds)
        sessionStorage.setItem('expiryDate', expiryDate.toISOString())
        dispatch(authSuccess(auth, token, role, email))

        setTimeout(() => {}, remainingMilliseconds)
    }
}

export const authSuccess = (auth, token, role, email) => {
    return {
        type: actions.AUTH_SUCCESS,
        userId: auth,
        tokenId: token,
        role,
        email,
    }
}

export const authFailed = (page, error) => {
    return {
        type: actions.AUTH_FAILED,
        page,
        error,
    }
}

export const redirect = (to, data) => {
    return {
        type: actions.AUTH_REDIRECT,
        to,
        data,
    }
}

export const logOut = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('expiryDate')

    return {
        type: actions.AUTH_LOGOUT,
    }
}

export const clearError = () => {
    return {
        type: actions.AUTH_CLEAR_ERROR,
    }
}

export const getUser = (data) => {
    return {
        type: actions.AUTH_GETUSER,
        data,
    }
}

export const initGetUser = (token) => {
    return (dispatch) => {
        dispatch(authStart())
        const graphqlQuery = {
            query: `{
                getUser {
                   fullname username email role
                }
            }`,
        }
        fetch('https://coinperfect.herokuapp.com/api/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify(graphqlQuery),
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                if (resData.errors) {
                    dispatch(authFailed('getUser', resData.errors[0].message))

                    throw new Error('Failed to fetch user status.')
                }
                dispatch(getUser(resData.data.getUser))
            })
            .catch((err) => {
                console.log('error in getUser', err)
                return dispatch(authFailed('getUser', 'Failed to fetch (500)'))
            })
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

        fetch('https://coinperfect.herokuapp.com/api/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(graphqlQuery),
        })
            .then((res) => {
                console.log('the first res', res)
                return res.json()
            })
            .then((resData) => {
                console.log('the res data', resData)
                if (resData.errors && resData.errors[0].statusCode === 422) {
                    throw new Error(
                        'Validation failed. Please make sure your input values are correct'
                    )
                }
                if (resData.errors) {
                    return dispatch(
                        authFailed('login', resData.errors[0].message)
                    )
                    // throw new Error('Login failed!')
                }

                dispatch(
                    authSuccessCheck(
                        resData.data.login.userId,
                        resData.data.login.token,
                        resData.data.login.role,
                        resData.data.login.email
                    )
                )
            })
            .catch((err) => {
                console.log('error in login', err)
                return dispatch(authFailed('login', 'Failed to fetch (500)'))
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
           }) {  email username fullname }
         }`,
        }

        fetch('https://coinperfect.herokuapp.com/api/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(graphqlQuery),
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                if (resData.errors && resData.errors[0].statusCode === 422) {
                    throw new Error(
                        'Validation failed. Please make sure your input values are correct'
                    )
                }
                if (resData.errors) {
                    return dispatch(
                        authFailed('signup', resData.errors[0].message)
                    )
                    // throw new Error('Creating a user failed!')
                }

                dispatch(redirect('/Auth/login', resData.data.createUser))
            })
            .catch((err) => {
                console.log('error in signup', err)
                return dispatch(authFailed('signup', 'Failed to fetch (500)'))
            })
    }
}
