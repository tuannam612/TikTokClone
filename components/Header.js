import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native";

export default function Header() {
  return ( 
    <View style={styles.container}>
        <Text style={styles.Text}>Friend | Following | For You</Text>
        <Image
          source={require("../assets/search.png")}
          style={styles.icon}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        height: 60,
    },
    Text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginHorizontal: 83,

    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 'auto',
    }
})


