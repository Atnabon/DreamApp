import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Button,
  View,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

export default function App() {
  console.log("app executed");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text onPress={() => console.log("Text")}>Hello React Native</Text>
        <Separator />
        <Image
          style={{ height: 100, width: 150 }}
          source={{ uri: "https://ketari.vercel.app/ride.jpeg" }}
        />
        <Separator />
        <Button
          color="orange"
          title="click me"
          onPress={() => alert("button clicked")}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
