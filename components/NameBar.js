// SearchBar.js
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
export default function NameBar({}){
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Cyber Punk 2077</Text>
      <View style={{marginRight: 40}}>
      <AntDesign name="down" size={20} color="white"  />
      </View>
    </View>          
    
  );
};


// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  
    
  },
  text:{
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 50,
    padding: 5
  },

});