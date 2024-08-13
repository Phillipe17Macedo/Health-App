import axiosConfig from "./constants/axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Função para cancelar guias emitidas
export async function cancelarGuiaConsultaEmitida(idGuia: number): Promise<any> {
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
      `/GuiaConsulta/CancelaGuiaConsultaEmitida/${idGuia}`,
      configHeaderRequisicao
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao cancelar guia emitida:", error);
    throw error;
  }
}