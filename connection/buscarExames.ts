import { ref, get, child } from "firebase/database";
import { database } from "@/connection/firebase";

interface Exames {
  nome: string;
}

export async function buscarExames(): Promise<
  { label: string; value: string }[]
> {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, "exames"));
    if (snapshot.exists()) {
      const exames: Record<string, Exames> = snapshot.val();
      return Object.keys(exames).map((key) => ({
        label: exames[key].nome,
        value: key,
      }));
    } else {
      console.log("Não foi possível encontrar os Exames");
      return [];
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
