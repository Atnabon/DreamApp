import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function WelcomeScreen() {
  return (
    <View>
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <view style={styles.loginButton}></view>
        <view style={styles.registerButton}></view>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
});
