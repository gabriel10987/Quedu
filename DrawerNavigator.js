import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import QuestionResolutionScreen from "./screens/resolution/QuestionResolutionScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Questions" component={QuestionResolutionScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;