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

const MyCourseFlatList = () => {
  const course = [
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
      <TouchableOpacity style={styles.maincontainer}>
        <View style={styles.container}>
          <Image style={styles.logo} source={item.image} />
          <Text style={styles.assignment}>{item.assignment}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={course}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};

export default MyCourseFlatList;

const styles = StyleSheet.create({
  maincontainer: {
    elevation: 2,
    width: width / 2.2,
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 15,
    paddingVertical: 10,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  coursetitle: {
    height: height / 10,
    width: width - 90,
  },
  textcourse: {
    fontSize: 16,
    color: '#004277',
    fontWeight: '500',
    fontFamily: 'WorkSans',
    paddingHorizontal: 15,
  },
  assignment: {
    fontSize: 14,
    color: '#616161',
    fontWeight: '400',
    fontFamily: 'WorkSans-Regular',
  },

  logo: {
    borderRadius: 15,
    height: height / 5,
    width: width / 2.5,
  },
});
