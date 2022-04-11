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
import {forgotPassword} from '../../redux/actions';
const ForgotPasswordScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  const onSendRequestPressed = () => {
    dispatch(forgotPassword(email));
    navigation.navigate('ResetPasswordScreen');
  };

  const gotoLogin = () => {
    // console.warn('Loggenin');
    navigation.navigate('LoginScreen');
  };

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
            labelText="Email"
            onChangeText={password => setEmail(password)}
          />
          <CustomButton
            onPress={onSendRequestPressed}
            labelText="Send Request"
            type="SECONDARY"
          />

          <View style={styles.footer}>
            <Text
              style={{
                color: '#7C7C7A',
                marginLeft: 25,
                marginTop: 35,
                fontSize: 14,
                fontFamily: 'WorkSans-Regular',
              }}>
              Remembered your Password?{' '}
            </Text>
            <TouchableOpacity onPress={gotoLogin}>
              <Text
                style={{
                  color: '#004277',
                  fontSize: 14,
                  marginTop: 35,
                  marginLeft: 5,
                  fontFamily: 'WorkSans-Regular',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    margin: 35,
    marginTop: 90,
  },

  text: {
    fontSize: 14,
    paddingBottom: 5,
    textAlign: 'center',
    fontFamily: 'WorkSans-Regular',
    color: '#7C7C7A',
  },

  title: {
    fontSize: 32,
    fontWeight: '400',
    color: '#004277',
    margin: 20,
    fontFamily: 'WorkSans-Regular',
    letterSpacing: 2,
    width: 293,
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
    marginTop: 50,
    width: width - 10,
    top: height / 100,
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ForgotPasswordScreen;
