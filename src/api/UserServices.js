import apiClient from './ApiClient'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      return {
        status: error.response.status,
        message: error.response.data.message || 'Error en la petición',
      };
    } else if (error.request) {
      return {
        status: 503,
        message: 'No se pudo conectar con el servidor',
      };
    } else {
      return {
        status: 500,
        message: 'Error al procesar la petición',
      };
    }
  }

  // Función para cerrar sesión
  static async logout() {
    try {
      await AsyncStorage.removeItem('token'); // Elimina el token del AsyncStorage
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

}

export default UserService;