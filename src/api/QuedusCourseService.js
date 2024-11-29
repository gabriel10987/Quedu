import apiClient from './ApiClient';

const QuedusCourseService = {
  async getQuedusByCourseId(userId, courseId) {
    try {
        // const response = await apiClient.get('/user/course/quedus', {
        //   params: { userId, courseId },  
        // });
        const response = await apiClient.get(`/user/${userId}/course/${courseId}/quedus`);
        console.log("Respuesta de la API: ", response.data);
        
        return response.data; 
      } catch (error) {
        console.error('Error al obtener los Quedus:', error);
        throw error;  
      }
    }
};

export default QuedusCourseService;
