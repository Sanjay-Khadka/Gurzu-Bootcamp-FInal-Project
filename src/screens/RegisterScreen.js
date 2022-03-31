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

const RegisterScreen = () => {
 const navigation = useNavigation();

 const RegisterToLogin = () =>{
     navigation.popToTop('RegisterScreen')
 }
    return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="position">
        <View style={styles.container1}>
          <View style={styles.innercontainer}>
            <Image
              style={styles.logo}
              source={require('../assets/gurzuIcon.png')}
            />

            <Text style={styles.header}>Register</Text>
            <View>
              <FormInput
                labelText="First Name"
                placeholderText="Enter your first name"
              style={styles.input}
              />
              <FormInput
                labelText="Last Name"
                placeholderText="Enter your last name"
              />
              <FormInput labelText="Email" placeholderText="Enter your email" />
              <FormInput
                labelText="Password"
                placeholderText="Enter your password"
              />
              <FormInput
                labelText="Confirm Password"
                placeholderText="Re-Enter your password"
              />
            </View>

            <CustomButton labelText="Register" style={styles.registerButton}/>
            <View style={styles.infocontainer}>
              <Text style={styles.questiontext}>Already have an account?</Text>
              <TouchableOpacity onPress={RegisterToLogin}>
                <Text style={styles.questionbutton}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
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
  container1: {
    display: 'flex',
    backgroundColor: '#FFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: 80,
  },
  innercontainer: {
    display: 'flex',
    backgroundColor: '#FFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    top: 143,
  },

  logo: {
    position: 'relative',
    height: 97,
    width: 97,
  },
  header: {
    fontFamily: 'WorkSans-Regular',
    position: 'relative',
    width: 140,
    height: 43,
    top: 5,
    left: 10,
    fontSize: 32,
    fontWeight: '400',
    color: '#004277',
    fontWeight: '400',
  },
input:{
marginTop:-2
},
registerButton:{
    marginTop:-5
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
    position:'relative',
    bottom:12,
    flexDirection: 'row',
  },
});
