import { View, StyleSheet} from 'react-native'
import CustomTextInput from '../common/TextInput'
import Button from '../common/Button'
import colors from '../../src/colors'

const InputList = () => {
  return (
    <View style={styles.container}>
      <CustomTextInput placeholder="Ingrese su usuario" style={styles.input}/>
      <CustomTextInput placeholder="Ingrese su contraseña" style={styles.input}/>
      <Button title="Ingresar" textColor={colors.white} backgroundColor={colors.darkBlue} style={styles.button}/>
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
  }
})

export default InputList