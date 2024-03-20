// SearchBar.js
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NameBar({}){
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Cyber Punk 2077</Text>
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
    width: "60%",
    
  },
  text:{
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginHorizontal: 40,
  }
  
});