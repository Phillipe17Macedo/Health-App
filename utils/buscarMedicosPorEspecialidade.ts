import axiosConfig from "./constants/axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Função para buscar médicos por Especialidade
export async function buscarMedicosEspecialidade(
  especialidadeId: string,
  unidadeAtendimentoId: string
): Promise<any> {
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
      `/Medico/GetMedicosEspecialidade/${especialidadeId}/${unidadeAtendimentoId}`,
      configHeaderRequisicao
    );
    
    const { data } = response.data;
    console.log("Medicos do Banco: ", data);

    if (!Array.isArray(data)) {
      console.error("Resposta inesperada da API: medicos não é um array", data);
      throw new Error("Resposta inesperada da API: medicos não é um array");
    }
    return { success: true, data };
  } catch (error) {
    console.log("Erro ao buscar Médicos no Banco: ", error);
    throw error;
  }
}
