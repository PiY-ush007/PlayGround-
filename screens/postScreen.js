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
import { Header, Icon } from "react-native-elements";
import SignUpScreen from "./signUpScreen";
import firebase from "firebase";
import db from "../config";

export default class PostScreen extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={{
            width: 150,
            height: 65,
            alignSelf: "center",
            marginTop: 50,
          }}
          source={require("../assets/playgroundAppWireframe.png")}
        />
        <Header
          backgroundColor="#FDECA6"
          leftComponent={
            <View>
              <Icon
                style={{ marginLeft: 100 }}
                name="home"
                type="font-awesome"
                onPress={() => {
                  this.props.navigation.navigate("HomeScreen");
                }}
              />
              <Text style={{ marginLeft: 100 }}>Home</Text>
            </View>
          }
          rightComponent={
            <View>
              <Icon
                style={{ marginRight: 100 }}
                name="pencil"
                type="font-awesome"
              />
              <Text style={{ marginRight: 100 }}>Post</Text>
            </View>
          }
        />
        <TextInput
          style={{
            alignSelf: "center",
            borderWidth: 1,
            borderRadius: 20,
            width: 275,
            height: 40,
          }}
          placeholder="title"
        />

        <TextInput
          style={{
            alignSelf: "center",
            borderWidth: 1,
            borderRadius: 20,
            width: 275,
            height: 200,
          }}
          placeholder="description"
          numberOfLines="10"
        />
      </View>
    );
  }
}
