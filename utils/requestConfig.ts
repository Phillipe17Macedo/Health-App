import axiosConfig from './constants/axiosConfig';

// Função para buscar aderentes (usuários)
export async function buscarAderente(cpf: string): Promise<any> {
  try {
    const response = await axiosConfig.get(`/Aderente/GetAderente/${cpf}/true`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar aderente:", error);
    throw error;
  }
}

// Função para buscar dependentes
export async function buscarDependentes(idAderente: number): Promise<any> {
  try {
    const response = await axiosConfig.get(`/Dependentes/GetDependentes/${idAderente}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dependentes:", error);
    throw error;
  }
}

// Função para buscar médicos por especialidade
export async function buscarMedicosEspecialidade(especialidadeId: string): Promise<any> {
  try {
    const response = await axiosConfig.get(`/Medico/GetMedicosEspecialidade/${especialidadeId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar médicos por especialidade:", error);
    throw error;
  }
}

// Função para buscar especialidades
export async function buscarEspecialidades(): Promise<any> {
  try {
    const response = await axiosConfig.get('/Especialidades/GetEspecialidades');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar especialidades:", error);
    throw error;
  }
}
