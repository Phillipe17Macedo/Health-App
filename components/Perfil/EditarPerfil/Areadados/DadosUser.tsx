import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { buscarUsuario } from "@/connection/buscarUsuario";
import { editarUsuario } from "@/connection/editarUsuario";
import { styles } from "./styles";

export default function DadosUser({ cpf }: { cpf: string }) {
  const [telefone, setTelefone] = useState<string>("");
  const [endereco, setEendereco] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [editando, setEditando] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const usuario = await buscarUsuario(cpf);
        if (usuario) {
          setTelefone(usuario.telefone || "Não encontrado");
          setEendereco(usuario.endereco || "Não encontrado");
          setEmail(usuario.email || "Não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    }

    fetchData();
  }, [cpf]);

  const handleSalvarEdicao = async () => {
    if (editando) {
      try {
        await editarUsuario(cpf, { telefone, endereco, email });
        console.log("Dados do usuário atualizados com sucesso.");
        setEditando(false);
      } catch (error) {
        console.error("Erro ao atualizar dados do usuário:", error);
      }
    } else {
      // Entrar em modo de edição
      setEditando(true);
    }
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
            editable={editando}
            onChangeText={setTelefone}
          />
          <TextInput
            placeholder="ENDEREÇO"
            style={[styles.dadosInput]}
            keyboardType="number-pad"
            value={endereco}
            editable={editando}
            onChangeText={setEendereco}
          />
          <TextInput
            placeholder="EMAIL"
            style={[styles.dadosInput]}
            keyboardType="email-address"
            value={email}
            editable={editando}
            onChangeText={setEmail}
          />
        </View>
        <TouchableOpacity
          style={[styles.containerButton]}
          onPress={handleSalvarEdicao}
        >
          <Text style={[styles.textoButton]}>{editando ? "SALVAR" : "EDITAR"}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
