import { ref, get, child } from "firebase/database";
import { database } from "@/connection/firebase";

export async function buscarUsuarioPorCPF(cpf: string): Promise<any> {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, `usuarios/${cpf}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      throw new Error("Usuário não encontrado");
    }
  } catch (error) {
    console.error("Erro ao buscar usuário logado:", error);
    throw error;
  }
}
