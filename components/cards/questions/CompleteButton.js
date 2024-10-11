import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../../src/colors";
import { View } from "react-native";

export const CompleteButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Completar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.darkBlue, 
    paddingVertical: 14, 
    paddingHorizontal: 40, 
    borderRadius: 8, 
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Quicksand-Bold", 
  },
});
