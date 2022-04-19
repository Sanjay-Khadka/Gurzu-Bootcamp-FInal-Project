import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
const {height, width} = Dimensions.get('window');
const MyCourseFlatList = () => {
  const myCourseData = useSelector(state => state.mainscreen.MyCourse);
  const navigation = useNavigation();

  const gotoCourseDetails = () => {
    navigation.navigate('individualCourse');
  };

  const renderItem = ({item}) => {
    console.warn(item.image.url);
    return (
      <TouchableOpacity
        style={styles.maincontainer}
        onPress={gotoCourseDetails}>
        <View style={styles.container}>
          {/* <Image style={styles.logo} source={{uri: item.image.url}} /> */}
          <Text style={styles.assignment}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={myCourseData}
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
    marginHorizontal: 6,
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
    resizeMode: 'contain',
    borderRadius: 15,
    height: 130,
    width: 130,
  },
});
