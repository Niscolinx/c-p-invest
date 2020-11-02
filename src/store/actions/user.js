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
                console.log('data update profile', resData.data)

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
export const initGetUsers = (getUsersData, token) => {
    return (dispatch) => {
        console.log('update profile data', getUsersData)
        dispatch(getUsersStart())

        let graphqlQuery = {
            query: `{
                getUsers {
                    getMember{                    
                        username
                        email
                        fullname
                        ethereumAccount
                        bitcoinAccount
                        role
                        phone 
                        country
                        city
                        status
                        createdAt
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
                console.log('data update profile', resData.data)

                if (resData.errors) {
                    dispatch(getUsersFailed(resData.errors[0].message))
                }

                dispatch(getUsersSuccess(resData.data))
            })
            .catch((err) => {
                console.log(err)
                dispatch(getUsersFailed(err))
            })
    }
}
