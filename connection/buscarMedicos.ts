import { ref, get, child } from "firebase/database";
import { database } from "./firebase";

export async function buscarMedicosPorEspecialidade(especialidadeId: string): Promise<{ id: string; nome: string }[]> {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, `medicos`));
    if (snapshot.exists()) {
      const medicos = snapshot.val();
      return Object.keys(medicos)
        .filter((key) => medicos[key].especialidadeId === especialidadeId)
        .map((key) => ({
          id: key,
          nome: medicos[key].nome,
        }));
    } else {
      console.log("Nenhum médico encontrado");
      return [];
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
