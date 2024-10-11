import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../../src/colors";
import { SectionHeader } from "./SectionHeader";
import { List } from "./List";

export const Section = ({ name, color, icon1, icon2, data = [], children }) => {
  return (
    <View style={styles.container}>
      <SectionHeader name={name} color={color} icon1={icon1} icon2={icon2} />
      <List data={data} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: colors.white,
    minWidth: "85%",
    borderRadius: 4,
    marginBottom: 10,
  },
  text: {
    fontSize: 10,
    fontFamily: "Quicksand-SemiBold",
  },
});