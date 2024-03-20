import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Feather,MaterialCommunityIcons,Fontisto,FontAwesome } from "@expo/vector-icons";

export default function ProfileItems() {
  return (
    <View style={styles.container}>
      <Feather name="menu" size={24} color="black" />
      <FontAwesome name="lock" size={24} color="black" />
      <Fontisto name="favorite" size={24} color="black" />
      <MaterialCommunityIcons name="heart-remove" size={24} color="black" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: "row",
    height: 40,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 5
  },
 
});
