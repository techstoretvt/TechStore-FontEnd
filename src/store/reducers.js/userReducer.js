import actionTypes from '../actions/actionTypes'

const initState = {
    accessToken: null,
    refreshToken: null,
    currentUser: null,
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_TOKENS_SUCCESS: {
            let copyState = { ...state }
            copyState.accessToken = action.data.accessToken
            copyState.refreshToken = action.data.refreshToken
            return {
                ...copyState,
            }
        }
        case actionTypes.UPDATE_TOKENS_FAILD: {
            let copyState = { ...state }
            copyState.accessToken = null
            copyState.refreshToken = null
            return {
                ...copyState,
            }
        }
        case actionTypes.GET_LOGIN_SUCCESS: {
            let copyState = { ...state }
            copyState.currentUser = action.data
            return {
                ...copyState,
            }
        }
        case actionTypes.GET_LOGIN_FAILD: {
            let copyState = { ...state }
            copyState.currentUser = null;
            copyState.accessToken = null
            copyState.refreshToken = null
            return {
                ...copyState,
            }
        }
        case actionTypes.UPDATE_CURRENT_USER: {
            let copyState = { ...state }
            copyState.currentUser = action.data;
            return {
                ...copyState,
            }
        }
        default:
            return state;
    }
}

export default userReducer;