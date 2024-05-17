import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './styles';

export function LogoLogin() {
  return (
    <View style={styles.container}>
        <Image source={require("../../../assets/images/Login/security-gif.gif")} style={[styles.imagemLogin]}/>
        <Text style={[styles.tituloLogo]}>Health App</Text>
    </View>
  );
}