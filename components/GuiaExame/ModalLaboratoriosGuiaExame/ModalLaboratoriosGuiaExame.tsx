import React, { useEffect, useState } from "react";
import { Modal, View, Text, TouchableOpacity, Linking, Alert } from 'react-native';
import { styles } from './styles';
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { emitirGuiaDeExame } from "@/utils/requestConfig";  

interface ModalLaboratoriosGuiaExame {
  visivel: boolean;
  onClose: () => void;
  laboratorio: {
    idLaboratorio: number;
    nome: string;
    endereco: string;
    distancia: number | null;
    latitude: number;
    longitude: number;
  } | null;
  idAderente: number;
  cpfAderente: string;
  idDep: number | null;
}

export default function ModalLaboratorioGuiaExame({
  visivel,
  onClose,
  laboratorio,
  idAderente,
  cpfAderente,
  idDep,
}: ModalLaboratoriosGuiaExame) {
  if (!laboratorio) return null;

  const handleOpenMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${laboratorio.latitude},${laboratorio.longitude}`;
    Linking.openURL(url);
  };

  const handleGenerateGuia = async () => {
    const guiaJSON = {
      idAderente,
      cpfAderente,
      idLaboratorio: laboratorio.idLaboratorio,
      idDep,
    };

    console.log("Guia JSON Gerado:", JSON.stringify(guiaJSON, null, 2));

    try {
      // Chama o método para emitir a guia de exame
      const response = await emitirGuiaDeExame(guiaJSON);
      console.log("Guia de Exame Emitida com Sucesso:", response.data.idGuiaExame);
      Alert.alert("Guia Laboratorial Gerada", JSON.stringify(guiaJSON, null, 2));
    } catch (error) {
      console.error("Erro ao emitir a guia de exame:", error);
      Alert.alert("Erro", "Não foi possível emitir a guia de exame.");
    }

    onClose(); // Fecha o modal após a emissão da guia
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
    <Modal
      transparent={true}
      animationType="slide"
      visible={visivel}
      onRequestClose={onClose}
    >
      <View style={[styles.modalContainer]}>
        <View style={[styles.modalContent]}>
          <Text style={[styles.modalTitle, {fontFamily: 'MPlusRounded1c-ExtraBold', color: '#03A66A'}]}>Informações sobre o Laboratório</Text>
          <Text style={[styles.modalTitle, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>{laboratorio.nome}</Text>
          <Text style={[styles.modalText, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>{laboratorio.endereco}</Text>
          <Text style={[styles.modalText, {fontFamily: 'MPlusRounded1c-ExtraBold', color: '#3E3D3D'}]}>
            {laboratorio.distancia
              ? `Distância: 📍${(laboratorio.distancia / 1000).toFixed(2)} km`
              : '📍Distância desconhecida'}
          </Text>
          <TouchableOpacity style={[styles.mapLink]} onPress={handleOpenMaps}>
            <Text style={[styles.mapLinkText, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Ver no Google Maps</Text>
          </TouchableOpacity>
          <View style={[styles.containerButtonsModal]}>
            <TouchableOpacity style={[styles.closeButton]} onPress={onClose}>
                <Text style={[styles.textoButton, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Fechar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonGerarGuia]} onPress={handleGenerateGuia}>
                <Text style={[styles.textoButton, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>
                    Gerar Guia Laboratorial
                </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
