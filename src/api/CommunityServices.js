import apiClient from './ApiClient';

class CommunityServices {

    static async getAllCommunities() {
        try {
            const response = await apiClient.get('/communities');
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    static async createCommunity(name, numberOfQuedus, image) {
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
    }

    static async getCommunityById(communityId) {
        try {
            // Cambié la URL para incluir el ID en la ruta
            // const response = await apiClient.get(`/community/${communityId}`); // El ID ahora se pasa en la URL
            const response = await apiClient.post('/community', {communityId}); // El ID ahora se pasa en la URL
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Define el método handleError
    static handleError(error) {
        console.error("Error en la solicitud:", error);
        return new Error("Ocurrió un error al procesar la solicitud.");
    }
}

export default CommunityServices;