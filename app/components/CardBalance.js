import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { wp, hp } from "../utils";

export default function CardBalance() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.amount}>$4,890.00</Text>
        <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 12, color: "#777", marginTop: 5 }}>
        Your Balance
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>replenish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    alignSelf: "center",
    marginTop: 20,
    padding: 20,
    backgroundColor: "#353739",
    height: 150,
    borderRadius: 10,
  },
  amount: {
    color: "#fff",
    fontSize: hp("3.5%"),
  },
  button: {
    marginTop: 10,
    height: hp("7.5%"),
    borderRadius: 10,
    backgroundColor: "#8D8958",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
    textTransform: "uppercase",
  },
});
