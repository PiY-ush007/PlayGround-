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

export default class HomeSceen extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#FDECA6",
          paddingBottom: 50,
        }}
      >
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
                onPress={() => {
                  this.props.navigation.navigate("PostScreen");
                }}
              />
              <Text style={{ marginRight: 100 }}>Post</Text>
            </View>
          }
        />

        <View
          style={{
            backgroundColor: "white",
            borderRadius: 50,
            marginHorizontal: 275,
            marginTop: 75,
            height: 100,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              marginTop: 40,
              fontSize: 15,
              fontWeight: "bold",
              marginLeft: 40,
            }}
          >
            score 10 goals in a minute
          </Text>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              width: 125,
              height: 40,
              borderRadius: 5,
              marginLeft: 100,
              backgroundColor: "orange",
            }}
          >
            <Text
              style={{
                padding: 10,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              View
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "white",
            borderRadius: 50,
            marginHorizontal: 275,
            marginTop: 75,
            height: 100,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              marginTop: 40,
              fontSize: 15,
              fontWeight: "bold",
              marginLeft: 40,
            }}
          >
            Fly a paper plane between 2 boxes
          </Text>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              width: 125,
              height: 40,
              borderRadius: 5,
              marginLeft: 100,
              backgroundColor: "orange",
            }}
          >
            <Text
              style={{
                padding: 10,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              View
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "white",
            borderRadius: 50,
            marginHorizontal: 275,
            marginTop: 75,
            height: 100,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              marginTop: 40,
              fontSize: 15,
              fontWeight: "bold",
              marginLeft: 40,
            }}
          >
            Do a handstand for 30s
          </Text>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              width: 125,
              height: 40,
              borderRadius: 5,
              marginLeft: 100,
              backgroundColor: "orange",
            }}
          >
            <Text
              style={{
                padding: 10,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              View
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
