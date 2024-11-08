import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CourseDetailScreen from "../screens/quedus/CourseDetailScreen";
import CreateQueduScreen from "../screens/quedus/CreateQueduScreen";
import MyQuedusScreen from "../screens/quedus/MyQuedusScreen";
import CreateCourseScreen from "../screens/CreateCourseScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
      <Stack.Screen name="CreateQueduScreen" component={CreateQueduScreen} />
      <Stack.Screen name="MyQuedusScreen" component={MyQuedusScreen} />
      <Stack.Screen name="CreateCourseScreen" component={CreateCourseScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;