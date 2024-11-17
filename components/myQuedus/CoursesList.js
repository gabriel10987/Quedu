import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Necesario para manejar navegación
import UserService from '../../src/api/UserServices';
import QueduServices from '../../src/api/QueduServices';
import colors from '../../src/colors';

const CoursesList = () => {
    const [courses, setCourses] = useState([]); // Para almacenar los datos dinámicos
    const [loading, setLoading] = useState(true); // Para manejar el estado de carga
    const [error, setError] = useState(null); // Para manejar errores
    const navigation = useNavigation(); // Hook para usar la navegación

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const userId = await UserService.getUserId(); // Obtiene el ID del usuario actual
                const data = await QueduServices.getAllQuedusFormatted(userId); // Llama a la API
                
                // Mapea la nueva estructura de datos
                const formattedCourses = data.map(item => ({
                    id: item.queduId, // Usado para la clave única
                    name: item.formattedName, // Renombra para que coincida con el componente Course
                    courseId: item.courseId,
                    queduId: item.queduId,
                    createdAt: item.createdAt, // Incluye datos adicionales si es necesario
                }));

                setCourses(formattedCourses); // Almacena los datos formateados
            } catch (err) {
                console.error("Error fetching courses:", err);
                setError("No se pudieron cargar los datos.");
            } finally {
                setLoading(false); // Finaliza el estado de carga
            }
        };

        fetchCourses();
    }, []); // El array vacío asegura que solo se llame al montar el componente

    // Renderizar mientras se cargan los datos
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    // Renderizar si hay un error
    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    // Renderizar cada elemento de la lista
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('<VistaANavegar>', {
                //pasar paraemtros
                courseId: item.courseId,
                queduId: item.queduId,
            })}
        >
            <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={courses} // Datos para la lista
                renderItem={renderItem} // Componente para renderizar cada elemento
                keyExtractor={(item) => item.id} // Clave única para cada elemento
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        paddingVertical: 8,
        minWidth: "100%",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
    },
    itemContainer: {
        padding: 15,
        marginVertical: 7,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: colors.gray,
        minWidth: "85%",
        borderRadius: 4,
    },
    itemText: {
        fontSize: 10,
        fontFamily: "Quicksand-SemiBold",
        color: colors.darkBlueOpacity50,
    },
});

export default CoursesList;
