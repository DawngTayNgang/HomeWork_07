import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import PresentationalComponent from "../PresentationalComponent";
import { useRoute } from "@react-navigation/native";
import TestAPI from "../../../../API/TestAPI";

const {
  ip,
  dbUser,
  dbname,
  dbpassword,
} = require("./../../../../../config");
export default function HomeScreen({ navigation }) {
  const [message, setMessage] = useState("What is this page?");
  const route = useRoute();
  const [dataBack, setBack] = useState("");
  const [dataAPI, updateAPI] = useState("");
  var dataScreen
  if (route.params && route.params.customData) {
    const customData = route.params.customData;
    // Sử dụng customData ở đây
    dataScreen = customData;
  }
  // const updateMessage = () => {
  //   setMessage("Home screen");
  //   // Alert.alert("Đây là home screen") 
  // };
  // console.log(TestAPI);
  function testAPI() {
    fetch(`http://` + data.ip + `/Test_api_02`)
      .then((response) => response.json())
      .then((data) => {
        updateAPI(data.data);
      })
      .catch((error) => {
        console.error("Lỗi khi gửi yêu cầu:", error);
      });
  }
  return (
    <View style={styles.container}>
      {/* <Text>Bạn vừa quay trở về từ trang: {dataScreen}</Text>
      <Text onPress={testAPI}>Click vào đây để lấy dữ liệu </Text> */}
      <Text>{dataAPI}</Text>
      <TestAPI />
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
