import {login, logout, register} from './actions';

const initialState = {authToken: null, Login: [], Register: []};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case login:
      return {
        ...state,
        Login: action.payload,
      };
    case logout:
      return {
        logout: action.payload,
      };
    case register:
      return {
        Register: action.payload,
      };

    default:
      return state;
  }
};

export default AuthReducer;
