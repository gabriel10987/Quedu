import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";
import { Section } from "../components/cards/section/Section";
import UploadButton from "../components/UploadButton";
import colors from "../src/colors";

import * as DocumentPicker from 'expo-document-picker'

const HomeScreen = ({ navigation }) => {

  const handleUpload = async () => {
    try {
      const doc = await DocumentPicker.getDocumentAsync({
        type: [
          "application/pdf",    // Archivos PDF
          "application/vnd.ms-powerpoint", // Archivos PPT
          "application/vnd.openxmlformats-officedocument.presentationml.presentation" // Archivos PPTX
        ],
      });

      console.log(doc);

      if (!doc.canceled) {  // Cambiamos la verificación aquí
        console.log("Archivo cargado exitosamente, navegando...");
        navigation.navigate("CreateQueduScreen", { selectedDoc: doc });
      } else {
        console.log("Selección de archivo cancelada");
      }
      
    } catch(error) {
      console.log("Error al seleccionar archivo:", error);
    }
  };

  const [quedus, setQuedus] = useState([]);
  const [courses, setCursos] = useState([]);

  useEffect(() => {
    // Simulate fetching Quedus
    const quedusData = [
      // { name: "Quedu 1", date: "02/04" },
      // { name: "Quedu 2", date: "03/04" },
      // { name: "Quedu 3", date: "04/05" },
      // { name: "Quedu 4", date: "05/07" },
    ];
    setQuedus(quedusData);

    // Simulate fetching Curses
    const cursosData = [
      { name: "Course 1", date: "02/04"  },
      { name: "Course 2", date: "02/04"  },
      { name: "Course 3", date: "02/04"  },
      { name: "Course 4", date: "02/04"  },
    ];
    setCursos(cursosData);
  }, []);

  const handleCoursePress = (course) => {
    navigation.navigate("CourseDetail", { course });
  };

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation}/>
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
        />
        <View style={styles.border}></View>
        <Section
          name="Courses"
          color={colors.darkBlue}
          icon1="add"
          icon2="arrow-forward"
          data={courses}
          onItemPress={handleCoursePress} // Pasa la función para manejar clics en los cursos
          section="Cursos"
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
