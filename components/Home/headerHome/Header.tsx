import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, Pressable, TouchableOpacity, View, Image } from "react-native";
import { Link } from "expo-router";
import { styles } from "./styles";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface HeaderProps {
  nomeUsuario?: string;
}

export function Header({ nomeUsuario }: HeaderProps) {
  const primeiroNome = nomeUsuario ? nomeUsuario.split(" ")[0] : "Usuário";
  const [fontLoaded, setFontLoaded] = useState(false);
  const [fotoUsuario, setFotoUsuario] = useState<string | null>(null);

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

        const fotoBase64 = await AsyncStorage.getItem("fotoUsuario");
        console.log("Imagem base64 do AsyncStorage:", fotoBase64);
        if (fotoBase64) {
          setFotoUsuario(fotoBase64);
        }

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

  const fotoUri = fotoUsuario ? `data:image/jpeg;base64,${fotoUsuario}` : null;

  return (
    <>
      <View style={styles.container}>
        <Link href="/perfil" asChild>
          <Pressable>
            {({ pressed }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {fotoUri ? (
                  <Image
                    source={{ uri: fotoUri }}
                    style={[
                      styles.headerImage,
                      { opacity: pressed ? 0.5 : 1 },
                    ]}
                  />
                ) : (
                  <Ionicons
                    name="person-circle"
                    size={58}
                    color="#FFF"
                    style={[{ opacity: pressed ? 0.5 : 1 }]}
                  />
                )}
              </View>
            )}
          </Pressable>
        </Link>
        <Link href="/perfil" asChild style={[styles.containerTextoHeader]}>
          <Pressable>
            <Text style={[styles.nomeUsuario]}>Olá, {primeiroNome} 🎉</Text>
            <Text style={[styles.textoPerfilConfi]}>
              Perfil e configurações{" "}
            </Text>
          </Pressable>
        </Link>
        <Link href="/ajuda" style={[styles.containerIconHelp]}>
          <Pressable>
            {({ pressed }) => (
              <Ionicons
                name="help-circle"
                size={34}
                color="#FFF"
                style={[{ opacity: pressed ? 0.5 : 1 }]}
              />
            )}
          </Pressable>
          <Text style={[styles.textoAjuda]}>Ajuda</Text>
        </Link>
      </View>
      <View style={[styles.containerBoasVindas]}>
        <Text
          style={[
            styles.textoBoasVindas,
            { fontFamily: "MPlusRounded1c-Bold", marginBottom: -3 },
          ]}
        >
          Seja bem-vindo ao
        </Text>
        <Text
          style={[
            styles.textoBoasVindas,
            { fontFamily: "MPlusRounded1c-ExtraBold", fontSize: 36 },
          ]}
        >
          Aserpa App!
        </Text>
      </View>
    </>
  );
}