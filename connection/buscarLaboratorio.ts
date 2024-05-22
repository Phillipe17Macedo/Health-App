import { ref, get, child } from "firebase/database";
import { database } from "./firebase";

interface Laboratorio {
    nome: string;
    endereco: string;
    telefone: string;
    examesId: string;
}

export async function buscarLaboratorio(
  examesId: string
): Promise<{ label: string; value: string }[]> {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, `laboratorios`));
    if (snapshot.exists()) {
      const laboratorios: Record<string, Laboratorio> = snapshot.val();
      return Object.keys(laboratorios)
        .filter((key) => laboratorios[key].examesId === examesId)
        .map((key) => ({
          label: laboratorios[key].nome,
          value: key,
        }));
    } else {
      console.log("Não foi possivel encontrar os laboratorios");
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar laboratórios:", error);
    throw new Error("Erro ao buscar laboratórios.");
  }
}