import React, { Component } from "react";
import { View, Text } from "react-native";
import data from "./../../config"
class TestAPI extends Component {
  state = {
    data: "",
  };
  componentDidMount = () => {
    fetch(`http://`+data.ip+`/test_api`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
            data: data
        })
      })
      .catch((error) => {
        console.error("Lỗi khi gửi yêu cầu:", error);
      });
  };
  render(){
    return(
        <View>
            <Text>
                {this.state.data.data}
            </Text>
        </View>
    )
  }
}
export default TestAPI