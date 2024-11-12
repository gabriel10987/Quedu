import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';


const AppBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeStack")}>
          <Image
            source={require('../assets/images/Logo.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
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

// const Wave = () => (
//     <Svg
//       height="85"
//       width="100%"
//       style={styles.wave}
//     >
//       <Path
//         d="M0,40 C100,100 400,0 540,100 L0,100 Z"
//         fill="#fff"
//       />
//     </Svg>
//   );

const Wave = () => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  // Actualiza el tamaño de pantalla en caso de cambios de orientación
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(Dimensions.get('window').width);
    };
    Dimensions.addEventListener('change', handleResize);
    
  }, []);

  // Ajustamos la curva según el ancho de la pantalla
  const svgPath = `M0,20 C100,60 350,0 ${screenWidth + 50},60 L0,60 Z`;

  return (
    <Svg height="85" width={screenWidth} style={{ backgroundColor: 'transparent' }}>
      <Path d={svgPath} fill="#fff" />
    </Svg>
  );
};

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
