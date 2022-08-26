import {combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { legacy_createStore as createStore} from 'redux'

import { BlogDetailsReducers,blogReducers,blogCreateReducers } from './reducers/blogReducers';
import { authReducers } from './reducers/userReducers';
import {reviewReducers,fetchReviewReducers} from './reducers/reviewReducer';
const reducer = combineReducers({
    blog : blogReducers,
    blogDetails : BlogDetailsReducers,
    auth : authReducers,
    blogCreate : blogCreateReducers,
    review : reviewReducers,
    fetchReview : fetchReviewReducers,

});

let initialState = {
    

};

const middleware = [thunk];
const store = createStore(reducer
    ,initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;