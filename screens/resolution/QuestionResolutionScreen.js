import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import colors from "../../src/colors";
import AppBar from "../../components/AppBar";
import { Question } from "../../components/cards/questions/Question";
import { Alternative } from "../../components/cards/questions/Alternative";
import { Section } from "../../components/cards/section/Section";
import { CompleteButton } from "../../components/cards/questions/CompleteButton";

const testQuestions = [
  {
    "_id": "111",
    "name": "Introducción a la programación",
    "created_at": "2024-05-01",
    "%_acierto": 75,
    "tried": 1,
    "resueltoPor": [],
    "questions": [
      {
        "_id": "1",
        "question": "¿Qué es un algoritmo?",
        "feedback_correct": "Un algoritmo es un conjunto de pasos ordenados para realizar una tarea",
        "answers": [
          {
            "_id": "2",
            "answer": "Conjunto de pasos ordenados para realizar una tarea",
            "correct": true
          },
          {
            "_id": "3",
            "answer": "Conjunto de pasos desordenados para realizar una tarea",
            "correct": false
          },
          {
            "_id": "4",
            "answer": "Un tipo de lenguaje de programación",
            "correct": false
          }
        ]
      },
      // ... más preguntas ...
    ]
  },
];

const QuestionResolutionScreen = ({ navigation }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const allQuestionsAnswered = testQuestions[0].questions.every(
      (question) => selectedAnswers[question._id] !== undefined
    );
    setIsButtonDisabled(!allQuestionsAnswered);
  }, [selectedAnswers]);

  const handleSelect = (questionId, answerId) => {
    if (!showResults) {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionId]: answerId,
      });
    }
  };

  const handleComplete = () => {
    setShowResults(true);
    console.log("Cuestionario completado", selectedAnswers);
  };

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />

      <ScrollView contentContainerStyle={styles.content}>
        {testQuestions[0].questions.map((question) => (
          <View key={question._id} style={styles.questionContainer}>
            <Question number={question._id} text={question.question} />
            {question.answers.map((answer) => (
              <Alternative
                key={answer._id}
                text={answer.answer}
                selected={selectedAnswers[question._id] === answer._id}
                onSelect={() => handleSelect(question._id, answer._id)}
                disabled={showResults}
                correct={showResults && answer.correct}
              />
            ))}
          </View>
        ))}
      </ScrollView>
      <CompleteButton onPress={handleComplete} disabled={isButtonDisabled || showResults} />
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