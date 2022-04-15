import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {PasswordInput} from '../../components';
import {NavigationHeader} from '../../components';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import {handlePasswordChange} from '../../redux/actions/AuthActions';
const {width, height} = Dimensions.get('window');
const validationSchema = Yup.object({
  oldPassword: Yup.string().trim().required('old Password required'),
  newPassword: Yup.string().trim().required('new Password required'),
  confirmPassword: Yup.string().equals(
    [Yup.ref('newPassword'), null],
    'Passwords do not match',
  ),
});
const ChangePassword = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const resetPassword = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
  return (
    <Formik
      initialValues={resetPassword}
      validationSchema={validationSchema}
      onSubmit={(values, formikActions) => {
        console.warn('this is pressed');
        dispatch(handlePasswordChange(values));
      }}>
      {({handleChange, handleBlur, handleSubmit, errors, values, touched}) => {
        const {oldPassword, newPassword, confirmPassword} = values;
        return (
          <KeyboardAvoidingView behavior="height" style={styles.maincontainer}>
            <View style={styles.maincontainer}>
              <NavigationHeader Title="Settings" />
              <View style={styles.header}>
                <Text style={styles.passwordHeader}>Change Password</Text>
              </View>
              <View style={styles.inputcontainer}>
                <PasswordInput
                  labelText="Old Password"
                  error={touched.registerPassword && errors.registerPassword}
                  onBlur={handleBlur('oldPassword')}
                  placeholderText="Enter old password"
                  value={oldPassword}
                  onChangeText={handleChange('oldPassword')}
                  secureTextEntry={visible}
                />
                <PasswordInput
                  labelText="New Password"
                  error={touched.registerPassword && errors.registerPassword}
                  onBlur={handleBlur('newPassword')}
                  placeholderText="Enter new password"
                  value={newPassword}
                  onChangeText={handleChange('newPassword')}
                  secureTextEntry={visible}
                />

                <PasswordInput
                  labelText="Confirm Password"
                  error={touched.confirmPassword && errors.confirmPassword}
                  onBlur={handleBlur('confirmPassword')}
                  placeholderText="Confirm password"
                  value={confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity style={styles.changepassword}>
                <Text style={styles.buttonText}>Change Password</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        );
      }}
    </Formik>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    display: 'flex',
    flex: 1,
  },
  header: {
    marginHorizontal: 11,
    marginVertical: 15,
  },
  passwordHeader: {
    color: '#004277',
    fontFamily: 'WorkSans-Regular',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'left',
  },
  inputcontainer: {
    alignItems: 'center',
    width: '100%',
  },
  changepassword: {
    marginVertical: '12%',
    // position: 'relative',
    // top: 12,
    justifyContent: 'center',
    // alignItems:'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#004277',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: width - 30,
    marginHorizontal: '4%',
  },
  buttonText: {
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 16,
    color: '#004277',
    fontFamily: 'WorkSans-Regular',
    fontWeight: '400',
  },
});
