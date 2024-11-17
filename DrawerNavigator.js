import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native';  // Importa el componente Button
import { useNavigation } from '@react-navigation/native'; // Para redireccionar después de cerrar sesión
import UserService from './src/api/UserServices'; // Asegúrate de importar UserService
import { AuthContext } from './context/AuthContext';

import MyQuedusScreen from './screens/quedus/MyQuedusScreen';
import QuestionResolutionScreen from './screens/resolution/QuestionResolutionScreen';
import CreateCourseScreen from './screens/CreateCourseScreen';
import HomeStack from './navigation/HomeStack';
import CreateQueduScreen from './screens/quedus/CreateQueduScreen';
import CommunitiesScreen from './screens/communities/CommunitiesScreen';
import RankingScreen from './screens/ranking/RankingScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation();  // Usamos navegación para redirigir después del logout
  const { signOut } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await UserService.logout();
      signOut(); // Llama a la función del contexto para actualizar el estado
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Mis Quedus" component={MyQuedusScreen} />
      <Drawer.Screen name="Crear Curso" component={CreateCourseScreen} />
      <Drawer.Screen name="Comunidades" component={CommunitiesScreen} />
      <Drawer.Screen name="Ranking" component={RankingScreen} />
      <Drawer.Screen
        name="Cerrar sesión"
        component={() => null}
        options={{
          drawerLabel: () => (
            <Button title="Cerrar sesión" onPress={handleLogout} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
