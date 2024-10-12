import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import CustomTextInput from '../common/TextInput'
import Button from '../common/Button'
import colors from '../../src/colors'
import { useNavigation } from '@react-navigation/native'

const InputListSignup = () => {

  const navigation = useNavigation(); // Hook para acceder a la navegación

  const handleSignup = () => {
    navigation.navigate('Signin'); // Navega a la pantalla "Signin"
  }

  return (
    <View style={styles.container}>
      <CustomTextInput placeholder="Usuario" style={styles.input}/>
      <CustomTextInput placeholder="Contraseña" style={styles.input}/>
      <CustomTextInput placeholder="Email" style={styles.input}/>
      <Button title="Registrarse" textColor={colors.white} backgroundColor={colors.darkBlue} style={styles.button} onPress={handleSignup}/>
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

export default InputListSignup