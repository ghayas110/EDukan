import * as ActionTypes from './ActionTypes'

export const loggedInUser = (state = {
    isLoading: true,
    errMess: null,
    user: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LOGUSER:
            console.log('payload', action.payload)
            return { ...state, isLoading: false, errMess: null, users: action.payload}
        default:
            return state
    }
}