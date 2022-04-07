import React from 'react';
import {View, Text, Image,StyleSheet, Dimensions} from 'react-native';

const {height, weight} = Dimensions.get('window')

const HomeScreenHeader = () =>{
return(
    <View style={styles.header}>
    <View>
    <Text style={styles.greetingtext}>Hi</Text>
    <Text style={styles.userinfo}>Sanjay Khadka </Text>
    </View>
     
     <Image style={styles.img} source={require('../../assets/profile.png')} />

    </View>
)
}
export default HomeScreenHeader;

const styles = StyleSheet.create({
    header:{
        position:'relative',
        top:0,
        height:height/9,
        backgroundColor:'#004277',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        display:'flex',
        justifyContent:'space-between',
        padding:10,
        flexDirection:'row',
        alignItems:'center'
      },
      greetingtext:{
        fontSize:18,
        color:'#FFFF',
        fontFamily:"WorkSans-Regular"
      },
      userinfo:{
    fontSize:26,
    color:'#FFFF',
    fontFamily:"WorkSans-Regular"
      },
      img:{
        height:45,
        width:45
      },
})