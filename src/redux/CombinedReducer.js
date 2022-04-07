import {combineReducers} from 'redux';
import loginReducer from './Reducer';
const AllReducers = combineReducers({userinfo: loginReducer});
export default AllReducers;
