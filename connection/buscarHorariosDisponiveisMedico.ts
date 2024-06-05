import { ref, get, child } from "firebase/database";
import { database } from "@/connection/firebase";

interface HorariosAtendimento {
  [key: string]: string[];
}

export async function fetchHorariosDisponiveis(dayOfWeek: string, medicoId: string): Promise<string[]> {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, `medicos/${medicoId}/horariosAtendimento`));
    if (snapshot.exists()) {
      const horariosAtendimento: HorariosAtendimento = snapshot.val();
      return horariosAtendimento[dayOfWeek] || [];
    } else {
      console.log("Não foi possível encontrar os horários de atendimento");
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar horários disponíveis:", error);
    throw error;
  }
}
