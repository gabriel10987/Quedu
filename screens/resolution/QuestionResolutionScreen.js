import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import colors from "../../src/colors";
import AppBar from "../../components/AppBar";
import { Question } from "../../components/cards/questions/Question";
import { Alternative } from "../../components/cards/questions/Alternative";
import { Section } from "../../components/cards/section/Section";
import { CompleteButton } from "../../components/cards/questions/CompleteButton";

const testQuestions = [
  {
    question: "¿Cuál es el propósito principal de un Trie en estructuras de datos?",
    alternatives: [
      "Almacenar valores numéricos de forma eficiente.",
      "Facilitar la búsqueda y almacenamiento de cadenas de texto.",
      "Optimizar la ordenación de listas desordenadas.",
      "Realizar operaciones matemáticas de forma rápida.",
    ],
  },
  {
    question: "¿Cuál es el propósito principal de un Trie en estructuras de datos?",
    alternatives: [
      "Almacenar valores numéricos de forma eficiente.",
      "Facilitar la búsqueda y almacenamiento de cadenas de texto.",
      "Optimizar la ordenación de listas desordenadas.",
      "Realizar operaciones matemáticas de forma rápida.",
    ],
  },
];

const QuestionResolutionScreen = ({ navigation }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleSelect = (questionIndex, alternativeIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: alternativeIndex,
    });
  };
  const handleComplete = () => {
    // Aquí puedes agregar la lógica para finalizar el cuestionario, guardar respuestas, etc.
    console.log("Cuestionario completado", selectedAnswers);
    // Ejemplo: navegar a otra pantalla
    // navigation.navigate('Resultados');
  };

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <Section name="Resolución de preguntas" color={colors.lightBlue} />
      <ScrollView contentContainerStyle={styles.content}>
        {testQuestions.map((question, questionIndex) => (
          <View key={questionIndex} style={styles.questionContainer}>
            <Question number={questionIndex + 1} text={question.question} />
            {question.alternatives.map((alternative, alternativeIndex) => (
              <Alternative
                key={alternativeIndex}
                text={alternative}
                selected={selectedAnswers[questionIndex] === alternativeIndex}
                onSelect={() => handleSelect(questionIndex, alternativeIndex)}
              />
            ))}
          </View>
        ))}
      </ScrollView>
      <CompleteButton onPress={handleComplete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 20,
  },
  questionContainer: {
    marginBottom: 30,
  },
});

export default QuestionResolutionScreen;