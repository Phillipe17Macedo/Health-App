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
    console.log(`RequestConfig: Buscando dias de atendimento para o médico ${idMedico} no mês ${mes}/${ano}`);
    const response = await axiosConfig.get(`/Medico/GetHorariosDisponiveisMedico/${idMedico}/${mes}/${ano}`);
    const { data } = response.data;

    console.log("RequestConfig: Resposta da API - Dias de Atendimento: ", data);

    if (data && data.diasAtendimento && Array.isArray(data.diasAtendimento)) {
      return { success: true, data: data.diasAtendimento };
    } else {
      console.error("RequestConfig: Resposta inesperada da API: diasAtendimento não é um array", data);
      return { success: false, data: [] };
    }
  } catch (error) {
    console.error("RequestConfig: Erro ao buscar dias de atendimento do médico:", error);
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

// Função de cancelar agendamento de consulta na API
export async function cancelarAgendamentoConsulta(idAgendamento: number): Promise<any> {
  try {
    const response = await axiosConfig.delete(`/Agendamento/CancelarAgendamento/${idAgendamento}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao cancelar consulta:", error);
    throw new Error('Não foi possível conectar ao servidor. Por favor, tente novamente mais tarde.');
  }
}

// Função para buscar especialidades para guia de consulta
export async function buscarEspecialidadesGuiaDeConsulta(): Promise<any> {
  try {
    const response = await axiosConfig.get("/Especialidades/GetEspecialidadesGuiaConsulta");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar especialidades para guia de consulta:", error);
    throw error;
  }
}

// Função para emitir guia de consulta
export async function EmitirGuiaDeConsulta(dadosGuia: any): Promise<any> {
  try {
    const response = await axiosConfig.post("/GuiaConsulta/EmitirGuiaConsulta", dadosGuia);
    return response.data;
  } catch (error) {
    console.error("Erro ao emitir guia de consulta:", error);
    throw error;
  }
}

// Função para buscar guias de consulta emitidas
export async function buscarGuiasConsultasEmitidas(idAderente: number): Promise<any> {
  try {
    const response = await axiosConfig.get(`/GuiaConsulta/GetGuiaConsultaEmitidas/${idAderente}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar guias de consulta emitidas:", error);
    throw error;
  }
}

// Função para buscar médicos por especialidade para guia de consulta
export async function buscarMedicosPorEspecialidadeGuiaDeConsulta(idEspecialidade: number): Promise<any> {
  try {
    const response = await axiosConfig.get(`/Medico/GetMedicosEspecialidadeGuiaConsulta/${idEspecialidade}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar médicos por especialidade para guia de consulta:", error);
    throw error;
  }
}

// Função para cancelar guias emitidas
export async function cancelarGuiaEmitida(idGuia: number): Promise<any> {
  try {
    const response = await axiosConfig.put(`/GuiaConsulta/CancelaGuiaConsultaEmitida/${idGuia}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao cancelar guia emitida:", error);
    throw error;
  }
}

// Função para emitir guia de exame
export async function emitirGuiaDeExame(dadosGuia: any): Promise<any> {
  try {
    const response = await axiosConfig.post("/GuiaExame/EmitirGuiaExame", dadosGuia);
    return response.data;
  } catch (error) {
    console.error("Erro ao emitir guia de exame:", error);
    throw error;
  }
}

// Função para buscar guias de exame emitidas
export async function buscarGuiaDeExame(idAderente: number): Promise<any> {
  try {
    const response = await axiosConfig.get(`/GuiaExame/GetGuiaExamesEmitidas/${idAderente}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar guias de exame emitidas:", error);
    throw error;
  }
}

// Função para cancelar guias de exame emitidas
export async function cancelarGuiaDeExameEmitida(idGuia: number): Promise<any> {
  try {
    const response = await axiosConfig.put(`/GuiaExame/CancelaGuiaExameEmitida/${idGuia}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao cancelar guia de exame emitida:", error);
    throw error;
  }
}

// Função para buscar laboratórios
export async function buscarLaboratorios(): Promise<any> {
  try {
    const response = await axiosConfig.get("/Laboratorio/GetLaboratorios");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar laboratórios:", error);
    throw error;
  }
}