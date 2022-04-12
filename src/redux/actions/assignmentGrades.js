import axios from 'axios';
export const getGrade = 'getGrade';
export const getAssignment = 'getAssignment';
export const url = 'https://avocado.pagekite.me';

export const gradesDetail = () => {
  return async dispatch => {
    var config = {
      method: 'post',
      url: 'https://c249-103-41-172-114.ngrok.io/users',
      headers: {
        'Content-Type': 'application/json',
      },
      data: gradesData,
      s,
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

export const assignmentDetail = assignmentData => {
  return async dispatch => {};
};
