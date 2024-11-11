import apiClient from './ApiClient';

class QueduServices {

    static async getLastQuedu(userId) {
        try {
            const response = await apiClient.post('/user/lastQuedu', { userId });
            return response.data;
        } catch (error) {
            throw this.handleError(error);  // Llamada al método handleError
        }
    }

    // Define el método handleError
    static handleError(error) {
        console.error("Error en la solicitud:", error);
        return new Error("Ocurrió un error al procesar la solicitud.");
    }
}


export default QueduServices;
