import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import CustomTextInput from '../common/TextInput'
import Button from '../common/Button'
import colors from '../../src/colors'

const InputListSignin =({ username, setUsername, password, setPassword, handleLogin }) => {

  const handlePress = () => {
    navigation.navigate('Signup'); // Navega a la pantalla "NewScreen"
  };

  const validateLogin = () => {
    // Realizamos la validación de usuario y contraseña
    if (username === 'usuario' && password === '1234') {
      handleLogin(true); // Credenciales válidas, pasamos true
    } else {
      handleLogin(false); // Credenciales incorrectas
    }
  };


  return (
    <View style={styles.container}>
      <CustomTextInput placeholder="Ingrese su usuario" style={styles.input}  value={username} onChangeText={setUsername}/>
      <CustomTextInput placeholder="Ingrese su contraseña" style={styles.input}  value={password} onChangeText={setPassword}/>
      <Button title="Ingresar" textColor={colors.white} backgroundColor={colors.darkBlue} style={styles.button} onPress={validateLogin}/>
      <View style={styles.registro}>
        <Text style={styles.texto}>¿No tienes cuenta?. Regístrate</Text>
        <TouchableOpacity onPress={handlePress}>
                <Text style={styles.link}> aquí</Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 28,
    width: '100%',
  },
  button: {
    width: '50%',
  },
  input: {
    width: '100%',
  },
  link: {
    color: colors.darkBlue,
    fontFamily: 'Quicksand-SemiBold',
  },
  registro: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  texto: {
    fontFamily: 'Quicksand-Regular',
  }
})

export default InputListSignin