import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, Pressable  } from 'react-native';
import AppBar from '../../components/AppBar';
import Button from '../../components/common/Button';
import CustomTextInput from '../../components/common/TextInput';
import CustomDropdown from '../../components/common/CustomDropdown';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../src/colors';

const optionsCourse = [
    { label: 'Matemática', value: '1' },
    { label: 'Lenguaje', value: '2' },
    { label: 'Programación', value: '3' },
];

const optionsNumberQuestion = [
    { label: '5', value: '1' },
    { label: '10', value: '2' },
];

const CreateQueduScreen = ({navigation}) => {

    const [queduName, setQueduName] = useState('');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedQuestions, setSelectedQuestions] = useState(null);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

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

    const handleFinalizarPress = () => {
        if (isButtonEnabled) {
            console.log('Creando quedu...')
        }
    }

    return (
        <View style={styles.container}>
            <AppBar navigation={navigation} />
            <View style={styles.content}>
                <Text style={styles.title}>01.pdf</Text>

                <View style={styles.dropdownWithIcon}>
                    <CustomDropdown
                        options={optionsCourse}
                        selectedValue={selectedCourse}
                        onValueChange={handleValueChangeCourse}
                        placeholder="Curso"
                        borderColor={colors.lightBlue}
                        style={{ width: '100%' }}
                    />
                    <Pressable style={styles.addButton}>
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