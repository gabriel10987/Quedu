import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import AppBar from '../components/AppBar';
import Button from '../components/common/Button';
import CustomTextInput from '../components/common/TextInput';
import colors from '../src/colors';
import CreateCourseService from '../src/api/CreateCourseService';

const CreateCourseScreen = ({ navigation, route }) => {
  const { onCourseCreated } = route.params || {};  // Obtener la función onCourseCreated
  const [courseName, setCourseName] = useState('');

  const handleCreateCourse = async () => {
    try {
      const response = await CreateCourseService.createCourse(courseName);
      Alert.alert('Curso creado', 'El curso se creó exitosamente');
      setCourseName('');

      // Llama a la función onCourseCreated si está definida
      if (onCourseCreated) onCourseCreated();

      navigation.goBack();  // Regresa a la pantalla anterior
    } catch (error) {
      console.error('Error al crear el curso:', error);
      Alert.alert('Error', 'No se pudo crear el curso');
    }
  };

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.title}>Crear curso</Text>
        <CustomTextInput
          value={courseName}
          onChangeText={setCourseName}
          placeholder="Nombre del curso"
          borderColor={colors.lightBlue}
          style={{ width: '60%' }}
        />
        <Button
          title="Crear curso"
          backgroundColor={colors.darkBlue}
          textColor={colors.white}
          onPress={handleCreateCourse}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    height: '35%',
    gap: 20,
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Quicksand-Regular',
    color: colors.darkBlue,
  },
});

export default CreateCourseScreen;
