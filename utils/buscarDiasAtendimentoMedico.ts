import axiosConfig from "./constants/axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Função para buscar dias e horários disponíveis do médico
export async function buscarDiasAtendimentoMedico(idMedico: string, mes: number, ano: number): Promise<any> {
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
      `/Medico/GetHorariosDisponiveisMedico/${idMedico}/${mes}/${ano}`,
      configHeaderRequisicao
    );
    
    const { data } = response.data;
    console.log(
        `RequestConfig: Buscando dias de atendimento para o médico ${idMedico} no mês ${mes}/${ano}`
    );
    console.log("RequestConfig: Resposta da API - Dias de Atendimento: ", data);

    if (data && data.diasAtendimento && Array.isArray(data.diasAtendimento)) {
      return { success: true, data: data.diasAtendimento };
    } else {
      console.error(
        "RequestConfig: Resposta inesperada da API: diasAtendimento não é um array",
        data
      );
      return { success: false, data: [] };
    }
  } catch (error) {
    console.error(
      "RequestConfig: Erro ao buscar dias de atendimento do médico:",
      error
    );
    throw error;
  }
}