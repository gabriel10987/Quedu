import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Course from './Course';
import data from '../../assets/data.json';

const CoursesList = () => {
    const renderQuestion = ({ item }) => (
        <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{item.question}</Text>
            <Text style={styles.feedbackText}>{item.feedback_correct}</Text>
            <Text>Respuestas:</Text>
            {item.answers.map(answer => (
                <Text key={answer._id} style={styles.answerText}>
                    - {answer.answer} {answer.correct ? "(Correcta)" : ""}
                </Text>
            ))}
        </View>
    );

    const renderQuedus = ({ item }) => (
        <View style={styles.quedusContainer}>
            <Text style={styles.quedusName}>{item.name}</Text>
            <FlatList
                data={item.questions}
                renderItem={renderQuestion}
                keyExtractor={question => question._id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );

    const renderCourse = ({ item }) => (
        <View style={styles.courseContainer}>
            <Text style={styles.courseName}>{item.name}</Text>
            <Text>{item.description}</Text>
            <FlatList
                data={item.personalQuedus}
                renderItem={renderQuedus}
                keyExtractor={quedus => quedus._id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderCourse}
                keyExtractor={course => course._id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    courseContainer: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 2,
    },
    courseName: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    quedusContainer: {
        padding: 10,
        marginTop: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
    },
    quedusName: {
        fontWeight: 'bold',
    },
    questionContainer: {
        padding: 10,
        marginTop: 5,
        backgroundColor: '#d0d0d0',
        borderRadius: 5,
    },
    questionText: {
        fontWeight: 'bold',
    },
    feedbackText: {
        fontStyle: 'italic',
        marginBottom: 5,
    },
    answerText: {
        marginLeft: 10,
    },
});
export default CoursesList;
