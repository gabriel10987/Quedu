import apiClient from './ApiClient'; // Asegúrate de tener tu cliente de API configurado

const CreateCommunityService = {
  async createCommunity(name, numberOfQuedus, image) {
    try {
      const response = await apiClient.post('/community/new', {
        name,
        numberOfQuedus,
        image,
      });
      return response.data;
    } catch (error) {
      console.error('Error al crear la comunidad:', error);
      throw error;
    }
  },
};

export default CreateCommunityService;
