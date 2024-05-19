import { ref, get, child } from "firebase/database";
import { database } from "./firebase";

interface User {
  dataNascimento: string;
  nome: string;
  status: string;
}

export async function buscarUsuario(userId: string): Promise<User | null> {
    const dbRef = ref(database);
    try {
      const snapshot = await get(child(dbRef, `users/${userId}`));
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("Não foi possivel encontrar os Dados");
        return null;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
