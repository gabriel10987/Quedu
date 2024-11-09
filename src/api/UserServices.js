// src/api/UserServices.js
import axios from 'axios';
// Importar AsyncStorage en cualquier otro componente donde 
// se necesites acceder al token
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configuración base de axios
//const API_URL = 'http://10.0.2.2:3000/api'; // URL para emulador Android
const API_URL = 'http://localhost:3000/api'; // URL para iOS

// Configurar instancia de axios con configuración base
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

class UserService {
  // Registro de usuario
  static async register(userData) {
    try {
      const response = await apiClient.post('/user', userData);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Inicio de sesión
  static async login(credentials) {
    try {
      const response = await apiClient.post('/user/login', credentials);
      // Guardar el token en AsyncStorage
      if (response.data.token) {
        await AsyncStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Cerrar sesión
  static async logout() {
    try {
      await AsyncStorage.removeItem('token');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

  // Obtener todos los usuarios (requiere autenticación)
  static async getUsers() {
    try {
      const response = await apiClient.get('/users');
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Obtener usuario por ID (requiere autenticación)
  static async getUserById(id) {
    try {
      const response = await apiClient.get(`/user/${id}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Manejo de errores centralizado
  static handleError(error) {
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      return {
        status: error.response.status,
        message: error.response.data.message || 'Error en la petición',
      };
    } else if (error.request) {
      // La petición fue hecha pero no se recibió respuesta
      return {
        status: 503,
        message: 'No se pudo conectar con el servidor',
      };
    } else {
      // Algo sucedió en la configuración de la petición
      return {
        status: 500,
        message: 'Error al procesar la petición',
      };
    }
  }
}

export default UserService;