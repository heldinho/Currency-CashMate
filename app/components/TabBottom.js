import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const tabs = [
  { key: 0, icon: "grid", label: "Dashboard" },
  { key: 1, icon: "card", label: "Cards" },
  { key: 2, icon: "chatbubble-ellipses", label: "Support" },
  { key: 3, icon: "user-alt", label: "Profile" },
];

export default function TabBottom() {
  const [selectedTab, setSelectedTab] = React.useState("");

  return (
    <View style={styles.container}>
      {tabs.map(item => (
        <TouchableOpacity
          key={item.key}
          style={styles.tabs}
          onPress={() => setSelectedTab(item.key)}
        >
          {item.label !== "Profile" ? (
            <Ionicons
              name={item.icon}
              size={20}
              color={selectedTab === item.key ? "#8D8958" : "#444"}
            />
          ) : (
            <FontAwesome5
              name={item.icon}
              size={20}
              color={selectedTab === item.key ? "#8D8958" : "#444"}
            />
          )}
          <Text
            style={[
              styles.label,
              { color: selectedTab === item.key ? "#8D8958" : "#444" },
            ]}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "90%",
    height: 65,
    bottom: 30,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  tabs: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 10,
    letterSpacing: 1,
    color: "#444",
    marginTop: 3,
  },
});
