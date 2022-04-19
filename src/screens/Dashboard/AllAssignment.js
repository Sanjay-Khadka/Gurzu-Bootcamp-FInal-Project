import React, {useState} from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {NavigationHeader} from '../../components';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import {Gradecontainer} from '../../components';
import {IndividualAssignment} from '.';
const AssignmentsUpload = () => {
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  const [singleFile, setSingleFile] = useState(null);
  const uploadImage = async () => {
    // Check if any file is selected or not
    if (singleFile != null) {
      // If file selected then create FormData
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', fileToUpload);
      // Please change file upload URL
      let res = await fetch('http://localhost/upload.php', {
        method: 'post',
        body: data,
        headers: {
          'Content-Type': 'multipart/form-data; ',
        },
      });
      let responseJson = await res.json();
      if (responseJson.status == 1) {
        alert('Upload Successful');
      }
    } else {
      // If no file selected the show alert
      alert('Please Select File first');
    }
  };

  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      // Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    <View style={styles.main}>
      <NavigationHeader Title="Courses" />
      <View style={styles.container}>
        <Tab
          value={index}
          onChange={e => setIndex(e)}
          indicatorStyle={{
            backgroundColor: '#004277',
            height: 3,
          }}
          variant="primary">
          <Tab.Item
            title="Course"
            containerStyle={{backgroundColor: 'white'}}
            titleStyle={{fontSize: 13, color: '#004277', width: 100}}
          />
          <Tab.Item
            title="Assignments"
            containerStyle={{backgroundColor: 'white'}}
            titleStyle={{fontSize: 13, color: '#004277', width: 120}}
          />
          <Tab.Item
            title="Grades"
            containerStyle={{backgroundColor: 'white'}}
            titleStyle={{fontSize: 13, color: '#004277'}}
          />
        </Tab>
      </View>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <IndividualAssignment />
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <View>
            <Text style={styles.react}>User scenario</Text>
            <View style={styles.viewassignmment}>
              <View style={styles.para}>
                <Text style={styles.txt1}>Due</Text>
                <Text style={styles.txt2}>20th april by 10:00pm</Text>
                <Text style={styles.txt3}>Points 5</Text>
              </View>
              <Text style={styles.subpara}>
                Select a project, the topic of your choosing, Write why you
                choose this project and what is the scope you see.
              </Text>
            </View>
            <Text style={styles.file}>File upload</Text>
            <View>
              <Text style={styles.text1}>
                Upload a file, or choose a file you've already uploaded.
              </Text>
              <Text style={styles.text2}>File Upload</Text>

              <TouchableOpacity stle={styles.fileupload} onPress={selectFile}>
                <Text style={styles.choosefile}>Choose file</Text>
              </TouchableOpacity>
              <Text style={styles.nofile}>No file chosen</Text>
              <TouchableOpacity>
                <Icon
                  color={'#004277'}
                  name="add"
                  size={20}
                  style={styles.add}
                />
                <Text style={styles.addfile}>Add another file</Text>
              </TouchableOpacity>
              <View>
                <TouchableOpacity onPress={uploadImage}>
                  <Text style={styles.submit}>Submit Assignment</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.cancel}>Cancel</Text>
                </TouchableOpacity>
                <View style={{alignItems: 'center', marginHorizontal: 20}}>
                  <Text style={{fontSize: 14}}></Text>
                  <Text
                    style={{
                      fontSize: 11,
                      marginTop: 20,
                      marginBottom: 30,
                      textAlign: 'center',
                    }}></Text>
                </View>
                {/*Showing the data of selected Single file*/}
                {singleFile != null ? (
                  <Text style={styles.textStyle}>
                    File Name: {singleFile.name ? singleFile.name : ''}
                    {'\n'}
                    Type: {singleFile.type ? singleFile.type : ''}
                    {'\n'}
                    File Size: {singleFile.size ? singleFile.size : ''}
                    {'\n'}
                    URI: {singleFile.uri ? singleFile.uri : ''}
                    {'\n'}
                  </Text>
                ) : null}
              </View>
            </View>
          </View>
        </TabView.Item>
        <TabView.Item style={{width: '100%', flex: 1, marginTop: 50}}>
          <Gradecontainer />
        </TabView.Item>
      </TabView>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    width: '90%',
    marginHorizontal: 20,
  },
  react: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    paddingTop: 15,
    paddingBottom: 20,
    marginLeft: 20,
    width: '50%',
  },

  viewassignmment: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 5,
    paddingBottom: 15,
    marginHorizontal: 15,
    width: '90%',
  },

  subpara: {
    color: '#000000',
    marginLeft: 20,
    fontFamily: 'WorkSans-Regular',
    fontSize: 16,
    letterSpacing: 2,
    paddingTop: 10,
    paddingRight: 20,
    width: '90%',
    backgroundColor: 'white',
  },

  file: {
    color: '#323232',
    fontSize: 14,
    margin: 10,
    marginLeft: 20,
    width: '50%',
  },
  nofile: {
    color: '#323232',
    fontSize: 14,
    margin: 10,
    marginHorizontal: 240,
    width: '50%',
    marginTop: -35,
  },
  para: {
    borderBottomColor: '#B0B0B0',
    borderBottomWidth: 2,
    margin: 10,
  },
  txt1: {
    color: '#000000',
    fontSize: 14,
    marginLeft: 20,
    marginTop: 15,
  },
  txt2: {
    color: '#000000',
    fontSize: 14,
    marginLeft: 90,
    marginTop: -18,
  },
  txt3: {
    color: '#000000',
    fontSize: 14,
    marginHorizontal: 250,
    width: '50%',
    marginTop: -18,
  },
  text1: {
    margin: 10,
    marginLeft: 50,
    color: '#000000',
    fontSize: 11,
  },
  text2: {
    margin: 10,
    marginLeft: 50,
    color: '#000000',
    fontSize: 11,
  },
  preference: {
    backgroundColor: '#ffffff',
    margin: 5,
    marginLeft: 30,
    paddingBottom: 50,
    width: '86%',
    borderRadius: 5,
    borderWidth: 1,
    paddingTop: -20,
  },
  choosefile: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#004277',
    width: '25%',
    margin: 10,
    marginHorizontal: 130,
    textAlign: 'center',
    color: '#004277',
    height: 30,
    paddingTop: 4.5,
    marginTop: -30,
  },
  addfile: {
    marginVertical: 20,
    width: 200,
    marginHorizontal: 170,
    marginTop: -20,
  },
  add: {
    marginHorizontal: 140,
    paddingTop: 10,
  },
  submit: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#004277',
    width: '35%',
    margin: 10,
    marginHorizontal: 200,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#004277',
    height: 30,
    paddingTop: 4.5,
    marginTop: -10,
    fontFamily: 'WorkSans-Regular',
  },
  cancel: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#004277',
    width: '25%',
    margin: 10,
    marginHorizontal: 50,
    textAlign: 'center',
    color: '#004277',
    height: 30,
    paddingTop: 4.5,
    marginTop: -50,
  },
  textStyle: {
    // backgroundColor: 'black',
    fontSize: 15,
    // marginTop: 16,
    // marginLeft: 35,
    // marginRight: 35,
    // textAlign: 'center',
    marginHorizontal: 50,
    marginVertical: -80,
    width: '50%',
  },
});
export default AssignmentsUpload;
