import axiosConfig from "./constants/axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function buscarInadiplencia(idAderente: number): Promise<any> {
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

    // Faz a requisição GET com o header Authorization
    const response = await axiosConfig.get(
      `/Financeiro/GetInadiplante/${idAderente}`,
      configHeaderRequisicao
    );
    console.log("Inadiplencias: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar inadiplência: ", error);
    throw error;
  }
}
