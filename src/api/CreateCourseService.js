import apiClient from './ApiClient';

class CreateCourseService {
  // Función para crear un curso
  static async createCourse(courseName) {
    try {
      const response = await apiClient.post('/user/course/new', { courseName });
      return response.data; // Retorna la respuesta completa, que incluye el mensaje y los cursos
    } catch (error) {
      console.error("Error al crear el curso:", error);
      throw error; // Lanza el error para que pueda ser manejado en el frontend
    }
  }
}

export default CreateCourseService;
