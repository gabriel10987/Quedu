import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.title}>¡Bienvenido a la página de inicio!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontFamily: "Quicksand-Bold",
  },
});

export default HomeScreen;
