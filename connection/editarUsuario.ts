import { getDatabase, ref, update } from "firebase/database";
import { database } from "./firebase";

interface Usuario {
  id: string;
  telefone: string;
  endereco: string;
  email: string;
}

export const editarUsuario = async (
  usuarioId: string,
  novosDados: Usuario
) => {
  try {
    await update(ref(database, `users/${usuarioId}`), novosDados);
    console.log("Dados do usuário atualizados com sucesso.");
  } catch (error) {
    console.error("Erro ao atualizar dados do usuário:", error);
    throw error;
  }
};
