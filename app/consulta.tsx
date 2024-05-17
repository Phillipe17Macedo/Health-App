import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/StylesServicosPage/StylesConsultaPage/styles';
import { HeaderConulta } from '@/components/Consulta/HeaderConsulta/Header';

export default function Consulta() {
  return (
    <View style={styles.container}>
        <HeaderConulta/>
        <Text>Tela Consulta</Text>
    </View>
  );
}