import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const CourseName = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Curso</Text>
      <View style={styles.pressableContainer}>
        <Pressable>
          <Ionicons name="bookmark" size={18} color="#00A8E8" />
        </Pressable>
        <Pressable>
          <Ionicons name="arrow-up" size={18} color="#00A8E8" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
    minWidth: "85%",
  },
  pressableContainer: {
    marginRight: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "20%"
  },
  text: {
    fontSize: 12,
    fontFamily: "Quicksand-SemiBold",
    color: "#00A8E8",
  },
});
