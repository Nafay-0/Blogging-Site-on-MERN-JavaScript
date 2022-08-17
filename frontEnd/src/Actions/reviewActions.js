import axios from "axios";
import {
    CREATE_REVIEW_REQUEST,
    CREATE_REVIEW_SUCCESS,
    CREATE_REVIEW_FAILURE,
    CLEAR_ERRORS,
    FETCH_REVIEW_REQUEST,
    FETCH_REVIEW_SUCCESS,
    FETCH_REVIEW_FAILURE,
} from '../constants/reviewConstants';


export const createReview = (blogId,User,Comment,Rating) => async (dispatch) => {
    console.log(blogId,User,Comment,Rating);
    try{
        dispatch({ type: CREATE_REVIEW_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const res = await axios.post(`/api/blogs/${blogId}/review`, {User,Comment,Rating}, config);
        dispatch({ type: CREATE_REVIEW_SUCCESS, payload: res.data });
    }   
    catch(error){
        console.log(error);
        dispatch({ type: CREATE_REVIEW_FAILURE, payload: error.response.data });

    }
}

export const getReviews = (blogId) => async (dispatch) => {
    try{
        dispatch({ type: FETCH_REVIEW_REQUEST });
        // request url : /api/blogs/{blogId}/review
        const res = await axios.get(`/api/blogs/${blogId}/review`);
        dispatch({ type: FETCH_REVIEW_SUCCESS, payload: res.data });
    }
    catch(error){
        console.log(error);
        dispatch({ type: FETCH_REVIEW_FAILURE, payload: error.response.data.message });
    }

}