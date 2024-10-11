import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import MyQuedusScreen from "./screens/quedus/MyQuedusScreen";
import CourseDetailScreen from "./screens/quedus/CourseDetailScreen";
import QuestionResolutionScreen from "./screens/resolution/QuestionResolutionScreen";
import CreateCourseScreen from "./screens/CreateCourseScreen";
import CreateQueduScreen from "./screens/quedus/CreateQueduScreen";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home_Stack" component={HomeScreen} />
            <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
        </Stack.Navigator>
    );
};

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Incio" component={HomeStack}/>
            <Drawer.Screen name="Mis Quedus" component={MyQuedusScreen} />
            <Drawer.Screen name="Questions" component={QuestionResolutionScreen} />
            <Drawer.Screen name="Crear Curso" component={CreateCourseScreen} />
            <Drawer.Screen name="Crear Quedu" component={CreateQueduScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;