import axios from 'axios';
import {url} from './assignmentGrades';
export const getMyCourse = 'getCourse';
export const getAllCourse = 'getAllCourse';
export const getChapter = 'getChapter';
export const enrollment = 'enrollment';
import {ToastAndroid} from 'react-native';
export const MyCourse = token => {
  return async dispatch => {
    var config = {
      method: 'get',
      url: `${url}/users/enrollments`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const {data} = await axios(config);
      console.warn(JSON.stringify(data));
      dispatch({type: getMyCourse, payload: data});
    } catch (error) {
      console.warn(error);
    }
  };
};

export const enrollCourse = (authToken, currentUserId, courseId) => {
  return async dispatch => {
    var data = JSON.stringify({
      user_id: currentUserId,
    });

    var config = {
      method: 'post',
      url: `https://avocado.pagekite.me/courses/${courseId}/enrollments`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      data: data,
    };

    try {
      const {data} = await axios(config);
      ToastAndroid.showWithGravity(
        'Enrolled in the Course Successfully',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      // console.warn(JSON.stringify(data));
      dispatch({type: enrollment, payload: data});
    } catch (error) {
      // console.warn(error);
      ToastAndroid.showWithGravity(
        'you have already enrolled in this course',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  };
};
export const AllCourse = token => {
  return async dispatch => {
    var config = {
      method: 'get',
      url: `${url}/courses`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
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
