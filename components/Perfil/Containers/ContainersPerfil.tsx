import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, Alert } from 'react-native';
import { Link } from 'expo-router';
import { styles } from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import TermosDeUsoModal from '@/components/ModalTermosUso/TermosDeUso';
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export function ContainersPerfil() {
  const [termosVisivel, setTermosVisivel] = useState(false);

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

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          "MPlusRounded1c-Medium": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Medium.ttf"),
          "MPlusRounded1c-Regular": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Regular.ttf"),
          "MPlusRounded1c-Bold": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Bold.ttf"),
          "MPlusRounded1c-ExtraBold": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-ExtraBold.ttf"),
        });

        setFontLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!fontLoaded) {
    return null;
  }
  return (
    <>
      <TouchableOpacity style={[styles.container]}>
        <Link href={'/perfilEditar'}>
          <Text style={[styles.textoContainer, {fontFamily: 'MPlusRounded1c-Bold'}]}>Meu cartão Aserpa Saúde</Text>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.container]} 
        onPress={() => setTermosVisivel(true)}
      >
        <Text style={[styles.textoContainer, {fontFamily: 'MPlusRounded1c-Bold'}]}>Termos de Uso</Text>
      </TouchableOpacity>
      <TermosDeUsoModal
        visible={termosVisivel}
        onClose={() => setTermosVisivel(false)}
      />
    </>
  );
}