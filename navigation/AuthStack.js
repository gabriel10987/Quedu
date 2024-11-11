import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "../screens/auth/SigninScreen";
import SignupScreen from "../screens/auth/SignupScreen";

const Stack = createStackNavigator();

const AuthStack = ({ setIsSignedIn }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signin">
        {(props) => <SigninScreen {...props} setIsSignedIn={setIsSignedIn} />}
      </Stack.Screen>
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
