import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Message({ message, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>{message}</Text>
      </View>
    </TouchableOpacity>
  );

}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: 100,
    width: "100%",
  }
});