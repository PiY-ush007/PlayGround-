import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import LoginScreen from "./screens/loginScreen";
import SignUpScreen from "./screens/signUpScreen";
import HomeScreen from "./screens/homeScreen";
import PostScreen from "./screens/postScreen";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}
const switchNavigator = createSwitchNavigator({
  LoginScreen: LoginScreen,
  SignUpScreen: SignUpScreen,
  HomeScreen: HomeScreen,
  PostScreen: PostScreen,
});

const AppContainer = createAppContainer(switchNavigator);
