import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../../src/colors";

export const SectionCard = ({name, date, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: colors.gray,
    minWidth: "85%",
    borderRadius: 4,
  },
  text: {
    fontSize: 10,
    fontFamily: "Quicksand-SemiBold",
  }
});
