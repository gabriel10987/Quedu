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

  // Función para obtener cursos por usuario
  static async getCoursesByUserId(userId) {
    try {
      const response = await apiClient.get(`/users/${userId}/courses`);
      return response.data.courses; // Retorna solo los cursos desde la respuesta
    } catch (error) {
      console.error("Error al obtener los cursos:", error);
      throw error; // Lanza el error para que pueda ser manejado en el frontend
    }
  }
}



export default CreateCourseService;
