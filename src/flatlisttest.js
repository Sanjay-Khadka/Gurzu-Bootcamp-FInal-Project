// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Dimensions,
//   TouchableOpacity,
//   Switch,
//   Touchable,
// } from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {showRepo} from './redux/actions';
// const {height, width} = Dimensions.get('window');
// const TestFlatlist = () => {
//   const [repolist, setRepolist] = useState('');
//   const dispatch = useDispatch();
//   const thisbutton = () => {
//     dispatch(showRepo());
//   };
//   const repos = useSelector(state => state.authReducer.repo);

//   const renderItem = ({item}) => {
//     // console.log(item.course[1].name);
//     return (
//       // <View style={styles.maincontainer}>
//       <TouchableOpacity style={styles.button}>
//         <View style={styles.container}>
//           <View style={styles.coursetitle}>
//             <Text style={styles.textcourse}>{item.name}</Text>
//             <View style={styles.coursedetail}>
//               {/* <Text style={styles.assignment}>{item.chapter}</Text> */}
//             </View>
//           </View>
//           {/* <SwitchButton /> */}
//         </View>
//       </TouchableOpacity>
//     );
//   };
//   //   return <View>{renderItem()}</View>;
//   return (
//     <View>
//       <TouchableOpacity onPress={() => thisbutton()}>
//         <Text>button</Text>
//       </TouchableOpacity>
//       <FlatList
//         data={repos}
//         keyExtractor={item => item.id}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// };

// export default TestFlatlist;

// const styles = StyleSheet.create({
//   button: {
//     justifyContent: 'center',
//     width: width - 10,
//   },
//   container: {
//     elevation: 10,
//     flexDirection: 'row',
//     height: height / 9,
//     margin: 6,
//     borderRadius: 15,
//     justifyContent: 'space-around',

//     width: width - 10,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//   },
//   coursetitle: {
//     height: height / 11,
//     width: width - 90,
//     //   backgroundColor:'red',
//     justifyContent: 'center',
//     alignItems: 'stretch',
//   },
//   textcourse: {
//     fontSize: 14,
//     color: '#000000',
//     fontWeight: 'bold',
//     fontFamily: 'WorkSans-Regular',
//     paddingHorizontal: 15,
//   },
//   textdate: {
//     fontSize: 16,
//     color: '#004277',
//     fontWeight: '500',
//     fontFamily: 'WorkSans-Regular',
//   },
//   coursedetail: {
//     width: 230,
//     alignItems: 'stretch',
//     marginHorizontal: 10,
//     justifyContent: 'space-around',
//   },
//   assignment: {
//     fontSize: 12,
//     color: '#616161',
//     fontWeight: '400',
//     fontFamily: 'WorkSans-Regular',
//     marginHorizontal: 5,
//   },
//   goto: {
//     fontSize: 12,
//     color: '#616161',
//     fontWeight: '400',
//     fontFamily: 'WorkSans-Regular',
//     textAlign: 'right',
//   },
// });

// [
//   {
//     id: 1,

//     name: 'Lesson 1',

//     topics: [
//       {
//         topicID: 1,

//         topicName: 'Science',

//         topicDescription: 'Science quiz questions',
//       },

//       {
//         topicID: 2,

//         topicName: 'General Knowledge',

//         topicDescription: 'General Knowledge Quiz Questions',
//       },
//     ],
//   },
// ];
