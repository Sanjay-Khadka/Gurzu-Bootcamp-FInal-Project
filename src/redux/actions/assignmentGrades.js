import axios from 'axios';
export const getAllGrade = 'getGrade';
export const getAssignment = 'getAssignment';
export const url = 'https://avocado.pagekite.me';

export const gradesDetail = (token, userId, ratings) => {
  return async dispatch => {
    var data = JSON.stringify({
      rating: 7.5,
      user_id: 71,
    });

    var config = {
      method: 'get',
      url: `https://avocado.pagekite.me/users/grades`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: data,
    };

    try {
      const gradesData = await axios(config);
      // console.warn(gradesData.data);
      dispatch({type: getAllGrade, payload: gradesData});
    } catch (error) {
      console.warn(error);
    }
  };
};

export const assignmentDetail = assignmentData => {
  return async dispatch => {};
};
