import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/StylesEditarPerfil/styles';
import { HeaderEditarPerfil } from '@/components/Perfil/EditarPerfil/Header';

export default function PerfilEditar() {
  return (
    <>
        <View style={styles.container}>
          <HeaderEditarPerfil/>
          <Text style={[{marginTop: 50, fontSize: 21, fontWeight: 'bold', alignSelf: 'center'}]}>TELA DE EDITAR PERFIL</Text>
        </View>
    </>
  );
}