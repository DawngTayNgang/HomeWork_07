import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
const PresentationalComponent = (props) => {
  // const handlePress = () => {
  //   // Gọi hàm cập nhật trạng thái
  //   props.updateState;
  //   console.log(props.updateState);
  //   // Alert.alert('Đây là' + props.updateState);
  // };
  return (
    <View>
      <Text onPress={props.updateState} style={styles.text}>
        {props.myState}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: { fontWeight: "bold", fontSize: 20 },
});
export default PresentationalComponent;
