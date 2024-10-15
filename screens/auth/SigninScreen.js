import { View, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../src/colors";
import Logo from "../../components/auth/Logo";
import InputListSignin from "../../components/auth/InputListSignin";
import React, { useState } from "react";

const SigninScreen = ({ navigation, setIsSignedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función que será llamada por InputListSignin cuando se valide correctamente
  const handleLogin = (isValid) => {
    if (isValid) {
      setIsSignedIn(true); // Actualiza el estado de autenticación si las credenciales son válidas
    } else {
      alert("Usuario o contraseña incorrecta");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/bg.png")}
        style={styles.background}
      >
        <LinearGradient
          colors={["transparent", "rgba(255,255,255,0.8)", "rgba(255,255,255,1)"]}
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
              handleLogin={handleLogin} // Pasamos la función para manejar el login
              navigation= {navigation}  
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
    marginTop: 'auto',
  },
  containerSingin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
    marginHorizontal: 64,
  },
});

export default SigninScreen;
