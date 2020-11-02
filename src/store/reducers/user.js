import * as actionTypes from '../actions/actionTypes'
import update from '../utility'

const initialState = {
    error: null,
    loading: false,
    userData: {}
}
const updateProfileStart = (state, action) => {
    return update(state, {
        loading: true,
    })
}

const updateProfile = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PROFILE_START:
            return updateProfileStart(state, action)
        default:
            return state
    }
}

export default updateProfile
