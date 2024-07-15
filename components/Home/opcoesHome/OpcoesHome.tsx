import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import {
  FontAwesome6,
} from "@expo/vector-icons";
import { styles } from "./styles";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export function OpcoesHome() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          "MPlusRounded1c-Medium": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Medium.ttf"),
          "MPlusRounded1c-Regular": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Regular.ttf"),
          "MPlusRounded1c-Bold": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Bold.ttf"),
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
      <View style={[styles.container]}>
        
        <View style={[styles.ContainertextoAcessoRapido]}>
          <FontAwesome6 name="hospital" size={18} color="#03A66A" />
          <Text style={[styles.textoAcessoRapido, {fontFamily: 'MPlusRounded1c-Bold'}]}>
            Agendamentos Clínicas Aserpa
          </Text>
        </View>

        <View style={[styles.containerOpcoes]}>
          <TouchableOpacity>
            <Link href={"/consulta"} style={[styles.containerLink]}>
              <View style={[styles.opcoes]}>
                <Image source={require('@/assets/images/Home/Carrossel/icons-canva/teste-resolucao/Consulta.png')} style={[styles.imagemOpcoes]} />
                <Text style={[styles.textoOpcoesIcone, {fontFamily: 'MPlusRounded1c-Medium'}]}>Agendar Consulta</Text>
              </View>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href={"/exame"} style={[styles.containerLink]}>
              <View style={[styles.opcoes]}>
                <Image source={require('@/assets/images/Home/Carrossel/icons-canva/teste-resolucao/Exame.png')} style={[styles.imagemOpcoes]} />
                <Text style={[styles.textoOpcoesIcone, {fontFamily: 'MPlusRounded1c-Medium'}]}>Agendar Exame</Text>
              </View>
            </Link>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.container]}>
        <View style={[styles.ContainertextoAcessoRapido]}>
          <FontAwesome6 name="hospital-user" size={18} color="#03A66A" />
          <Text style={[styles.textoAcessoRapido, {fontFamily: 'MPlusRounded1c-Bold'}]}>Solicitação de Guias</Text>
        </View>
        <View style={[styles.containerOpcoes]}>
          <TouchableOpacity>
            <Link href={"/guiaConsulta"} style={[styles.containerLink]}>
              <View style={[styles.opcoes]}>
                <Image source={require('@/assets/images/Home/Carrossel/icons-canva/teste-resolucao/guia-consulta.png')} style={[styles.imagemOpcoes]} />
                <Text style={[styles.textoOpcoesIcone, {fontFamily: 'MPlusRounded1c-Medium'}]}>
                  Guia de Consultas
                </Text>
              </View>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href={"/exame"} style={[styles.containerLink]}>
              <View style={[styles.opcoes]}>
                <Image source={require('@/assets/images/Home/Carrossel/icons-canva/teste-resolucao/guia-exame.png')} style={[styles.imagemOpcoes]} />
                <Text style={[styles.textoOpcoesIcone, {fontFamily: 'MPlusRounded1c-Medium'}]}>Guia de Exames</Text>
              </View>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
