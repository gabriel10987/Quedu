import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";
import { Section } from "../components/cards/section/Section";
import UploadButton from "../components/UploadButton";

const HomeScreen = ({ navigation }) => {
    
  const handleUpload = () => {
    // Aquí puedes manejar el evento de subir un documento
    console.log("Botón de subir documento presionado");
  };

  const [quedus, setQuedus] = useState([]);
  const [courses, setCursos] = useState([]);

  useEffect(() => {
    // Simulate fetching Quedus
    const quedusData = [
      { name: "Quedu 1", date: "02/23/32" },
      { name: "Quedu 2", date: "03/15/32" },
      { name: "Quedu 3", date: "04/10/32" },
      { name: "Quedu 4", date: "05/20/32" },
      
    ];
    setQuedus(quedusData);

    // Simulate fetching Curses
    const cursosData = [
      { name: "Curse 1" },
      { name: "Curse 2" },
      { name: "Curse 3" },
      { name: "Curse 4" },
    ];
    setCursos(cursosData);
  }, []);

  const handleCoursePress = (course) => {
    navigation.navigate('CourseDetail', { course });  // Navega a CourseDetail pasando los detalles del curso
  };

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <View style={styles.content}>
        <UploadButton onPress={handleUpload} />

        <Section
          name="Mis Quedus"
          description="Aquí puedes ver tus quedus"
          color="darkblue"
          icon1="add"
          icon2="arrow-forward"
          data={quedus}
        />
        <Section
          name="Courses"
          color="darkblue"
          icon1="add"
          icon2="arrow-forward"
          data={courses}
          onItemPress={handleCoursePress}  // Pasa la función para manejar clics en los cursos
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;