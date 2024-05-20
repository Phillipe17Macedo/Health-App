import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/StylesEditarPerfil/styles';
import { HeaderEditarPerfil } from '@/components/Perfil/EditarPerfil/Header';
import DadosUser from '@/components/Perfil/EditarPerfil/Areadados/DadosUser';

export default function PerfilEditar() {
  return (
    <>
        <View style={styles.container}>
          <HeaderEditarPerfil/>
          <DadosUser/>
        </View>
    </>
  );
}