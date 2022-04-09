import React from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity,Image} from 'react-native';

const CourseFlatList = () => {
    const scores =[
        {
            id:"1",
            name:'backend',
            score:20,
            status:'Blenders 3D',
            text:'6 Chapters'
            
        },
        {
            id:"2",
            name:'frontend',
            score:20,
            status:'Adobe Illustrator',
            text:'4 Chapters'
          
           
        },
        {
            id:"3",
            name:'js',
            score:20,
            status:'Frontend with Angular JS',
            text:'8 Chapters'
        },
        {
            id:"4",
            name:'UI',
            score:20,
            status:'Python',
            text:'7 Chapters'
        },
        {
            id:"5",
            name:'frontend',
            score:20,
            status:'Figma',
            text:'2 Chapters'
        },
        {
            id:"6",
            name:'js',
            score:20,
            status:'Ai',
            text:'6 Chapters'
        },
        {
            id:"7",
            name:'UI',
            score:20,
            status:'submitted',
            text:'8 Chapters'
        }, {
          id:"1",
          name:'backend',
          score:20,
          status:'done',
          text:'6 Chapters'
      },
      {
        id:"1",
        name:'backend',
        score:20,
        status:'Blenders 3D',
        text:'6 Chapters'
        
    },
    {
        id:"2",
        name:'frontend',
        score:20,
        status:'Adobe Illustrator',
        text:'4 Chapters'
      
       
    },
    {
        id:"3",
        name:'js',
        score:20,
        status:'Frontend with Angular JS',
        text:'8 Chapters'
    },
    {
        id:"4",
        name:'UI',
        score:20,
        status:'Python',
        text:'7 Chapters'
    },
    {
        id:"5",
        name:'frontend',
        score:20,
        status:'Figma',
        text:'2 Chapters'
    },
    {
        id:"6",
        name:'js',
        score:20,
        status:'Ai',
        text:'6 Chapters'
    },
    {
        id:"7",
        name:'UI',
        score:20,
        status:'submitted',
        text:'8 Chapters'
    }, {
      id:"1",
      name:'backend',
      score:20,
      status:'done',
      text:'6 Chapters'
  },
      
    ]
const List = ({scores}) => {

return (
    <FlatList
      data={scores}
      keyExtractor={item => item.id}
      numColumns={2}
      renderItem={({item}) => {
        return (
         <TouchableOpacity>
         <View style={styles.container}>
          
           <View style={{backgroundColor:'#ffffff', height:"80%",width:'90%',borderRadius:7,}}>
               <Image
                        source={require('../../assets/Blender.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
           </View>
           <View>
            <Text style={styles.textstatus}>{item.status}</Text>
            <Text style={styles.texttext}>{item.text}</Text>
            </View>
            </View>
          
          </TouchableOpacity>
        );
      }}
    />
  );

  }

  return(
      <View style={{display:'flex', justifyContent:'space-evenly',width:"100%" ,height:"100%"}}>
          <List scores={scores}/>
      </View>
  )
};

export default CourseFlatList;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height:223,
    marginLeft:50,
    marginRight:0,
    width:179,
    margin:5,
    justifyContent: 'center',
    // alignItems:'center',
    paddingLeft:5,
    backgroundColor:'#ffffff',
    borderRadius:7
    

  },
  logo:{
justifyContent:"center",
alignItems:"center",
marginHorizontal:0,
flex:1,
height  :165,
width:164,
// borderRadius:7,

  },
  textstatus:{
    color:'black'
     },
  texttext:{
  color:'grey'
  },

});