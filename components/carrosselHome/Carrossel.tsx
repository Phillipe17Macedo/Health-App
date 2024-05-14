import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Carrossel() {
  return (
    <>
      <View style={[styles.containerCarrossel]}>
        <View style={[styles.carrossel]}>
          <Text>TESTE</Text>
        </View>
        <View style={[styles.carrossel]}>
          <Text>TESTE</Text>
        </View>
      </View>

      <View style={[styles.containerCarrossel, {marginBottom: 95}]}>
        <View style={[styles.carrossel]}>
          <Text>TESTE</Text>
        </View>
        <View style={[styles.carrossel]}>
          <Text>TESTE</Text>
        </View>
      </View>
    </>
  );
}