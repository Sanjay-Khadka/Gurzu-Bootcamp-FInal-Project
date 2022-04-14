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
const FormTest = ({
  labelText = '',
  placeholderText = '',
  onChangeText,
  value,
  secureTextEntry = null,
  onBlur,
  style,
  ...more
}) => {
  return (
    <View style={{marginTop: 8}}>
      <Text style={styles.labelstyle}>{labelText}</Text>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
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
          ...style,
        }}>
        <TextInput
          style={styles.input}
          placeholder={placeholderText}
          placeholderTextColor="#2971AB"
          onChangeText={onChangeText}
          value={value}
          onBlur={onBlur}
        />
      </View>
    </View>
  );
};

export default FormTest;

const styles = StyleSheet.create({
  labelstyle: {
    fontFamily: 'WorkSans-Regular',
    color: '#004277',
    fontSize: 14,
    marginBottom: 3,
  },
  input: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 12,
    color: '#2971AB',
    width: width - 70,
  },
  viewcontainer: {
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
