export const changeProfile = 'changeProfile';
import {url} from './assignmentGrades';
import axios from 'axios';
export const ChangePhoto = 'ChangePhoto';
import {ToastAndroid} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
export const ProfileChange = (changeFname, changeLname, token) => {
  return async dispatch => {
    var data = JSON.stringify({
      user: {
        first_name: changeFname,
        last_name: changeLname,
      },
    });

    var config = {
      method: 'patch',
      url: `${url}/users/profileupdate`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      const {data} = await axios(config);
      ToastAndroid.showWithGravity(
        'Profile Updated Successfully',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      // console.warn(JSON.stringify(data));
      dispatch({type: changeProfile, payload: data});
    } catch (error) {
      // console.warn(error);
      ToastAndroid.showWithGravity(
        'an error occured please try again',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  };
};

export const ImageUpload = (images, token) => {
  return async dispatch => {
    var data = JSON.stringify({
      user: {
        avatar: images,
      },
    });
    var config = {
      method: 'patch',
      url: `${url}/users/profileupdate`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };
    try {
      const userdata = await axios(config);
      ToastAndroid.showWithGravity(
        'Profile Updated Successfully',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      // console.warn(JSON.stringify(data));
      dispatch({type: changeProfile, payload: userdata});
    } catch (error) {
      // console.warn(error);
      ToastAndroid.showWithGravity(
        'An error occured Please try again',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  };
};
