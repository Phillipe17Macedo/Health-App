import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import { buscarAderente } from "@/utils/requestConfig";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DadosUser() {
  const [nome, setNome] = useState<string>("");
  const [cpfUser, setCpfUser] = useState<string>("");
  const [dataNasc, setDataNasc] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const { width } = Dimensions.get('screen');

  useEffect(() => {
    async function fetchData() {
      try {
        const cpf = await AsyncStorage.getItem("userCpf");
        const isTitular = await AsyncStorage.getItem("isTitular");

        if (!cpf || isTitular === null) {
          throw new Error("Dados de autenticação não encontrados");
        }

        const titular = isTitular === "true";

        console.log("Buscando usuário com CPF:", cpf);
        const response = await buscarAderente(cpf, titular);
        console.log("Dados do usuário:", response); // Log dos dados do usuário
        const usuario = response.data;
        if (usuario) {
          setNome(usuario.nome || "Não encontrado");
          setCpfUser(usuario.cpf || "Não encontrado");
          setDataNasc(usuario.dataNasc || "Não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  return (
    <>
      <View style={[styles.container]}>
        <View style={[styles.containerDescricao]}>
          <Text style={[styles.descricaoDados, { marginLeft: width * 0.02 }]}>NOME COMPLETO:</Text>
        </View>
        <TextInput
          placeholder="NOME COMPLETO"
          style={[styles.dadosInput, { height: 'auto' }]}
          keyboardType="default"
          value={nome}
          editable={false}
          multiline={true}
          numberOfLines={2} // Pode ajustar conforme necessário
        />
        <View style={[styles.containerDescricao]}>
          <Text style={[styles.descricaoDados, { marginLeft: width * 0.02 }]}>CPF:</Text>
        </View>
        <TextInput
          placeholder="CPF DO USUÁRIO"
          style={[styles.dadosInput]}
          keyboardType="default"
          value={cpfUser}
          editable={false}
        />
        <View style={[styles.containerDescricao]}>
          <Text style={[styles.descricaoDados, { marginLeft: width * 0.02 }]}>DATA DE NASCIMENTO:</Text>
        </View>
        <TextInput
          placeholder="DATA DE NASCIMENTO"
          style={[styles.dadosInput]}
          keyboardType="default"
          value={dataNasc}
          editable={false}
        />
      </View>
    </>
  );
}
