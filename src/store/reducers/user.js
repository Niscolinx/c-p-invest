import * as actionTypes from '../actions/actionTypes'
import update from '../utility'

const initialState = {
    error: null,
    loading: false,
    userData: {},
    getUsers: [],
    investNow: []
}
const updateProfileStart = (state, action) => {
    return update(state, {
        loading: true,
    })
}
const updateProfileSuccess = (state, action) => {
    return update(state, {
        loading: false,
        getUsers: action.data,
    })
}
const updateProfileFailed = (state, action) => {
    return update(state, {
        loading: false,
        error: action.err,
    })
}
const investNowStart = (state, action) => {
    return update(state, {
        loading: true,
    })
}
const investNowSuccess = (state, action) => {
    return update(state, {
        loading: false,
        investNow: action.data,
    })
}
const investNowApprovalSuccess = (state, action) => {
    return update(state, {
        loading: false,
        investNowApprovalSuccess: true,
    })
}
const investNowFailed = (state, action) => {
    return update(state, {
        loading: false,
        error: action.err,
    })
}
const getUsersFailed = (state, action) => {
    return update(state, {
        loading: false,
        error: action.err,
    })
}
const getUsersStart = (state, action) => {
    return update(state, {
        loading: true,
    })
}
const getUsersSuccess = (state, action) => {
    console.log('the reducer', action.data)
    return update(state, {
        loading: false,
        userData: action.data,
    })
}

const handleUsers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PROFILE_START:
            return updateProfileStart(state, action)
        case actionTypes.UPDATE_PROFILE_SUCCESS:
            return updateProfileSuccess(state, action)
        case actionTypes.UPDATE_PROFILE_FAILED:
            return updateProfileFailed(state, action)
        case actionTypes.GET_USERS_START:
            return getUsersStart(state, action)
        case actionTypes.GET_USERS_SUCCESS:
            return getUsersSuccess(state, action)
        case actionTypes.GET_USERS_FAILED:
            return getUsersFailed(state, action)
        case actionTypes.INVEST_NOW_START:
            return investNowStart(state, action)
        case actionTypes.INVEST_NOW_SUCCESS:
            return investNowSuccess(state, action)
        case actionTypes.INVEST_NOW_APPROVAL_SUCCESS:
            return investNowApprovalSuccess(state, action)
        case actionTypes.INVEST_NOW_FAILED:
            return investNowFailed(state, action)
        default:
            return state
    }
}

export default handleUsers
