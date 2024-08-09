import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView, RefreshControl, Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "@/styles/GuiaExame/styles";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Checkbox } from "react-native-paper";

import ModalCarregamento from "@/components/constants/ModalCarregamento";
import { HeaderGuiaExame } from "@/components/GuiaExame/HeaderGuiaExame/Header";
import { DicaGuiaExame } from "@/components/GuiaExame/ComponenteDicaSolicitacao/DicaGuiaExame";
import LaboratoriosGuiaExame from "@/components/GuiaExame/LaboratoriosGuiaExame/LaboratoriosGuiaExame";

export default function TelaGuiaExame() {
  const [loading, setLoading] = useState(false);
  const [isDependente, setIsDependente] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [fontLoaded, setFontLoaded] = useState(false);

  // Função para carregar dados e recursos
  const loadResourcesAndDataAsync = async () => {
    try {
      setLoading(true);
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
      setLoading(false);
      SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    loadResourcesAndDataAsync();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadResourcesAndDataAsync();  // Recarrega os recursos necessários
    setRefreshing(false);
  };

  const handleCheckboxChange = (checked: boolean) => {
    setIsDependente(checked);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <ModalCarregamento visivel={loading} />
        <Image
          source={require("@/assets/images/medicos/exame-guia.png")}
          style={[{ width: "100%", height: 500, position: "relative"}]}
        />
        <HeaderGuiaExame />
        <DicaGuiaExame />
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={isDependente ? "checked" : "unchecked"}
            onPress={() => handleCheckboxChange(!isDependente)}
          />
          <Text
            style={[styles.label, { fontFamily: "MPlusRounded1c-ExtraBold" }]}
          >
            Para um dependente?
          </Text>
        </View>
        <LaboratoriosGuiaExame onLoading={setLoading} />
      </ScrollView>
    </SafeAreaView>
  );
}