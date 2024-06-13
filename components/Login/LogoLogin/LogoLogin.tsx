import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './styles';

export function LogoLogin() {
  return (
    <View style={styles.container}>
        <Image source={require("../../../assets/images/Login/medical-image.png")} style={[styles.imagemLogin]}/>
        <Text style={[styles.tituloLogo]}>ASERPA SAÚDE</Text>
    </View>
  );
}