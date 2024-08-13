import axiosConfig from "./constants/axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Função para buscar dependentes
export async function buscarDependentes(idAderente: number): Promise<any> {
  try {
    // Recupera o token do AsyncStorage
    const token = await AsyncStorage.getItem("userToken");

    if (!token) {
      throw new Error("Token não encontrado no AsyncStorage.");
    }

    // Configura o header Authorization com o token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // Faz a requisição GET com o header Authorization
    const response = await axiosConfig.get(
      `/Dependentes/GetDependentes/${idAderente}`,
      config
    );

    console.log("Dependentes:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dependentes:", error);
    throw error;
  }
}
