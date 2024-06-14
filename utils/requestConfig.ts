import axiosConfig from './constants/axiosConfig';

// Função para buscar aderentes (usuários)
export async function buscarAderente(cpf: string, titular: boolean): Promise<any> {
  try {
    const response = await axiosConfig.get(`/Aderente/GetAderente/${cpf}/${titular}`);
    console.log("Resposta da API:", response.data);
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
    console.log("Dependentes:", response.data);
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
    const medicos = response.data.data;

    // Adicionando dias e horários fictícios
    const diasFicticios = ["segunda", "quarta", "sexta"];
    const horariosFicticios = ["09:00", "09;30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00"];

    const medicosComHorarios = medicos.map((medico: any) => ({
      ...medico,
      diasAtendimento: diasFicticios.reduce((acc: any, dia: string) => {
        acc[dia] = horariosFicticios;
        return acc;
      }, {}),
    }));

    return { success: true, data: medicosComHorarios };
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
