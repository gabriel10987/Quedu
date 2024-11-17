import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import AppBar from '../../components/AppBar';
import Button from '../../components/common/Button';
import CustomTextInput from '../../components/common/TextInput';
import colors from '../../src/colors';
import UserService from "../../src/api/UserServices";
import CreateCourseService from '../../src/api/CreateCourseService';

const EditCourseScreen = ({ navigation, route }) => {
  
  const { course } = route.params;
  console.log("Course received:", course);

  const [courseName, setCourseName] = useState(course?.name || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleEditCourse = async () => {
    if (!courseName.trim()) {
      Alert.alert('Error', 'El nombre del curso no puede estar vacío.');
      return;
    }

    try {
      setIsLoading(true);
      const userId = await UserService.getUserId();
      const courseId = course._id;

      const response = await CreateCourseService.updateCourse(userId, courseId, courseName);

      if (response?.message) {
        Alert.alert('Éxito', response.message);
        navigation.goBack();
      } else {
        Alert.alert('Error', 'Hubo un error inesperado al actualizar el curso.');
      }
    } catch (error) {
      console.error('Error al actualizar el curso:', error);
      const errorMessage = error.response?.data?.message || 'Hubo un problema al actualizar el curso. Intenta de nuevo.';
      Alert.alert('Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.title}>Editar curso</Text>
        <CustomTextInput
          value={courseName}
          onChangeText={setCourseName}
          placeholder="Nombre del curso"
          borderColor={colors.lightBlue}
          style={{ width: '60%' }}
        />
        <Button
          title={isLoading ? 'Cargando...' : 'Editar curso'}
          backgroundColor={colors.darkBlue}
          textColor={colors.white}
          onPress={handleEditCourse}
          disabled={isLoading}
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

export default EditCourseScreen;
