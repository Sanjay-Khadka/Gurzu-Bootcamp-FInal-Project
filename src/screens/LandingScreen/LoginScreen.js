import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Dimensions,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {loginUser, userToken} from '../../redux/actions/AuthActions';
import {useDispatch, useSelector} from 'react-redux';

import {CheckBox, Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

import {FormInput, PasswordInput} from '../../components/';
import {CustomButton} from '../../components/';
import {Formik} from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid Email').trim().required('Email required'),
  password: Yup.string().trim().required('Password required'),
});
const {height, width} = Dimensions.get('window');
const LoginScreen = () => {
  const [errorFlag, setErrorFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [check2, setCheck2] = useState(false);
  const userDetails = {
    email: '',
    password: '',
  };
  const LoginToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  const LoginToRegister = () => {
    navigation.navigate('RegisterScreen');
  };
  const userData = useSelector(state => state.authReducer.Login);
  const message = userData?.data?.message;
  console.warn(message);
  return (
    <Formik
      initialValues={userDetails}
      validationSchema={validationSchema}
      onSubmit={(values, formikActions) => {
        var logindata = JSON.stringify({
          user: {
            email: values.email,
            password: values.password,
          },
        });
        dispatch(loginUser(logindata));
        dispatch(userToken(logindata));
        if (errorMessage) {
          setErrorFlag(true);
        } else {
          setErrorFlag(false);
        }
      }}>
      {({handleChange, handleSubmit, handleBlur, touched, values, errors}) => {
        const {email, password} = values;
        return (
          <KeyboardAvoidingView style={styles.container} behavior="height">
            <View style={styles.innercontainer}>
              <Image
                style={styles.logo}
                source={require('../../assets/gurzuIcon.png')}
              />

              <Text style={styles.header}>Welcome back!</Text>
              <Text style={styles.secondheader}>Login to your account</Text>
              {/* form input view start */}
              <View style={styles.inputcontainer}>
                <FormInput
                  labelText="Email"
                  error={touched.email && errors.email}
                  placeholderText="Enter your email"
                  value={email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />

                <PasswordInput
                  labelText="Password"
                  error={touched.password && errors.password}
                  placeholderText="Enter your password"
                  value={password}
                  onChangeText={handleChange('password')}
                  secureTextEntry={true}
                  onBlur={handleBlur('password')}
                />
              </View>

              {/* form input view end */}

              {/* container view for remember me and forgotpassword button */}
              <View style={styles.checkboxcontainer}>
                <CheckBox
                  center
                  title={<Text style={styles.checkboxtitle}>Remember me</Text>}
                  uncheckedIcon={
                    <Icon
                      name="radio-button-checked"
                      type="material"
                      borderColor="#004277"
                      color="#004277"
                      size={15}
                    />
                  }
                  checkedIcon={
                    <Icon
                      name="radio-button-unchecked"
                      type="material"
                      color="#004277"
                      size={15}
                    />
                  }
                  checked={check2}
                  onPress={() => setCheck2(!check2)}
                />

                <TouchableOpacity onPress={LoginToForgotPassword}>
                  <Text style={styles.textcolor}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              {/* checkbox container end */}

              {/* button for email login and google signin */}
              <CustomButton labelText="Login" handleOnPress={handleSubmit} />

              {/* buttons end */}

              {/* footer info start */}
              <View style={styles.infocontainer}>
                <Text style={styles.questiontext}>Don't have an account?</Text>
                <TouchableOpacity onPress={LoginToRegister}>
                  <Text style={styles.questionbutton}>Join today</Text>
                </TouchableOpacity>
              </View>
              {/* {LoginToHome()} */}
              {/* footer info end */}
              {message ? (
                <Text
                  style={{
                    color: 'red',
                    fontFamily: 'WorkSans-Regular',
                    fontSize: 12,
                    fontWeight: '500',
                  }}>
                  {message}
                </Text>
              ) : null}
            </View>
          </KeyboardAvoidingView>
        );
      }}
    </Formik>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  innercontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: '5%',
    height: height - 60,
    width: width,
  },

  logo: {
    alignItems: 'center',
    position: 'relative',
    marginHorizontal: 29,
    height: 97,
    width: 97,
  },
  header: {
    textAlign: 'center',
    fontFamily: 'WorkSans-Regular',
    position: 'relative',
    width: 238,
    height: 45,
    top: 10,
    fontSize: 32,
    fontWeight: '400',
    color: '#004277',
    // eslint-disable-next-line no-dupe-keys
    fontWeight: '400',
  },
  secondheader: {
    textAlign: 'center',
    fontFamily: 'WorkSans-Regular',
    width: 180,
    height: 22,
    fontWeight: '400',
    fontSize: 16,
    marginTop: 10,
    color: '#7C7C7A',
  },

  inputcontainer: {
    width: width - 55,
    alignItems: 'center',
    marginTop: 30,
  },
  errorMessage: {
    color: 'red',
    fontFamily: 'WorkSans-Regular',
    fontSize: 12,
  },
  checkboxcontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 25,
    width: width,
    // backgroundColor:'#000000',
  },
  checkboxtitle: {
    color: '#004277',
    fontFamily: 'WorkSans-Regular',
    fontSize: 13,
    marginLeft: 8,
  },
  questiontext: {
    textAlign: 'center',
    marginTop: 30,
    color: '#616161',
    fontFamily: 'WorkSans-Regular',
    fontSize: 13,
    padding: 5,
  },
  questionbutton: {
    textAlign: 'center',
    marginLeft: 5,
    marginTop: 35,
    color: '#004277',
    fontSize: 13,
    fontFamily: 'WorkSans-Regular',
  },

  textcolor: {
    color: '#004277',
    fontFamily: 'WorkSans-Regular',
    fontWeight: '400',
    fontSize: 13,
  },
  infocontainer: {
    flexDirection: 'row',
  },
});
