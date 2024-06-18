import React from 'react';
import { View } from 'react-native';

import { styles } from '../styles/GuiaConsulta/styles';
import { HeaderGuiaConsulta } from '@/components/GuiaConsulta/HeaderGuiaConsulta/Header';
import { DicaGuiaConsulta } from '../components/GuiaConsulta/ComponenteDicaSolicitacao/DicaGuiaConsulta';

export default function GuiaConsulta() {
  return (
    <View style={styles.container}>
        <HeaderGuiaConsulta/>
        <DicaGuiaConsulta/>
    </View>
  );
}