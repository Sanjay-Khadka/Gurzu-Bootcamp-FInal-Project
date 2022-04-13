import React from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Touchable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window');
const ErrorInput = ({
  labelText = '',
  placeholderText = '',
  onChangeText,
  errorMessage,
  value,
  secureTextEntry = null,
  ...more
}) => {
  return (
    <View style={{marginTop: 8}}>
      <View style={styles.inputHeader}>
        <Text style={styles.labelstyle}>{labelText}</Text>
        <Text style={styles.errorText}>{errorMessage}</Text>
      </View>

      <View style={styles.viewcontainer1}>
        <TextInput
          style={styles.input}
          placeholder={placeholderText}
          placeholderTextColor="#2971AB"
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </View>
  );
};

export default ErrorInput;

const styles = StyleSheet.create({
  labelstyle: {
    fontFamily: 'WorkSans-Regular',
    color: '#004277',
    fontSize: 14,
    marginBottom: 3,
  },
  errorText: {
    marginRight: 5,
    color: 'red',
    textAlign: 'right',
  },
  inputHeader: {
    justifyContent: 'space-between',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 12,
    color: '#2971AB',
    width: width - 70,
  },
  viewcontainer1: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 8,
    width: width - 20,
    height: 55,
    backgroundColor: '#EBF9FF',
    borderRadius: 5,
    justifyContent: 'space-between',
    fontFamily: 'WorkSans-Regular',
    fontSize: 12,
    color: '#2971AB',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
