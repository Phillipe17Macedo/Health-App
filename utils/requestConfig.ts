import api from './constants/axiosConfig';

// Função para buscar aderentes (usuários)
export async function buscarAderente(cpf: string): Promise<any> {
  try {
    const response = await api.get(`/Aderente/GetAderente/${cpf}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar aderente:", error);
    throw error;
  }
}

// Função para buscar dependentes
export async function buscarDependentes(cpf: string): Promise<any> {
  try {
    const response = await api.get(`/Dependentes/GetDependentes/${cpf}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dependentes:", error);
    throw error;
  }
}

// Função para buscar médicos por especialidade
export async function buscarMedicosEspecialidade(especialidadeId: string): Promise<any> {
  try {
    const response = await api.get(`/Medico/GetMedicosEspecialidade/${especialidadeId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar médicos por especialidade:", error);
    throw error;
  }
}

// Função para buscar especialidades
export async function buscarEspecialidades(): Promise<any> {
  try {
    const response = await api.get('/Especialidades/GetEspecialidades');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar especialidades:", error);
    throw error;
  }
}
