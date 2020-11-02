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
        type: actions.FUND_ACCOUNT_SUCCESS,
        data,
    }
}
export const getFundAccountSuccess = (data) => {
    return {
        type: actions.GET_FUND_ACCOUNT_SUCCESS,
        data,
    }
}
export const fundAccountFailed = (err) => {
    return {
        type: actions.FUND_ACCOUNT_FAILED,
        err,
    }
}

export const initFundAccount = (fundData, token) => {
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
export const initGetFunds = (token) => {
    return (dispatch) => {
        dispatch(fundAccountStart())

        let graphqlQuery = {
            query: `{
                getFunds {
                    fundData {
                        fundNO
                        creator
                        amount
                        currency
                        createdAt
                        updatedAt
                        status
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
                console.log('started getFunds', token)
                return res.json()
            })
            .then((resData) => {
                console.log('data posted', resData)

                if (resData.errors) {
                    dispatch(fundAccountFailed(resData.errors[0].message))
                }

                dispatch(fundAccountSuccess(resData.data.getFunds.fundData))
            })
            .catch((err) => {
                console.log(err)
                dispatch(fundAccountFailed(err))
            })
    }
}
