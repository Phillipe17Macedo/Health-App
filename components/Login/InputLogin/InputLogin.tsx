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
import { buscarAderente } from "@/utils/buscarAderente";
import { useRouter } from "expo-router";
import { AxiosError } from "axios";
import * as LocalAuthentication from "expo-local-authentication";

export function InputLogin() {
  const [cpf, setCpf] = useState("");
  const [cpfExiste, setCpfExiste] = useState(true);
  const [isDependente, setIsDependente] = useState(false);
  const [loading, setLoading] = useState(false);
  const [supportsAuth, setSupportsAuth] = useState(false);
  const router = useRouter();

  const { width } = Dimensions.get("window");

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

      // Verifica se userData não é undefined ou null
      if (!userData) {
        Alert.alert("Erro", "CPF não cadastrado ou resposta inesperada da API.");
        console.log("Erro, CPF não cadastrado.");
        return;
      }
  
      console.log("Dados do usuário:", userData);
  
      // Armazenar o token no AsyncStorage, se existir
      const token = userData?.tokenViewModel?.accessToken;
      if (token) {
        await AsyncStorage.setItem("userToken", token);
        console.log("Token armazenado no AsyncStorage. Token: ", token);
      } else {
        console.log("Token não recebido na resposta.");
      }
  
      const diasExpiracaoToken = userData?.tokenViewModel?.expiresIn;
      if (diasExpiracaoToken) {
        await AsyncStorage.setItem("diasExpiracaoToken", diasExpiracaoToken.toString());
        console.log("Numero de dias armazenado no AsyncStorage. Dias: ", diasExpiracaoToken);
      } else {
        console.log("Dias não foram recebidos na resposta.");
      }

      // Armazenar a imagem base64 no AsyncStorage, se existir
      if (userData.fotoBase64) {
        await AsyncStorage.setItem("fotoUsuario", userData.fotoBase64);
        console.log("Imagem base64 armazenada no AsyncStorage.");
      } else {
        console.log("Usuário não possui imagem.");
      }
  
      // Armazenar o ID do aderente no AsyncStorage, se existir
      if (userData.idAderente) {
        await AsyncStorage.setItem("userId", userData.idAderente.toString());
        console.log("ID do aderente armazenado no AsyncStorage.");
      } else {
        console.log("ID do aderente não recebido na resposta.");
      }
  
      // Armazenar se é titular no AsyncStorage, se existir
      if (userData.titularDoContrato !== undefined) {
        await AsyncStorage.setItem("isTitular", userData.titularDoContrato.toString());
        console.log("Informação sobre titularidade armazenada no AsyncStorage.");
      } else {
        console.log("Informação sobre titularidade não recebida na resposta.");
      }
  
      if (supportsAuth) {
        handleAuthentication();
      } else {
        router.push("../(tabs)/home");
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
      setLoading(false);
    }
  };  

  async function verificaDisponibilidadeAutenticacao() {
    const compatibilidade = await LocalAuthentication.hasHardwareAsync();
    console.log("Compatibilidade de hardware para autenticação:", compatibilidade);

    if (compatibilidade) {
      const tipoAutenticacao = await LocalAuthentication.supportedAuthenticationTypesAsync();
      console.log("Tipos de autenticação suportados:", tipoAutenticacao.map(type => LocalAuthentication.AuthenticationType[type]));

      const isAutenticacaoCadastrada = await LocalAuthentication.isEnrolledAsync();
      console.log("Autenticação cadastrada:", isAutenticacaoCadastrada);

      if (isAutenticacaoCadastrada) {
        setSupportsAuth(true);
      } else {
        setSupportsAuth(false);
      }
    } else {
      setSupportsAuth(false);
    }
  }

  async function handleAuthentication() {
    const supportedAuthTypes = await LocalAuthentication.supportedAuthenticationTypesAsync();
    const isFaceRecognitionAvailable = supportedAuthTypes.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION);
    const isFingerprintAvailable = supportedAuthTypes.includes(LocalAuthentication.AuthenticationType.FINGERPRINT);

    console.log("Reconhecimento facial disponível:", isFaceRecognitionAvailable);
    console.log("Biometria disponível:", isFingerprintAvailable);

    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login com Autenticação",
      fallbackLabel: "Autenticação não reconhecida",
    });
    console.log("Resultado da autenticação:", auth);

    if (auth.success) {
      router.push("../(tabs)/home");
    } else {
      Alert.alert('Erro', 'Autenticação falhou. Por favor, tente novamente.');
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
        onPress={handleLogin}
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