import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import CoinDetailScreen from "./src/screens/CoinDetailScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <CoinDetailScreen />
      {/* <HomeScreen /> */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
