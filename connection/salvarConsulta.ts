import { ref, set, push } from "firebase/database";
import { database } from "./firebase";

interface Consulta {
  usuario: string;
  especialidade: string;
  medico: string;
  data: string;
  horario: string;
}

export async function salvarConsulta(consulta: Consulta): Promise<void> {
  if (!consulta.especialidade) {
    throw new Error("Especialidade não definida.");
  }
  const consultasRef = ref(database, 'consultas');
  const novaConsultaRef = push(consultasRef);
  await set(novaConsultaRef, consulta);
}
