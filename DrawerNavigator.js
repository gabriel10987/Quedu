import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyQuedusScreen from "./screens/quedus/MyQuedusScreen";
import QuestionResolutionScreen from "./screens/resolution/QuestionResolutionScreen";
import CreateCourseScreen from "./screens/CreateCourseScreen";
import HomeStack from "./navigation/HomeStack";
import CreateQueduScreen from "./screens/quedus/CreateQueduScreen";
import CommunitiesScreen from "./screens/communities/CommunitiesScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={HomeStack}/>
            <Drawer.Screen name="Mis Quedus" component={MyQuedusScreen} />
            <Drawer.Screen name="Questions" component={QuestionResolutionScreen} />
            <Drawer.Screen name="Crear Curso" component={CreateCourseScreen} />
            <Drawer.Screen name="Crear Quedu" component={CreateQueduScreen} />
            <Drawer.Screen name="Comunidades" component={CommunitiesScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;