import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  Keyboard,
} from "react-native";
import TabBottom from "../components/TabBottom";
import Headers from "../components/Header";
import InputSearch from "../components/InputSearch";
import CardBalance from "../components/CardBalance";
import Favorites from "../components/Favorites";
import Historic from "../components/Historic";
import { wp } from "../utils";

export default function Main() {
  return (
    <SafeAreaView
      style={styles.main}
      onPress={Keyboard.dismiss}
      testID="keyboard"
    >
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
  main: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#0B0D11",
    marginTop: StatusBar.currentHeight,
  },
  body: {
    marginTop: StatusBar.currentHeight + 20,
    width: wp("90%"),
    alignSelf: "center",
  },
});
