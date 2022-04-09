import thunk from 'redux-thunk';
// import {persistStore, persistReducer} from 'redux-persist';
import {createStore, applyMiddleware} from 'redux';

import AuthReducer from './AuthReducer';
const middleware = [thunk];

export const Store = createStore(AuthReducer, applyMiddleware(...middleware));
