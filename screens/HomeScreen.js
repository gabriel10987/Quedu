import React, { useEffect, useState, useCallback } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";
import { Section } from "../components/cards/section/Section";
import UploadButton from "../components/UploadButton";
import colors from "../src/colors";
import CreateCourseService from "../src/api/CreateCourseService";
import * as DocumentPicker from 'expo-document-picker';
import { useFocusEffect } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {

  const handleUpload = async () => {
    try {
      const doc = await DocumentPicker.getDocumentAsync({
        type: [
          "application/pdf",    // Archivos PDF
          "application/vnd.ms-powerpoint", // Archivos PPT
          "application/vnd.openxmlformats-officedocument.presentationml.presentation", // Archivos PPTX
          "application/msword", // Archivos DOC
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document" // Archivos DOCX
        ],
      });

      console.log(doc);

      if (!doc.canceled) {  // Cambiamos la verificación aquí
        console.log("Archivo cargado exitosamente, navegando...");
        navigation.navigate("CreateQueduScreen", { selectedDoc: doc });
      } else {
        console.log("Selección de archivo cancelada");
      }

    } catch (error) {
      console.log("Error al seleccionar archivo:", error);
    }
  };

  const [quedus, setQuedus] = useState([]);
  const [courses, setCursos] = useState([]);

  const fetchCourses = async () => {
    try {
      const userId = "672260105dfc9618f5ea62c3"; // Aquí debes poner el ID del usuario autenticado
      const userCourses = await CreateCourseService.getCoursesByUserId(userId);
      const sortedCourses = userCourses.slice(-4).reverse(); 
      setCursos(sortedCourses);
    } catch (error) {
      console.error("Error al obtener los cursos:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchCourses();  // Llamar a fetchCourses cada vez que la pantalla recibe foco
    }, [])
  );

  useEffect(() => {
    const quedusData = [];
    setQuedus(quedusData);
  }, []);

  const handleCoursePress = (course) => {
    navigation.navigate("CourseDetail", { course });
  };

  const toQuedusScreen = () => {
    navigation.navigate("MyQuedusScreen");
  };

  const handleCreateCourse = () => {
    navigation.navigate("CreateCourseScreen");
  };

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <UploadButton onPress={handleUpload} />

        <Section
          name="Mis Quedus"
          description="Aquí puedes ver tus quedus"
          color={colors.darkBlue}
          icon1="add"
          icon2="arrow-forward"
          data={quedus}
          section="Quedus"
          onIcon1Press={handleUpload}
          onIcon2Press={toQuedusScreen}
        />
        <View style={styles.border}></View>
        <Section
          name="Cursos"
          color={colors.darkBlue}
          icon1="add"
          icon2="arrow-forward"
          data={courses}
          onItemPress={handleCoursePress} 
          section="Cursos"
          onIcon1Press={handleCreateCourse}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 20,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: colors.darkBlue,
    marginHorizontal: 20,
    marginVertical: 10,
  }
});

export default HomeScreen;
