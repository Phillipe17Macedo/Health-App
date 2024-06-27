import axiosConfig from "./constants/axiosConfig";

// Função para buscar aderentes (usuários)
export async function buscarAderente(cpf: string, titular: boolean): Promise<any> {
  try {
    const response = await axiosConfig.get(
      `/Aderente/GetAderente/${cpf}/${titular}`
    );
    console.log("Resposta da API:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar aderente:", error);
    throw new Error('Não foi possível conectar ao servidor. Por favor, tente novamente mais tarde.');
  }
}

// Função para buscar dependentes
export async function buscarDependentes(idAderente: number): Promise<any> {
  try {
    const response = await axiosConfig.get(
      `/Dependentes/GetDependentes/${idAderente}`
    );
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
    const response = await axiosConfig.get("/Especialidades/GetEspecialidades");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar especialidades:", error);
    throw error;
  }
}

/*
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
*/

// Função para buscar médicos por Especialidade
export async function buscarMedicosEspecialidade(especialidadeId: string, unidadeAtendimentoId: string): Promise<any> {
  try {
    const response = await axiosConfig.get(
      `/Medico/GetMedicosEspecialidade/${especialidadeId}/${unidadeAtendimentoId}`
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

// Função para buscar dias e horários disponíveis do médico
export async function buscarDiasAtendimentoMedico(idMedico: string, mes: number, ano: number): Promise<any> {
  try {
    console.log(`Buscando dias de atendimento para o médico ${idMedico} no mês ${mes}/${ano}`);
    const response = await axiosConfig.get(`/Medico/GetHorariosDisponiveisMedico/${idMedico}/${mes}/${ano}`);
    const { data } = response.data;

    console.log("Resposta da API - Dias de Atendimento: ", data);

    if (data && data.diasAtendimento && Array.isArray(data.diasAtendimento)) {
      return { success: true, data: data.diasAtendimento };
    } else {
      console.error("Resposta inesperada da API: diasAtendimento não é um array", data);
      throw new Error("Resposta inesperada da API: diasAtendimento não é um array");
    }
  } catch (error) {
    console.error("Erro ao buscar dias de atendimento do médico:", error);
    throw error;
  }
}

// Função para buscar os horários de atendimento
export async function buscarHorariosDiaEspecifico(idMedico: string, mes: number, ano: number): Promise<any> {
  try {
    const response = await axiosConfig.get(`/Medico/GetHorariosDisponiveisMedico/${idMedico}/${mes}/${ano}`);
    const { data: horarios } = response.data;

    console.log("Resposta da API - Horários do Médico para a data:", horarios);

    if (horarios && Array.isArray(horarios)) {
      return { success: true, data: horarios };
    } else {
      console.error("Resposta inesperada da API: horários não é um array", horarios);
      throw new Error("Resposta inesperada da API: horários não é um array");
    }
  } catch (error) {
    console.error("Erro ao buscar horários do médico para a data:", error);
    throw error;
  }
}

// Função para buscar Unidades de Atendimento
export async function buscarUnidadeAtendimento(): Promise<any> {
  try {
    const response = await axiosConfig.get(
      "/UnidadeAtendimento/GetUnidadesAtendimento"
    );
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar Unidades de Atendimento: ", error);
    throw error;
  }
}

// Função de Salvar Agendamento de Consulta na API
export async function agendarAtendimentoConsulta(dadosConsulta: any): Promise<any> {
  try {
    const response = await axiosConfig.post("/Agendamento/AgendarAtendimentoConsulta", dadosConsulta);
    return response.data;
  } catch (error) {
    console.error("Erro ao salvar consulta:", error);
    throw error;
  }
}

// Função de buscar consultas agendadas na API
export async function buscarAgendamentosConsulta(idAderente: string, idEmpresa: string): Promise <any> {
  try {
    console.log(`Buscando agendamentos para idAderente: ${idAderente}, idEmpresa: ${idEmpresa}`);
    const response = await axiosConfig.get(`/Agendamento/GetAgendamentosConsulta/${idAderente}/${idEmpresa}`);
    console.log("Resposta da API buscarAgendamentosConsulta:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar agendamentos:", error);
    throw new Error('Não foi possível conectar ao servidor. Por favor, tente novamente mais tarde.');
  }
}