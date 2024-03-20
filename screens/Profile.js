import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import NameBar from "../components/NameBar";
import StatBlock from "../components/StatusBlock";
import Button from "../components/Button";
import FollowButton from "../components/FollowButton";
import ProfileItems from "../components/ProfileItems";
import { AntDesign ,Feather,MaterialIcons } from '@expo/vector-icons';
export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
              <MaterialIcons name="report" size={24} color='white' />
              </View>
        <NameBar></NameBar>

        <View style={styles.menuHeading}>
        <Feather name="menu" size={24} color="white" />
        </View>
      
      </View>

      <View style={styles.infoContainer}>
        <Image
          style={styles.avatar}
          source={require("../assets/ava.jpg")}
        ></Image>
        <View style={styles.qrContainer}>
        <Text style={{ alignItems: "center", justifyContent: "center", fontSize: 16,fontWeight: "bold", color: "white", paddingTop: 10 }}>@TuanNam0612</Text>
        <AntDesign name="qrcode" size={24} color="green" style={styles.iconQR} />
        </View>
      </View>

      <View style={styles.statContainer}>
        <StatBlock title="Following" count="20"></StatBlock>
        <StatBlock title="Followers" count="300K"></StatBlock>
        <StatBlock title="Likes" count="20M"></StatBlock>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Edit Profile"></Button>
        <FollowButton></FollowButton>

      </View>
      <View style={styles.userText}>
      <Text style={{fontSize: 15, color: "white"}}> 
      ~ Bui Tuan Nam ~{"\n"}
      StuID: 2101040127
      </Text>
       
      </View>
      <View style={styles.profileItem}>
      <ProfileItems />
      </View>
      <View style={styles.galleryContainer}>
        <ScrollView>
          <View style={styles.gallery}>
            <Image
              style={styles.galleryItem}
              source={require("../assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("../assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("../assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("../assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("../assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("../assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("../assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("../assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("../assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("../assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("../assets/ava.jpg")}
            ></Image>
            <Image
              style={styles.galleryItem}
              source={require("../assets/ava.jpg")}
            ></Image>
          </View>
        </ScrollView>
      </View>
      <StatusBar style="auto" />
 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1C21FF",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    justifyContent: 'space-evenly',
    width: '100%',
    
    
  },
  backImg: {
    width: 30,
    height: 30,
  },
  menuHeading: {
    width: 30,
    height: 30,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    height: "60%"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  textInfoContainer: {
    flex: 1,
    paddingLeft: 30,
    justifyContent: "center",
  },
  statContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingTop: 30
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
  },
  galleryContainer: {
    paddingTop: 0,
    flex: 3,
  },
  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    gap: 10,
  },
  galleryItem: {
    width: 120,
    height: 120,
  },
  profileItem:{
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
  },
  userText: {
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30
  },
  qrContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingTop: 5

  },
  iconQR:{
    marginTop:10
  },

});