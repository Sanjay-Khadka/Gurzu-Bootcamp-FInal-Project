import axios from 'axios';
import {url} from './assignmentGrades';
export const getMyCourse = 'getCourse';
export const getAllCourse = 'getAllCourse';
export const getChapter = 'getChapter';
export const enrollment = 'enrollment';
export const MyCourse = courseToken => {
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

export const enrollCourse = (courseToken, currentUser) => {
  return async dispatch => {
    var data = JSON.stringify({
      user_id: currentUser,
    });

    var config = {
      method: 'post',
      url: `https://avocado.pagekite.me/courses/${courseId}/enrollments`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${courseToken}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        dispatch({type: enrollment, payload: response.data});
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
      .then(function (allCoursedata) {
        // console.warn(JSON.stringify(allCoursedata));
        dispatch({type: getAllCourse, payload: allCoursedata});
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
