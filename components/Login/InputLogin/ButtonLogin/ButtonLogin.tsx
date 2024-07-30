import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { styles } from "./styles";

export function ButtonLogin() {

  const [cpf, setCpf] = useState('');
  const [isCpfEmpty, setIsCpfEmpty] = useState(true);

  const formatCpf = (input: string) => {
    const cleaned = input.replace(/\D/g, '');
    const formatted = cleaned.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    setCpf(formatted);
    setIsCpfEmpty(cleaned === '');
  };

  return (
      <TouchableOpacity  style={[styles.containerButtonEntrar]}>
        <Link href={"../(tabs)/home"} style={styles.buttonEntrar}>
          <Text style={[styles.textoButton]} disabled={isCpfEmpty}>Entrar</Text>
        </Link>
      </TouchableOpacity>
  );
}
