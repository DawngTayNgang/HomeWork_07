import * as React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import PresentationalComponent from "../PresentationalComponent";
export default function HomeScreen({ navigation }) {
  const [message, setMessage] = useState("What is this page?");

  const updateMessage = () => {
    setMessage("friend screen");
    // Alert.alert("Đây là friend screen")
  };
  return (
    <View style={styles.view}>
      {/* <PresentationalComponent myState = {message} updateState = {updateMessage}/> */}
      <View style={styles.top}>
        <TouchableOpacity style={styles.top_button}>
          <Text style={styles.top_text_button}>Gợi ý</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.top_button}>
          <Text style={styles.top_text_button}>Bạn bè</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.top_button}>
          <Text style={styles.top_text_button}>Sinh nhật</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  view: { flex: 1, alignItems: "center", justifyContent: "center",backgroundColor:"#fff" },
  text: { fontSize: 26, fontWeight: "bold" },
  top: {
    position: "absolute",
    top: 0,
    flexDirection: "row",
    left: 0,
    marginTop: 5,
    marginLeft: 10,
  },
  top_button: {
    justifyContent:"center",
    alignItems:"center",
    padding:8,
    backgroundColor: "#EEEEEE",
    marginRight:10,
    borderRadius:20,
  },
  top_text_button:{
    fontWeight:"600"
  }
});
