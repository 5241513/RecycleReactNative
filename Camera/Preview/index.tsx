import { Pressable, Image, StyleSheet } from "react-native"
import  Octicons from "react-native-vector-icons/Octicons"
import { createFormData,submit } from "./function";
import { useState } from "react";
export default (props: any) => {
  const photo = props.route.params.photo;
  const [data,setData] = useState(
    {photo:{
      fileName: photo.path.split('/').pop(),
      type: "image/jpeg",
      uri: photo.path
    }}
  )
  const submitClicked = async() => {
    const formData = await createFormData(data);
    await submit(formData);
    props.navigation.pop();
  }
  return <>
    <Image source={{ uri: photo.path }} style={StyleSheet.absoluteFill} />
    <Pressable style={styles.submit} onPress={submitClicked}>
      <Octicons name="paper-airplane" style={styles.icon} size={30} color={'gray'} />
    </Pressable>
  </>
}

const styles = StyleSheet.create({
  submit: {
    position: 'absolute',
    height: 50,
    width: 50,

    justifyContent: 'center',
    bottom: 20,
    right: 20,
    borderRadius: 40,
    backgroundColor: 'white'
  },
  icon: {

    position: 'absolute',
    right: 8

  }

});




