import * as actions from './actionTypes'

const URL = 'http://localhost:3030'

//const URL = 'https://coinperfect.herokuapp.com'

export const fundAccountStart = () => {
    return {
        type: actions.FUND_ACCOUNT_START,
    }
}
export const fundAccountSuccess = (data) => {
    return {
        type: actions.FUND_ACCOUNT__SUCCESS,
        data,
    }
}
export const fundAccountFailed = (err) => {
    return {
        type: actions.FUND_ACCOUNT__FAILED,
        err,
    }
}

export const initFundAccount = (fundData, token, userId) => {
    return (dispatch) => {
        dispatch(fundAccountStart())
        const formData = new FormData()

        formData.append('image', fundData.file['0'])

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
                console.log('data posted', resData)
                if (resData.errors && resData.errors[0].status === 422) {
                    throw new Error(
                        "Validation failed. Make sure the email address isn't used yet!"
                    )
                }

                if (resData.errors) {
                    throw new Error('Creating or editing a post failed!')
                }

                dispatch(fundAccountSuccess(resData.data))
            })
            .catch((err) => {
                console.log(err)
                dispatch(fundAccountFailed(err))
            })
    }
}
