import { ref, get, child } from "firebase/database";
import { database } from "./firebase";

export async function buscarEspecialidades(): Promise<{ id: string; nome: string }[]> {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, `especialidades`));
    if (snapshot.exists()) {
      const especialidades = snapshot.val();
      return Object.keys(especialidades).map((key) => ({
        id: key,
        nome: especialidades[key].nome,
      }));
    } else {
      console.log("Nenhuma especialidade encontrada");
      return [];
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
