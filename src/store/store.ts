import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// imports for Reducers

const store = createStore(combineReducers({}));

export default store;
