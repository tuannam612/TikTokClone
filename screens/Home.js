import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React from "react";
import { StatusBar, Platform } from "react-native";
import Header from "../components/Header";
export default function Home() {
  return (
    <View style={styles.container}>
    
      <Image
        source={require("../assets/Midnight in Cyber Paris_ A Moonlit Eiffel Tower in the Cyberpunk City.jpg")}
        style={styles.image}
      />
      <View style={styles.headerContainer}>
        <Header></Header>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.bottomLeftSection}>
          <Text style={styles.channelName}>Cyber Punk 2077</Text>
          <Text style={styles.caption}>
            Legit AF #Cyber #CyberPunk2077 #Future #World
          </Text>
          <View style={styles.musicNameContainer}>
            <Image
              source={require("../assets/music-note.png")}
              style={styles.musicNameIcon}
            />
            <Text style={styles.musicName}>
              I really want to stay at your house
            </Text>
          </View>
        </View>
        <View style={styles.bottomRightSection}>
          <Image
            source={require("../assets/disc.png")}
            style={[styles.musicDisc]}
          />
        </View>
      </View>
      <View style={styles.verticalBar}>
        <View style={[styles.verticalBarItem, styles.avatarContainer]}>
          <Image style={styles.avatar} source={require("../assets/ava.jpg")} />
          <View style={styles.followButton}>
            <Image
              source={require("../assets/plus-button.png")}
              style={styles.followIcon}
            />
          </View>
        </View>
        <View style={styles.verticalBarItem}>
          <Image
            style={styles.verticalBarIcon}
            source={require("../assets/heart.png")}
          />
          <Text style={styles.verticalBarText}>2.8M</Text>
        </View>
        <View style={styles.verticalBarItem}>
          <Image
            style={styles.verticalBarIcon}
            source={require("../assets/message-circle.png")}
          />
          <Text style={styles.verticalBarText}>23.3K</Text>
        </View>
        <View style={styles.verticalBarItem}>
          <Image
            style={styles.verticalBarIcon}
            source={require("../assets/reply.png")}
          />
          <Text style={styles.verticalBarText}>Share</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
      ios: {
        paddingTop: 20,
      },
    }),
  },
  headerContainer: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    
  },
  topSection: {
    position: "absolute",
    backgroundColor: "blue",
  },
  bottomSection: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  bottomLeftSection: {
    flex: 4,
    paddingVertical: 50,
  },
  bottomRightSection: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingVertical: 50,
  },
  channelName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 26,
  },
  caption: {
    color: "white",
    marginVertical: 8,
  },
  musicNameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  musicNameIcon: {
    width: 12,
    height: 12,
    marginRight: 8,
  },
  musicName: {
    color: "white",
  },
  musicDisc: {
    width: 40,
    height: 40,
  },
  verticalBar: {
    position: "absolute",
    right: 8,
    bottom: 72,
    paddingVertical: 120,
  },
  verticalBarItem: {
    marginBottom: 24,
    alignItems: "center",
  },
  verticalBarIcon: {
    width: 32,
    height: 32,
  },
  verticalBarText: {
    color: "white",
    marginTop: 4,
  },
  avatarContainer: {
    marginBottom: 48,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  followButton: {
    position: "absolute",
    bottom: -8,
  },
  followIcon: {
    width: 21,
    height: 21,
  },
  header: {
    position: 'absolute',
    top: 50, 
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', 
  },
});
