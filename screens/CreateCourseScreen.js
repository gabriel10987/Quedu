import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppBar from '../components/AppBar';
import Button from '../components/common/Button';
import CustomTextInput from '../components/common/TextInput';
import colors from '../src/colors';

const CreateCourseScreen = ({navigation}) => {

    const [courseName, setCourseName] = useState('');

    return (
        <View style={styles.container}>
            <AppBar navigation={navigation} />
            <View style={styles.content}>
                <Text style={styles.title}>Crear curso</Text>
                <CustomTextInput
                    value={courseName}
                    onChangeText={setCourseName}
                    placeholder="Nombre del curso"
                    borderColor={colors.lightBlue}
                />

                <Button 
                    title="Crear curso" 
                    backgroundColor={colors.darkBlue} 
                    textColor={colors.white} 
                    onPress={() => console.log('Creando curso...')}/>
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
    title: {
        
    }
  }); 
  
  export default CreateCourseScreen;