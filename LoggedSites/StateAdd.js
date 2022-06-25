  import React, {useState,useContext} from 'react';
  import { Image, StyleSheet, Text, TouchableOpacity, View, Button , TextInput} from 'react-native';
  import * as ImagePicker from 'expo-image-picker';
  import ImageContext from '../ContextImage';
  import ObjectContext from '../ContextObject';
  import { uploadUsersImages } from '../Firebase/uploadUsersImages.js';
 

  const Add = () => {
    const {image, setImage} = useContext(ImageContext);
    const {object, setObject} = useContext(ObjectContext);
    const [inputCaption, setInputCaption] = useState('');
    let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }
  
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.cancelled === true) {
        return;
      }
  
      setImage({ localUri: pickerResult.uri });
    };
  
    if (image !== null) {
      return (
        uploadUsersImages("admin", image),
        <View>
        <Text>
          Pick or take a picture
        </Text>
        <TouchableOpacity onPress={openImagePickerAsync}>
          <Image source={{ uri: image.localUri }}  style={{width: 300, height: 300, resizeMode: 'contain',}} /></TouchableOpacity>
          <TextInput onChangeText={e => setInputCaption(e)} style={{padding: 10, borderWidth:1}}/>
          <Button title='Push' onPress={()=> {
          setObject(object => [...object, {"inputCaption": inputCaption, "imageuri": image.localUri}]);
          console.log(object)
        }}/>
        <Text>{object.length}</Text>
      </View>
      );
      
    }
   
    
    return (
      <View>
        <Text>
          Pick or take a picture
        </Text>
  
        <TouchableOpacity onPress={openImagePickerAsync}>
          <Text>Pick a photo</Text>
        </TouchableOpacity>

        <TextInput onChangeText={e => setInputCaption(e)} style={{padding: 10, borderWidth:1}}/>
        
        
        </View>
    );
  }
  export default Add;


  