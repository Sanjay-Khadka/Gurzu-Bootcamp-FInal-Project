import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
const AllChapters = () => {
  const [individualChapter, setIndividual] = useState(!individualChapter);
  const handleChapters = () => {};
  const navigation = useNavigation();
  return (
    <View style={styles.maincontainer}>
      <View style={styles.chaptercontainer}>
        <Text>AllChapters</Text>
        <Button title="gotoINdicu" onPress={handleChapters} />
      </View>
    </View>
  );
};

export default AllChapters;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  chaptercontainer: {
    marginTop: 10,
  },
});
