import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import colors from "../../src/colors";
import AppBar from "../../components/AppBar";
import { Question } from "../../components/cards/questions/Question";
import { Alternative } from "../../components/cards/questions/Alternative";
import Button from "../../components/common/Button";
import QueduServices from "../../src/api/QueduServices";
import UserService from "../../src/api/UserServices";

const QuestionResolutionScreen = ({ navigation }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [quedu, setQuedu] = useState({});
  const [questions, setQuestions] = useState([]);
  const [btnTitle, setBtnTitle] = useState("Completar");
  const [attempt, setAttempt] = useState(0);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [successPercentage, setSuccessPercentage] = useState(0);

  useEffect(() => {
    const fetchLastQuedu = async () => {
      try {
        const userId = await UserService.getUserId();
        const quedu = await QueduServices.getLastQuedu(userId);
        setQuedu(quedu);  // Actualizar el estado con el último personalQuedu
        setQuestions(quedu.questions);  // Actualizar el estado con las preguntas del quedu
        setNumberOfQuestions(quedu.questions.length);  // Actualizar el estado con el número de preguntas
      } catch (error) {
        console.error("Error al obtener el último quedu:", error);
      }
    };
  
    fetchLastQuedu();
  }, []);
  

  useEffect(() => {
    const allQuestionsAnswered = questions.every(
      (question) => selectedAnswers[question._id] !== undefined
    );
    setIsButtonDisabled(!allQuestionsAnswered);
  }, [selectedAnswers]);

  const handleSelect = (questionId, answerId, answerCorrect) => {
    answerCorrect ? setCorrectAnswers(correctAnswers + 1) : setCorrectAnswers(correctAnswers);
    if (!showResults) {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionId]: answerId,
      });
    }
  };

  const handleComplete = () => {
    if (attempt == 0) {
      setBtnTitle("Finalizar");
      setShowResults(true);
      setAttempt(1);
      setSuccessPercentage((correctAnswers / numberOfQuestions) * 100);
    } else {
      setBtnTitle("Finalizar");
      setShowResults(true);
      const queduId = quedu._id;
      const solved = true;
      

      const updateQuedu = async () => {
        try {
          const userId = await UserService.getUserId(); // Llamamos a la función asíncrona
          await QueduServices.updateQuedu(userId, queduId, solved, successPercentage, attempt);
        } catch (error) {
          console.error("Error al actualizar el quedu:", error);
        }
      };

      updateQuedu();

      navigation.navigate('HomeStack');
    }
    
    console.log("Cuestionario completado", selectedAnswers);
  };

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />

      <ScrollView contentContainerStyle={styles.content}>
        {questions.map((question, index) => (
          <View key={question._id} style={styles.questionContainer}>
            <Question number={index + 1} text={question.question} />
            {question.answers.map((answer) => (
              <View key={answer._id}>
                  <Alternative
                    text={answer.answer}
                    selected={selectedAnswers[question._id] === answer._id}
                    onSelect={() => handleSelect(question._id, answer._id, answer.correct)}
                    disabled={showResults}
                    correct={showResults && answer.correct}
                  />
                  {showResults && selectedAnswers[question._id] === answer._id && (
                    <Text style={styles.feedbackText}>
                      {question.feedback}
                    </Text>
                  )}
              </View>

            ))}
          </View>
        ))}
        <Button 
          title={btnTitle} 
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
    marginVertical: 10,
    fontSize: 14,
    color: colors.feedback,
    fontFamily: "BellotaText-Italic",
  },
});

export default QuestionResolutionScreen;