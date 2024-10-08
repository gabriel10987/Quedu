import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';
import {Section} from '../components/cards/section/Section';
import colors from '../src/colors';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppBar navigation={navigation} />
            <View style={styles.content}>
                <Section name="Curso 1" color={colors.lightBlue} icon1="bookmark" icon2="arrow-up"/>
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  });
  
  export default HomeScreen;