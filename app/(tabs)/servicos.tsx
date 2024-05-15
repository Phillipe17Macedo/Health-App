import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { styles } from '../../styles/StylesServicosPage/styles';
import { SeachBar } from '@/components/Servicos/SeachBar/SearchBar';

export default function Servicos() {
  return (
    <View style={[styles.container]}>
        <SeachBar />
    </View>
  );
}