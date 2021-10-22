import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            // uri: "https://cliply.co/wp-content/uploads/2020/09/442008571_ARTIST_AVATAR_3D_400.png",
            uri: "https://helder-passos.vercel.app/img/profile.3e81e16e.jpg",
          }}
          style={styles.image}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.name}>Helder Passos</Text>
          <Text style={styles.title}>Welcome back to CashMate</Text>
        </View>
      </View>
      <TouchableOpacity>
        <MaterialCommunityIcons name="bell" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  name: {
    color: "#fff",
    fontSize: 16,
  },
  title: {
    color: "#555",
    fontSize: 10,
  },
});
