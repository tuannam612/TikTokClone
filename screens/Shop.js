import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Shop() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center", position: 'relative'}}>
      <Image source={require('../assets/TiktokShop.jpg')} style={styles.image}/>
    </View>
  )
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '90%',
  },
})