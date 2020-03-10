import { createStore, applyMiddleware } from 'redux';

import promise from 'redux-promise';
import thunk from 'redux-thunk';

import MainReducer from './main'

const store = applyMiddleware(promise, thunk)(createStore)(MainReducer)

export default store;