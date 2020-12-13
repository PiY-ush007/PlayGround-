import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  Alert,
} from "react-native";
import SignUpScreen from "./signUpScreen";
import firebase from "firebase";
import db from "../config";

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  userLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };
  render() {
    return (
      <View style={{ backgroundColor: "#FDECA6" }}>
        <View style={{ flex: 1, paddingBottom: 77 }}>
          <Image
            style={{
              width: 250,
              height: 100,
              alignSelf: "center",
              marginTop: 50,
            }}
            source={require("../assets/playgroundAppWireframe.png")}
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 150,
              width: 225,
              height: 50,
              alignSelf: "center",
              marginTop: 45,
              backgroundColor: "white",
              padding: 10,
              fontSize: 16,
            }}
            placeholder="Email-Address"
            onChangeText={(text) => {
              this.setState({
                email: text,
              });
            }}
          />

          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 100,
              width: 225,
              height: 50,
              alignSelf: "center",
              marginTop: 45,
              backgroundColor: "white",
              padding: 10,
              fontSize: 16,
            }}
            placeholder="Password"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
          <TouchableOpacity
            style={{
              alignSelf: "center",
              marginTop: 40,
              backgroundColor: "orange",
              width: 155,
              height: 40,
            }}
            onPress={() => {
              this.userLogin(this.state.email, this.state.password);
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
                padding: 8,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>

          <Text style={{ alignSelf: "center", marginTop: 75 }}>
            dont have an account? click here to
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("SignUpScreen");
            }}
          >
            <Text style={{ color: "blue", alignSelf: "center" }}>sign-up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
