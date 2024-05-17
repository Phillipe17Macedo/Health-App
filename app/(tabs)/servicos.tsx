import React from 'react';
import { View } from 'react-native';

import { styles } from '../../styles/StylesServicosPage/styles';
import { SeachBar } from '@/components/Servicos/SeachBar/SearchBar';
import { ComponentesConsulta } from '@/components/Servicos/ComponentesConsulta/ComponenteConsulta';
import { ComponentesExame } from '@/components/Servicos/ComponentesExame/ComponenteExame';

export default function Servicos() {
  return (
    <View style={[styles.container]}>
        <SeachBar/>
        <ComponentesConsulta/>
        <ComponentesExame/>
    </View>
  );
}