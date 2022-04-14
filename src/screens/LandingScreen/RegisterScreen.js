import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {CustomButton, FormInput, PasswordInput} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../../redux/actions/AuthActions';
const {height} = Dimensions.get('window');
import * as Animatable from 'react-native-animatable';
import * as Yup from 'yup';
import {Formik} from 'formik';
const validationSchema = Yup.object({
  firstname: Yup.string().trim().required('firstname required'),
  lastname: Yup.string().trim().required('lastname required'),
  registerEmail: Yup.string().trim().required('email required'),
  registerPassword: Yup.string().trim().required('password required'),
  confirmPassword: Yup.string().equals(
    [Yup.ref('registerPassword'), null],
    'Passwords do not match',
  ),
});
const RegisterScreen = () => {
  const registerDetails = {
    firstname: '',
    lastname: '',
    registerEmail: '',
    registerPassword: '',
    confirmPassword: '',
  };
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const RegisterToLogin = () => {
    navigation.popToTop('RegisterScreen');
  };

  return (
    <Formik
      initialValues={registerDetails}
      validationSchema={validationSchema}
      onSubmit={(values, formikActions) => {
        var registerData = JSON.stringify({
          user: {
            first_name: values.firstname,
            last_name: values.lastname,
            email: values.registerEmail,
            password: values.registerPassword,
            password_confirmation: values.confirmPassword,
          },
        });
        dispatch(registerUser(registerData));
      }}>
      {({handleChange, handleSubmit, handleBlur, touched, values, errors}) => {
        const {
          firstname,
          lastname,
          registerEmail,
          registerPassword,
          confirmPassword,
        } = values;
        return (
          <KeyboardAvoidingView style={styles.container} behavior="height">
            <ScrollView>
              <View style={styles.headercontainer}>
                <Image
                  style={styles.logo}
                  source={require('../../assets/gurzuIcon.png')}
                />

                <Text style={styles.header}>Register</Text>
              </View>
              <FormInput
                labelText="First Name"
                error={touched.firstname && errors.firstname}
                onBlur={handleBlur('firstname')}
                placeholderText="Enter your first name"
                value={firstname}
                onChangeText={handleChange('firstname')}
              />

              <FormInput
                labelText="Last Name"
                error={touched.lastname && errors.lastname}
                onBlur={handleBlur('lastname')}
                placeholderText="Enter your last name"
                value={lastname}
                onChangeText={handleChange('lastname')}
              />

              <FormInput
                labelText="Email"
                error={touched.registerEmail && errors.registerEmail}
                onBlur={handleBlur('registerEmail')}
                placeholderText="Enter your email"
                value={registerEmail}
                onChangeText={handleChange('registerEmail')}
              />

              <PasswordInput
                labelText="Password"
                error={touched.registerPassword && errors.registerPassword}
                onBlur={handleBlur('registerPassword')}
                placeholderText="Enter your password"
                value={registerPassword}
                onChangeText={handleChange('registerPassword')}
                secureTextEntry={visible}
              />
              <PasswordInput
                labelText="Confirm Password"
                error={touched.confirmPassword && errors.confirmPassword}
                onBlur={handleBlur('confirmPassword')}
                placeholderText="Re-Enter your password"
                value={confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                secureTextEntry={true}
              />
              <CustomButton
                labelText="Register"
                style={styles.registerButton}
                onPress={handleSubmit}
              />
              <View style={styles.infocontainer}>
                <Text style={styles.questiontext}>
                  Already have an account?
                </Text>
                <TouchableOpacity onPress={RegisterToLogin}>
                  <Text style={styles.questionbutton}>Login</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        );
      }}
    </Formik>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#FFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headercontainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 4,
  },

  logo: {
    height: 97,
    width: 97,
  },
  header: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 32,
    fontWeight: '400',
    color: '#004277',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    fontFamily: 'WorkSans-Regular',
    fontWeight: '400',
  },
  registerButton: {
    marginTop: -5,
  },

  questiontext: {
    marginTop: 30,
    color: '#616161',
    fontFamily: 'WorkSans-Regular',
    fontSize: 13,
    padding: 5,
  },
  questionbutton: {
    marginLeft: 10,
    marginTop: 35,
    color: '#004277',
    fontSize: 13,
    fontFamily: 'WorkSans-Regular',
    textAlign: 'left',
  },

  textcolor: {
    color: '#004277',
    fontFamily: 'WorkSans-Regular',
    fontWeight: '400',
    fontSize: 13,
  },
  infocontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
  },
});
