import thunk from 'redux-thunk';
// import {persistStore, persistReducer} from 'redux-persist';
import {createStore, applyMiddleware} from 'redux';

import AllReducers from './CombinedReducer';
const middleware = [thunk];

export const Store = createStore(AllReducers, applyMiddleware(...middleware));
