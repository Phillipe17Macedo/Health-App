import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles/StylesIndexPage/styles";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const limparAsyncStorage = async () => {
      await AsyncStorage.clear();
    };

    limparAsyncStorage();

    const verificarExibicaoInicial = async () => {
      const exibido = await AsyncStorage.getItem("indexExibido");

      if (exibido) {
        router.replace("/login"); // Redireciona imediatamente para login se já foi exibido
      } else {
        await AsyncStorage.setItem("indexExibido", "true");
        const temporizador = setTimeout(() => {
          router.replace("/login"); // Redireciona para login após o temporizador
        }, 3000);

        return () => clearTimeout(temporizador);
      }
    };

    verificarExibicaoInicial();
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={[styles.containerImage]}>
        <Image
          source={require("../assets/images/logo-aserpa/logo-animated.gif")}
          style={[styles.imageStyle]}
        />
      </View>
    </View>
  );
}
