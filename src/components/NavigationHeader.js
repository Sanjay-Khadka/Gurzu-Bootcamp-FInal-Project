import React from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';
const NavigationHeader = ({
  Title='',
 
  ...more
}) =>{
return(
    <View style={styles.header} {...more}>
    <View style={styles.headertitle} >
    {/* <Text style={styles.greetingtext}>Hi</Text> */}
    <Text style={styles.headertitle}>{Title} </Text>
    </View>
     
     {/* <Image style={styles.img} source={require('../assets/profile.png')} /> */}

    </View>
)
}
export default NavigationHeader;

const styles = StyleSheet.create({
    header:{
        position:'relative',
        top:0,
        height:85,
        backgroundColor:'#004277',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        display:'flex',
        justifyContent:'center',
        padding:10,
        flexDirection:'row',
        alignItems:'center'
      },
    
      headertitle:{
    fontSize:24,
    fontWeight:'500',
    color:'#FFFF',
    fontFamily:"WorkSans-Regular"
      },
     
})