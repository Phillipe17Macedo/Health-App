import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import { styles } from "../../styles/StylesServicosPage/styles";
import { ComponentesConsulta } from "@/components/Servicos/ComponentesConsulta/ComponenteConsulta";
import { ComponentesExame } from "@/components/Servicos/ComponentesExame/ComponenteExame";
import AgendadoConsulta from "@/components/Servicos/Agendados/Consulta/agendadoConsulta";
import AgendadoExame from "@/components/Servicos/Agendados/Exames/agendadoExame";

export default function Servicos() {
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <View>
          <ComponentesConsulta />
          <ComponentesExame />
          <AgendadoConsulta/>
          <AgendadoExame/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
