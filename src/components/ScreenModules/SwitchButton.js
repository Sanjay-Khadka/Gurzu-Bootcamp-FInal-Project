import React, {useState, isValidElement} from 'react';
import {StyleSheet, Text, View, Switch, StatusBar} from 'react-native';
const SwitchButton = ({isEnabled, toggleSwitch}) => {
  // const [isEnabled, setIsEnabled] = useState(false);
  const [text, setText] = useState('');
  // const toggleSwitch = () => {
  //   if (isEnabled) {
  //     setText('');
  //   } else {
  //     setText('');
  //   }

  //   setIsEnabled(previousState => !previousState);
  // };
  return (
    <View style={StyleSheet.container}>
      <Text style={{margin: -2}}>{text}</Text>
      <Switch
        trackColor={{false: '#E9E9EA', true: '#E9E9EA'}}
        thumbColor={isEnabled ? '#E9E9EA' : '#FFFFFF'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  // // container:{
  //     paddingRight:200,
  //     flex:1,
  //     backgroundColor:'red',
  //     alignItems:'center',
  //     justifyContent:'centers',
  //     width:'10%',
  //     height:'56'
  // },
});
export default SwitchButton;
