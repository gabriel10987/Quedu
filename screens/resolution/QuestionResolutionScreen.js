import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import colors from "../../src/colors";
import AppBar from "../../components/AppBar";
import { Question } from "../../components/cards/questions/Question";
import { Alternative } from "../../components/cards/questions/Alternative";
import { Section } from "../../components/cards/section/Section";
import { CompleteButton } from "../../components/cards/questions/CompleteButton";
import data from "../../assets/data.json";

const testQuestions = data[0].cursos[0].personalQuedus;

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