import React, { useEffect, useState, useCallback } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";
import { Section } from "../components/cards/section/Section";
import UploadButton from "../components/UploadButton";
import colors from "../src/colors";
import CreateCourseService from "../src/api/CreateCourseService";
import * as DocumentPicker from "expo-document-picker";
import { useFocusEffect } from "@react-navigation/native";
import UserService from "../src/api/UserServices";

const HomeScreen = ({ navigation }) => {
  const handleUpload = async () => {
    try {
      const doc = await DocumentPicker.getDocumentAsync({
        type: [
          "application/pdf", // Archivos PDF
          "application/vnd.ms-powerpoint", // Archivos PPT
          "application/vnd.openxmlformats-officedocument.presentationml.presentation", // Archivos PPTX
          "application/msword", // Archivos DOC
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // Archivos DOCX
        ],
      });

      console.log(doc);

      if (!doc.canceled) {
        // Cambiamos la verificación aquí
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
  

  const fetchCoursesAndQuedus = async () => {
    try {
      const userIdGetted = await UserService.getUserId();
      const data = await UserService.getCoursesAndQuedus(userIdGetted);
      console.log("********** mis nuevos datos *******************");
      console.log(data);
      console.log("***********************************************");

      // Obtener los 4 cursos más recientes
      const sortedCourses = data.sort((a, b) => {
        const lastA = a.personalQuedus.length
          ? new Date(a.personalQuedus[a.personalQuedus.length - 1].createdAt)
          : 0;
        const lastB = b.personalQuedus.length
          ? new Date(b.personalQuedus[b.personalQuedus.length - 1].createdAt)
          : 0;
        return lastB - lastA; // Orden descendente por la fecha más reciente
      });

      const recentCourses = sortedCourses.slice(0, 4);
      setCursos(recentCourses);

      // Obtener los 4 quedus más recientes de todos los cursos
      const allQuedus = data
        .flatMap(course => course.personalQuedus) // Combina todos los quedus
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Orden descendente

      const recentQuedus = allQuedus.slice(0, 4);
      setQuedus(recentQuedus);

    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  }

  /*
  const fetchCourses = async () => {
    try {

      const userIdGetted = await UserService.getUserId();

      //debug
      console.log("Sacando userID", userIdGetted);
      console.log("tipo de userID: ", typeof(userIdGetted));

      const userId = userIdGetted; // Aquí debes poner el ID del usuario autenticado
      const userCourses = await CreateCourseService.getCoursesByUserId(userId);
      console.log("Cursos del usuario: ", userCourses);
      const sortedCourses = userCourses.slice(-4).reverse(); 
      setCursos(sortedCourses);
    } catch (error) {
      console.error("Error al obtener los cursos:", error);
    }
  };
  */
  useFocusEffect(
    useCallback(() => {
      //fetchCourses(); // Llamar a fetchCourses cada vez que la pantalla recibe foco
      fetchCoursesAndQuedus();
    }, [])
  );
  /*
  useEffect(() => {
    const quedusData = [];
    setQuedus(quedusData);
  }, []);
  */
  const handleCoursePress = (course) => {
    navigation.navigate("CourseDetail", { course });
  };

  const toQuedusScreen = () => {
    navigation.navigate("MyQuedusScreen");
  };

  const handleCreateCourse = () => {
    navigation.navigate("CreateCourseScreen");
  };

  // Nueva función para manejar la navegación a CourseListScreen
  const handleCourseListPress = () => {
    navigation.navigate("CourseList");
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
          onIcon2Press={handleCourseListPress}
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
  },
});

export default HomeScreen;
