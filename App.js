import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import TabBottom from "./TabBottom";
import Headers from "./Header";
import InputSearch from "./InputSearch";
import CardBalance from "./CardBalance";
import Favorites from "./Favorites";
import Historic from "./Historic";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.body}>
        <Headers />
        <InputSearch />
        <CardBalance />
        <Favorites />
      </ScrollView>
      <Historic />
      <TabBottom />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#0B0D11",
    marginTop: StatusBar.currentHeight,
  },
  body: {
    marginTop: StatusBar.currentHeight + 20,
    width: "90%",
    alignSelf: "center",
  },
});
