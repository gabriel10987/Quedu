import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppBar from '../../components/AppBar';
import colors from '../../src/colors';
import CoursesList from '../../components/myQuedus/CoursesList';

const MyQuedusScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppBar navigation={navigation} />
            <View style={styles.content}>
                <Text style={styles.tittle}>
                    Mis Quedus
                </Text>
                <CoursesList/>
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
        width: '90%',
        alignSelf: 'center',
    },
    tittle: {
        fontSize: 20,
        fontFamily: "Quicksand-SemiBold",
        color: colors.darkBlue,
        marginBottom: 4
    }

  });
  
  export default MyQuedusScreen;