import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const CustomBotton = ({
  onPress,
  text,
  type = 'SECONDARY',
  bgColor,
  fgColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#004277',
    width: width - 20,
    padding: 15,
    marginVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  container_PRIMARY: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    height: 65,
    width: 175,
    left: 26,
    top: 175,
  },
  text_PRIMARY: {
    fontFamily: 'WorkSans-Regular',
    color: '#005294',
  },
  container_TERTIARY: {},
  container_SECONDARY: {
    // borderColor:'#3B71F3',
    // borderWidth:2,
  },

  text: {
    // fontWeight:'bold',
    fontFamily: 'WorkSans-Regular',
  },
  text_TERTIARY: {
    color: 'gray',
  },
  text_SECONDARY: {
    color: '#ffffff',
  },
  container_Four: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    // height:0
    // width:175,
    // fontWeight:'solid',
    left: 0,
    top: 0,
    bottom: '76.36%',
    borderColor: '#004277',
    borderWidth: 1,
    position: 'absolute',
  },
  text_Four: {
    fontFamily: 'WorkSans-Regular',
    color: '#005294',
  },
});
export default CustomBotton;
