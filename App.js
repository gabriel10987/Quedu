import React, {useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
      'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
      'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
      'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
      'Quicksand-SemiBold': require('./assets/fonts/Quicksand-SemiBold.ttf'),
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
      <DrawerNavigator/>
    </NavigationContainer>
  );
};