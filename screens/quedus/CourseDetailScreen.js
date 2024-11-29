import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppBar from "../../components/AppBar";
import { Section } from "../../components/cards/section/Section";
import colors from "../../src/colors";
import QuedusCourseService from "../../src/api/QuedusCourseService";
import UserService from "../../src/api/UserServices";
import { ScrollView } from "react-native-gesture-handler";

const CourseDetailScreen = ({ route, navigation }) => {
  const { course } = route.params;
  const [quedus, setQuedus] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const onPress = () => {
    navigation.navigate("NewQuestionResolutionScreen", {
      courseId: item.courseId,
      queduId: item.queduId,
    });
  };

  useEffect(() => {
    const fetchQuedus = async () => {
      try {
        const userId = await UserService.getUserId();
        if (!userId) {
          setErrorMessage("No se pudo obtener el ID del usuario.");
          return;
        }

        const fetchedCourse = await QuedusCourseService.getQuedusByCourseId(
          userId,
          course._id
        );

        console.log("Datos de Quedus recibidos: ", fetchedCourse);

        if (
          fetchedCourse &&
          Array.isArray(fetchedCourse.quedus) &&
          fetchedCourse.quedus.length > 0
        ) {
          setQuedus(fetchedCourse.quedus);
        } else {
          setErrorMessage("Este curso no tiene quedus creados.");
        }
      } catch (error) {
        console.error("Error al cargar los quedus: ", error);
        setErrorMessage("Hubo un error al cargar los quedus.");
      }
    };

    fetchQuedus();
  }, [course]);

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <Section
          name={course.name}
          color={colors.lightBlue}
          data={quedus}
          section="Quedus"
          onItemPress={onPress}
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
  errorMessage: {
    fontSize: 16,
    color: colors.red,
    marginTop: 20,
  },
});

export default CourseDetailScreen;
