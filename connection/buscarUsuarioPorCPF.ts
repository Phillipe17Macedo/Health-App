import { ref, get, child } from "firebase/database";
import { database } from "@/connection/firebase";

export async function buscarUsuarioPorCPF(cpf: string): Promise<any> {
  const dbRef = ref(database);
  try {
    const usuarioSnapshot = await get(child(dbRef, `users/${cpf}`));
    if (usuarioSnapshot.exists()) {
      return usuarioSnapshot.val();
    } else {
      throw new Error("Usuário não encontrado.");
    }
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    throw error;
  }
}