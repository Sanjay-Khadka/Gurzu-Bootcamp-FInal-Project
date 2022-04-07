import thunk from 'redux-thunk';
// import {persistStore, persistReducer} from 'redux-persist';
import {createStore, applyMiddleware} from 'redux';

import loginReducer from './loginReducer';
const middleware = [thunk];

export const Store = createStore(loginReducer, applyMiddleware(...middleware));
