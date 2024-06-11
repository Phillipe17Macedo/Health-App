import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { styles } from './styles';

export function ContainersPerfil() {
  return (
    <>
        <TouchableOpacity style={[styles.container]}>
          <Link href={'/perfilEditar'}>
            <Text style={[styles.textoContainer]}>Informações do Perfil</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.container]}>
            <Text style={[styles.textoContainer]}>Contatos</Text>
        </TouchableOpacity>
    </>
  );
}