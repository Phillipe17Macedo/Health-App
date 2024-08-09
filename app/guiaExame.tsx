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
import { buscarDependentes, buscarAderente } from "@/utils/requestConfig";

export default function TelaGuiaExame() {
  const [loading, setLoading] = useState(false);
  const [isDependente, setIsDependente] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [dependentes, setDependentes] = useState<any[]>([]);
  const [selectedDependente, setSelectedDependente] = useState<string | null>(null);
  const [selectDependenteVisivel, setSelectDependenteVisivel] = useState(false);
  const [idAderente, setIdAderente] = useState<number | null>(null);
  const [cpf, setCpf] = useState<string | null>(null);

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

      // Buscar CPF do AsyncStorage
      const storedCpf = await AsyncStorage.getItem("userCpf");
      console.log("Tela GuiaExame - CPF recuperado do AsyncStorage:", storedCpf);

      if (storedCpf) {
        setCpf(storedCpf);  // Armazene o CPF no estado
        // Buscar ID do Aderente usando o CPF
        const aderenteResponse = await buscarAderente(storedCpf, true);
        console.log("Tela GuiaExame - Resposta da API ao buscar aderente:", aderenteResponse);

        if (aderenteResponse && aderenteResponse.data && aderenteResponse.data.idAderente) {
          const aderenteId = aderenteResponse.data.idAderente;
          console.log("Tela GuiaExame - ID do Aderente encontrado:", aderenteId);

          setIdAderente(aderenteId);  // Armazene o ID do Aderente no estado

          // Buscar dependentes usando o idAderente
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
      setDependentes([]); // Define dependentes como um array vazio em caso de erro
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
    if (checked && dependentes.length === 0) {
      Alert.alert("Atenção", "Você não possui dependentes cadastrados.");
      setIsDependente(false); // Desmarca o checkbox automaticamente
    } else if (checked) {
      setSelectDependenteVisivel(true);
      setIsDependente(true);
    } else {
      setIsDependente(false);
    }
  };

  const handleConfirmDependente = () => {
    // Lógica ao confirmar a seleção do dependente
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
            selectedDependente={selectedDependente}
          />
        )}
        <SelecaoDependente
          visivel={selectDependenteVisivel}
          onClose={() => setSelectDependenteVisivel(false)}
          onConfirm={handleConfirmDependente}
          isDependente={isDependente}
          setIsDependente={setIsDependente}
          dependentes={dependentes}
          selectedDependente={selectedDependente}
          setSelectedDependente={setSelectedDependente}
        />
      </ScrollView>
    </SafeAreaView>
  );
}