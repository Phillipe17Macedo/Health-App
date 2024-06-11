import React from 'react';
import { View, Text } from 'react-native';
import { ComponentFinanceiro } from '@/components/Financeiro/ComponentFinanceiro';

import { styles } from '../../styles/StylesFinanceiroPage/styles';

export default function Financeiro() {
  return (
    <View style={styles.container}>
        <ComponentFinanceiro/>
    </View>
  );
}