/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Overlay, ListItem, BottomSheet} from '@rneui/base';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Button,
} from 'react-native';
import {ProfileChange, ImageUpload} from '../../redux/actions/ProfileUpdate';
import * as Animatable from 'react-native-animatable';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import {NavigationHeader} from '../../components';
import {EditProfile} from '../../components';
const {width, height} = Dimensions.get('window');
const ChangeProfile = () => {
  const token = useSelector(state => state.authReducer.authToken);
  const [changeFname, setFname] = useState('');
  const [changeLname, setLname] = useState('');
  const [visible1, setVisible1] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [images, setImage] = useState('');
  const cancel = () => {
    setVisible1(!visible1);
  };
  const toggleDialog1 = () => {
    dispatch(ImageUpload(images, token));
    setVisible1(!visible1);
  };
  const toggleDialog2 = () => {
    handleChoosePhoto();
    setIsVisible(false);
    setVisible1(!visible1);
  };
  const setBottomSheet = () => {
    setIsVisible(true);
  };
  const hidebottom = () => {
    setIsVisible(false);
  };

  const savebuttonPressed = () => {
    console.warn('this');
    dispatch(ProfileChange(changeFname, changeLname, token));
    console.warn('and this');
  };
  const handleChoosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      writeTempFile: true,
    }).then(image => {
      setImage(image.path);
      console.log(image);
      console.log(images);
    });
  };

  const dispatch = useDispatch();
  return (
    <View style={styles.maincontainer}>
      <NavigationHeader Title="Settings" />
      <View>
        <TouchableOpacity onPress={setBottomSheet}>
          <Icon name="pencil" size={20} color={'#004277'} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.profile}>
        <Image
          source={{uri: images}}
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
            resizeMode: 'contain',
            backgroundColor: 'black',
          }}
        />
        <Text
          style={{
            color: '#004277',
            fontSize: 16,
            fontWeight: '500',
            fontFamily: 'WorkSans-Regular',
            marginTop: 35,
          }}>
          Profile Picture
        </Text>
      </View>
      <KeyboardAvoidingView styles={styles.inputContainer} behavior="position">
        <EditProfile
          labelText="First Name"
          value={changeFname}
          placeholderText="First name"
          onChangeText={fname => setFname(fname)}
        />
        <EditProfile
          labelText="Last Name"
          placeholderText="Last name"
          value={changeLname}
          onChangeText={lname => setLname(lname)}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.button} onPress={savebuttonPressed}>
            Save
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <View>
        <Overlay
          isVisible={visible1}
          onBackdropPress={toggleDialog1}
          overlayStyle={{
            width: '65%',
            height: '17%',
            justifyContent: 'center',
            borderRadius: 14,
            backgroundColor: '#FFFFFF',
          }}>
          <Animatable.View animation="bounceIn">
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={cancel}>
                <Icon
                  name="circle-with-cross"
                  size={18}
                  color={'#FFFFFF'}
                  style={{marginLeft: 198, marginTop: 12}}
                />
              </TouchableOpacity>
              <View style={styles.message}>
                <Text style={{color: 'white', fontSize: 18}}>
                  Are you Sure??
                </Text>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity
                  onPress={toggleDialog2}
                  style={styles.yesContainer}>
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 14,
                      fontFamily: 'WorkSans-Regular',
                    }}>
                    Yes
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={toggleDialog1}
                  style={styles.noContainer}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                      fontFamily: 'WorkSans-Regular',
                    }}>
                    No
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animatable.View>
        </Overlay>
      </View>
      <Animatable.View animation="bounceIn">
        <BottomSheet isVisible={isVisible} onBackdropPress={hidebottom}>
          <ListItem>
            <ListItem.Content>
              <TouchableOpacity onPress={hidebottom}>
                <ListItem.Title
                  style={{
                    position: 'relative',
                    top: 0,
                    backgroundColor: '#616161',
                    flexDirection: 'row',
                    // marginTop: 10,
                    marginBottom: 19,
                    marginVertical: 10,
                    marginHorizontal: 145,
                    width: 50,
                    height: 5,
                    borderRadius: 10,
                  }}></ListItem.Title>
              </TouchableOpacity>
              <ListItem.Title
                style={{
                  // backgroundColor: 'black',
                  width: '100%',
                  paddingBottom: 20,
                  borderBottomWidth: 0.3,
                  borderBottomColor: '##CECECE',
                  color: '#004277',
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                Change profile picture
              </ListItem.Title>
              <ListItem.Title
                onPress={toggleDialog1}
                style={{
                  // backgroundColor: 'black',
                  width: '100%',
                  paddingBottom: 20,
                  paddingTop: 20,
                  color: '#616161',
                }}>
                New Profile Photo
              </ListItem.Title>
              <ListItem.Title
                style={{
                  //   backgroundColor: 'black',
                  width: '100%',
                  paddingTop: 20,
                  color: 'red',
                  paddingBottom: 10,
                }}>
                Remove Profile Picture
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </BottomSheet>
      </Animatable.View>
    </View>
  );
};
export default ChangeProfile;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  icon: {
    marginLeft: 295,
    marginVertical: 20,
  },
  profile: {
    // backgroundColor: 'blue',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    // margin: 10,
    // alignItems: 'center',
  },
  inputContainer: {
    marginTop: 60,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: 500,
    height: 100,
  },
  input: {
    marginTop: 30,
    backgroundColor: 'white',
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#616161',
    width: width - 30,
  },
  label: {
    // position: 'absolute',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'WorkSans-Regular',
    color: '#323232',
  },
  buttonContainer: {
    marginVertical: 25,
    marginLeft: 195,
    paddingVertical: 8,
    paddingHorizontal: 35,
    backgroundColor: '#004277',
    borderRadius: 5,
  },
  button: {
    letterSpacing: 1,
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'WorkSans-Regular',
  },
  yesContainer: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 7,
    margin: 15,
    paddingVertical: 8,
    backgroundColor: 'white',
    paddingHorizontal: 27,
  },
  noContainer: {
    borderRadius: 7,
    margin: 15,
    paddingVertical: 8,
    backgroundColor: '#004277',
    paddingHorizontal: 29,
  },
  buttons: {
    marginTop: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
