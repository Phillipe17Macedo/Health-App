import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/StylesServicosPage/StylesConsultaPage/styles';
import { HeaderConsulta } from '@/components/Consulta/HeaderConsulta/Header';
import Especialidade from '@/components/Consulta/DropDownEspecialidade/Especialidade';
import Medico from '@/components/Consulta/DropDownMedico/Medico';


export default function Consulta() {
  const [especialidadeId, setEspecialidadeId] = useState<string | null>(null);

  return (
    <View style={styles.container}>
        <HeaderConsulta/>
        <Text>Tela Consulta</Text>
        <Especialidade EspecialidadeCarregada={setEspecialidadeId} />
        <Medico especialidadeId={especialidadeId} />
    </View>
  );
}