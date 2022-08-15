import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    CLEAR_ERRORS
} from '../constants/userConstants'


export const authReducers = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading: true,
                isAuthenticated:false,
                user: {}
            };
        case LOGIN_SUCCESS:
            return {
                loading: false,
                user: action.payload.User,
                isAuthenticated:true,
                message : action.payload.message
            };
        case LOGIN_FAILURE:
            return {
                loading: false,
                isAuthenticated:false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        
        default:
            return state;
    }
}