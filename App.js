import {  Text, Platform,  View, Image} from 'react-native';
import { Home, Shop, Inbox, Profile, Logo , InboxDetail} from "./screens";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const InboxStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Inbox" component={Inbox} />
    <Stack.Screen name="InboxDetail" component={InboxDetail} />
  </Stack.Navigator>
);

const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: 'black',
  }
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 60,
            backgroundColor: 'black',
          }
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Feather name="home" size={24} color={focused ? 'blue' : "#fff"} />
              </View>
            )
          }}
        />
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Feather name="shopping-cart" size={24} color={focused ? 'blue' : "#fff"} />
              </View>
            )
          }}
        />
        <Tab.Screen
          name="Logo"
          component={Logo}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image source={require('./assets/new-video.png')} style={{ height: 40, width: 60 }} ></Image>
              </View>
            )
          }}
        />
        <Tab.Screen
          name="inbox"
          component={InboxStack} // Use InboxStack here
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <AntDesign name="message1" size={24} color={focused ? 'blue' : "#fff"} />
              </View>
            )
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Octicons name="person" size={24} color={focused ? 'blue' : "#fff"} />
              </View>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}