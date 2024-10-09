import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';
import colors from '../src/colors';
import { Ionicons } from '@expo/vector-icons';
import {SectionCard} from '../components/cards/section/SectionCard';
import { SectionHeader } from '../components/cards/section/SectionHeader';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppBar navigation={navigation} />
            <View style={styles.content}>
                <Text>¡Bienvenido a la página de inicio!</Text>
                <SectionHeader name="Cursos" color="lightBlue" icon1="add" icon2="" />

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