import { ref, push } from "firebase/database";
import { database } from "./firebase";

interface Consulta {
  usuario: string;
  especialidade: string;
  medico: string;
  data: string;
  horario: string;
}

export async function salvarConsulta(consulta: Consulta) {
  const consultasRef = ref(database, 'consultas');
  try {
    await push(consultasRef, consulta);
  } catch (error) {
    console.error("Erro ao salvar consulta:", error);
    throw error;
  }
}
