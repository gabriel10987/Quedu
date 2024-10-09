import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';
import colors from '../src/colors';
import { Section } from '../components/cards/section/Section';

const HomeScreen = ({ navigation }) => {
    const [quedus, setQuedus] = useState([]);
    const [courses, setCursos] = useState([]);

    useEffect(() => {
        // Simulate fetching Quedus
        const quedusData = [
            { name: 'Quedu 1', date: '02/23/32' },
            { name: 'Quedu 2', date: '03/15/32' },
            { name: 'Quedu 3', date: '04/10/32' },
        ];
        setQuedus(quedusData);

        // Simulate fetching Curses
        const cursosData = [
            { name: 'Curse 1' },
            { name: 'Curse 2' },
            { name: 'Curse 3' },
        ];
        setCursos(cursosData);
    }, []);

    return (
        <View style={styles.container}>
            <AppBar navigation={navigation} />
            <View style={styles.content}>
                <Text>¡Bienvenido a la página de inicio!</Text>
                <Section name="Quedus" color="darkblue" icon1="add" icon2="arrow-forward" data={quedus} />
                <Section name="Curses" color="darkblue" icon1="add" icon2="arrow-forward" data={courses}  />
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
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default HomeScreen;