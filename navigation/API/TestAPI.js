import React, { Component, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import data from "./../../config";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Image source={{ uri: item.img_profile }} style={styles.img_item} />
    <View style={styles.text_item}>
      <Text>id: {item.id}</Text>
      <Text>story: {item.story}</Text>
    </View>
  </TouchableOpacity>
);
// const [selectedId, setSelectedId] = useState('');

const renderItem = ({ item }) => {
  // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
  // const color = item.id === selectedId ? "white" : "black";

  return (
    <Item
      item={item}
      // onPress={() => setSelectedId(item.id)}
      backgroundColor={"pink"}
      textColor={"black"}
    />
  );
};

class TestAPI extends Component {
  state = {
    data2: [],
  };
  // lấy data trong db
  componentDidMount = () => {
    fetch(`http://` + data.ip + `/user`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data2: data,
        });
        // console.log(data[0].email);
      })
      .catch((error) => {
        console.error("Lỗi khi gửi yêu cầu:", error);
      });
  };
  render() {
    return (
      <View>
        <GestureHandlerRootView>
          <FlatList
            data={this.state.data2}
            renderItem={renderItem}
            keyExtractor={(item) => item.email}
            // extraData={selectedId}
          />
        </GestureHandlerRootView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
  },
  item: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 3,
    // marginHorizontal: 16,
  },
  img_item: {
    borderRadius: 5,
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 32,
  },
  text_item: {
    justifyContent: "center",
    marginLeft: 5,
  },
});
export default TestAPI;
