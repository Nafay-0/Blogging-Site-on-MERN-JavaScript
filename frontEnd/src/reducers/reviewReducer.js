import {
    CREATE_REVIEW_REQUEST,
    CREATE_REVIEW_SUCCESS,
    CREATE_REVIEW_FAILURE,
    CLEAR_ERRORS,
    FETCH_REVIEW_REQUEST,
    FETCH_REVIEW_SUCCESS,
    FETCH_REVIEW_FAILURE,
} from '../constants/reviewConstants';

export const reviewReducers = (state = { reviews: [], created: false }, action) => {
    switch (action.type) {
        case CREATE_REVIEW_REQUEST:
            return {
                loading: true,
                created: false,
            };
        case CREATE_REVIEW_SUCCESS:
            return {
                loading: false,
                message: action.payload.message,
                created: true,
            };
        case CREATE_REVIEW_FAILURE:
            return {
                loading: false,
                error: action.payload,
                created: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

export const fetchReviewReducers = (state = { loading: false, reviews: [] }, action) => {
    switch (action.type) {
        case FETCH_REVIEW_REQUEST:
            return {
                loading: true,
                reviews: [],
            };
        case FETCH_REVIEW_SUCCESS:
            return {
                loading: false,
                reviews: action.payload.reviews,
            };
        case FETCH_REVIEW_FAILURE:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}
