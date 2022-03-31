import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CustomButton, FormInput} from '../components';
const LoginScreen = () => {
  const [loginEmail, setLoginEmail] = useState();
  const [loginPassword, setPassword] = useState();

  const navigation = useNavigation();

  const LoginToRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="position">
        <View style={styles.container1}>
          <View style={styles.innercontainer}>
            <Image
              style={styles.logo}
              source={require('../assets/gurzuIcon.png')}
            />

            <Text style={styles.header}>Welcome back!</Text>
            <Text style={styles.secondheader}>Login to your account</Text>
            <View style={{margin: 20}}>
              <FormInput labelText="Email" placeholderText="Enter your email" />
              <FormInput
                labelText="Password"
                placeholderText="Enter your password"
              />
            </View>
            <View style={styles.checkbox}>
              <Text style={styles.textcolor}>
                <TouchableOpacity style={{paddingRight:10}}>
                  <Image source={require('../assets/check.png')} />
                </TouchableOpacity>
                Remember me
              </Text>
             <TouchableOpacity>
              <Text style={styles.textcolor}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <CustomButton labelText="Login" />

            <TouchableOpacity style={styles.signin}>
              <Image
                style={styles.icon}
                source={require('../assets/google.png')}
              />
              <Text style={styles.signintext}>Sign in with google</Text>
            </TouchableOpacity>
            <View style={styles.infocontainer}>
              <Text style={styles.questiontext}>Don't have an account?</Text>
              <TouchableOpacity onPress={LoginToRegister}>
                <Text style={styles.questionbutton}>join today</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#FFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    display: 'flex',
    backgroundColor: '#FFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: -58,
  },
  innercontainer: {
    display: 'flex',
    backgroundColor: '#FFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    top: 158,
  },

  logo: {
    position: 'relative',
    marginLeft: 10,
    height: 97,
    width: 97,
  },
  header: {
    fontFamily: 'WorkSans-Regular',
    position: 'relative',
    width: 238,
    height: 45,
    top: 10,
    fontSize: 32,
    fontWeight: '400',
    color: '#004277',
    fontWeight: '400',
  },
  secondheader: {
    fontFamily: 'WorkSans-Regular',
    width: 180,
    height: 22,
    fontWeight: '400',
    fontSize: 16,
    marginTop: 10,
  },

  checkbox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: 320,
  },
  signin: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 5,
    position: 'relative',
    top: 22,
    paddingVertical: 10,
    backgroundColor: '#FFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#004277',
    width: 320,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  signintext: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000000',
    fontFamily: 'WorkSans-Regular',
    fontWeight: '500',
    color: '#004277',
    marginRight: 50,
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
  },

  textcolor: {
    color: '#004277',
    fontFamily: 'WorkSans-Regular',
    fontWeight: '400',
    fontSize: 13,
  },
  infocontainer: {
    display: 'flex',

    flexDirection: 'row',
  },
});
