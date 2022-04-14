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

const RegisterScreen = () => {
  const [firstname, setFname] = useState('');
  const [lastname, setLname] = useState('');
  const [registerEmail, setRegEmail] = useState('');
  const [registerPassword, setregPassword] = useState('');
  const [confirmPassword, setConfirmPass] = useState('');
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({
    isValidFirstname: true,
    isValidLastName: true,
    isValidEmail: true,
    isValidPassword: true,
    isValidConfirm: true,
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const RegisterToLogin = () => {
    navigation.popToTop('RegisterScreen');
  };

  const handleRegisterValidation = () => {
    dispatch(
      registerUser(
        firstname,
        lastname,
        registerEmail,
        registerPassword,
        confirmPassword,
      ),
    );
  };

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
          onBlur={() => handleRegisterValidation()}
          placeholderText="Enter your first name"
          value={firstname}
          onChangeText={fname => setFname(fname)}
        />
        {data.isValidFirstname ? null : (
          <Animatable.View animation="fadeInLeft" duration={600}>
            <Text style={styles.errorMessage}>
              *Please enter your firstname
            </Text>
          </Animatable.View>
        )}
        <FormInput
          labelText="Last Name"
          onBlur={() => handleRegisterValidation()}
          placeholderText="Enter your last name"
          value={lastname}
          onChangeText={lname => setLname(lname)}
        />
        {data.isValidLastName ? null : (
          <Animatable.View animation="fadeInLeft" duration={600}>
            <Text style={styles.errorMessage}>*Please enter your lastname</Text>
          </Animatable.View>
        )}
        <FormInput
          labelText="Email"
          placeholderText="Enter your email"
          value={registerEmail}
          onChangeText={regemail => setRegEmail(regemail)}
        />
        {data.isValidEmail ? null : (
          <Animatable.View animation="fadeInLeft" duration={600}>
            <Text style={styles.errorMessage}>*Please enter your email </Text>
          </Animatable.View>
        )}
        <PasswordInput
          labelText="Password"
          placeholderText="Enter your password"
          value={registerPassword}
          onChangeText={regpass => setregPassword(regpass)}
          secureTextEntry={visible}
        />
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={600}>
            <Text style={styles.errorMessage}>*Please enter your password</Text>
          </Animatable.View>
        )}
        <PasswordInput
          labelText="Confirm Password"
          placeholderText="Re-Enter your password"
          value={confirmPassword}
          onChangeText={passconfirm => setConfirmPass(passconfirm)}
          secureTextEntry={true}
        />
        {data.isValidConfirm ? null : (
          <Animatable.View animation="fadeInLeft" duration={600}>
            <Text style={styles.errorMessage}>
              *Please re-enter your password{' '}
            </Text>
          </Animatable.View>
        )}
        <CustomButton
          labelText="Register"
          style={styles.registerButton}
          onPress={() => handleRegister()}
        />
        <View style={styles.infocontainer}>
          <Text style={styles.questiontext}>Already have an account?</Text>
          <TouchableOpacity onPress={RegisterToLogin}>
            <Text style={styles.questionbutton}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
