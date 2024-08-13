import axiosConfig from "./constants/axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Função de Salvar Agendamento de Consulta na API
export async function agendarAtendimentoConsulta(dadosConsulta: any): Promise<any> {
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
      "/Agendamento/AgendarAtendimentoConsulta",
      dadosConsulta,
      configHeaderRequisicao,
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao salvar consulta:", error);
    throw error;
  }
}