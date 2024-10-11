import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Course from './Course';
import data from '../../assets/data.json';

const userData = data[0].cursos

const CoursesList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={userData}
                renderItem={({ item }) => <Course course={item} />} // Pasa el curso como prop
                keyExtractor={course => course._id}
                showsVerticalScrollIndicator={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: '100%,'
    },
});

export default CoursesList;
