import * as actionTypes from '../actions/actionTypes'
import update from '../utility'

const initialState = {
    error: null,
    loading: false,
    userId: sessionStorage.getItem('userId') || null,
    tokenId: sessionStorage.getItem('token') || null,
    userData: {},
    siteOwner: sessionStorage.getItem('siteOwner') || false,
    role: null,
    email: null,
}
const authStart = (state, action) => {
    return update(state, {
        loading: true,
    })
}

const authSuccess = (state, action) => {
    console.log('the reducer auth', action)
    return update(state, {
        ...action,
        loading: false,
        userId: action.userId,
        tokenId: action.tokenId,
        role: action.role,
        siteOwner:
            action.email === 'support@coinperfectinvestment.com' ? true : false,
        email: action.email,
        error: null,
    })
}

const authFailed = (state, action) => {
    return update(state, {
        loading: false,
        error: {
            page: action.page,
            error: action.error,
        },
    })
}

const authRedirect = (state, action) => {
    return update(state, {
        loading: false,
        redirect: action.to,
    })
}

const clearError = (state, action) => {
    return update(state, {
        ...action,
        error: null,
    })
}

const getUser = (state, action) => {
    return update(state, {
        ...action,
        loading: false,
        userData: action.data,
    })
}

const authLogOut = (state, action) => {
    return update(state, {
        ...action,
        loading: false,
        userId: null,
        tokenId: null,
        error: null,
    })
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action)
        case actionTypes.AUTH_GETUSER:
            return getUser(state, action)
        case actionTypes.AUTH_REDIRECT:
            return authRedirect(state, action)
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action)
        case actionTypes.AUTH_FAILED:
            return authFailed(state, action)
        case actionTypes.AUTH_LOGOUT:
            return authLogOut(state, action)
        case actionTypes.AUTH_CLEAR_ERROR:
            return clearError(state, action)
        default:
            return state
    }
}

export default auth
