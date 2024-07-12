import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { styles } from './styles';
import TermosDeUsoModal from '@/components/ModalTermosUso/TermosDeUso';

export function ContainersPerfil() {
  const [termosVisivel, setTermosVisivel] = useState(false);

  const handleClose = () => {
    setTermosVisivel(false);
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
        onClose={handleClose}
      />
    </>
  );
}