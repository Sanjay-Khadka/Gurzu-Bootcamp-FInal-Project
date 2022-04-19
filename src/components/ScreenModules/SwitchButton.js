import React, {useState, isValidElement} from 'react';
import {StyleSheet, Text, View, Switch, StatusBar} from 'react-native';
const SwitchButton = ({isEnabled, toggleSwitch}) => {
  // const [isEnabled, setIsEnabled] = useState(false);
  const [text, setText] = useState('');
  return (
    <View style={StyleSheet.container}>
      <Text style={{margin: -2}}>{text}</Text>
      <Switch
        trackColor={{false: '#E9E9EA', true: '#004277'}}
        thumbColor={isEnabled ? '#E9E9EA' : '#FFFFFF'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchButton;
