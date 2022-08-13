import {
    FETCH_BLOGS_REQUEST, 
    FETCH_BLOGS_SUCCESS,
    FETCH_BLOGS_FAILURE,
    CLEAR_ERRORS,
    FETCH_BLOG_DETAILS_REQUEST,
    FETCH_BLOG_DETAILS_SUCCESS,
    FETCH_BLOG_DETAILS_FAILURE
} from '../constants/blogConstants';
export const blogReducers = (state = { blogs: [] }, action) => {
    switch (action.type) {
        case FETCH_BLOGS_REQUEST:
            return {
                loading: true,
                ...state
            };
        case FETCH_BLOGS_SUCCESS:
            return {
                loading: false,
                blogs: action.payload.blogs,
                blogsCount: action.payload.BlogsCount
            };
        case FETCH_BLOGS_FAILURE:
            return {
                loading: false,
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



export const BlogDetailsReducers = (state = { blog: {} }, action) => {
    switch (action.type) {
        case FETCH_BLOG_DETAILS_REQUEST:
            return {
                loading: true,
                blog: {}
            };
        case FETCH_BLOG_DETAILS_SUCCESS:
            return {
                loading: false,
                blog: action.payload.blog,
                message : action.payload.message
                
            };
        case FETCH_BLOG_DETAILS_FAILURE:
            return {
                loading: false,
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
