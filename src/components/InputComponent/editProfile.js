import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');
const EditProfile = ({
  labelText = '',
  placeholderText = '',
  onChangeText,
  value,
  error,
  KeyboardType = '',
  errorMessage,
  secureTextEntry = null,
  onBlur,
  style,
  ...more
}) => {
  return (
    <View style={{marginTop: 10}}>
      <View style={styles.labelscontainer}>
        <Text style={styles.labelstyle}>{labelText}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholderText}
        placeholderTextColor="#828282"
        onChangeText={onChangeText}
        value={value}
        onBlur={onBlur}
        {...more}
        keyboardType={KeyboardType}
      />
    </View>
  );
};

export default EditProfile;
const styles = StyleSheet.create({
  labelstyle: {
    fontFamily: 'WorkSans-Regular',
    color: '#323232',
    fontSize: 14,
    marginBottom: 3,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#616161',
    fontFamily: 'WorkSans-Regular',
    fontSize: 12,
    color: '#2971AB',
    width: width - 60,
    height: 50,
    // backgroundColor: 'black',
  },
  labelscontainer: {
    paddingTop: 10,
    // backgroundColor: 'black',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
