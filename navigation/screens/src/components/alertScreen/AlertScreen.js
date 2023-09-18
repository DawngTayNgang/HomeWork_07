import * as React from "react";
import { useState } from "react"
import { View, Text, StyleSheet, Alert } from "react-native";
import PresentationalComponent from "../PresentationalComponent";
export default function HomeScreen({ navigation }) {
  const [message, setMessage] = useState('What is this page?');

  const updateMessage = () => {
    setMessage('Alert screen');
    // Alert.alert("Đây là alert screen")
  };
  return (
    <View style={styles.view}>
      <PresentationalComponent myState = {message} updateState = {updateMessage}/>
    </View>
  );
}
const styles = StyleSheet.create({
  view: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 26, fontWeight: "bold" }
});
 