import axios from 'axios';
export const login = 'login';
export const register = 'register';
export const logout = 'logout';
export const getMyCourse = 'getCourse';
export const getAllCourse = 'getAllCourse';
export const getChapter = 'getChapter';
export const getGrade = 'getGrade';
export const getAssignment = 'getAssignment';
export const resetPassword = 'resetPasword';
export const getToken = 'getToken';
export const getRepo = 'getRepo';
const url = 'https://avocado.pagekite.me';

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
      const token = response.data.token;
      dispatch({type: login, payload: response.data});
      console.warn(token);
    } catch (error) {
      console.warn(error);
    }
  };
};

export const showRepo = () => {
  return async dispatch => {
    try {
      const repo = 'https://api.github.com/users/nepsians/repos';
      const response = await fetch(repo);
      const responseJson = await response.json();
      console.log(responseJson);
      dispatch({type: getRepo, payload: responseJson});
    } catch (error) {
      alert(error);
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
      console.warn(token);
    } catch (error) {
      console.warn(error);
    }
  };
};
export const logoutUser = () => {
  return {type: logout, payload: null};
};

export const registerUser = (
  firstname,
  lastname,
  registerEmail,
  registerPassword,
  confirmPassword,
) => {
  return async dispatch => {
    var data = JSON.stringify({
      user: {
        first_name: firstname,
        last_name: lastname,
        email: registerEmail,
        password: registerPassword,
        password_confirmation: confirmPassword,
      },
    });

    var config = {
      method: 'post',
      url: `${url}/users`,
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NDk1NDMyODV9.1F9_iIoRAwckx8iQovUZU69IfzdS-YsGBPG6c-C4q2o',
        'Content-Type': 'application/json',
      },
      data: data,
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

export const MyCourse = () => {
  return async dispatch => {
    var config = {
      method: 'get',
      url: `${url}/courses/1`,
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NDk1NDMyODV9.1F9_iIoRAwckx8iQovUZU69IfzdS-YsGBPG6c-C4q2o',
      },
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
export const AllCourse = () => {
  return async dispatch => {
    var config = {
      method: 'get',
      url: `${url}/courses`,
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NDk1NDMyODV9.1F9_iIoRAwckx8iQovUZU69IfzdS-YsGBPG6c-C4q2o',
      },
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

// export const gradesDetail = () => {
//   return async dispatch => {
//     var config = {
//       method: 'post',
//       url: 'https://c249-103-41-172-114.ngrok.io/users',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       data: gradesData,
//     };

//     await axios(config)
//       .then(gradesResponse => {
//         const gradesJson = gradesResponse.json();
//         console.warn(gradesJson);
//         dispatch({type: getGrade, payload: gradesJson});
//       })
//       .catch(error => {
//         console.warn(error);
//       });
//   };
// };

export const assignmentDetail = assignmentData => {
  return async dispatch => {};
};
export const chapterDisplay = () => {
  return async dispatch => {
    var config = {
      method: 'get',
      url: `${url}/courses/1/chapters/1`,
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NDk1NDMyODV9.1F9_iIoRAwckx8iQovUZU69IfzdS-YsGBPG6c-C4q2o',
      },
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
export const chaptersShow = () => {
  return async dispatch => {
    var config = {
      method: 'get',
      url: `${url}/courses/1/chapters`,
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NDk1NDMyODV9.1F9_iIoRAwckx8iQovUZU69IfzdS-YsGBPG6c-C4q2o',
      },
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
