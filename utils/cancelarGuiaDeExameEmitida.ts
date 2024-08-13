import axiosConfig from "./constants/axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Função para cancelar guias de exame emitidas
export async function cancelarGuiaDeExameEmitida(idGuia: number): Promise<any> {
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

    const response = await axiosConfig.put(
      `/GuiaExame/CancelaGuiaExameEmitida/${idGuia}`,
      configHeaderRequisicao
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao cancelar guia de exame emitida:", error);
    throw error;
  }
}