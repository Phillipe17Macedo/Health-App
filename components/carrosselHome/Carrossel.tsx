import React from 'react';
import { View, Text } from 'react-native';

import { Anuncios } from '../anunciosHome/Anuncios';
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

      <Anuncios/>

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