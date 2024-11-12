import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, Pressable  } from 'react-native';
import AppBar from '../../components/AppBar';
import Button from '../../components/common/Button';
import CustomTextInput from '../../components/common/TextInput';
import CustomDropdown from '../../components/common/CustomDropdown';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../src/colors';
import axios from 'axios';

const optionsCourse = [
    { label: 'Matemática', value: '1' },
    { label: 'Lenguaje', value: '2' },
    { label: 'Programación', value: '3' },
];

const optionsNumberQuestion = [
    { label: '5', value: '1' },
    { label: '10', value: '2' },
];

const CreateQueduScreen = ({navigation, route}) => {

    const [queduName, setQueduName] = useState('');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedQuestions, setSelectedQuestions] = useState(null);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const selectedDoc = route?.params?.selectedDoc;

    useEffect(() => {
        console.log("Documento recibido en CreateQueduScreen: ", selectedDoc);
    }, [selectedDoc]);

    useEffect(() => {
        if (queduName && selectedCourse && selectedQuestions) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }, [queduName, selectedCourse, selectedQuestions]);

    const handleValueChangeCourse = (value) => {
        setSelectedCourse(value);
    };

    const handleValueChangeQuestions = (value) => {
        setSelectedQuestions(value);
    };
    const handleCreateCourse = () => {
        navigation.navigate("CreateCourseScreen");
    };
    
    const handleFinalizarPress = async () => {
        if (isButtonEnabled && selectedDoc) {
            const formData = new FormData();
            formData.append('queduName', queduName);
            formData.append('course', selectedCourse);
            formData.append('questions', selectedQuestions);
            formData.append('document', {
                uri: selectedDoc.assets[0].uri,
                type: selectedDoc.assets[0].mimeType,
                name: selectedDoc.assets[0].name
            })
            console.log('Creando Quedu...')

            try {
                const response = await axios.post("https://gq7cwz38-3000.brs.devtunnels.ms/api/user/course/quedu/generateQuedu", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log("Respuesta del servidor:", response.data);
            } catch (error) {
                console.log("Error al enviar datos:", error);
            }
        }
    }

    return (
        <View style={styles.container}>
            <AppBar navigation={navigation} />
            <View style={styles.content}>
                <Text style={styles.title}>
                    {selectedDoc?.assets?.[0]?.name || "Archivo no seleccionado"}
                </Text>

                <View style={styles.dropdownWithIcon}>
                    <CustomDropdown
                        options={optionsCourse}
                        selectedValue={selectedCourse}
                        onValueChange={handleValueChangeCourse}
                        placeholder="Curso"
                        borderColor={colors.lightBlue}
                        style={{ width: '100%' }}
                    />
                    <Pressable style={styles.addButton} onPress={handleCreateCourse}>
                        <Ionicons name="add" size={25} color={colors.darkBlue} />
                    </Pressable>
                </View>

                <CustomDropdown
                    options={optionsNumberQuestion}
                    selectedValue={selectedQuestions}
                    onValueChange={handleValueChangeQuestions}
                    placeholder="# de preguntas"
                    borderColor={colors.lightBlue}
                    style={{ width: '60%' }}                />

                <CustomTextInput
                    value={queduName}
                    onChangeText={setQueduName}
                    placeholder="Nombre del quedu"
                    borderColor={colors.lightBlue}
                    style={{ width: '60%' }}
                />

                <Button 
                    title="Finalizar" 
                    backgroundColor={isButtonEnabled ? colors.darkBlue : colors.gray} 
                    textColor={colors.white} 
                    onPress={handleFinalizarPress}
                    disabled={!isButtonEnabled}
                />
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
      height: '35%',
      gap: 20,
      alignItems: 'center',      
      paddingTop: 20,
    },
    title: {
        fontSize: 16,
        fontFamily: 'Quicksand-Regular',
        color: colors.darkBlue,
    },
    dropdownWithIcon: {
        width: '60%',
        position: 'relative',
    },
    addButton: {
        position: 'absolute',
        right: -35,
        top: '50%',
        transform: [{ translateY: -12.5 }],
    },
  }); 
  
  export default CreateQueduScreen;