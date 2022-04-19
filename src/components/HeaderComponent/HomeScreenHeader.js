import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

const {height} = Dimensions.get('window');

const HomeScreenHeader = () => {
  const userdata = useSelector(state => state.authReducer.Login);
  const firstname = userdata?.data?.data.first_name;
  const lastname = userdata?.data?.data.last_name;
  const profile = useSelector(state => state.mainscreen.photo);
  // console.warn(profile);
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greetingtext}>Hi</Text>
        <Text style={styles.userinfo}>
          {firstname} {lastname}
        </Text>
      </View>

      {/* <Image style={styles.img} source={{uri: profile}} /> */}
    </View>
  );
};
export default HomeScreenHeader;

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    top: 0,
    height: height / 8,
    backgroundColor: '#004277',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingtext: {
    fontSize: 18,
    color: '#FFFF',
    fontFamily: 'WorkSans-Regular',
  },
  userinfo: {
    fontSize: 30,
    color: '#FFFF',
    fontFamily: 'WorkSans-Regular',
    // marginHorizontal: 100,
  },
  img: {
    height: 45,
    width: 45,
  },
});
