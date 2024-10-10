import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./screens/HomeScreen";
import CreateCourseScreen from "./screens/CreateCourseScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="CreateCurse" component={CreateCourseScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;