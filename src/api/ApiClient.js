import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

// URL base para el API
//const API_URL = 'http://10.0.2.2:3000/api'; // URL para emulador Android
//const API_URL = 'http://localhost:3000/api'; // Cambia según tu entorno
// Definir la URL base dependiendo del entorno
const API_URL = Platform.OS === 'web' ? 'https://x08n6n2m-3000.brs.devtunnels.ms/api' : 'https://x08n6n2m-3000.brs.devtunnels.ms/api';

// Configurar instancia de axios con la URL base
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el token a las peticiones autenticadas
apiClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de respuesta para manejar errores de autenticación
apiClient.interceptors.response.use(
  response => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      // Token expirado o inválido
      await AsyncStorage.removeItem('token');
      // Opcional: redirigir al usuario a la pantalla de inicio de sesión
      // Puedes usar la lógica de navegación aquí si tienes acceso
    }
    return Promise.reject(error);
  }
);

export default apiClient;
