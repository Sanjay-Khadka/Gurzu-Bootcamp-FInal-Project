import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import {CustomButton, FormInput} from '../../components';

import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const ResetPasswordScreen = () => {
  const [code, setCode] = useState('');

  const navigation = useNavigation();

  const onResetPressed = () => {
    navigation.navigate('NewPasswordScreen');
  };
  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.root}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/gurzuIcon.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.text}>
            Please enter the code sent in your {'\n'}
            Email.
          </Text>
        </View>
        <FormInput
          placeholderText="Please enter the code"
          labelText="Code"
          KeyboardType="numeric"
        />
        <CustomButton labelText="Reset" onPress={onResetPressed} />
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
    justifyContent: 'center',
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 55,
    marginHorizontal: 20,
    width: width,
  },

  text: {
    fontSize: 14,
    paddingBottom: 40,
    textAlign: 'center',
    fontFamily: 'WorkSans-Regular',
    color: '#7C7C7A',
  },

  title: {
    fontSize: 32,
    fontWeight: '400',
    color: '#004277',
    margin: 15,
    fontFamily: 'WorkSans-Regular',
  },

  placeholder: {
    color: '#2971AB',
  },

  code: {
    color: '#004277',
    fontSize: 14,
    fontFamily: 'WorkSans-Regular',
    height: 25,
  },
});

export default ResetPasswordScreen;
