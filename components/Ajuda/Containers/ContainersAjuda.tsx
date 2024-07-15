import React, { useState } from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import { Link } from 'expo-router';
import { styles } from './styles';

export function ContainersAjuda() {
  return (
    <>
      <TouchableOpacity style={[styles.container]}>
        <Link href={'/opcaoAcesso'} style={[styles.containerLink]}>
          <Text style={[styles.textoContainer]}>Sem acesso ao APP ?</Text>
        </Link>
        <Text style={[styles.textoDescricao]}>Dados e informações pessoais, CPF e autenticação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.container]}>
        <Link href={'/opcaoConsulta'} style={[styles.containerLink]}>
          <Text style={[styles.textoContainer]}>Consultas</Text>
        </Link>
        <Text style={[styles.textoDescricao]}>Marcar consulta, consulta pelo app, agendamentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.container]}>
        <Link href={'/opcaoExame'} style={[styles.containerLink]}>
          <Text style={[styles.textoContainer]}>Exames</Text>
        </Link>
        <Text style={[styles.textoDescricao]}>Marcar exame, emaxe pelo app, agendamentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.container]}>
        <Link href={'/opcaoGuia'} style={[styles.containerLink]}>
          <Text style={[styles.textoContainer]}>Guias</Text>
        </Link>
        <Text style={[styles.textoDescricao]}>Emitir guias de consultas e exames, guias pelo app</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.container]}>
        <Link href={'/opcaoSuporte'} style={[styles.containerLink]}>
          <Text style={[styles.textoContainer]}>Suporte</Text>
        </Link>
        <Text style={[styles.textoDescricao]}>Problema ao agendar, pagamentos, acesso ao APP</Text>
      </TouchableOpacity>
    </>
  );
}