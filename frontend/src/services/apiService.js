import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Asegúrate de que la URL sea la correcta

export const postAlarma = async (mensaje, maquina) => {
  try {
    const response = await axios.post(`${API_URL}/alarma`, { mensaje, maquina });
    return response.data;
  } catch (error) {
    console.error('Error al enviar la alarma:', error);
    throw error;
  }
};
