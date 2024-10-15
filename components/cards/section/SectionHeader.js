import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const SectionHeader = ({name, color, icon1, icon2}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: color }]}>{name}</Text>
      <View style={styles.pressableContainer}>
        <Pressable>
          <Ionicons name={icon1} size={18} color={color} />
        </Pressable>
        <Pressable>
          <Ionicons name={icon2} size={18} color={color}/>
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
    minWidth: "100%",
  },
  pressableContainer: {
    marginRight: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "20%"
  },
  text: {
    fontSize: 16,
    fontFamily: "Quicksand-SemiBold",
  },
});
