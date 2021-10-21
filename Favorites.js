import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <View style={styles.boxTitle}>
        <Text style={styles.title}>Favorites</Text>
        <TouchableOpacity>
          <Text style={styles.textAll}>All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cards}>
        <TouchableOpacity style={styles.card}>
          <View style={styles.boxIcon}>
            <AntDesign name="arrowright" size={15} color="#2B2B2B" />
          </View>
          <Text style={styles.textCard}>Transfers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.boxIcon}>
            <MaterialCommunityIcons
              name="wallet-outline"
              size={15}
              color="#2B2B2B"
            />
          </View>
          <Text style={styles.textCard}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.boxIcon}>
            <Ionicons
              name="game-controller-outline"
              size={15}
              color="#2B2B2B"
            />
          </View>
          <Text style={styles.textCard}>Games</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.boxIcon}>
            <MaterialCommunityIcons
              name="ticket-confirmation-outline"
              size={15}
              color="#2B2B2B"
            />
          </View>
          <Text style={styles.textCard}>Tickets</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderWidth: 0,
    borderColor: "#fff",
  },
  boxTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
  },
  textAll: {
    color: "#777",
  },
  cards: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
    borderColor: "#fff",
  },
  card: {
    marginHorizontal: 5,
    marginVertical: 20,
    backgroundColor: "#242529",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 20,
    width: 70,
  },
  boxIcon: {
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#9A965F",
  },
  textCard: {
    marginTop: 10,
    fontSize: 11,
    color: "#777",
  },
});
