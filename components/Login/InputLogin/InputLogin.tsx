import React, { useEffect, useState } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Alert,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome6 } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";
import { styles } from "./styles";
import { buscarAderente } from "@/utils/requestConfig";
import { useRouter } from "expo-router";
import { AxiosError } from "axios";
import * as LocalAuthentication from "expo-local-authentication";

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
        await AsyncStorage.setItem(
          "isTitular",
          userData.titularDoContrato.toString()
        );
        router.push("/(tabs)/home");
      } else if (isDependente && !userData.titularDoContrato) {
        // Caso dependente e checkbox marcado
        await AsyncStorage.setItem("userCpf", cleanedCpf);
        await AsyncStorage.setItem("userId", userData.idAderente.toString());
        await AsyncStorage.setItem(
          "isTitular",
          userData.titularDoContrato.toString()
        );
        router.push("/(tabs)/home");
      } else {
        Alert.alert(
          "Erro",
          "Não é possível acessar a aplicação com essas credenciais."
        );
        console.log(
          "Erro, não é possível acessar a aplicação com essas credenciais."
        );
      }
    } catch (error) {
      if (
        error instanceof AxiosError &&
        error.response &&
        error.response.status === 400
      ) {
        Alert.alert(
          "Erro",
          "Falha ao verificar o CPF. Por favor, verifique se as informações estão corretas."
        );
      } else {
        Alert.alert("Servidor fora do ar!", "Tente mais tarde!");
      }
      console.log("Erro ao verificar o CPF:", error);
    } finally {
      setLoading(false); // Para o carregamento
    }
  };

  const { width } = Dimensions.get("window");

  /*
  // Parte que verifica a parte de autenticação nativa do apareelho
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function verificaDisponibilidadeAutenticacao() {
    const compatibilidade = await LocalAuthentication.hasHardwareAsync();
    console.log(compatibilidade);

    const tipoAutenticacao = await LocalAuthentication.supportedAuthenticationTypesAsync();
    console.log(tipoAutenticacao.map(type => LocalAuthentication.AuthenticationType[2]));
  }

  async function handleAuthentication() {
    const isBiometriaCadastrada = await LocalAuthentication.isEnrolledAsync();
    const isFacialCadastrada = await LocalAuthentication.isEnrolledAsync();

    console.log("Biometria Cadastrada: ", isBiometriaCadastrada);
    console.log("Reconhecimento Facial: ", isFacialCadastrada);

    if(!isBiometriaCadastrada){
      return Alert.alert('Login', 'Nenhuma biometria cadastrada. Por favor, cadastre no dispositivo!');
    }
    if(!isFacialCadastrada){
      return Alert.alert('Login', 'Nenhuma face cadastrado. Por favor, cadastre no dispositivo!');
    }

    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Login com Reconhecimento Facial',
      fallbackLabel: 'Rosto não reconhecido'
    });

    console.log(auth);

  }*/

  async function verificaDisponibilidadeAutenticacao() {
    const compatibilidade = await LocalAuthentication.hasHardwareAsync();
    console.log("Compatibilidade de hardware para autenticação:", compatibilidade);

    const tipoAutenticacao = await LocalAuthentication.supportedAuthenticationTypesAsync();
    console.log("Tipos de autenticação suportados:", tipoAutenticacao.map(type => LocalAuthentication.AuthenticationType[type]));
  }

  async function handleAuthentication() {
    const isAutenticacaoCadastrada = await LocalAuthentication.isEnrolledAsync();
    console.log("Autenticação cadastrada:", isAutenticacaoCadastrada);

    if (!isAutenticacaoCadastrada) {
      return Alert.alert('Login', 'Nenhuma biometria ou face cadastrada. Por favor, cadastre no dispositivo!');
    }

    const supportedAuthTypes = await LocalAuthentication.supportedAuthenticationTypesAsync();
    const isFaceRecognitionAvailable = supportedAuthTypes.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION);
    const isFingerprintAvailable = supportedAuthTypes.includes(LocalAuthentication.AuthenticationType.FINGERPRINT);

    console.log("Reconhecimento facial disponível:", isFaceRecognitionAvailable);
    console.log("Biometria disponível:", isFingerprintAvailable);

    if (isFaceRecognitionAvailable) {
      const auth = await LocalAuthentication.authenticateAsync({
        promptMessage: "Login com Autenticação",
        fallbackLabel: "Rosto não reconhecido",
      });
      console.log("Resultado da autenticação facial:", auth);
      if (auth.success) {
        handleLogin();
      }
    } else if (isFingerprintAvailable) {
      const auth = await LocalAuthentication.authenticateAsync({
        promptMessage: "Login com Autenticação",
        fallbackLabel: "Biometria não reconhecida",
      });
      console.log("Resultado da autenticação biométrica:", auth);
      if (auth.success) {
        handleLogin();
      }
    } else {
      Alert.alert('Login', 'Nenhuma biometria ou face cadastrada. Por favor, cadastre no dispositivo!');
    }
  }

  useEffect(() => {
    verificaDisponibilidadeAutenticacao();
  }, []);

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
        <Text
          style={[
            styles.textoCheckBox,
            { fontSize: width * 0.04, marginRight: 10 },
          ]}
        >
          Sou Dependente
        </Text>
        <FontAwesome6 name="person-circle-check" size={18} color="#3E4A59" />
      </View>
      <TouchableOpacity
        style={[styles.containerButtonEntrar, { padding: width * 0.02 }]}
        disabled={cpfExiste || loading} // Desabilita o botão durante o carregamento
        onPress={handleAuthentication}
      >
        {loading ? (
          <ActivityIndicator
            size="small"
            color="#fff"
            style={[{ marginBottom: -10, marginTop: 4 }]}
          />
        ) : (
          <Text style={[styles.textoButton, { fontSize: width * 0.05 }]}>
            Entrar
          </Text>
        )}
        {loading && (
          <Text
            style={[
              styles.textoButton,
              { marginTop: 10, fontSize: width * 0.04 },
            ]}
          >
            Carregando
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
