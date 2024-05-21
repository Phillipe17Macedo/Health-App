import React from 'react';
import { View } from 'react-native';

import { styles } from '../../styles/StylesServicosPage/styles';
import { ComponentesConsulta } from '@/components/Servicos/ComponentesConsulta/ComponenteConsulta';
import { ComponentesExame } from '@/components/Servicos/ComponentesExame/ComponenteExame';

export default function Servicos() {
  return (
    <View style={[styles.container]}>
        <ComponentesConsulta/>
        <ComponentesExame/>
    </View>
  );
}