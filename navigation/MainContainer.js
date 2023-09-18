import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
//import các screen
import HomeScreen from "./screens/src/components/homeScreen/HomeScreen";
import FriendScreen from "./screens/src/components/friendScreen/FriendScreen";
import AlertScreen from "./screens/src/components/alertScreen/AlertScreen";
import SettingScreen from "./screens/src/components/settingScreen/SettingScreen";

//Screens name

const HomeName = "Home";
const FriendName = "Friends";
const AlertName = "Alerts";
const Setting = "Settings";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  //tạo một func để prop chữ sang bên phía các screen
  //bấm vào chữ thì sẽ hiện lên đây là screen gì
  state = {
    myState: "What is this screen",
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={HomeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn == HomeName) {
              updateState = () => {
                this.setState({ myState: "Home nhé" });
              };
              iconName = focused ? "home" : "home-outline";
            } else if (rn == FriendName) {
              updateState = () => {
                this.setState({ myState: "friend nhé" });
              };
              iconName = focused ? "people" : "people-outline"; // Chỉnh sửa tên icon
            } else if (rn == AlertName) {
              updateState = () => {
                this.setState({ myState: "alert nhé" });
              };
              iconName = focused ? "notifications" : "notifications-outline"; // Chỉnh sửa tên icon
            } else if (rn == Setting) {
              updateState = () => {
                this.setState({ myState: "setting nhé" });
              };
              iconName = focused ? "settings" : "settings-outline"; // Chỉnh sửa tên icon
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        // tabBarOptions={{
        //   activeTintColor: "red",
        //   inactiveTintColor: "grey",
        //   labelStyle: { height: 10, fontSize: 10 },
        //   style: { padding: 10, height: 70 },
        // }}
      >
        <Tab.Screen
          name={HomeName}
          component={HomeScreen}
        />
        <Tab.Screen
          name={FriendName}
          component={FriendScreen}
        />
        <Tab.Screen
          name={AlertName}
          component={AlertScreen}
        />
        <Tab.Screen
          name={Setting}
          component={SettingScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
