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

export const initUpdateProfile = (updateProfileData, token) => {
    return (dispatch) => {
        console.log('update profile data', updateProfileData.email)
        dispatch(updateProfileStart())

        let graphqlQuery = {
            query: `
                mutation { createUpdateProfile(updateProfileData: {
                        username: "${updateProfileData.username.value}",
                        email: "${updateProfileData.email.value}",
                        password: "${updateProfileData.confirmPassword.value}",
                        fullname: "${updateProfileData.fullname.value}",
                        city: "${updateProfileData.city.value}",
                        country: "${updateProfileData.country.value}",
                        phone: "${updateProfileData.phone.value}",
                        bitcoinAccount: "${updateProfileData.bitcoin.value}",
                        ethereumAccount: "${updateProfileData.ethereum.value}"
                    }){
                        
                        fullname
                        username
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
                console.log('data update profile', resData)

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
