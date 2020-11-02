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
                const proofUrl = result.filePath

                let graphqlQuery = {
                    query: `
                mutation { createupdateProfile(updateProfileData: {
                        amount: "${updateProfileData.amount}",
                        currency: "${updateProfileData.currency}",
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
