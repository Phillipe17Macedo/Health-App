import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '@/styles/StylesAjudaPage/styles';
import { HeaderAjuda } from '@/components/Ajuda/HeaderAjuda/Header';


export default function Ajuda() {
  return (
    <View style={styles.container}>
        <HeaderAjuda />
        <Text>Ajuda</Text>
    </View>
  );
}