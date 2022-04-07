import axios from 'axios';
export const login = 'login';
export const getRepo = 'getRepo';
export const loginUser = (loginEmail, loginPassword) => {
  return async dispatch => {
    console.warn(loginEmail, loginPassword);
    var data = JSON.stringify({
      user: {
        email: loginEmail,
        password: loginPassword,
      },
    });

    var config = {
      method: 'post',
      url: 'http://96c7-103-41-172-114.ngrok.io/users/sign_in',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    await axios(config)
      .then(response => {
        const responseJson = response.json();
        console.warn(responseJson);
      })
      .catch(error => {
        console.warn(error);
      });

    dispatch({type: login, payload: responseJson});
  };
};
