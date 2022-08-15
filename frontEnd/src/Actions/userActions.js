import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    CLEAR_ERRORS,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from '../constants/userConstants'


export const login = (email, password) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/users/login', {email, password}, config);
        console.log(res.data);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.User });
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.response.data.message });
    }
}

export const register = (userData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const res = await axios.post('/api/users', userData, config);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data.User });
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error.response.data.message });
    }
}



export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
