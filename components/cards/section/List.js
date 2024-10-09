import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../../src/colors";
import { SectionCard } from "./SectionCard";

export const List = ({ data = [] }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <SectionCard key={index} name={item.name} date={item.date} />
      ))}
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
    backgroundColor: colors.white,
  },
});