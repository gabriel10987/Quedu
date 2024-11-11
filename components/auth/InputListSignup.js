import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { useState } from 'react'
import CustomTextInput from '../common/TextInput'
import Button from '../common/Button'
import colors from '../../src/colors'
import { useNavigation } from '@react-navigation/native'
import UserService from '../../src/api/UserServices'

const InputListSignup = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignup = async () => {
    try {
      setLoading(true);
      // Validaciones básicas
      if (!formData.username || !formData.password || !formData.email) {
        Alert.alert('Error', 'Todos los campos son obligatorios');
        return;
      }

      // Llamar al servicio de registro
      const response = await UserService.register(formData);
      
      Alert.alert(
        'Éxito',
        'Usuario registrado correctamente',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Signin')
          }
        ]
      );
    } catch (error) {
      Alert.alert(
        'Error',
        error.message || 'Error al registrar usuario'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder="Usuario"
        style={styles.input}
        value={formData.username}
        onChangeText={(text) => handleInputChange('username', text)}
      />
      <CustomTextInput
        placeholder="Contraseña"
        style={styles.input}
        value={formData.password}
        onChangeText={(text) => handleInputChange('password', text)}
        secureTextEntry
      />
      <CustomTextInput
        placeholder="Email"
        style={styles.input}
        value={formData.email}
        onChangeText={(text) => handleInputChange('email', text)}
        keyboardType="email-address"
      />
      <Button
        title={loading ? "Registrando..." : "Registrarse"}
        textColor={colors.white}
        backgroundColor={colors.darkBlue}
        style={styles.button}
        onPress={handleSignup}
        disabled={loading}
      />
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