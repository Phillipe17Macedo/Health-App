import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/StylesServicosPage/StylesExamePage/styles';
import { HeaderExame } from '@/components/Exame/Header';
import { SearchBar } from '@/components/Exame/SearchBar/SearchBar';
import DropDownExame from '@/components/Exame/DropDownExame/DropDownExame';

export default function Exame() {
  return (
    <View style={styles.container}>
      <HeaderExame/>
      <SearchBar/>
      <DropDownExame/>
    </View>
  );
}