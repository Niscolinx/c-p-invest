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
        type: actions.UPDATE_PROFILE__SUCCESS,
        data,
    }
}
export const updateProfileFailed = (err) => {
    return {
        type: actions.UPDATE_PROFILE__FAILED,
        err,
    }
}

export const initupdateProfile = (updateProfileData, token) => {
    return (dispatch) => {
        console.log('update profile data', updateProfileData)
        dispatch(updateProfileStart())
        const formData = new FormData()

        formData.append('image', updateProfileData.file['0'])

        fetch(URL + '/api/post-image', {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + token,
            },
            body: formData,
        })
            .then((res) => {
                console.log('the res', res)
                return res.json()
            })
            .then((result) => {
                console.log('the post data', result)
                const profilePicPath = result.filePath

                let graphqlQuery = {
                    query: `
                mutation { createupdateProfile(updateProfileData: {
                        username: "${updateProfileData.username.value}",
            email: "${updateProfileData.confirmEmail.value}",
            password: "${updateProfileData.confirmPassword.value}",
            fullname: "${updateProfileData.fullname.value}",
            profilePic: "${profilePicPath}",
            city: "${updateProfileData.city.value}",
            country: "${updateProfileData.country.value}",
            phone: "${updateProfileData.phone.value}",
            bitcoinAccount: "${updateProfileData.bitcoinAccount.value}",
            ethereumAccount: "${updateProfileData.ethereumAccount.value}"
                    }){
                        _id
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
            })

            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                console.log('data posted', resData)

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
