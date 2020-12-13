import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import firbase from "firebase";
import db from "../config";

export default class SignUpScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Age: "",
      emailAddress: "",
      password: "",
      confirmPasword: "",
    };
  }

  render() {
    return (
      <View>
        <Text style={{ textAlign: "center", fontSize: 25 }}>
          Sign up screen
        </Text>
        <TextInput
          style={{
            alignSelf: "center",
            width: 275,
            height: 40,
            borderWidth: 1,
            borderRadius: 20,
            marginTop: 40,
            padding: 10,
          }}
          placeholder="First Name"
          onChangeText={(text) => {
            this.setState({
              Name: text,
            });
          }}
        ></TextInput>
        <TextInput
          style={{
            alignSelf: "center",
            width: 275,
            height: 40,
            borderWidth: 1,
            borderRadius: 20,
            marginTop: 40,
            padding: 10,
          }}
          placeholder="Age"
        ></TextInput>
        <TextInput
          style={{
            alignSelf: "center",
            width: 275,
            height: 40,
            borderWidth: 1,
            borderRadius: 20,
            marginTop: 40,
            padding: 10,
          }}
          placeholder="Email-Address"
          onChangeText={(text) => {
            this.setState({
              emailAddress: text,
            });
          }}
        ></TextInput>
        <TextInput
          style={{
            alignSelf: "center",
            width: 275,
            height: 40,
            borderWidth: 1,
            borderRadius: 20,
            marginTop: 40,
            padding: 10,
          }}
          placeholder="Password"
          onChangeText={(text) => {
            this.setState = {
              password: text,
            };
          }}
        ></TextInput>
        <TextInput
          style={{
            alignSelf: "center",
            width: 275,
            height: 40,
            borderWidth: 1,
            borderRadius: 20,
            marginTop: 40,
            padding: 10,
          }}
          placeholder="Confirm password"
          onChangeText={(text) => {
            this.setState = {
              confirmPasword: text,
            };
          }}
        ></TextInput>
        
        <TouchableOpacity
          style={{
            width: 175,
            height: 40,
            backgroundColor: "orange",
            alignSelf: "center",
            borderRadius: 20,
            marginTop: 50,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              padding: 10,
              color: "white",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
