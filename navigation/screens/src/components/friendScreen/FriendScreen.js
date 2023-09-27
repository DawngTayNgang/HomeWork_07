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
      <View style={styles.hr}></View>
      <View style={styles.title_seeAll}>
        <Text style={styles.title_addFr}>Lời mời kết bạn</Text>
        <TouchableOpacity style={styles.button_title_add}>
          <Text style={styles.button_addFr}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.FLfriend_acp_req}>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start", // Đặt justifyConFtent thành "flex-start"
    backgroundColor: "#fff",
  },
  text: { fontSize: 26, fontWeight: "bold" },
  top: {
    // position: "absolute",
    // top: 0,
    width: "100%",
    flexDirection: "row",
    left: 0,
    marginTop: 10,
    marginLeft: 10,
  },
  top_button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#EEEEEE",
    marginRight: 10,
    borderRadius: 20,
  },
  hr: {
    width: "100%",
    height: 0.2,
    backgroundColor: "grey",
    marginTop: 10,
    marginBottom:10
  },
  top_text_button: {
    fontWeight: "600",
  },
  title_seeAll: {
    // position: "absolute",
    // top: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  title_addFr: {
    fontWeight: "700",
    fontSize: 23,
  },
  button_addFr: {
    color: "blue",
    fontSize: 18,
    right: 0,
  },
  FLfriend_acp_req:{
    height:"100%",
    width:"100%",
  }
});
