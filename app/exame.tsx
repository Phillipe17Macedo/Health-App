import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/StylesServicosPage/StylesExamePage/styles';
import { HeaderExame } from '@/components/Exame/Header';
import DropDownExame from '@/components/Exame/DropDownExame/DropDownExame';
import DropDownLaboratorio from '@/components/Exame/DropDownLaboratorio/DropDownLaboratorio';
import { DicaAgendamento } from '@/components/Exame/ComponenteDicaAgendamento/DicaAgendamento';

export default function Exame() {
  return (
    <View style={styles.container}>
      <HeaderExame/>
      <DicaAgendamento/>
      <DropDownExame/>
      <DropDownLaboratorio/>
    </View>
  );
}