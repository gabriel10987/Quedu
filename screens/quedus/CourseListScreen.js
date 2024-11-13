import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppBar from "../../components/AppBar";
import { Section } from "../../components/cards/section/Section";
import colors from "../../src/colors";
import CreateCourseService from "../../src/api/CreateCourseService";

const CourseListScreen = ({ navigation }) => {
  const [courses, setCourses] = useState([]);

  const fetchAllCourses = async () => {
    try {
      const userId = "6731625943a8b1e4299b732d"; 
      const userCourses = await CreateCourseService.getCoursesByUserId(userId);
  
      // Ordenar los cursos por el campo `_id` en orden descendente
      const sortedCourses = userCourses.sort((a, b) => (b._id > a._id ? 1 : -1));
      setCourses(sortedCourses); 
    } catch (error) {
      console.error("Error al obtener todos los cursos:", error);
    }
  };
  

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const handleCoursePress = (course) => {
    navigation.navigate("CourseDetail", { course });
  };

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <Section
          name="Todos los Cursos"
          color={colors.lightBlue}
          icon1="bookmark"
          icon2="arrow-up"
          onItemPress={handleCoursePress} 
          data={courses}
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default CourseListScreen;
