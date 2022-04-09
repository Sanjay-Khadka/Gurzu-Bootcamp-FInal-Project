import axios from 'axios';
export const login = 'login';
export const register = 'register';
export const logout = 'logout';
export const loginUser = data => {
  return async dispatch => {
    console.warn({data});
    var config = {
      method: 'post',
      url: 'https://c249-103-41-172-114.ngrok.io/users/sign_in',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };

    await axios(config)
      .then(response => {
        const responseJson = response.json();
        console.warn(responseJson);
        dispatch({type: login, payload: responseJson});
      })
      .catch(error => {
        console.warn(error);
      });
  };
};

export const logoutUser = () => {
  return {type: logoutUser, payload: null};
};

export const registerUser = registerdata => {
  return async dispatch => {
    var config = {
      method: 'post',
      url: 'https://c249-103-41-172-114.ngrok.io/users',
      headers: {
        'Content-Type': 'application/json',
      },
      registerdata,
    };

    await axios(config)
      .then(response => {
        const responseregJson = response.json();
        console.warn(responseregJson);
        dispatch({type: login, payload: responseregJson});
      })
      .catch(error => {
        console.warn(error);
      });
  };
};
