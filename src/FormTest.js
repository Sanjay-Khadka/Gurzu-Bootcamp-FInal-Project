/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Tab, TabView} from '@rneui/themed';
import {Text} from 'react-native';
const FormTest = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'blue',
          height: 3,
        }}
        containerStyle={{backgroundColor: 'white', color: '#004277'}}>
        <Tab.Item
          containerStyle={{backgroundColor: 'white'}}
          title="Recent"
          titleStyle={{fontSize: 12, height: 10, color: '#004277'}}
          // icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          containerStyle={{backgroundColor: 'white'}}
          title="favorite"
          titleStyle={{fontSize: 12, height: 10, color: '#004277'}}
          // icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          containerStyle={{backgroundColor: 'white'}}
          title="cart"
          titleStyle={{fontSize: 12, height: 10, color: '#004277'}}
          // icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item
          style={{backgroundColor: 'red', width: '100%', height: '10'}}>
          <Text h1>Recent</Text>
        </TabView.Item>
        <TabView.Item
          style={{backgroundColor: 'blue', width: '100%', height: '10'}}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item
          style={{backgroundColor: 'green', width: '100%', height: '10'}}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>
    </>
  );
};
export default FormTest;
