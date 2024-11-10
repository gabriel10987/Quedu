import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native';  // Importa el componente Button
import { useNavigation } from '@react-navigation/native'; // Para redireccionar después de cerrar sesión
import UserService from './src/api/UserServices'; // Asegúrate de importar UserService

import MyQuedusScreen from './screens/quedus/MyQuedusScreen';
import QuestionResolutionScreen from './screens/resolution/QuestionResolutionScreen';
import CreateCourseScreen from './screens/CreateCourseScreen';
import HomeStack from './navigation/HomeStack';
import CreateQueduScreen from './screens/quedus/CreateQueduScreen';
import CommunitiesScreen from './screens/communities/CommunitiesScreen';
import AuthStack from './navigation/AuthStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation();  // Usamos navegación para redirigir después del logout

  const handleLogout = async () => {
    try {
      await UserService.logout(); // Llama al servicio de logout
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Mis Quedus" component={MyQuedusScreen} />
      <Drawer.Screen name="Questions" component={QuestionResolutionScreen} />
      <Drawer.Screen name="Crear Curso" component={CreateCourseScreen} />
      <Drawer.Screen name="Crear Quedu" component={CreateQueduScreen} />
      <Drawer.Screen name="Comunidades" component={CommunitiesScreen} />
      <Drawer.Screen
        name="Cerrar sesión"
        component={() => null}  // Este componente solo se usa para el botón
        options={{
          drawerLabel: () => (
            <Button title="Cerrar sesión" onPress={handleLogout} />  // El botón de logout
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
