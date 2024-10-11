import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../src/colors";

export const EmptyList = ({section}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aún no tienes {section} generados </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  text: {
    fontSize: 16,
    fontFamily: "Quicksand-Regular",
    color: colors.darkBlueOpacity50,
  }
});
