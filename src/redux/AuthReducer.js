import {login, logout, register, resetPassword, getToken} from './actions';

const initialState = {
  Login: [],
  authToken: null,
  Register: [],
  ResetPassword: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case login:
      return {
        ...state,
        Login: action.payload,
      };
    case getToken: {
      return {
        ...state,
        authToken: action.payload,
      };
    }
    case logout:
      return {
        Login: null,
      };
    case register:
      return {
        Register: action.payload,
      };
    case resetPassword: {
      return {
        ResetPassword: action.payload,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
