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

// Função para buscar especialidades
export async function buscarEspecialidades(): Promise<any> {
  try {
    const response = await axiosConfig.get('/Especialidades/GetEspecialidades');
    return response.data;

    console.log("Especialidades do Banco: ", response);

  } catch (error) {
    console.error("Erro ao buscar especialidades:", error);
    throw error;
  }
}

// Função para buscar médicos por especialidade
export async function buscarMedicosEspecialidade(especialidadeId: string, unidadeAtendimentoId: string): Promise<any> {
  try {
    const response = await axiosConfig.get(`/Medico/GetMedicosEspecialidade/${especialidadeId}/${unidadeAtendimentoId}`);
    const { data } = response.data;

    console.log("Resposta da API - Médicos:", data);

    if (!Array.isArray(data)) {
      console.error("Resposta inesperada da API: medicos não é um array", data);
      throw new Error("Resposta inesperada da API: medicos não é um array");
    }

    // Adicionando dias e horários fictícios
    const diasFicticios = ["segunda", "quarta", "sexta"];
    const horariosFicticios = ["09:00:00", "09:30:00", "10:00:00", "10:30:00", "11:00:00", "11:30:00", "14:00:00", "14:30:00", "15:00:00", "15:30:00", "16:00:00"];

    const medicosComHorarios = data.map((medico: any) => ({
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

/* 
// Função para buscar médicos por Especialidade
export async function buscarMedicosEspecialidade(especialidadeId: string, unidadeAtendimentoId: string): Promise<any> {
  try {
    const response = await axiosConfig.get(`/Medico/GetMedicosEspecialide/${especialidadeId}/${unidadeAtendimentoId}`);
    const { medicosBanco } = response.data;
    console.log("Medicos do Banco: ", medicosBanco);

    if (!Array.isArray(medicosBanco)) {
      console.error("Resposta inesperada da API: medicos não é um array", medicosBanco);
      throw new Error("Resposta inesperada da API: medicos não é um array");
    }

  } catch (error) {
    console.log("Erro ao buscar Médicos no Banco: ", error);
    throw error;
  }
}
*/

// Função para buscar Horario Disponivel Pela Data
export async function buscarHorariosDisponiveisMedico(medicoId: number, numeroMes: number, numeroAno: number): Promise<any> {
  try {
    const response = await axiosConfig.get(`/Medico/GetHorariosDisponiveisMedico/${medicoId}/${numeroMes}/${numeroAno}`);
    const hoariosDisponiveis = response.data;

    console.log("Resposta da API - Horários Disponiveis: ", hoariosDisponiveis);

  } catch (error) {
    console.log("Erro ao buscar Horários Disponiveis: ", error);
    throw error;
  }
}

// Função para buscar Unidades de Atendimento
export async function buscarUnidadeAtendimento(): Promise<any> {
  try {
    const response = await axiosConfig.get('/UnidadeAtendimento/GetUnidadesAtendimento');
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar Unidades de Atendimento: ", error);
    throw error;
  }
}
