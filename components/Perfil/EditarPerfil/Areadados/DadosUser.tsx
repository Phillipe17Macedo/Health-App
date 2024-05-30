import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { buscarUsuario } from "@/connection/buscarUsuario";
import { styles } from "./styles";

export default function DadosUser({cpf}: {cpf: string}) {
  const [telefone, setTelefone] = useState<string>("");
  const [endereco, setEendereco] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        const usuario = await buscarUsuario(cpf);
        if (usuario) {
          setTelefone(usuario.telefone || "");
          setEendereco(usuario.Endereco || "");
          setEmail(usuario.email || "");
        }
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    }

    fetchData();
  }, [cpf]);

  const handleSalvarEdicao = () => {
    console.log("Salvando dados do usuário");
  };

  return (
    <>
      <View style={[styles.container]}>
        <View>
          <TextInput
            placeholder="TELEFONE"
            style={[styles.dadosInput]}
            keyboardType="number-pad"
            value={telefone}
            onChangeText={setTelefone}
          />
          <TextInput
            placeholder="ENDEREÇO"
            style={[styles.dadosInput]}
            keyboardType="number-pad"
            value={endereco}
            onChangeText={setEendereco}
          />
          <TextInput
            placeholder="EMAIL"
            style={[styles.dadosInput]}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <TouchableOpacity style={[styles.containerButton]} onPress={handleSalvarEdicao}>
          <Text style={[styles.textoButton]}>EDITAR</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
