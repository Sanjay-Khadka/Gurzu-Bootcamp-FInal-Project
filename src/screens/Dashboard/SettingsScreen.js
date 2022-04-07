import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationHeader} from '../../components';
import {CustomButton} from '../../components';
import Icon from 'react-native-vector-icons/dist/Feather';

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.maincontainer}>
      <NavigationHeader Title="Settings" />
      <View style={styles.settingcontainer}>
        <View style={styles.accountcontainer}>
          <Icon color={'#004277'} name="user" size={20} />
          <Text style={styles.account}>Account</Text>
        </View>
        <View style={styles.settingtext}>
          <TouchableOpacity>
            <Text style={styles.settingsColor}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.settingsColor}>Change password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.accountcontainer}>
          <Icon color={'#004277'} name="notification" size={20} />
          <Text style={styles.account}>Notifications</Text>
        </View>
        <View style={styles.settingtext}>
          <TouchableOpacity>
            <Text style={styles.settingsColor}>Notifications</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.morecontainer}>
          <Icon color={'#004277'} name="plus" size={20} />
          <Text style={styles.account}>More</Text>
        </View>
        <View style={styles.settingtext}>
          <TouchableOpacity>
            <Text style={styles.settingsColor}>Language</Text>

          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.settingsColor}>Country</Text>
            </TouchableOpacity>
        </View>
        <CustomButton
          labelText="Log-out"
          handleOnPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </View>
  );
};
export default SettingsScreen;

const styles = StyleSheet.create({
  maincontainer: {
    flex:3,
    // justifyContent:'center',
    alignItems: 'center',
  },
  settingcontainer: {
    display: 'flex',
    flex:2,
    // top: 20,
    justifyContent:'space-around'

    // backgroundColor:'#000000'
  },

  accountcontainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderBottomWidth:0.5,
    paddingBottom:12,
    borderBottomColor:'#616161'
    // backgroundColor: '#000000',
  },
  notificationcontainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderBottomWidth:0.5,
    paddingBottom:12,
    borderBottomColor:'#616161'
    // backgroundColor: '#000000',
  },
  morecontainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderBottomWidth:0.5,
    paddingBottom:12,
    borderBottomColor:'#616161',
    // backgroundColor: '#000000',
  },
  account: {
    color: '#004277',
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    fontWeight: '700',
  },
  settingsColor: {
    
    marginVertical: 8,
    color: '#616161',
    fontSize: 14,
    fontFamily: 'WorkSans-Regular',
    fontWeight: '400',
  },
});
