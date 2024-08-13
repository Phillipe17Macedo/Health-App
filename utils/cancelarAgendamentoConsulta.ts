import axiosConfig from "./constants/axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Função de cancelar agendamento de consulta na API
export async function cancelarAgendamentoConsulta(idAgendamento: number): Promise<any> {
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

    const response = await axiosConfig.delete(
      `/Agendamento/CancelarAgendamento/${idAgendamento}`,
      configHeaderRequisicao
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao cancelar consulta:", error);
    throw new Error(
      "Não foi possível conectar ao servidor. Por favor, tente novamente mais tarde."
    );
  }
}