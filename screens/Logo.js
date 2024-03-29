import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Image source={require('../assets/Midnight in Cyber Paris_ A Moonlit Eiffel Tower in the Cyberpunk City.jpg')} resizeMode='cover' style={styles.image}/>
    </View>
  )
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
})