import { View, Text, StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { Feather , MaterialCommunityIcons } from '@expo/vector-icons';
const SendMessageBar = () => {
  return (
    <View style={styles.inputContainer}>
    <MaterialCommunityIcons name="emoticon" size={24} color="black" style={{ marginTop: 3}} />
    <TextInput style={styles.input} placeholder='    Enter message...'></TextInput>
    <Feather name="send" size={24} color="black" style={{marginTop: 3}} />
  </View>
  )
}
const styles = StyleSheet.create({

inputContainer:{
    backgroundColor: "white",
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 600,
    
},
input:{
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    width: 300,
    marginLeft: 10,
    marginTop: 3,
    marginHorizontal: 20,
    borderRadius: 10,
  },
})

export default SendMessageBar
