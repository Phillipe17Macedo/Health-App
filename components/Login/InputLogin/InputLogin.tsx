import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";
import { styles } from './styles';
import { ButtonLogin } from "./ButtonLogin/ButtonLogin";

export function InputLogin() {
  const [cpf, setCpf] = useState('');
  const [isCpfEmpty, setIsCpfEmpty] = useState(true);

  const formatCpf = (input: string) => {
    const cleaned = input.replace(/\D/g, '');
    const formatted = cleaned.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    setCpf(formatted);
    setIsCpfEmpty(cleaned === '');
  };

  return (
    <View style={styles.container}>
      <View style={[styles.containerInput]}>
        <TextInput 
          placeholder="CPF 000.000.000-00" 
          keyboardType="numeric" 
          style={[styles.textInput]}
          value={cpf}
          onChangeText={formatCpf}
        />
      </View>
      <TouchableOpacity  style={[styles.containerButtonEntrar]} disabled={isCpfEmpty}>
        <Link href={"/(tabs)/home"} style={styles.buttonEntrar}>
          <Text style={[styles.textoButton]} >Entrar</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}
