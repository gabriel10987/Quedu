import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import MyQuedus from "./screens/myQuedus/MyQuedus";

import QuestionResolutionScreen from "./screens/resolution/QuestionResolutionScreen";

import CreateCourseScreen from "./screens/CreateCourseScreen";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Mis Quedus" component={MyQuedus} />
            <Drawer.Screen name="Questions" component={QuestionResolutionScreen} />
            <Drawer.Screen name="CreateCourse" component={CreateCourseScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;