import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({
    value,
     setValue, 
     placeholder,
     secureTextEntry,
     labelText=''}
     ) => {
    return(
        <View style={styles.container}>
 <Text style={{fontFamily:'WorkSans-Regular', color:'#004277',fontSize:14,marginBottom:3}}>{labelText}</Text>

            <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            placeholderTextColor="#2971AB"
            style={styles.input}
            secureTextEntry={secureTextEntry}
            />
        </View>
    );
};
const styles = StyleSheet.create({
container:{
    backgroundColor:'#EBF9FF',
    
    width:357,
  
    borderRadius:5,
    paddingHorizontal:10,
    marginVertical:10,
    

    

},
input:{
// placeholderTextColor:'#2971AB', 
fontFamily:'WorkSans-Regular',
paddingLeft:20,
height:52,
width: 357,


},
});


export default CustomInput;