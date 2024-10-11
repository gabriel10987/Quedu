import { View, StyleSheet } from "react-native";
import AppBar from "../../components/AppBar";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default SignupScreen;
