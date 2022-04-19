/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {color} from '@rneui/base';

const IndividualAssignment = () => {
  const [index, setIndex] = React.useState(0);
  const navigation = useNavigation();
  const Publish = () => {
    navigation.navigate('AssignmentsUpload');
  };

  return (
    <>
      <View style={styles.container}></View>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          {/* <Text h1>React</Text> */}
          <View style={styles.viewtab}>
            <View>
              <Text style={styles.react}>1. What is React ?</Text>
              <View style={styles.viewassignmment}>
                <Text style={styles.subpara}>
                  For athletes, high altitude produces two contradictory effects
                  on performance. For explosive events (sprints up to 400
                  metres,
                </Text>
              </View>
              <Text style={styles.question}>
                Featured questions in this chapter (4)
              </Text>
              <View style={styles.preference}>
                <Text style={styles.is}>Is React better than Angular?</Text>

                <TextInput style={styles.bruh}>
                  Personal preference bruh
                </TextInput>
              </View>
              <View>
                <Text style={styles.text1}>Post a question</Text>
                <Text style={styles.text2}>Title or summary</Text>

                <View>
                  <TouchableOpacity onPress={Publish} stle={styles.publishbtn}>
                    <Text style={styles.publish}>Publish</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TabView.Item>
      </TabView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    //   // backgroundColor:'red',
    paddingTop: 20,
    width: '90%',
    marginHorizontal: 20,
  },
  react: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    paddingTop: 15,
    paddingBottom: 20,
    marginLeft: 20,
    width: '50%',
  },

  viewassignmment: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 5,
    paddingBottom: 15,
    marginHorizontal: 15,
    width: '90%',
  },

  subpara: {
    color: '#000000',
    marginLeft: 20,
    fontFamily: 'WorkSans-Regular',
    fontSize: 16,
    letterSpacing: 2,
    paddingTop: 15,
    paddingRight: 20,
    width: '90%',
    backgroundColor: 'white',
  },
  question: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 10,
    marginLeft: 50,
    marginTop: 15,
  },
  preference: {
    backgroundColor: '#ffffff',
    margin: 5,
    marginLeft: 30,
    paddingBottom: 50,
    width: '86%',
    borderRadius: 5,
    borderWidth: 1,
    paddingTop: -20,
  },
  is: {
    color: '#000000',
    // margin:5,
    paddingTop: 20,
    marginHorizontal: 55,
    // marginVertical:2.0,
    fontSize: 14,
    marginBottom: -30,
  },
  logo: {
    // position: 'relative',
    marginLeft: 20,
    height: 50,
    width: 50,
    // marginBottom:10
  },
  bruh: {
    marginTop: 10,
    marginHorizontal: 60,
    marginBottom: -50,
  },
  text1: {
    color: '#000000',
    fontSize: 14,
    marginLeft: 50,
  },
  text2: {
    // color:'#000000',
    fontSize: 12,
    marginLeft: 50,
    marginBottom: 5,
  },
  text3: {
    // color:'#000000',
    fontSize: 12,
    marginLeft: 50,
    color: '#616161',
  },
  lastview: {
    borderRadius: 5,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    width: '86%',
    marginLeft: 30,
  },
  publishbtn: {
    // borderRadius:5,
    // borderWidth:1,
    // borderColor:'#004277',
    // width:'20%'
  },
  publish: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#004277',
    width: '25%',
    margin: 10,
    marginVertical: 20,
    marginHorizontal: 200,
    alignItems: 'center',
    textAlign: 'center',
    color: '#004277',
    height: 30,
    paddingTop: 4.5,
  },
});
export default IndividualAssignment;
