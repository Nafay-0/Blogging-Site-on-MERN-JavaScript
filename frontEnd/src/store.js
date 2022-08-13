import {combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { legacy_createStore as createStore} from 'redux'

import { BlogDetailsReducers,blogReducers } from './reducers/blogReducers';
const reducer = combineReducers({
    blog : blogReducers,
    blogDetails : BlogDetailsReducers
});

let initialState = {
    

};

const middleware = [thunk];
const store = createStore(reducer
    ,initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;