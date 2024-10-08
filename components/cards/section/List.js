import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../src/colors";
import { SectionCard } from "./SectionCard";

export const List = () => {
  return (
    <View style={styles.container}>
      <SectionCard name= "course 1" date="02/23/32"/>
      <SectionCard name= "course 1" date="02/23/32"/>
      <SectionCard name= "course 1" date="02/23/32"/>
      <SectionCard name= "course 1" date="02/23/32"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    minWidth: "85%",
  },
});
