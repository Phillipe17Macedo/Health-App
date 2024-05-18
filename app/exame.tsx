import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/StylesServicosPage/StylesExamePage/styles';
import { HeaderExame } from '@/components/Exame/Header';


export default function Exame() {
  return (
    <View style={styles.container}>
      <HeaderExame/>
      <Text>Tela Exame</Text>
    </View>
  );
}