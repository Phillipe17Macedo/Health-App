import { ref, get, child } from "firebase/database";
import { database } from "./firebase";

export async function buscarMedicos(especialidadeId: string): Promise<any[]> {
  const dbRef = ref(database);
  try {
    const medicosSnapshot = await get(child(dbRef, `medicos`));
    if (medicosSnapshot.exists()) {
      const medicos = medicosSnapshot.val();
      return Object.keys(medicos)
        .filter(key => medicos[key].especialidadeId === especialidadeId)
        .map(key => ({ id: key, ...medicos[key] }));
    } else {
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar médicos:", error);
    throw error;
  }
}
