import { ref, get, child } from "firebase/database";
import { database } from "./firebase";

interface Medico {
  nome: string;
  especialidadeId: string;
}

export async function buscarMedicosPorEspecialidade(especialidadeId: string): Promise<{ label: string, value: string }[]> {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, `medicos`));
    if (snapshot.exists()) {
      const medicos: Record<string, Medico> = snapshot.val();
      return Object.keys(medicos)
        .filter(key => medicos[key].especialidadeId === especialidadeId)
        .map(key => ({
          label: medicos[key].nome,
          value: key
        }));
    } else {
      console.log("Não foi possível encontrar os médicos");
      return [];
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
