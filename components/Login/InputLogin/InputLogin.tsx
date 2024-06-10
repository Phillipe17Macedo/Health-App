import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, Text, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Checkbox } from "react-native-paper";
import { styles } from "./styles";
import { buscarAderente } from "@/utils/requestConfig";
import { useRouter } from "expo-router";

export function InputLogin() {
  const [cpf, setCpf] = useState("");
  const [cpfExiste, setCpfExiste] = useState(true);
  const [isDependente, setIsDependente] = useState(false);
  const router = useRouter();

  const formatoCPF = (input: string) => {
    const cleaned = input.replace(/\D/g, "");
    const formatted = cleaned.replace(
      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
      "$1.$2.$3-$4"
    );
    setCpf(formatted);
    setCpfExiste(cleaned === "");
  };

  const handleLogin = async () => {
    const cleanedCpf = cpf.replace(/\D/g, "");
    try {
      console.log("Buscando aderente para CPF:", cleanedCpf);
      const titular = !isDependente;
      const response = await buscarAderente(cleanedCpf, titular);
      const userData = response.data;

      if (typeof userData === "string") {
        Alert.alert("Erro", "CPF não cadastrado");
        console.log("Erro, CPF não cadastrado.");
        return;
      }

      console.log("Dados do usuário:", userData);

      if (!isDependente && userData.titularDoContrato) {
        // Caso titular e checkbox não marcado
        await AsyncStorage.setItem("userCpf", cleanedCpf);
        await AsyncStorage.setItem("userId", userData.idAderente.toString());
        await AsyncStorage.setItem("isTitular", userData.titularDoContrato.toString());
        router.push("/(tabs)/home");
      } else if (isDependente && !userData.titularDoContrato) {
        // Caso dependente e checkbox marcado
        await AsyncStorage.setItem("userCpf", cleanedCpf);
        await AsyncStorage.setItem("userId", userData.idAderente.toString());
        await AsyncStorage.setItem("isTitular", userData.titularDoContrato.toString());
        router.push("/(tabs)/home");
      } else {
        Alert.alert("Erro", "Não é possível acessar a aplicação com essas credenciais.");
        console.log("Erro, não é possível acessar a aplicação com essas credenciais.");
      }

    } catch (error) {
      if (error.response && error.response.status === 400) {
        Alert.alert("Erro", "Falha ao verificar o CPF. Por favor, verifique se as informações estão corretas.");
      } else {
        Alert.alert("Erro", "Falha ao verificar o CPF");
      }
      console.log("Erro ao verificar o CPF:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.containerCheckbox]}>
        <Checkbox
          status={isDependente ? "checked" : "unchecked"}
          onPress={() => setIsDependente(!isDependente)}
        />
        <Text style={[styles.textoCheckBox]}>Você é um Dependente ?</Text>
      </View>
      <View style={[styles.containerInput]}>
        <TextInput
          placeholder="CPF 000.000.000-00"
          keyboardType="numeric"
          style={[styles.textInput]}
          value={cpf}
          onChangeText={formatoCPF}
        />
      </View>
      <TouchableOpacity
        style={[styles.containerButtonEntrar]}
        disabled={cpfExiste}
        onPress={handleLogin}
      >
        <Text style={[styles.textoButton]}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
