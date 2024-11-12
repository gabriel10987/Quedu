import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import AppBar from '../components/AppBar';
import Button from '../components/common/Button';
import CustomTextInput from '../components/common/TextInput';
import colors from '../src/colors';
import CreateCourseService from '../src/api/CreateCourseService';

const CreateCourseScreen = ({ navigation }) => {
  const [courseName, setCourseName] = useState('');

  const handleCreateCourse = async () => {
    try {
      const response = await CreateCourseService.createCourse(courseName);
      Alert.alert('Curso creado', 'El curso se creó exitosamente');
      setCourseName(''); 

      // Obtener la pantalla anterior y realizar la redirección adecuada
      const previousScreen = navigation.getState().routes[navigation.getState().index - 1].name;

      if (previousScreen === 'HomeStack') {
        navigation.popToTop();  
      } else if (previousScreen === 'CreateQueduScreen') {
        navigation.pop();
      }
    } catch (error) {
      console.error('Error al crear el curso:', error);

      // Mensaje de error desde el backend
      if (error.response && error.response.data && error.response.data.mensaje) {
        Alert.alert('Error', error.response.data.mensaje);
      } else {
        Alert.alert('Error', 'No se pudo crear el curso');
      }
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
