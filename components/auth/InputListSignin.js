// components/auth/InputListSignin.js
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import CustomTextInput from '../common/TextInput'
import Button from '../common/Button'
import colors from '../../src/colors'
import UserService from '../../src/api/UserServices'
import { useState } from 'react'

const InputListSignin = ({ username, setUsername, password, setPassword, handleLogin, navigation }) => {
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    navigation.navigate('Signup'); 
  };

  const validateLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Por favor ingrese usuario y contraseña');
      return;
    }

    try {
      setLoading(true);
      const response = await UserService.login({
        username: username,
        password: password
      });

      // Si el login es exitoso, pasamos true al handleLogin
      if (response && response.token) {
        handleLogin(true);
      }
    } catch (error) {
      Alert.alert(
        'Error de inicio de sesión',
        error.message || 'Usuario o contraseña incorrectos'
      );
      handleLogin(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <CustomTextInput 
        placeholder="Ingrese su usuario" 
        style={styles.input}  
        value={username} 
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <CustomTextInput 
        placeholder="Ingrese su contraseña" 
        style={styles.input}  
        value={password} 
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button 
        title={loading ? "Ingresando..." : "Ingresar"}
        textColor={colors.white} 
        backgroundColor={colors.darkBlue} 
        style={styles.button} 
        onPress={validateLogin}
        disabled={loading}
      />
      <View style={styles.registro}>
        <Text style={styles.texto}>¿No tienes cuenta?. Regístrate</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.link}> aquí</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

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