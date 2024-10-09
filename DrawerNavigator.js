import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./screens/HomeScreen";
import MyQuedus from "./screens/myQuedus/MyQuedus";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Mis Quedus" component={MyQuedus} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;