import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './styles';

export function LogoLogin() {
  return (
    <View style={styles.container}>
        <Image source={require("@/assets/images/logo-aserpa/LOGO-NOME-VERTICAL.png")} style={[styles.imagemLogin]}/>
    </View>
  );
}