import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import AppBar from '../../components/AppBar';
import Colors from '../../src/colors';
import CoursesList from '../../components/myQuedus/CoursesList';

const MyQuedusScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppBar navigation={navigation} />
            <View style={styles.content}>
                <TouchableOpacity style={styles.buttonCourse} onPress={() => alert('Botón personalizado presionado')}>
                  <Text style={styles.buttonCourseText}>Nuevo Curso</Text>
                </TouchableOpacity>
                <Text style={styles.infoText}>
                    Para configurar un curso como actual, mantén presionado sobre el mismo y selecciona la opción 
                    <Text style={styles.markedText}> Actual</Text>.
                </Text>
                <SafeAreaView style={styles.coursesListContainer}>
                    <CoursesList/>
                </SafeAreaView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        width: '80%',
        alignSelf: 'center',
    },
    buttonCourse: {
        backgroundColor: Colors.darkBlue,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
        alignSelf: 'flex-end',
    },
    buttonCourseText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Quicksand-Light',
    },
    infoText: {
        marginTop: 25,
        marginBottom: 25,
        fontSize: 12,
    },
    markedText: {
        color: Colors.darkBlue,
        fontFamily: 'Quicksand-Bold',
        fontSize: 12,
    },
    coursesListContainer: {
        width: '100%',
        flex: 1,
    }
  });
  
  export default MyQuedusScreen;