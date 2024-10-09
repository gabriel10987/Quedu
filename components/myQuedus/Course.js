import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../src/colors';
import Quedu from './Quedu'; 

const Course = ({ course }) => {
    const handlePress = (itemTitle) => {
        Alert.alert(`Has presionado el botón de ${itemTitle}`);
    };

    return (


        <View style={styles.courseContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.courseName}>{course.name}</Text>
                <TouchableOpacity style={styles.buttonMore}>
                    <Text style={styles.buttonMoreText}>Ver más</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={course.personalQuedus}
                renderItem={({ item }) => (
                    <Quedu quedu={item} />
                )} // Pasar quedu como prop
                keyExtractor={quedu => quedu._id}
                showsVerticalScrollIndicator={false}
            />
        </View>

        
    );
};

const styles = StyleSheet.create({
    courseContainer: {
        marginBottom: 20,
        marginVertical: 5,
        flex: 1,
        flexDirection: 'column',
        width: '100%',
    },
    courseName: {
        fontFamily: "Quicksand-SemiBold",
        fontSize: 14,
        color: Colors.lightBlue,
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonMore: {
        backgroundColor: Colors.lightBlue,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 1,
    },
    buttonMoreText: {
        color: Colors.white,
        fontFamily: "Quicksand-Light",
        fontSize: 12,
    }

});

export default Course;