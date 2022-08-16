import axios from 'axios';
import {
    FETCH_BLOGS_REQUEST, 
    FETCH_BLOGS_SUCCESS,
    FETCH_BLOGS_FAILURE,
    CLEAR_ERRORS,
    FETCH_BLOG_DETAILS_REQUEST,
    FETCH_BLOG_DETAILS_SUCCESS,
    FETCH_BLOG_DETAILS_FAILURE,
    ADD_BLOG_REQUEST,
    ADD_BLOG_SUCCESS,
    ADD_BLOG_FAILURE
} from '../constants/blogConstants';
export const getBlogs = (currentPage = 1) => async (dispatch) => {
    
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

export const FilterByCategory = (category) => async (dispatch) => {
    try{
        dispatch({
            type: FETCH_BLOGS_REQUEST
        });
        const res = await axios.get(`/api/blogs?keyword=${category}`);
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

export const addBlog = (blogData) => async (dispatch) => {
    console.log(blogData.title);
    console.log(blogData.content);
    console.log(blogData.category);
    console.log(blogData.cover);
    console.log(blogData.Author);
        dispatch({
        type: ADD_BLOG_REQUEST
        });
    try{
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const res = await axios.post('/api/blogs', blogData, config);
        dispatch({
            type: ADD_BLOG_SUCCESS,
            payload: res.data
        });
    }
    catch (error) {
        dispatch({
            type: ADD_BLOG_FAILURE,
            payload: error.response.data.message
        })
    };
}
