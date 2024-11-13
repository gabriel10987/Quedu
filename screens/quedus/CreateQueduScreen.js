import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, Pressable  } from 'react-native';
import AppBar from '../../components/AppBar';
import Button from '../../components/common/Button';
import CustomTextInput from '../../components/common/TextInput';
import CustomDropdown from '../../components/common/CustomDropdown';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../src/colors';
import QueduServices from '../../src/api/QueduServices';
import UserService from '../../src/api/UserServices';
import CreateCourseService from '../../src/api/CreateCourseService';
/*
// puede servir para usar ids de cursos o algo asi
const optionsCourse = [
    { label: 'Matemática', value: '1' },
    { label: 'Lenguaje', value: '2' },
    { label: 'Programación', value: '3' },
];

const optionsNumberQuestion = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
];
*/

// datos estaticos pasando el valor(Value)
/*
const optionsCourse = [
    { label: 'Matemática', value: 'Matemática' },
    { label: 'Lenguaje', value: 'Lenguaje' },
    { label: 'Programación', value: 'Programación' },
];
*/
const optionsNumberQuestion = [
    { label: '1 pregunta', value: '1' },
    { label: '2 preguntas', value: '2' },
];
const CreateQueduScreen = ({navigation, route}) => {

    const [queduName, setQueduName] = useState('');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedQuestions, setSelectedQuestions] = useState(null);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [optionsCourse, setOptionsCourse] = useState([]);

    const selectedDoc = route?.params?.selectedDoc;
    
    // useEffect para obtener los cursos del usuario
    useEffect(() => {
        const fetchUserCourses = async () => {
            try {
                const userIdGetted = await UserService.getUserId();
                console.log("Id de usuario: ", userIdGetted);
                const gettingUserCourses = await CreateCourseService.getCoursesByUserId(userIdGetted);

                const coursesOptions = gettingUserCourses.map(course => ({
                    label: course.name,
                    value: course.name
                }));

                setOptionsCourse(coursesOptions);
                console.log("Opciones de curso formateadas:", coursesOptions);
            } catch (error) {
                console.error("Error al obtener cursos del usuario:", error);
            }
        };

        fetchUserCourses();
    }, []);

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
            const userIdGetted = await UserService.getUserId();

            // Obtener el label correspondiente al value seleccionado para course y questions
            //const selectedCourseLabel = optionsCourse.find(option => option.value === selectedCourse)?.label;
            //const selectedQuestionsLabel = optionsNumberQuestion.find(option => option.value === selectedQuestions)?.label;

            const formData = new FormData();
            formData.append('userId', userIdGetted);
            formData.append('queduName', queduName);
            formData.append('courseName', selectedCourse);
            formData.append('questions', selectedQuestions);
            formData.append('document', {
                uri: selectedDoc.assets[0].uri,
                type: selectedDoc.assets[0].mimeType,
                name: selectedDoc.assets[0].name
            })
            // debug:
            console.log("ID del usuario: ", userIdGetted);
            console.log("Nombre del quedu: ", userIdGetted);
            console.log("Curso seleccionado: ", selectedCourse);
            console.log("cantidad de preguntas seleccionada: ", selectedQuestions);
            console.log('Creando Quedu...')

            const queduGenerated = await QueduServices.generateQuedu(formData);

            const insertQuedu = await QueduServices.createQueduInUser(queduGenerated);

            console.log("quedu generado correctamente: ", queduGenerated);
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