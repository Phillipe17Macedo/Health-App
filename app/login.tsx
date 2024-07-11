import React, { useEffect, useState } from "react";
import { View, Image, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../styles/StylesLoginPage/styles";
import { LogoLogin } from "../components/Login/LogoLogin/LogoLogin";
import { InputLogin } from "../components/Login/InputLogin/InputLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TermosDeUsoModal from '../components/ModalTermosUso/TermosDeUso';

export default function Login() {
  const [termosVisivel, setTermosVisivel] = useState(false);

  useEffect(() => {
    const verificarTermos = async () => {
      const aceitouTermos = await AsyncStorage.getItem("aceitouTermos");
      if (!aceitouTermos) {
        setTermosVisivel(true);
      }
    };
    verificarTermos();
  }, []);

  const handleAccept = async () => {
    await AsyncStorage.setItem("aceitouTermos", "true");
    setTermosVisivel(false);
    Alert.alert('Obrigado por aceitar os termos de uso.');
  };

  const handleDecline = () => {
    Alert.alert(
      'Termos de Uso',
      'Você precisa aceitar os termos de uso para continuar.',
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={[styles.container]}>
      <StatusBar style="auto" />
        <LogoLogin/>
        <InputLogin/>
        <View style={[styles.containerLogoBackground]} >
          <Image source={require("@/assets/images/logo-aserpa/Icone.png")} style={[styles.logoBackground]} />
        </View>
        <TermosDeUsoModal
          visible={termosVisivel}
          onAccept={handleAccept}
          onDecline={handleDecline}
        />
    </View>
  );
}
