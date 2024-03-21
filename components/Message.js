import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';

export default function Message({ sender, message, onPress }) {
  return (
    <View style={styles.item}>
      <Pressable style={styles.button} onPress={onPress}>
        <View style={styles.container}>
          <Image
            style={styles.avatar}
            source={require("../assets/avatar1.jpg")}
          ></Image>
          <View style={styles.textContainer}>
            <Text style={styles.sender}>{sender}</Text>
            <Text style={styles.text}>{message}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );

}
const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 100,
    paddingHorizontal: 20,

  },
  button: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  textContainer: {
    paddingLeft: 20,
  },
  sender: {
    fontSize: 20,
    color: 'white',
  },
  text: {
    fontSize: 15,
    color: 'white',

  }
});