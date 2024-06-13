import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { styles } from './styles';

export function HeaderPerfil() {
  return (
    <View style={styles.container}>
        <View style={[styles.containerItensHeader]}>
            <Link href="/home" style={[styles.linkIcone]}>
                <Ionicons name="arrow-back-circle" size={48} color="#fff"/>
            </Link>
            <Text style={[styles.textoHeader]}>Perfil e Configurações</Text>
        </View>
    </View>
  );
}