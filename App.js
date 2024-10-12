import React, {useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AuthStack from "./navigation/AuthStack";
import DrawerNavigator from "./DrawerNavigator";

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

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

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <NavigationContainer>
      {isSignedIn ? <DrawerNavigator /> : <AuthStack setIsSignedIn={setIsSignedIn}/>}
    </NavigationContainer>
  );
};