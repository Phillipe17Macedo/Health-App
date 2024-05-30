import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, Text, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from './styles';
import { buscarUsuario } from "@/connection/buscarUsuario";
import { useRouter } from "expo-router";

export function InputLogin() {
  const [cpf, setCpf] = useState('');
  const [cpfExiste, setCpfExiste] = useState(true);
  const router = useRouter();

  const formatoCPF = (input: string) => {
    const cleaned = input.replace(/\D/g, '');
    const formatted = cleaned.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    setCpf(formatted);
    setCpfExiste(cleaned === '');
  };

  const handleLogin = async () => {
    const cleanedCpf = cpf.replace(/\D/g, '');
    try {
      const userData = await buscarUsuario(cleanedCpf);
      if (userData) {
        await AsyncStorage.setItem('userCpf', cleanedCpf);
        router.push("/(tabs)/home");
      } else {
        Alert.alert("Erro", "CPF não cadastrado");
      }
    } catch (error) {
      Alert.alert("Erro", "Falha ao verificar o CPF");
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.containerInput]}>
        <TextInput 
          placeholder="CPF 000.000.000-00" 
          keyboardType="numeric" 
          style={[styles.textInput]}
          value={cpf}
          onChangeText={formatoCPF}
        />
      </View>
      <TouchableOpacity  style={[styles.containerButtonEntrar]} disabled={cpfExiste} onPress={handleLogin}>
          <Text style={[styles.textoButton]}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
