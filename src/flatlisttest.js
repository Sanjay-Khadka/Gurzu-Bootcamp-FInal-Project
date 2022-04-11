import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Switch,
} from 'react-native';
// import SwitchButton from './SwitchButton';

const {height, width} = Dimensions.get('window');
const TestFlatlist = () => {
  const taskdetails = [
    {
      course: [
        {
          id: 7,
          name: 'Node.js',
          is_publish: false,
          user_id: 15,
          description: 'Web',
          created_at: '2022-04-08T03:59:18.729Z',
          updated_at: '2022-04-08T03:59:18.803Z',
        },
        {
          id: 8,
          name: 'Angular.js',
          is_publish: false,
          user_id: 15,
          description: 'Web',
          created_at: '2022-04-08T03:59:18.729Z',
          updated_at: '2022-04-08T03:59:18.803Z',
        },
      ],
    },
  ];
  const array2 = taskdetails.map(s => ({course: s}));
  console.log(array2.s);
  const renderItem = ({item}) => {
    // console.log(item.course[1].name);
    return (
      // <View style={styles.maincontainer}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.container}>
          <View style={styles.coursetitle}>
            <Text style={styles.textcourse}>{item.name}</Text>
            <View style={styles.coursedetail}>
              {/* <Text style={styles.assignment}>{item.chapter}</Text> */}
            </View>
          </View>
          {/* <SwitchButton /> */}
        </View>
      </TouchableOpacity>
    );
  };
  //   return <View>{renderItem()}</View>;
  return (
    <FlatList
      data={taskdetails}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default TestFlatlist;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    width: width - 10,
  },
  container: {
    elevation: 10,
    flexDirection: 'row',
    height: height / 9,
    margin: 6,
    borderRadius: 15,
    justifyContent: 'space-around',

    width: width - 10,
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
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: 'WorkSans-Regular',
    paddingHorizontal: 15,
  },
  textdate: {
    fontSize: 16,
    color: '#004277',
    fontWeight: '500',
    fontFamily: 'WorkSans-Regular',
  },
  coursedetail: {
    width: 230,
    alignItems: 'stretch',
    marginHorizontal: 10,
    justifyContent: 'space-around',
  },
  assignment: {
    fontSize: 12,
    color: '#616161',
    fontWeight: '400',
    fontFamily: 'WorkSans-Regular',
    marginHorizontal: 5,
  },
  goto: {
    fontSize: 12,
    color: '#616161',
    fontWeight: '400',
    fontFamily: 'WorkSans-Regular',
    textAlign: 'right',
  },
});

[
  {
    id: 1,

    name: 'Lesson 1',

    topics: [
      {
        topicID: 1,

        topicName: 'Science',

        topicDescription: 'Science quiz questions',
      },

      {
        topicID: 2,

        topicName: 'General Knowledge',

        topicDescription: 'General Knowledge Quiz Questions',
      },
    ],
  },
];
