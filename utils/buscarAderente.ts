import axiosConfig from "./constants/axiosConfig";

// Função para buscar aderente e armazenar o token e a data de expiração
export async function buscarAderente(cpf: string, titular: boolean): Promise<any> {
  try {
    const response = await axiosConfig.get(`/Aderente/GetAderente/${cpf}/${titular}`);
    console.log("Metodo Buscar Aderente resposta da API:", response.data);

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar aderente:", error);
    throw new Error('Não foi possível conectar ao servidor. Por favor, tente novamente mais tarde.');
  }
}
