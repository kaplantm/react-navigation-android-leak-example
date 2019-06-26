import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

class DetailsScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#88b9ac"
        }}
      >
        <View style={{ flex: 1, margin: 10 }}>
          <Text>Details</Text>
          <Button
            title="Push Home From Details"
            onPress={() => this.props.navigation.push("Home")}
          />
        </View>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#88b9ac"
        }}
      >
        {/* other code from before here */}

        <View style={{ flex: 1, margin: 10 }}>
          <Text>Home</Text>
          <Button
            title="Push Details From Home"
            onPress={() => this.props.navigation.push("Details")}
          />
        </View>

        <View style={{ flex: 1, margin: 10 }}>
          <Button
            title="PopToTop"
            onPress={() => this.props.navigation.popToTop()}
          />
        </View>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
});

export default createAppContainer(HomeStack);
