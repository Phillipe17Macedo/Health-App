import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";

import { styles } from "../../styles/StylesServicosPage/styles";
import { ComponentesConsulta } from "@/components/Servicos/ComponentesConsulta/ComponenteConsulta";
import { ComponentesExame } from "@/components/Servicos/ComponentesExame/ComponenteExame";
import AgendadoConsulta from "@/components/Servicos/Agendados/Consulta/AgendadoConsulta";
import AgendadoExame from "@/components/Servicos/Agendados/Exames/AgendadoExame";
import { ConsultasFicticias, ExamesFicticios } from "@/components/Servicos/Agendados/AgedamentosFiciticios";

export default function Servicos() {
  const [consultas, setConsultas] = useState(ConsultasFicticias);
  const [exames, setExames] = useState(ExamesFicticios);

  useEffect(() => {
    console.log("Dados Consultas: ", ConsultasFicticias);
    console.log("Dados Exames: ", ExamesFicticios);
    setConsultas(ConsultasFicticias);
    setExames(ExamesFicticios);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={[styles.containerScroll]}>
        <ComponentesConsulta />
        <ComponentesExame />
        <View style={styles.secaoContainer}>
          <Text style={[styles.textoSecao]}>CONSULTAS AGENDADAS</Text>
          {consultas.length === 0 ? (
            <Text style={styles.naoAgendamentosText}>
              Nenhuma consulta agendada
            </Text>
          ) : (
            <AgendadoConsulta consultas={consultas} />
          )}
        </View>
        <View style={[styles.secaoContainer, {marginBottom: 90}]}>
          <Text style={[styles.textoSecao]}>EXAMES AGENDADOS</Text>
          {exames.length === 0 ? (
            <Text style={styles.naoAgendamentosText}>
              Nenhum exame agendado
            </Text>
          ) : (
            <AgendadoExame exames={exames} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
