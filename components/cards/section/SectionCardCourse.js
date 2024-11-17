import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, Alert } from "react-native";
import colors from "../../../src/colors";
import { useNavigation } from '@react-navigation/native';
import UserService from "../../../src/api/UserServices";
import CreateCourseService from "../../../src/api/CreateCourseService";

export const SectionCardCourse = ({name, date, courseId, onPress, onCourseDeleted }) => {

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleEditCourse = () => {
    toggleModal(); 
    navigation.navigate("EditCourseScreen", {
      course: { _id: courseId, name },
    }); 
  };

  const handleDeleteCourse = async () => {
    try {
      const userId = await UserService.getUserId();
  
      const response = await CreateCourseService.deleteCourse(userId, courseId);
      if (response?.message) {
        Alert.alert("Éxito", response.message);
        setModalVisible(false);

        if (onCourseDeleted) {
          onCourseDeleted(); // Llamar al callback para actualizar los cursos
        }
      } else {
        Alert.alert("Error", "No se pudo eliminar el curso.");
      }
    } catch (error) {
      console.error("Error al eliminar el curso:", error);
      const errorMessage = error.response?.data?.message || "Hubo un problema al eliminar el curso.";
      Alert.alert("Error", errorMessage);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{date}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal} style={styles.iconButton}>
          <Text style={styles.icon}>⋮</Text>
        </TouchableOpacity>
      </View>

      {/* Modal para Editar y Eliminar */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalOption} onPress={handleEditCourse}>
              <Text style={styles.modalText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption} onPress={handleDeleteCourse}>
              <Text style={styles.modalText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: colors.gray,
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 10,
    fontFamily: "Quicksand-SemiBold",
    color: colors.darkBlueOpacity50,
  },
  iconButton: {
    paddingHorizontal: 5,
  },
  icon: {
    fontSize: 16,
    color: colors.darkBlueOpacity50,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    width: "100%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    color: colors.darkBlueOpacity50,
  },
});
