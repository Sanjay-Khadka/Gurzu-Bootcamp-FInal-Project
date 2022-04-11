import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
const {height, weight} = Dimensions.get('window');

const HomeScreenHeader = () => {
  const [user, setData] = useState([]);
  const userdata = useSelector(state => state.authReducer.Login);
  console.warn(userdata);
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greetingtext}>Hi</Text>
        <Text style={styles.userinfo}>{userdata.data.first_name}</Text>
      </View>

      {/* <Image style={styles.img} source={require('../../assets/profile.png')} /> */}
    </View>
  );
};
export default HomeScreenHeader;

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    top: 0,
    height: height / 9,
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
