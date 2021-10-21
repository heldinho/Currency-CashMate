import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function InputSearch() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Ionicons name="md-search" size={15} color="#777" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#444"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#777",
    padding: 10,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    marginLeft: 10,
    width: "85%",
    alignSelf: "center",
    color: "#777",
  },
});
