import React from 'react';
import {StackNav, BottomNav} from './routes';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
const GurzuLearning = () => {
  const token = useSelector(state => state.authReducer.authToken);
  console.warn(token);
  return (
    <NavigationContainer>
      {token ? <BottomNav /> : <StackNav />}
    </NavigationContainer>
  );
};

export default GurzuLearning;
