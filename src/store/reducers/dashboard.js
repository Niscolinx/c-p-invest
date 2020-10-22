import * as actionTypes from '../actions/actionTypes'
import update from '../utility'

const initialState = {
    error: null,
    loading: false,
    fundedAccount: []
    
}
const fundAccountStart = (state, action) => {
    return update(state, {
        loading: true,
    })
}
const fundAccountSuccess = (state, action) => {
    return update(state, {
        loading: false,
        fundedAccount: action.data
    })
}
const fundAccountFailed = (state, action) => {
    return update(state, {
        loading: false,
        error: action.err
    })
}

const fundAccount = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FUND_ACCOUNT_START:
            return fundAccountStart(state, action)
        case actionTypes.FUND_ACCOUNT__SUCCESS:
            return fundAccountSuccess(state, action)
        case actionTypes.FUND_ACCOUNT__FAILED:
            return fundAccountFailed(state, action)

        default:
            return state
    }
}

export default fundAccount
