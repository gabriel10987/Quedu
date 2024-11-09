// screens/auth/SigninScreen.js
import { View, StyleSheet, ImageBackground, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../src/colors";
import Logo from "../../components/auth/Logo";
import InputListSignin from "../../components/auth/InputListSignin";
import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SigninScreen = ({ navigation, setIsSignedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Función que será llamada por InputListSignin cuando se valide correctamente
  const handleLogin = async (isValid) => {
    if (isValid) {
      try {
        // Verificar si tenemos el token guardado
        const token = await AsyncStorage.getItem('token');
        if (token) {
          setIsSignedIn(true); // Actualiza el estado de autenticación
          
          // Limpiar los campos después de un login exitoso
          setUsername("");
          setPassword("");
        } else {
          Alert.alert('Error', 'No se pudo completar el inicio de sesión');
        }
      } catch (error) {
        Alert.alert('Error', 'Hubo un problema al iniciar sesión');
        console.error('Error al manejar el login:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/bg.png")}
        style={styles.background}
      >
        <LinearGradient
          colors={[
            "transparent",
            "rgba(255,255,255,0.8)",
            "rgba(255,255,255,1)",
          ]}
          locations={[0.05, 0.15, 0.25]}
          style={styles.gradient}
        >
          <View style={styles.containerSingin}>
            <Logo />
            <InputListSignin
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              navigation={navigation}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  background: {
    flex: 1,
    height: "50%",
  },
  gradient: {
    flex: 1,
    marginTop: "auto",
  },
  containerSingin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
    marginHorizontal: 64,
  },
});

export default SigninScreen;
