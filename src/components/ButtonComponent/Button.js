import React from 'react';
import {View, Text, TextInput, TouchableOpacity,Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window')
const CustomButton = ({
  labelText = '',
  handleOnPress = null,
  style,
  isPrimary = true,
  ...more
}) => {
  return (
    <TouchableOpacity
      style={{
        marginVertical:5,
        position:'relative',
        top:22,
        paddingVertical: 10,
        backgroundColor: '#004277',
        borderRadius: 10,
        width:width-30,
        ...style,
      }
      
      }
      onPress={handleOnPress}
      {...more}>
      <Text style={{textAlign: 'center', fontSize: 16,color:'#FFFF',fontFamily:'WorkSans-Regular',fontWeight:'400'}}>
        {labelText}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
