import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/StylesServicosPage/StylesConsultaPage/styles';
import { HeaderConsulta } from '@/components/Consulta/HeaderConsulta/Header';
import Especialidade from '@/components/Consulta/DropDownEspecialidade/Especialidade';


export default function Consulta() {
  return (
    <View style={styles.container}>
        <HeaderConsulta/>
        <Text>Tela Consulta</Text>
        <Especialidade/>
    </View>
  );
}