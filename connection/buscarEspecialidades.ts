import { ref, get, child } from "firebase/database";
import { database } from "./firebase";

interface Especialidade {
  nome: string;
}

export async function buscarEspecialidades(): Promise<{ label: string, value: string }[]> {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, `especialidades`));
    if (snapshot.exists()) {
      const especialidades: Record<string, Especialidade> = snapshot.val();
      return Object.keys(especialidades).map(key => ({
        label: especialidades[key].nome,
        value: key
      }));
    } else {
      console.log("Não foi possível encontrar as especialidades");
      return [];
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
