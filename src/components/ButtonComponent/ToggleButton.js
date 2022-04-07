import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const ToggleButton = (
  {labelText = '', handleOnPress = null, style, textColor = null, ...more},
  {todo},
) => {
  // const color = true

  return (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginVertical: 5,
        position: 'relative',
        top: 22,
        paddingVertical: 10,
        backgroundColor: '#004277',
        borderRadius: 25,
        width: 160,
        height: 65,
        display: 'flex',
        justifyContent: 'center',
        ...style,
      }}
      {...more}>
      {textColor ? (
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            textAlign: 'center',
            fontSize: 14,
            color: '#004277',
            fontFamily: 'WorkSans-Regular',
            fontWeight: '400',
          }}>
          {labelText}
        </Text>
      ) : (
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            textAlign: 'center',
            fontSize: 14,
            color: '#FFFFFF',
            fontFamily: 'WorkSans-Regular',
            fontWeight: '400',
          }}>
          {labelText}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ToggleButton;
