import React, { useState } from "react";
import { View } from "react-native";

import { styles } from "../styles/GuiaConsulta/styles";
import { HeaderGuiaConsulta } from "@/components/GuiaConsulta/HeaderGuiaConsulta/Header";
import { DicaGuiaConsulta } from "../components/GuiaConsulta/ComponenteDicaSolicitacao/DicaGuiaConsulta";
import Especialidade from "@/components/GuiaConsulta/DropDownEspecialidade/Especialidade";

export default function GuiaConsulta() {
  const [especialidadeId, setEspecialidadeId] = useState<string | null>(null);
  const [especialidadeNome, setEspecialidadeNome] = useState<string | null>(
    null
  );
  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState<
    string | null
  >(null);
  const [consulta, setConsulta] = useState({
    usuario: "",
    dependente: "",
    unidadeAtendimento: "",
    medico: "",
    especialidade: "",
    data: "",
    horario: "",
    telefoneContato: "(34) 99931-7302",
  });
  return (
    <View style={styles.container}>
      <HeaderGuiaConsulta />
      <DicaGuiaConsulta />
      <Especialidade
        EspecialidadeCarregada={(id, nome) => {
          setEspecialidadeId(id);
          setEspecialidadeNome(nome);
          setConsulta((prev) => ({
            ...prev,
            especialidade: nome || "",
          }));
        }}
        especialidadeSelecionada={especialidadeSelecionada}
      />
    </View>
  );
}
