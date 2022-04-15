import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {CustomButton} from '../../components';
import {FormInput} from '../../components';

const {height, width} = Dimensions.get('screen');
import {useNavigation} from '@react-navigation/native';
import {forgotPassword} from '../../redux/actions/assignmentGrades';
import {Formik} from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object({
  email: Yup.string().trim().required('email required'),
});
const ForgotPasswordScreen = () => {
  const dispatch = useDispatch();
  const emailDetail = {
    email: '',
  };

  const navigation = useNavigation();

  const gotoLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <Formik
      initialValues={emailDetail}
      validationSchema={validationSchema}
      onSubmit={values => {
        dispatch(forgotPassword(values.email));
        navigation.navigate('ResetPasswordScreen');
      }}>
      {({handleChange, handleBlur, handleSubmit, errors, values, touched}) => {
        const {email} = values;
        return (
          <KeyboardAvoidingView behavior="position">
            <View style={styles.root}>
              <View style={styles.container}>
                <Image
                  source={require('../../assets/F3.png')}
                  style={styles.logo}
                  resizeMode="contain"
                />
                <Text style={styles.title}>Forgot Password</Text>
                <Text style={styles.text}>
                  Enter your email and a link will be sent {'\n'}
                  to the provided email
                </Text>
                <FormInput
                  placeholderText="Enter your email"
                  error={touched.email && errors.email}
                  labelText="Email"
                  value={email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                <CustomButton
                  onPress={handleSubmit}
                  labelText="Send Request"
                  type="SECONDARY"
                />

                <View style={styles.footer}>
                  <Text style={styles.questionText}>
                    Remembered your Password?
                  </Text>
                  <TouchableOpacity onPress={gotoLogin}>
                    <Text style={styles.loginText}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    margin: 35,
    marginTop: 80,
  },

  text: {
    fontSize: 14,
    paddingBottom: 5,
    textAlign: 'center',
    fontFamily: 'WorkSans-Regular',
    color: '#7C7C7A',
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '400',
    color: '#004277',
    margin: 18,
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 2,
    width: width,
    height: 45,
  },

  placeholder: {
    color: '#2971AB',
    fontFamily: 'WorkSans-Regular',
  },

  mail: {
    color: '#004277',
    fontSize: 14,
    fontFamily: 'WorkSans-Regular',
    height: 25,
    width: 106,
  },

  container: {
    alignItems: 'center',
    padding: 30,
    marginTop: height / 20,
    width: width - 10,
    top: height / 100,
  },
  questionText: {
    textAlign: 'center',
    color: '#7C7C7A',
    marginTop: 35,
    fontSize: 14,
    fontFamily: 'WorkSans-Regular',
  },
  loginText: {
    textAlign: 'center',
    color: '#004277',
    fontSize: 14,
    marginTop: 35,
    marginLeft: 7,
    fontFamily: 'WorkSans-Regular',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ForgotPasswordScreen;
