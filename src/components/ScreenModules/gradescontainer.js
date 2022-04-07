import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Grades from './Grades';


const Gradecontainer = () =>{
   return ( 
   <View style={styles.gradescontainer}>
    <View style={styles.titlecontainer}>
      <Text style={styles.titlestyle}>Course name</Text>
      <Text style={styles.titlestyle}>Score achieved</Text>
      <Text style={styles.titlestyle}>Status</Text>
    </View>
    <Grades/>
    <View style={styles.gradesfooter}>
      <Text
        style={{
          color: '#004277',
          marginTop: 16,
          fontSize: 14,
          fontWeight: '500',
          fontFamily: 'WorkSans-Regular',
        }}>
        Total:64/100
      </Text>
    </View>
  </View>
   )

}
export default Gradecontainer;

const styles = StyleSheet.create({
    gradescontainer: {
        position: 'relative',
        top: 30,
        height: 400,
        width: 310,
        borderRadius: 20,
        display: 'flex',
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
      },
    
      titlecontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        borderWidth: 0.7,
        borderBottomColor: '#808080',
        height: 45,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
      },
      gradesfooter: {
        alignItems: 'center',
        marginBottom: 25,
        borderTopWidth: 0.7,
        borderTopColor: '#808080',
        justifyContent: 'center',
      },
    
      titlestyle: {
        color: '#004277',
        fontSize: 14,
        fontWeight: '500',
        flexDirection: 'column',
        width: 60,
        fontFamily: 'WorkSans-Regular',
      }
})