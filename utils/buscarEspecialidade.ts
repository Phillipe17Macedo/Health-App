import axiosConfig from "./constants/axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Função para buscar especialidades
export async function buscarEspecialidades(): Promise<any> {
  try {
    const token = await AsyncStorage.getItem("userToken");

    if (!token) {
      throw new Error("token não encontrado no AsyncStorage.");
    }

    const configHeaderRequisicao = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axiosConfig.get(
      "/Especialidades/GetEspecialidades",
      configHeaderRequisicao
    );
    console.log("Especialidades:", response.data);

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar especialidades:", error);
    throw error;
  }
}
