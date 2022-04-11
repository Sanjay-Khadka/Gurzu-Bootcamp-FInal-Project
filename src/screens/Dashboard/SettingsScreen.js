import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import SwitchButton from '../../components/ScreenModules/SwitchButton';
import {useNavigation} from '@react-navigation/native';
import {NavigationHeader} from '../../components';
import {CustomButton} from '../../components';
import Icon from 'react-native-vector-icons/dist/Feather';
import {StackNav} from '../../routes';
import {Switch} from '@rneui/base';
const {height, width} = Dimensions.get('window');
import {useDispatch} from 'react-redux';
import {logoutUser} from '../../redux/actions';
const SettingsScreen = () => {
  const dispatch = useDispatch();
  const maintoAuth = () => {
    dispatch(logoutUser());
    // bottomnavigation.navigate('stack')
  };

  const bottomnavigation = useNavigation();
  return (
    <View style={styles.maincontainer}>
      <NavigationHeader Title="Settings" />
      <View style={styles.settingcontainer}>
        <View style={styles.accountcontainer}>
          <Icon color={'#004277'} name="user" size={20} />
          <Text style={styles.account}>Account</Text>
        </View>

        <View style={styles.settingtext}>
          <TouchableOpacity style={styles.buttonstyle}>
            <Text style={styles.settingsColor}>Edit Profile</Text>
            <Icon color={'#616161'} name="chevron-right" size={20} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonstyle}>
            <Text style={styles.settingsColor}>Change password</Text>
            <Icon color={'#616161'} name="chevron-right" size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.accountcontainer}>
          <Icon color={'#004277'} name="notification" size={20} />
          <Text style={styles.account}>Notifications</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.notificationcontainer}>
            <Text style={styles.settingsColor}>Notifications</Text>
            {/* <Switch onValueChange={console.warn('toggled')} /> */}
            <SwitchButton />
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
        <TouchableOpacity style={styles.logoutbutton} onPress={maintoAuth}>
          <Icon color={'#FF0000'} name="log-out" size={20} />

          <Text style={styles.logoutbuttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SettingsScreen;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  settingcontainer: {
    display: 'flex',
    // width:'90%',
    // height:height-300,
    flex: 2,
    // top: 20,
    justifyContent: 'flex-start',

    // backgroundColor:'#000000'
  },

  accountcontainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderBottomWidth: 0.5,
    paddingBottom: 12,
    borderBottomColor: '#616161',
    marginTop: 35,
    // backgroundColor: '#000000',
  },
  notificationcontainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderBottomWidth: 0.5,
    paddingBottom: 12,
    borderBottomColor: '#616161',
    backgroundColor: '#000000',
  },
  morecontainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderBottomWidth: 0.5,
    paddingBottom: 12,
    borderBottomColor: '#616161',
    marginTop: 35,
    // backgroundColor: '#000000',
  },
  notificationcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  logoutbutton: {
    marginVertical: '20%',
    position: 'relative',
    top: 22,
    justifyContent: 'center',
    // alignItems:'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#004277',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: width - 30,
  },
  logoutbuttonText: {
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 16,
    color: '#FF0000',
    fontFamily: 'WorkSans-Regular',
    fontWeight: '600',
  },
  buttonstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
