import axios from 'axios';
import {url} from './assignmentGrades';
import {useSelector} from 'react-redux';
export const login = 'login';
export const register = 'register';
export const logout = 'logout';
export const resetPassword = 'resetPassword';
export const getToken = 'getToken';
import {ToastAndroid} from 'react-native';
export const passwordChange = 'passwordChange';
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
      dispatch({type: login, payload: response});
      ToastAndroid.showWithGravity(
        'Login Successfull',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      // console.warn(loginCredentials);
    } catch (error) {
      ToastAndroid.showWithGravity(
        'Please input correct credentials',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
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
      const token = response.data.token;
      console.warn(response.data.token);
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
        ToastAndroid.showWithGravity(
          'Created User Successfully',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
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

export const handlePasswordChange = (values, token) => {
  return async dispatch => {
    var data = JSON.stringify({
      user: {
        current_password: values.oldPassword,
        password: values.newPassword,
        password_confirmation: values.confirmPassword,
      },
    });

    var config = {
      method: 'patch',
      url: `${url}/users/update`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        ToastAndroid.showWithGravity(
          'Password Changed Successfully',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        // return {type: logout, payload: null};
      })
      .catch(function (error) {
        console.warn(error);
        ToastAndroid.showWithGravity(
          'An error occured please try again',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      });
  };
};
