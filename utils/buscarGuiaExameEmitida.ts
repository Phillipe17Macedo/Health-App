import axiosConfig from "./constants/axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Função para buscar guias de exame emitidas
export async function buscarGuiaDeExameEmitida(idAderente: number): Promise<any> {
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
      `/GuiaExame/GetGuiaExamesEmitidas/${idAderente}`,
      configHeaderRequisicao
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar guias de exame emitidas:", error);
    throw error;
  }
}