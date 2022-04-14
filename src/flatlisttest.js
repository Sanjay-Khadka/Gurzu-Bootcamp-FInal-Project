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
// import {Formik} from 'formik';
// import FormTest from './FormTest';
// import {TextInput} from 'react-native-hook-form';
// const FlatlistTest = () => {
//   return (
//     <View>
//       <Formik
//         initialValues={{email: '', password: ''}}
//         onSubmit={values => {
//           //   onsubmit
//         }}>
//         {props => (
//           <View>
//             {console.log(props.values.password)}
//             <FormTest
//               name="email"
//               labelText="Email"
//               placeholderText="Enter your email"
//               value={props.values.email}
//               onChangeText={props.handleChange('email')}
//             />

//             <Text>${props.values.email}</Text>
//           </View>
//         )}
//       </Formik>
//     </View>
//   );
// };
// export default FlatlistTest;
