import axiosConfig from "./constants/axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Função de buscar consultas agendadas na API
export async function buscarAgendamentosConsulta(idAderente: string, idEmpresa: string): Promise <any> {
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
      `/Agendamento/GetAgendamentosConsulta/${idAderente}/${idEmpresa}`,
      configHeaderRequisicao
    );
    console.log(
      `Buscando agendamentos para idAderente: ${idAderente}, idEmpresa: ${idEmpresa}`
    );

    console.log("Resposta da API buscarAgendamentosConsulta:", response.data);
    
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar agendamentos:", error);
    throw new Error(
      "Não foi possível conectar ao servidor. Por favor, tente novamente mais tarde."
    );
  }
}