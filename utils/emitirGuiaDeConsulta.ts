import axiosConfig from "./constants/axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Função para emitir guia de consulta
export async function EmitirGuiaDeConsulta(dadosGuia: any): Promise<any> {
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

    const response = await axiosConfig.post(
      "/GuiaConsulta/EmitirGuiaConsulta",
      configHeaderRequisicao,
      dadosGuia
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao emitir guia de consulta:", error);
    throw error;
  }
}
