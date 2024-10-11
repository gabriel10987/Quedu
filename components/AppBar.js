import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';

const AppBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Image
                source={require('../assets/Logo.png')}
                style={styles.logo}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.q}>Q</Text>
                <Text style={styles.restOfTitle}>uedu</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Ionicons name="menu" size={32} color="#C8D0CD" />
            </TouchableOpacity>
        </View>

        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Hola Diego</Text>
            <Text style={styles.promptText}>¿Listo para avanzar?</Text>
        </View>

        <Wave />
    </View>
  );
};

const Wave = () => (
    <Svg
      height="85"
      width="100%"
      style={styles.wave}
    >
      <Path
        d="M0,40 C100,100 400,0 400,80 Q520,100 400,80 L540,100 L0,100 Z"
        fill="#fff"
      />
    </Svg>
  );

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "#2C1863",
    paddingTop: 50,
    overflow: "hidden",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
    paddingHorizontal: 45,
  },
  logo: {
    width: 36,
    height: 30,
  },

  titleContainer: {
    fontSize: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  q: {
    color: "#59B7E2",
    fontSize: 20,
    fontFamily: "Quicksand-SemiBold",
  },
  restOfTitle: {
    color: "#C8D0CD",
    fontSize: 20,
    fontFamily: "Quicksand-SemiBold",
  },

  welcomeText: {
    color: "#59B7E2",
    fontSize: 12,
    paddingHorizontal: 45,
    fontFamily: "Quicksand-SemiBold",
  },
  promptText: {
    color: "#59B7E2",
    fontSize: 12,
    paddingHorizontal: 45,
    fontFamily: "Quicksand-SemiBold",
  },
  wave: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default AppBar;
