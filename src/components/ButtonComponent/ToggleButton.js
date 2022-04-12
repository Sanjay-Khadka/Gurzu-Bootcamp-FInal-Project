import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

const ToggleButton = (
  {
    labelText = '',
    iconname = '',
    handleOnPress = null,
    style,
    textColor = null,
    ...more
  },
  {todo},
) => {
  // const color = true

  return (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        elevation: 5,
        marginVertical: 5,
        position: 'relative',
        top: 22,
        paddingHorizontal: 5,
        backgroundColor: '#004277',
        borderRadius: 25,
        width: 160,
        height: 65,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        ...style,
      }}
      {...more}>
      <View style={textColor ? styles.activebutton : styles.inactive}>
        <Icon
          color={!textColor ? '#004277' : '#FFFFFF'}
          name={iconname}
          size={20}
        />
      </View>
      <Text style={textColor ? styles.activetextcolor : styles.inactivetext}>
        {labelText}
      </Text>
    </TouchableOpacity>
  );
};

export default ToggleButton;

const styles = StyleSheet.create({
  activetextcolor: {
    textAlign: 'center',
    fontSize: 14,
    color: '#004277',
    fontFamily: 'WorkSans-Regular',
    fontWeight: '400',
    marginLeft: 10,
  },
  inactivetext: {
    textAlign: 'center',
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'WorkSans-Regular',
    fontWeight: '400',
    marginLeft: 10,
  },
  inactive: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 35,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
  },
  activebutton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 35,
    backgroundColor: '#004277',
    borderRadius: 30,
  },
});
