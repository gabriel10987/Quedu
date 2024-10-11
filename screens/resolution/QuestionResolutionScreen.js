import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import colors from "../../src/colors";
import AppBar from "../../components/AppBar";
import { Question } from "../../components/cards/questions/Question";
import { Alternative } from "../../components/cards/questions/Alternative";
import Button from "../../components/common/Button";
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
              <View key={answer._id}>
                  <Alternative
                    text={answer.answer}
                    selected={selectedAnswers[question._id] === answer._id}
                    onSelect={() => handleSelect(question._id, answer._id)}
                    disabled={showResults}
                    correct={showResults && answer.correct}
                  />
                  {showResults && selectedAnswers[question._id] === answer._id && (
                    <Text style={styles.feedbackText}>
                      {question.feedback_correct}
                    </Text>
                  )}
              </View>

            ))}
          </View>
        ))}
        <Button 
          title="Completar" 
          backgroundColor={colors.darkBlue} 
          textColor={colors.white} 
          onPress={handleComplete} disabled={isButtonDisabled || showResults} 
          style={{ width: '35%' }}  
        />
      </ScrollView>
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
    alignItems: 'center'
  },
  questionContainer: {
    marginBottom: 30,
  },
  feedbackText: {
    marginTop: 10,
    fontSize: 14,
    color: colors.gray,
    fontFamily: "BellotaText-Italic",
  },
});

export default QuestionResolutionScreen;