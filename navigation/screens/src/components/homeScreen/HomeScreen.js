import * as React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import PresentationalComponent from "../PresentationalComponent";
export default function HomeScreen({ navigation }) {
  const [message, setMessage] = useState("What is this page?");

  const updateMessage = () => {
    setMessage("Home screen");
    // Alert.alert("Đây là home screen")
  };
  return (
    <View style={styles.container}>
      <PresentationalComponent myState={message} updateState={updateMessage} />
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: { fontSize: 26, fontWeight: "bold" },
  container: {
    flex: 1,
    flexDirection: "column", // Căn chỉnh theo chiều dọc
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center", // Căn giữa theo chiều ngang
  },
  box1: {
    width: "90%",
    height: "30%",
    backgroundColor: "red",
  },
  box2: {
    width: "90%",
    height: "30%",
    backgroundColor: "green",
  },
  box3: {
    width: "90%",
    height: "30%",
    backgroundColor: "blue",
  },
});
