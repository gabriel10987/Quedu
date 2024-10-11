import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import MyQuedus from "./screens/myQuedus/MyQuedus";
import CourseDetailScreen from "./screens/quedus/CourseDetailScreen";
import QuestionResolutionScreen from "./screens/resolution/QuestionResolutionScreen";
import CreateCourseScreen from "./screens/CreateCourseScreen";


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
            <Drawer.Screen name="Home" component={HomeStack}/>
            <Drawer.Screen name="Mis Quedus" component={MyQuedus} />
            <Drawer.Screen name="Questions" component={QuestionResolutionScreen} />
            <Drawer.Screen name="CreateCourse" component={CreateCourseScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;