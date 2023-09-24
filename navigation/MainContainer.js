import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

//import các screen
import HomeScreen from "./screens/src/components/homeScreen/HomeScreen";
import FriendScreen from "./screens/src/components/friendScreen/FriendScreen";
import AlertScreen from "./screens/src/components/alertScreen/AlertScreen";
import SettingScreen from "./screens/src/components/settingScreen/SettingScreen";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
//Screens name

const HomeName = "Home";
const FriendName = "Friends";
const AlertName = "Alerts";
const Setting = "Settings";
const Tab = createBottomTabNavigator();
export default function MainContainer() {
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
      >
        <Tab.Screen name={HomeName} component={HomeScreen} />
        <Tab.Screen
          name={FriendName}
          component={FriendScreen}
          options={({ navigation }) => ({
            headerLeft: () => <CustomBackButton navigation={navigation} data = "friend" />,
            headerRight: () => <CustomFindButton />,
          })}
        />
        <Tab.Screen
          name={AlertName}
          component={AlertScreen}
          options={({ navigation }) => ({
            headerLeft: () => <CustomBackButton navigation={navigation} data = "Alert" />,
            headerRight: () => <CustomFindSettingButton />,
          })}
        />
        <Tab.Screen
          name={Setting}
          component={SettingScreen}
          options={({ navigation }) => ({
            headerLeft: () => <CustomBackButton navigation={navigation} data = "Setting" />,
            headerRight: () => <CustomFindSettingButton />,
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function CustomBackButton({ navigation, data }) {
  const handleBackPress = () => {
    navigation.navigate(HomeName, { customData: data });
  };

  return (
    <TouchableOpacity style={styles.iconBack} onPress={handleBackPress}>
      <Ionicons name="chevron-back-outline" style={styles.iconBack} />
    </TouchableOpacity>
  );
}
function CustomFindSettingButton() {
  return (
    <View style={styles.CustomButton}>
      <TouchableOpacity>
        <Ionicons name="settings-sharp" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="search-sharp" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
function CustomFindButton() {
  return (
    <TouchableOpacity style={styles.iconFind}>
      <Ionicons name="search-sharp" style={styles.icon} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    marginRight: 10,
  },
  CustomButton: {
    flexDirection: "row",
  },
  iconBack: {
    fontSize: 35,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 5,
  },
  iconFind: {
    fontSize: 35,
    color: "grey",
    marginRight: 10,
  },
  textBack: {
    fontSize: 15,
    fontWeight: "600",
  },
});
