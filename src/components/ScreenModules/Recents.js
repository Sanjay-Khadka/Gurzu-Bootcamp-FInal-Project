import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

const {height, width} = Dimensions.get('window');
const Recents = () => {
  const taskdetail = [
    {
      id: '2',
      name: 'Frontend Development',
      image: require('../../assets/Angular.png'),
      assignment: 'Angular',
    },
    {
      id: '22',
      name: 'Frontend Development',
      image: require('../../assets/Python.png'),
      assignment: 'Python',
    },
    {
      id: '1234',
      name: 'Frontend Development',
      image: require('../../assets/Blender.png'),
      assignment: 'Blender',
    },
  ];

  const renderItem = ({item}) => {
    return (
      // <View style={styles.maincontainer}>
      <TouchableOpacity>
        <View style={styles.container}>
          <Image style={styles.logo} source={item.image} />
          <View style={styles.coursedetail}>
            <Text style={styles.assignment}>{item.assignment}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={taskdetail}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};

export default Recents;

const styles = StyleSheet.create({
  container: {
    elevation:8,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    // height: height / 3.5,
    marginVertical: 15,
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,

    width: width / 2.2,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  coursetitle: {
    height: height / 11,
    width: width - 90,
    //   backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  textcourse: {
    fontSize: 16,
    color: '#004277',
    fontWeight: '500',
    fontFamily: 'WorkSans',
    paddingHorizontal: 15,
  },
  textdate: {
    fontSize: 16,
    color: '#004277',
    fontWeight: '500',
    fontFamily: 'WorkSans-Regular',
  },
  coursedetail: {
    // width: 230,
    height: '100%',
    alignItems: 'stretch',
    // marginHorizontal: 10,
    // justifyContent: 'space-around',
  },
  assignment: {
    fontSize: 14,
    color: '#616161',
    fontWeight: '400',
    fontFamily: 'WorkSans-Regular',
  },
  goto: {
    fontSize: 12,
    color: '#616161',
    fontWeight: '400',
    fontFamily: 'WorkSans-Regular',
    textAlign: 'right',
  },
  logo: {
    borderRadius: 10,
    height: height / 5,
    width: width / 2.5,
  },
});
