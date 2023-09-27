import React, { Component } from "react";
import { View, Text } from "react-native";
const {
  ip,
  dbUser,
  dbname,
  dbpassword,
} = require("./../../../../../config");
class Users extends Component {
  state = {
    data: "",
  };
  componentDidMount = () => {
    fetch(`http://`+ip+`/user`)
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
export default Users