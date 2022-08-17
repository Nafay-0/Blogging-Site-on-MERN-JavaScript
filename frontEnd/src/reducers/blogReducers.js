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
                BlogCount: action.payload.BlogCount,
                resPerPage : action.payload.resPerPage,
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



export const BlogDetailsReducers = (state = { blog: {},created:false}, action) => {
    switch (action.type) {
        case FETCH_BLOG_DETAILS_REQUEST:
        
            return {
                loading: true,
                blog: {},
                created:false,
            };
        case FETCH_BLOG_DETAILS_SUCCESS:
        
            return {
                loading: false,
                blog: action.payload.blog,
                message : action.payload.message,
                created : true
                
            };
        case FETCH_BLOG_DETAILS_FAILURE:
        
            return {
                loading: false,
                error: action.payload,
                created : false
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

export const blogCreateReducers = (state = { created:false}, action) => {
    switch (action.type) {
        case ADD_BLOG_REQUEST:
            return {
                loading: true,
                created:false,
            };
        case ADD_BLOG_SUCCESS:
            return {
                loading: false,
                message : action.payload.message,
                created : true
                
            };
        case ADD_BLOG_FAILURE:
            return {
                loading: false,
                error: action.payload,
                created : false
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
