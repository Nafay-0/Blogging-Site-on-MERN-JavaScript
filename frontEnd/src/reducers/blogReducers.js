import {FETCH_BLOGS_REQUEST ,FETCH_BLOGS_SUCCESS,FETCH_BLOGS_FAILURE,CLEAR_ERRORS} from '../constants/blogConstants';
export const blogReducers = (state = {blogs:[]}, action) => {
    switch (action.type) {
        case FETCH_BLOGS_REQUEST:
            return {
                loading: true,
                blogs : []
            };
        case FETCH_BLOGS_SUCCESS:
            return {
                loading: false,
                blogs: action.payload.blogs,
                blogsCount : action.payload.BlogsCount
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
export default blogReducers;