import axios from 'axios';
import {url} from './assignmentGrades';
import {useSelector} from 'react-redux';
export const login = 'login';
export const register = 'register';
export const logout = 'logout';
export const resetPassword = 'resetPassword';
export const getToken = 'getToken';
export const loginUser = logindata => {
  return async dispatch => {
    // console.warn({logindata});
    var config = {
      method: 'post',
      url: `${url}/users/sign_in`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: logindata,
    };

    try {
      const response = await axios(config);
      // console.warn(response.data.token);
      const loginCredentials = response.data;
      dispatch({type: login, payload: loginCredentials});
      console.warn(loginCredentials);
    } catch (error) {
      console.warn(error);
    }
  };
};

export const userToken = logindata => {
  return async dispatch => {
    // console.warn({logindata});
    var config = {
      method: 'post',
      url: `${url}/users/sign_in`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: logindata,
    };

    try {
      const response = await axios(config);
      // console.warn(response.data.token);
      const token = response.data.token;
      dispatch({type: getToken, payload: token});
      // console.warn(token);
    } catch (error) {
      console.warn(error);
    }
  };
};
export const logoutUser = () => {
  return {type: logout, payload: null};
};

export const registerUser = registerData => {
  return async dispatch => {
    var config = {
      method: 'post',
      url: `${url}/users`,
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NDk1NDMyODV9.1F9_iIoRAwckx8iQovUZU69IfzdS-YsGBPG6c-C4q2o',
        'Content-Type': 'application/json',
      },
      data: registerData,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const forgotPassword = resetEmail => {
  return async dispatch => {
    var data = JSON.stringify({
      user: {
        email: resetEmail,
      },
    });

    var config = {
      method: 'post',
      url: `${url}/users/password`,
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NDk1NDMyODV9.1F9_iIoRAwckx8iQovUZU69IfzdS-YsGBPG6c-C4q2o',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        dispatch({type: resetPassword, payload: response.data});
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
