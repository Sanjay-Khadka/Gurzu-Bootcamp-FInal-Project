import {login} from './actions';

const initialState = {Login: []};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case login:
      return {
        ...state,
        Login: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
