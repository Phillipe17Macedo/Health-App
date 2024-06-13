import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, Text, Alert, Dimensions, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Checkbox } from "react-native-paper";
import { styles } from "./styles";
import { buscarAderente } from "@/utils/requestConfig";
import { useRouter } from "expo-router";
import { AxiosError } from "axios";

export function InputLogin() {
  const [cpf, setCpf] = useState("");
  const [cpfExiste, setCpfExiste] = useState(true);
  const [isDependente, setIsDependente] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formatoCPF = (input: string) => {
    const cleaned = input.replace(/\D/g, "").slice(0, 11);
    const formatted = cleaned.replace(
      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
      "$1.$2.$3-$4"
    );
    setCpf(formatted);
    setCpfExiste(cleaned === "");
  };

  const handleLogin = async () => {
    const cleanedCpf = cpf.replace(/\D/g, "");
    setLoading(true);
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
      if (error instanceof AxiosError && error.response && error.response.status === 400) {
        Alert.alert("Erro", "Falha ao verificar o CPF. Por favor, verifique se as informações estão corretas.");
      } else {
        Alert.alert("Erro", "Falha ao verificar o CPF");
      }
      console.log("Erro ao verificar o CPF:", error);
    } finally {
      setLoading(false); // Para o carregamento
    }
  };

  const { width } = Dimensions.get('window');

  return (
    <View style={[styles.container, { padding: width * 0.05 }]}>
      <View style={[styles.containerInput]}>
        <TextInput
          placeholder="CPF 000.000.000-00"
          keyboardType="numeric"
          style={[styles.textInput, { fontSize: width * 0.05 }]}
          value={cpf}
          onChangeText={formatoCPF}
        />
      </View>
      <View style={[styles.containerCheckbox]}>
        <Checkbox
          status={isDependente ? "checked" : "unchecked"}
          onPress={() => setIsDependente(!isDependente)}
        />
        <Text style={[styles.textoCheckBox, { fontSize: width * 0.04 }]}>Sou Dependente</Text>
      </View>
      <TouchableOpacity
        style={[styles.containerButtonEntrar, { padding: width * 0.02 }]}
        disabled={cpfExiste || loading} // Desabilita o botão durante o carregamento
        onPress={handleLogin}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#025940" style={[{marginBottom: -10, marginTop: 4}]} />
        ) : (
          <Text style={[styles.textoButton, { fontSize: width * 0.05 }]}>Entrar</Text>
        )}
        {loading && (
          <Text style={[styles.textoButton, { marginTop: 10, fontSize: width * 0.04 }]}>Carregando</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
