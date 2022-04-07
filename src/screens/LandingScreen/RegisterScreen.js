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
  Alert
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CustomButton, FormInput} from '../../components';
import axios from 'axios';
const {width, height} = Dimensions.get('window');

const RegisterScreen = () => {
const[firstname, setFname] = useState('')
const[lastname, setLname] = useState('')
const[registerEmail, setRegEmail] = useState('')
const[registerPassword, setregPassword] = useState('')
const[confirmPassword, setConfirmPass] = useState('')

 const navigation = useNavigation();

 const RegisterToLogin = () =>{
     navigation.popToTop('RegisterScreen')
 }

 const handleRegister = () => {
  var axios = require('axios');
var data = JSON.stringify({
  "user": {
    "first_name":firstname,
    "last_name": lastname,
    "email": registerEmail,
    "role": 1,
    "password":registerPassword,
    "password_confirmation": confirmPassword
  }
});

var config = {
  method: 'post',
  url: 'http://d0b8-103-41-172-114.ngrok.io/users',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


 }
    return (
      <KeyboardAvoidingView style={styles.container} behavior='height'>
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
                placeholderText="Enter your first name"
              value={firstname}
              onChangeText={fname=> setFname(fname)}
              />
              <FormInput
                labelText="Last Name"
                placeholderText="Enter your last name"
                value={lastname}
                onChangeText={lname=> setLname(lname)}
              />
              <FormInput labelText="Email" placeholderText="Enter your email"
               value={registerEmail}
              onChangeText={regemail=> setRegEmail(regemail)}/>
              <FormInput
                labelText="Password"
                placeholderText="Enter your password"
                value={registerPassword}
                onChangeText={regpass=> setregPassword(regpass)}
                secureTextEntry={true}
              />
              <FormInput
                labelText="Confirm Password"
                placeholderText="Re-Enter your password"
                value={confirmPassword}
                onChangeText={passconfirm=> setConfirmPass(passconfirm)}
                secureTextEntry={true}
              />

            <CustomButton labelText="Register" style={styles.registerButton}
            onPress={()=>handleRegister()}
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
 

  headercontainer:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height:height/4,
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
    fontWeight: '400',
  },

registerButton:{
    marginTop:-5
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
    textAlign:'left'
  },

  textcolor: {
    color: '#004277',
    fontFamily: 'WorkSans-Regular',
    fontWeight: '400',
    fontSize: 13,
  },
  infocontainer: {
    justifyContent:'center',
    alignItems:'center',
    display: 'flex',
    position:'relative',
    flexDirection: 'row',
    
  },
});
