import { ref, get, child } from "firebase/database";
import { database } from "@/connection/firebase";

export async function buscarAreas(query: string): Promise<any[]> {
  const dbRef = ref(database);
  try {
    const especialidadesSnapshot = await get(child(dbRef, `especialidades`));
    const medicosSnapshot = await get(child(dbRef, `medicos`));

    const results = [];

    if (especialidadesSnapshot.exists()) {
      const especialidades = especialidadesSnapshot.val();
      for (const key in especialidades) {
        if (especialidades[key].nome.toLowerCase().includes(query.toLowerCase())) {
          results.push({ ...especialidades[key], type: "especialidade", key });
        }
      }
    }

    if (medicosSnapshot.exists()) {
      const medicos = medicosSnapshot.val();
      for (const key in medicos) {
        if (medicos[key].nome.toLowerCase().includes(query.toLowerCase())) {
          results.push({ ...medicos[key], type: "medico", key });
        }
      }
    }

    return results;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
