import React, { useState } from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import { Link } from 'expo-router';
import { styles } from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import TermosDeUsoModal from '@/components/ModalTermosUso/TermosDeUso';

export function ContainersPerfil() {
  const [termosVisivel, setTermosVisivel] = useState(false);

  const handleAccept = async () => {
    await AsyncStorage.setItem("aceitouTermos", "true");
    setTermosVisivel(false);
    Alert.alert('Obrigado por aceitar os termos de uso.');
  };

  const handleDecline = () => {
    Alert.alert(
      'Termos de Uso',
      'Você precisa aceitar os termos de uso para continuar.',
      [{ text: 'OK' }]
    );
  };

  return (
    <>
      <TouchableOpacity style={[styles.container]}>
        <Link href={'/perfilEditar'}>
          <Text style={[styles.textoContainer]}>Informações do Perfil</Text>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.container]} 
        onPress={() => setTermosVisivel(true)}
      >
        <Text style={[styles.textoContainer]}>Termos de Uso</Text>
      </TouchableOpacity>
      <TermosDeUsoModal
        visible={termosVisivel}
        onAccept={handleAccept}
        onDecline={handleDecline}
      />
    </>
  );
}