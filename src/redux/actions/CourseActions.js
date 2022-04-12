import axios from 'axios';
import {url} from './assignmentGrades';
export const getMyCourse = 'getCourse';
export const getAllCourse = 'getAllCourse';
export const getChapter = 'getChapter';

export const MyCourse = () => {
  return async dispatch => {
    var config = {
      method: 'get',
      url: `${url}/courses/1`,
      headers: {
        Authorization: `Bearer ${courseToken}`,
      },
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
export const AllCourse = courseToken => {
  return async dispatch => {
    var config = {
      method: 'get',
      url: `${url}/courses`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${courseToken}`,
      },
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
