import {
  login,
  logout,
  register,
  resetPassword,
  getToken,
  passwordChange,
} from '../actions/AuthActions';

const initialState = {
  Login: [],
  authToken: null,
  Register: [],
  ResetPassword: {},
  changePassword: {},
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
    case passwordChange: {
      return {
        changePassword: action.payload,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
