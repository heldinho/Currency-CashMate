import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  ScrollView,
  View,
} from "react-native";
const { width, height } = Dimensions.get("screen");

export default function Historic() {
  const alignment = useRef(new Animated.Value(0)).current;

  const fnBringUpActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fnHideTheActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const actionSheetIntropolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [height / 2, 0],
  });

  const actionSheetStyle = {
    transform: [
      {
        translateY: actionSheetIntropolate,
      },
    ],
  };

  const fnGestureHandler = (e) => {
    if (e.nativeEvent.contentOffset.y > 0) fnBringUpActionSheet();
    else fnHideTheActionSheet();
  };

  return (
    <Animated.View style={[styles.container, actionSheetStyle]}>
      <View
        style={{
          width: 60,
          height: 7,
          backgroundColor: "#fff",
          borderRadius: 100,
          top: -10,
          alignSelf: "center",
        }}
      />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        onScroll={fnGestureHandler}
        style={styles.grabber}
      >
        <View style={{ height: 50, borderWidth: 0 }} />
      </ScrollView>
      <Text style={styles.title}>Transactions</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    height: height / 1.19,
    padding: 20,
    backgroundColor: "#777",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    width: width,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 20,
  },
  grabber: {
    opacity: 0,
    position: "absolute",
    backgroundColor: "transparent",
    width: width,
    height: 45,
    top: 0,
    alignSelf: "center",
    borderRadius: 100,
  },
});
