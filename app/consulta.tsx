import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { styles } from "../styles/StylesServicosPage/StylesConsultaPage/styles";
import { HeaderConsulta } from "@/components/Consulta/HeaderConsulta/Header";
import { SeachBar } from "@/components/Servicos/SeachBar/SearchBar";
import Especialidade from "@/components/Consulta/DropDownEspecialidade/Especialidade";
import Medico from "@/components/Consulta/DropDownMedico/Medico";

export default function Consulta() {
  const [especialidadeId, setEspecialidadeId] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <HeaderConsulta />
        <SeachBar />
        <Especialidade EspecialidadeCarregada={setEspecialidadeId} />
        <Medico especialidadeId={especialidadeId} />
    </View>
  );
}
