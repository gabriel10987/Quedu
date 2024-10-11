import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./screens/HomeScreen";
import CourseDetailScreen from "./screens/myQuedus/CourseDetailScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="CourseDetail" component={CourseDetailScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;