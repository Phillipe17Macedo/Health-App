import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView, RefreshControl, Image, Text, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "@/styles/GuiaExame/styles";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Checkbox } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ModalCarregamento from "@/components/constants/ModalCarregamento";
import { HeaderGuiaExame } from "@/components/GuiaExame/HeaderGuiaExame/Header";
import { DicaGuiaExame } from "@/components/GuiaExame/ComponenteDicaSolicitacao/DicaGuiaExame";
import LaboratoriosGuiaExame from "@/components/GuiaExame/LaboratoriosGuiaExame/LaboratoriosGuiaExame";
import SelecaoDependente from "@/components/GuiaExame/ModalSelecaoDependentes/SelecaoDependente";
import { buscarAderente } from "@/utils/buscarAderente";
import { buscarDependentes } from "@/utils/buscarDependente";

export default function TelaGuiaExame() {
  const [loading, setLoading] = useState(false);
  const [isDependente, setIsDependente] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [dependentes, setDependentes] = useState<any[]>([]);
  const [selectedDependente, setSelectedDependente] = useState<number | null>(null); // Alterado para number | null
  const [selectDependenteVisivel, setSelectDependenteVisivel] = useState(false);
  const [idAderente, setIdAderente] = useState<number | null>(null);
  const [cpf, setCpf] = useState<string | null>(null);

  const [fontLoaded, setFontLoaded] = useState(false);

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

      const storedCpf = await AsyncStorage.getItem("userCpf");
      console.log("Tela GuiaExame - CPF recuperado do AsyncStorage:", storedCpf);
      if (storedCpf) {
        setCpf(storedCpf);
        const aderenteResponse = await buscarAderente(storedCpf, true);
        console.log("Tela GuiaExame - Resposta da API ao buscar aderente:", aderenteResponse);

        if (aderenteResponse && aderenteResponse.data && aderenteResponse.data.idAderente) {
          const aderenteId = aderenteResponse.data.idAderente;
          console.log("Tela GuiaExame - ID do Aderente encontrado:", aderenteId);
          setIdAderente(aderenteId);

          const dependentesResponse = await buscarDependentes(Number(aderenteId));
          console.log("Tela GuiaExame - Dependentes recuperados da API:", dependentesResponse);
          setDependentes(Array.isArray(dependentesResponse.data) ? dependentesResponse.data : []);
        } else {
          console.error("ID do Aderente não encontrado na resposta da API.");
          Alert.alert("Erro", "ID do Aderente não encontrado.");
        }
      } else {
        console.error("CPF não encontrado no AsyncStorage.");
        Alert.alert("Erro", "CPF não encontrado.");
      }

      setFontLoaded(true);
    } catch (e) {
      console.error("Erro ao carregar os dados:", e);
      setDependentes([]);
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
    await loadResourcesAndDataAsync();
    setRefreshing(false);
  };

  const handleCheckboxChange = (checked: boolean) => {
    if (checked && dependentes.length === 0) {
      Alert.alert("Atenção", "Você não possui dependentes cadastrados.");
      setIsDependente(false);
    } else if (checked) {
      setSelectDependenteVisivel(true);
      setIsDependente(true);
    } else {
      setIsDependente(false);
      setSelectedDependente(null); // Reseta o dependente se desmarcar o checkbox
    }
  };

  const handleConfirmDependente = () => {
    if (isDependente && selectedDependente) {
      console.log("Dependente selecionado:", selectedDependente);
    } else {
      console.log("Nenhum dependente selecionado.");
    }
    setSelectDependenteVisivel(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={[{ height: '100%', width: '100%' }]}
      >
        <ModalCarregamento visivel={loading} />
        <Image
          source={require("@/assets/images/medicos/exame-guia.png")}
          style={[{ width: "100%", height: 500, position: "relative" }]}
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
        {idAderente && cpf && (
          <LaboratoriosGuiaExame 
            onLoading={setLoading} 
            idAderente={idAderente} 
            cpf={cpf} 
            isDependente={isDependente}
            selectedDependente={selectedDependente} // Passe o ID como number
          />
        )}
        <SelecaoDependente
          visivel={selectDependenteVisivel}
          onClose={() => setSelectDependenteVisivel(false)}
          onConfirm={handleConfirmDependente}
          isDependente={isDependente}
          setIsDependente={setIsDependente}
          dependentes={dependentes}
          selectedDependente={selectedDependente} // Passe o ID como number
          setSelectedDependente={setSelectedDependente}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
