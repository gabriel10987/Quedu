import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../src/colors';

const UploadButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.pressable}>
      <LinearGradient 
        colors={[colors.darkBlue,colors.lightBlue]} // Aquí puedes ajustar los colores del gradiente
        start={{ x: 0, y: 0 }} // Inicio del gradiente (izquierda)
        end={{ x: 1, y: 0 }} // Fin del gradiente (derecha)
        style={styles.button}
      >
        <Text style={styles.text}>Sube un documento</Text>
        <Ionicons name="sparkles" size={20} color="white" style={styles.icon} />
      </LinearGradient>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  pressable: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 30,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Quicksand-SemiBold',
  },
  icon: {
    marginLeft: 30,
  },
});

export default UploadButton;
