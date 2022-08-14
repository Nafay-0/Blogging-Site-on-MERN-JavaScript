import axios from 'axios';
import {
    FETCH_BLOGS_REQUEST, 
    FETCH_BLOGS_SUCCESS,
    FETCH_BLOGS_FAILURE,
    CLEAR_ERRORS,
    FETCH_BLOG_DETAILS_REQUEST,
    FETCH_BLOG_DETAILS_SUCCESS,
    FETCH_BLOG_DETAILS_FAILURE
} from '../constants/blogConstants';

export const getBlogs = (currentPage = 1) => async (dispatch) => {
    //console.log("Calling getBlogs");
    try{
        dispatch({
            type: FETCH_BLOGS_REQUEST
        });
        const res = await axios.get(`/api/blogs?page=${currentPage}`);
        dispatch({
            type: FETCH_BLOGS_SUCCESS,
            payload: res.data
        });
    }
    catch (error) {
        dispatch({
            type: FETCH_BLOGS_FAILURE,
            payload: error.response.data.message
        })
    };
}

export const getBlogDetails = (id) => async (dispatch) => {
    console.log("CALLLING MEEEEE");
    try{
        dispatch({
            type: FETCH_BLOG_DETAILS_REQUEST
        });
        const res = await axios.get(`/api/blogs/${id}`);
        console.log(res.data);
        dispatch({
            type: FETCH_BLOG_DETAILS_SUCCESS,
            payload: res.data
        });
    }
    catch (error) {
        dispatch({
            type: FETCH_BLOG_DETAILS_FAILURE,
            payload: error.response.data.message
        })
    };
}
// clear errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}

// export const searchblogsByCategory = (category,blogs) =>  (dispatch) => {
//     // filter blogs in the state by category
//     const filteredBlogs = blogs.filter(blog => blog.category === category);
//     dispatch({
//         type: FETCH_BLOGS_SUCCESS,
//         payload: filteredBlogs
//     })
// }
