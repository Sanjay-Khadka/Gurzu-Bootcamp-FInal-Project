import React from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window')
const FormInput = ({
    labelText='',
    placeholderText='',
    onChangeText=null,
    value=null,
  
    secureTextEntry=null,
    ...more
}) => {
    return(
        <View style={{marginTop:8}}>
            <Text style={{fontFamily:'WorkSans-Regular', color:'#004277',fontSize:14,marginBottom:3}}>{labelText}</Text>
            <TextInput style={{
                padding:10,
                width:width-20,
                height:52,
                backgroundColor: "#EBF9FF",
                borderRadius:5,
                justifyContent:'space-around',
                fontFamily:'WorkSans-Regular',
                fontSize:12,
                color:'#2971AB',
              
                
            }}
            placeholder={placeholderText}
            placeholderTextColor="#2971AB"
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

export default FormInput;