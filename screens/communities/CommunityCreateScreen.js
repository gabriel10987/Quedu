import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert, Image } from 'react-native';
import AppBar from "../../components/AppBar";
import Button from '../../components/common/Button';
import CustomTextInput from '../../components/common/TextInput';
import colors from '../../src/colors';
import CreateCommunityService from '../../src/api/CreateComunityService'; 
import * as ImagePicker from 'expo-image-picker'; 

const CommunityCreateScreen = ({ navigation }) => {
  const [communityName, setCommunityName] = useState('');
  const [numberOfQuedus, setNumberOfQuedus] = useState('');
  const [image, setImage] = useState(null); 

  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Se necesitan permisos para acceder a tus fotos.');
    }
  };

  const handleCreateCommunity = async () => {
    if (!communityName || !numberOfQuedus || !image) {
      Alert.alert('Error', 'Por favor ingrese todos los campos.');
      return;
    }
  
    try {
      const newCommunity = await CreateCommunityService.createCommunity(
        communityName,
        numberOfQuedus,
        image
      );
  
      Alert.alert(
        'Comunidad Creada',
        `La comunidad ${newCommunity.community.name} fue creada exitosamente`
      );
  
      setCommunityName('');
      setNumberOfQuedus('');
      setImage(null);
      
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al crear la comunidad.');
    }
  };
  

  const handleSelectImage = async () => {
    await requestPermissions();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, 
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); 
    } else {
      console.log('El usuario canceló la selección de la imagen');
    }
  };

  const handleNumberOfQuedusChange = (text) => {
    if (/^\d*$/.test(text)) {
      setNumberOfQuedus(text); 
    }
  };

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.title}>Crear Comunidad</Text>

        <CustomTextInput
          value={communityName}
          onChangeText={setCommunityName}
          placeholder="Nombre de la Comunidad"
          borderColor={colors.lightBlue}
          style={{ width: '60%' }}
        />

        <CustomTextInput
          value={numberOfQuedus}
          onChangeText={handleNumberOfQuedusChange}
          placeholder="Número de Quedus"
          keyboardType="numeric"
          borderColor={colors.lightBlue}
          style={{ width: '60%' }}
        />

        <Button
          title="Seleccionar Imagen"
          backgroundColor={colors.darkBlue}
          textColor={colors.white}
          onPress={handleSelectImage}
        />

        {image ? (
          <Text style={styles.imageText}>Imagen seleccionada</Text>
        ) : (
          <Text style={styles.imageText}>No se ha seleccionado ninguna imagen</Text>
        )}

        {image && (
          <Image source={{ uri: image }} style={{ width: 100, height: 100, marginTop: 10 }} />
        )}

        <Button
          title="Crear Comunidad"
          backgroundColor={colors.darkBlue}
          textColor={colors.white}
          onPress={handleCreateCommunity}
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
  imageText: {
    color: colors.darkBlue,
    marginTop: 10,
  },
});

export default CommunityCreateScreen;
