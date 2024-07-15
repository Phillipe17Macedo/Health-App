import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, Pressable, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";

interface HeaderProps {
  nomeUsuario?: string;
}

export function Header({ nomeUsuario }: HeaderProps) {
  const primeiroNome = nomeUsuario ? nomeUsuario.split(" ")[0] : "Usuário";

  return (
    <TouchableOpacity style={styles.container}>
      <Link href="/perfil" asChild>
        <Pressable>
          {({ pressed }) => (
            <Ionicons
              name="person-circle"
              size={58}
              color="#03A66A"
              style={[styles.headerRight, { opacity: pressed ? 0.5 : 1 }]}
            />
          )}
        </Pressable>
      </Link>
      <Link href="/perfil" asChild style={[styles.containerTextoHeader]}>
        <Pressable>
          <Text style={[styles.nomeUsuario]}>Olá, {primeiroNome} 🎉</Text>
          <Text style={[styles.textoPerfilConfi]}>Perfil e configurações </Text>
        </Pressable>
      </Link>
      <Link href="/ajuda" style={[styles.containerIconHelp]}>
        <Pressable>
          {({ pressed }) => (
            <Ionicons
              name="help-circle"
              size={34}
              color="#9B9B9B"
              style={[{ opacity: pressed ? 0.5 : 1 }]}
            />
          )}
        </Pressable>
        <Text style={[styles.textoAjuda]}>Ajuda</Text>
      </Link>
    </TouchableOpacity>
  );
}
