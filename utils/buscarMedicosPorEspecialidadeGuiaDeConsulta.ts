import axiosConfig from "./constants/axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Função para buscar médicos por especialidade para guia de consulta
export async function buscarMedicosPorEspecialidadeGuiaDeConsulta(idEspecialidade: number): Promise<any> {
  try {
    // Recupera o token do AsyncStorage
    const token = await AsyncStorage.getItem("userToken");

    if (!token) {
      throw new Error("Token não encontrado no AsyncStorage.");
    }

    // Configura o header Authorization com o token
    const configHeaderRequisicao = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axiosConfig.get(
      `/Medico/GetMedicosEspecialidadeGuiaConsulta/${idEspecialidade}`,
      configHeaderRequisicao
    );
    return response.data;
  } catch (error) {
    console.error(
      "Erro ao buscar médicos por especialidade para guia de consulta:",
      error
    );
    throw error;
  }
}