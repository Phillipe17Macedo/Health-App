import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '@/styles/StylesAjudaPage/styles';
import { HeaderAjuda } from '@/components/Ajuda/HeaderAjuda/Header';
import { ContainersAjuda } from '@/components/Ajuda/Containers/ContainersAjuda';


export default function Ajuda() {
  return (
    <View style={styles.container}>
        <HeaderAjuda />
        <ContainersAjuda />
    </View>
  );
}