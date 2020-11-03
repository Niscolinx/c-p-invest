import * as actions from './actionTypes'

const URL = 'http://localhost:3030'

//const URL = 'https://coinperfect.herokuapp.com'

export const updateProfileStart = () => {
    return {
        type: actions.UPDATE_PROFILE_START,
    }
}
export const updateProfileSuccess = (data) => {
    return {
        type: actions.UPDATE_PROFILE_SUCCESS,
        data,
    }
}
export const updateProfileFailed = (err) => {
    return {
        type: actions.UPDATE_PROFILE_FAILED,
        err,
    }
}
export const getUsersStart = () => {
    return {
        type: actions.UPDATE_PROFILE_START,
    }
}
export const getUsersSuccess = (data) => {
    return {
        type: actions.UPDATE_PROFILE_SUCCESS,
        data,
    }
}
export const getUsersFailed = (err) => {
    return {
        type: actions.UPDATE_PROFILE_FAILED,
        err,
    }
}

export const investNowStart = () => {
    return {
        type: actions.FUND_ACCOUNT_START,
    }
}
export const fundAccountSuccess = (data) => {
    return {
        type: actions.FUND_ACCOUNT_SUCCESS,
        data,
    }
}

export const fundAccountFailed = (err) => {
    return {
        type: actions.FUND_ACCOUNT_FAILED,
        err,
    }
}

export const initUpdateProfile = (updateProfileData, token) => {
    return (dispatch) => {
        console.log('update profile data', updateProfileData)
        dispatch(updateProfileStart())

        let graphqlQuery = {
            query: `
                mutation { createUpdateProfile(updateProfileData: {
                        username: "${updateProfileData.username}",
                        email: "${updateProfileData.email}",
                        oldEmail: "${updateProfileData.oldEmail}",
                        password: "${updateProfileData.confirmPassword}",
                        fullname: "${updateProfileData.fullname}",
                        city: "${updateProfileData.city}",
                        country: "${updateProfileData.country}",
                        phone: "${updateProfileData.phone}",
                        bitcoinAccount: "${updateProfileData.bitcoin}",
                        ethereumAccount: "${updateProfileData.ethereum}"
                    }){
                        
                        fullname
                        username
                        city
                        country
                        phone
                        bitcoinAccount
                        ethereumAccount
                        email
                        updatedAt
                        createdAt
                    }
                }
            `,
        }

        return fetch(URL + '/api/graphql', {
            method: 'POST',
            body: JSON.stringify(graphqlQuery),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {

                if (resData.errors) {
                    dispatch(updateProfileFailed(resData.errors[0].message))
                }

                dispatch(updateProfileSuccess(resData.data))
            })
            .catch((err) => {
                console.log(err)
                dispatch(updateProfileFailed(err))
            })
    }
}
export const initGetUsers = (token) => {
    return (dispatch) => {
        console.log('the token of getUsers', token)
        dispatch(getUsersStart())

        let graphqlQuery = {
            query: `{
                getUsers {
                    getUser {                    
                        userNO
                        username
                        email
                        status
                        updatedAt
                    }
                }
            }`,
        }

        return fetch(URL + '/api/graphql', {
            method: 'POST',
            body: JSON.stringify(graphqlQuery),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                console.log('data getUsers', resData.data)

                if (resData.errors) {
                    dispatch(getUsersFailed(resData.errors[0].message))
                }

                dispatch(getUsersSuccess(resData.data.getUsers.getUser))
            })
            .catch((err) => {
                console.log(err)
                dispatch(getUsersFailed(err))
            })
    }
}

export const initInvestNow = (fundData, token) => {
    return (dispatch) => {
        dispatch(investNowStart())
        const formData = new FormData()
        if (fundData.file) {
            console.log('the file')
            formData.append('image', fundData.file['0'])
        }

        fetch(URL + '/api/post-image', {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + token,
            },
            body: formData,
        })
            .then((res) => {
                return res.json()
            })
            .then((result) => {
                const proofUrl = result.filePath

                let graphqlQuery = {
                    query: `
                mutation { createFundAccount(fundData: {
                        amount: "${fundData.amount}",
                        currency: "${fundData.currency}",
                        proofUrl: "${proofUrl}"
                    }){
                        _id
                        amount
                        currency
                        proofUrl
                        creator {
                            username
                        }
                        createdAt
                    }
                }
            `,
                }

                return fetch(URL + '/api/graphql', {
                    method: 'POST',
                    body: JSON.stringify(graphqlQuery),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token,
                    },
                })
            })

            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                console.log('the res', resData)
                if (resData.errors) {
                    dispatch(fundAccountFailed(resData.errors[0].message))
                }

                dispatch(getFundAccountSuccess(resData.data))
            })
            .catch((err) => {
                console.log(err)
                dispatch(fundAccountFailed(err))
            })
    }
}