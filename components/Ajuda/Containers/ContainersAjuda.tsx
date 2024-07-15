import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, Alert } from 'react-native';
import { Link } from 'expo-router';
import { styles } from './styles';
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export function ContainersAjuda() {
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
        <Link href={'/opcaoAcesso'} style={[styles.containerLink]}>
          <Text style={[styles.textoContainer, {fontFamily: 'MPlusRounded1c-Medium'}]}>Sem acesso ao APP ?</Text>
        </Link>
        <Text style={[styles.textoDescricao, {fontFamily: 'MPlusRounded1c-Regular'}]}>Dados e informações pessoais, CPF e autenticação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.container]}>
        <Link href={'/opcaoConsulta'} style={[styles.containerLink]}>
          <Text style={[styles.textoContainer, {fontFamily: 'MPlusRounded1c-Medium'}]}>Consultas</Text>
        </Link>
        <Text style={[styles.textoDescricao, {fontFamily: 'MPlusRounded1c-Regular'}]}>Marcar consulta, consulta pelo app, agendamentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.container]}>
        <Link href={'/opcaoExame'} style={[styles.containerLink]}>
          <Text style={[styles.textoContainer, {fontFamily: 'MPlusRounded1c-Medium'}]}>Exames</Text>
        </Link>
        <Text style={[styles.textoDescricao, {fontFamily: 'MPlusRounded1c-Regular'}]}>Marcar exame, emaxe pelo app, agendamentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.container]}>
        <Link href={'/opcaoGuia'} style={[styles.containerLink]}>
          <Text style={[styles.textoContainer, {fontFamily: 'MPlusRounded1c-Medium'}]}>Guias</Text>
        </Link>
        <Text style={[styles.textoDescricao, {fontFamily: 'MPlusRounded1c-Regular'}]}>Emitir guias de consultas e exames, guias pelo app</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.container]}>
        <Link href={'/opcaoSuporte'} style={[styles.containerLink]}>
          <Text style={[styles.textoContainer, {fontFamily: 'MPlusRounded1c-Medium'}]}>Suporte</Text>
        </Link>
        <Text style={[styles.textoDescricao, {fontFamily: 'MPlusRounded1c-Regular'}]}>Problema ao agendar, pagamentos, acesso ao APP</Text>
      </TouchableOpacity>
    </>
  );
}