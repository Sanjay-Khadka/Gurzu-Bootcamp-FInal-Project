import React from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const Todo = () => {
  const tasks = {
    course: [
      {
        id: 7,
        name: 'Node.js',
        is_publish: false,
        user_id: 15,
        description: 'Web',
        created_at: '2022-04-08T03:59:18.729Z',
        updated_at: '2022-04-08T03:59:18.803Z',
        thumbnail_blob: {
          id: 13,
          key: 'bucgsn7nbdk6bk6wtqq0ibylrqww',
          filename: 'download.jpeg',
          content_type: 'image/jpeg',
          metadata: {
            identified: true,
            analyzed: true,
          },
          service_name: 'local',
          byte_size: 5559,
          checksum: 'zzCgoIgSJB7g366sW5E7aA==',
          created_at: '2022-04-08T03:59:18.746Z',
        },
      },
    ],
  };

  const renderItem = ({item}) => {
    console.log(taskdetail.course.name);
    return (
      <View style={styles.container}>
        <Text style={styles.textcourse}>{item.course.name}</Text>
        <Text style={styles.textdate}>{item.course.id}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={taskdetail.course}
      keyExtractor={item => item.course.id}
      renderItem={renderItem}
    />
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: height / 10,
    margin: 6,
    borderRadius: 15,
    // width: '95%',
    width: width,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textcourse: {
    fontSize: 12,
    margin: 15,
    color: '#000000',
    width: 65,
    height: 30,
    fontWeight: '500',
    fontFamily: 'WorkSans',
  },
  textdate: {
    fontSize: 12,
    margin: 15,
    color: '#000000',
    width: 65,
    textAlign: 'center',
    height: 30,
    fontWeight: '500',
    fontFamily: 'WorkSans-Regular',
  },
  textstatus: {
    fontSize: 10,
    marginRight: 15,
    color: '#616161',
    borderWidth: 1,
    borderColor: '#236C00',
    padding: 5,
    borderRadius: 25,
    width: 65,
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    height: 30,
    fontWeight: '500',
    fontFamily: 'WorkSans-Regular',
  },
});
