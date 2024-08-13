import axiosConfig from "./constants/axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Função para buscar Unidades de Atendimento
export async function buscarUnidadeAtendimento(): Promise<any> {
  try {
    // Recupera o token do AsyncStorage
    const token = await AsyncStorage.getItem("userToken");

    if (!token) {
      throw new Error("Token não encontrado no AsyncStorage.");
    }

    const configHeaderRequisicao = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axiosConfig.get(
      "/UnidadeAtendimento/GetUnidadesAtendimento",
      configHeaderRequisicao
    );

    return response.data;
  } catch (error) {
    console.log("Erro ao buscar Unidades de Atendimento: ", error);
    throw error;
  }
}
