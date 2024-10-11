import { View, StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../src/colors";
import Logo from "../../components/auth/Logo";
import InputList from "../../components/auth/InputList";

const SigninScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/bg.png")}
        style={styles.background}
      >
        <LinearGradient
          colors={["transparent", "rgba(255,255,255,0.8)", "rgba(255,255,255,1)"]}
          locations={[0.05, 0.15, 0.25]} // Se ajusta el degradado para un cambio más gradual
          style={styles.gradient}
        >
          <View style={styles.containerSingin}>
            <Logo/>
            <InputList/>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  background: {
    flex: 1,
    height: "50%" // Asegura que el fondo se ajuste correctamente
  },
  gradient: {
    flex: 1,
    marginTop: 'auto', // Hace que el gradiente se aplique de manera completa desde la parte superior hasta el final de la imagen
  },
  containerSingin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
    marginHorizontal: 64,
  },
});

export default SigninScreen;
