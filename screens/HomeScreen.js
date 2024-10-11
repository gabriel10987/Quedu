import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";
import { Section } from "../components/cards/section/Section";
import UploadButton from "../components/UploadButton";
import colors from "../src/colors";

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
      // { name: "Quedu 1", date: "02/04" },
      // { name: "Quedu 2", date: "03/04" },
      // { name: "Quedu 3", date: "04/05" },
      // { name: "Quedu 4", date: "05/07" },
    ];
    setQuedus(quedusData);

    // Simulate fetching Curses
    const cursosData = [
      // { name: "Course 1", date: "02/04"  },
      // { name: "Course 2", date: "02/04"  },
      // { name: "Course 3", date: "02/04"  },
      // { name: "Course 4", date: "02/04"  },
    ];
    setCursos(cursosData);
  }, []);

  const handleCoursePress = (course) => {
    navigation.navigate("CourseDetail", { course });
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
