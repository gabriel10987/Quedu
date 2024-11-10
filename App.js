import React, {useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AuthStack from "./navigation/AuthStack";
import DrawerNavigator from "./DrawerNavigator";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Quicksand-Bold': require('./assets/fonts/BellotaText-Italic.ttf'),
      'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
      'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
      'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
      'Quicksand-SemiBold': require('./assets/fonts/Quicksand-SemiBold.ttf'),
      'BellotaText-Italic': require('./assets/fonts/BellotaText-Italic.ttf'),
    });
    setFontsLoaded(true);
  };

  // verificar la autenticacion del usuario
  const checkAuthStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        // Valida si el token sigue siendo válido (opcionalmente llama al backend)
        setIsSignedIn(true);
      }
    } catch (error) {
      console.error("Error verificando el token:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFonts();
    checkAuthStatus();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (loading) {
    return <AppLoading />; // Muestra una pantalla de carga mientras verifica el token
  }
  
  return (
    <NavigationContainer>
      {isSignedIn ? <DrawerNavigator /> : <AuthStack setIsSignedIn={setIsSignedIn}/>}
    </NavigationContainer>
  );
};