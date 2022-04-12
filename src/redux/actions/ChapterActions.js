import axios from 'axios';
import {url} from './assignmentGrades';
export const displayAllChapters = 'displayALlChapters';
export const individualChapters = 'individualChapters';
export const allChapters = () => {
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
        // console.log(JSON.stringify(response.data));
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
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
