import axios from 'axios';
export const login = 'login';
export const register = 'register';
export const logout = 'logout';
export const getCourse = 'getCourse';
export const getGrade = 'getGrade';
export const getAssignment = 'getAssignment';
export const getTask = 'getTask';
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
  return {type: logout, payload: null};
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
        dispatch({type: register, payload: responseregJson});
      })
      .catch(error => {
        console.warn(error);
      });
  };
};

export const courseDetail = courseData => {
  return async dispatch => {
    var config = {
      method: 'post',
      url: 'https://c249-103-41-172-114.ngrok.io/users',
      headers: {
        'Content-Type': 'application/json',
      },
      data: courseData,
    };

    await axios(config)
      .then(courseResponse => {
        const courseJson = courseResponse.json();
        console.warn(courseJson);
        dispatch({type: getCourse, payload: courseJson});
      })
      .catch(error => {
        console.warn(error);
      });
  };
};

export const gradesDetail = gradesData => {
  return async dispatch => {
    var config = {
      method: 'post',
      url: 'https://c249-103-41-172-114.ngrok.io/users',
      headers: {
        'Content-Type': 'application/json',
      },
      data: gradesData,
    };

    await axios(config)
      .then(gradesResponse => {
        const gradesJson = gradesResponse.json();
        console.warn(gradesJson);
        dispatch({type: getGrade, payload: gradesJson});
      })
      .catch(error => {
        console.warn(error);
      });
  };
};

export const tasksDetail = tasksData => {
  return async dispatch => {
    var config = {
      method: 'post',
      url: 'https://c249-103-41-172-114.ngrok.io/users',
      headers: {
        'Content-Type': 'application/json',
      },
      data: tasksData,
    };

    await axios(config)
      .then(tasksResponse => {
        const tasksJson = tasksResponse.json();
        console.warn(tasksJson);
        dispatch({type: getTask, payload: tasksJson});
      })
      .catch(error => {
        console.warn(error);
      });
  };
};

export const assignmentDetail = assignmentData => {
  return async dispatch => {
    var config = {
      method: 'post',
      url: 'https://c249-103-41-172-114.ngrok.io/users',
      headers: {
        'Content-Type': 'application/json',
      },
      data: assignmentData,
    };

    await axios(config)
      .then(assignmentResponse => {
        const assignmentJson = assignmentResponse.json();
        console.warn(assignmentJson);
        dispatch({type: getAssignment, payload: assignmentJson});
      })
      .catch(error => {
        console.warn(error);
      });
  };
};
