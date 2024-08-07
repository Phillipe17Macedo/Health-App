import React, { useEffect, useState } from "react";
import { Modal, View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { FontAwesome6, FontAwesome5 } from '@expo/vector-icons';
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

interface ConfirmacaoGuiaConsultaProps {
  visivel: boolean;
  onClose: () => void;
  onConfirm: (json: any) => void;
  consulta: {
    idAderente: number;
    cpfAderente: string;
    idEspecialidade: number;
    idMedico: number;
    idDep: number | null;
    dataEmissao: string;
    vlrConsulta: number;
    usuario: string;
    dependente: string;
    especialidade: string;
    medico: string;
    data: string;
    horario: string;
    telefoneContato: string;
  };
}

export default function ConfirmacaoGuiaConsulta({ visivel, onClose, onConfirm, consulta }: ConfirmacaoGuiaConsultaProps) {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [horarioAtual, setHorarioAtual] = useState("");

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

  useEffect(() => {
    if (visivel) {
      const now = new Date();
      const horas = now.getHours().toString().padStart(2, '0');
      const minutos = now.getMinutes().toString().padStart(2, '0');
      const segundos = now.getSeconds().toString().padStart(2, '0');
      setHorarioAtual(`${horas}:${minutos}:${segundos}`);
    }
  }, [visivel]);

  const formatarData = (dataISO: string): string => {
    const data = new Date(dataISO);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear().toString().slice(-2);
    return `${dia}/${mes}/${ano}`;
  };

  const handleConfirm = () => {
    const now = new Date();
    const json = {
      idAderente: consulta.idAderente,
      cpfAderente: consulta.cpfAderente,
      idEspecialidade: consulta.idEspecialidade,
      idMedico: consulta.idMedico,
      idDep: consulta.idDep,
      dataEmissao: now.toISOString(),
      vlrConsulta: consulta.vlrConsulta,
    };

    console.log(JSON.stringify(json, null, 2));
    Alert.alert("JSON", JSON.stringify(json, null, 2));
    onConfirm(json);
  };

  if (!fontLoaded) {
    return null;
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visivel}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={[styles.modalTitle, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Confirmação da Guia de Consulta</Text>

          <View style={[styles.containerTextoPadrao]}>
            <FontAwesome6 name="person" size={21} color="#3E3D3D" />
            <Text style={[styles.textoPadrao, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Aderente:</Text>
          </View>
          <Text style={[styles.textoConfirmacao, { fontFamily: 'MPlusRounded1c-Medium' }]}>{consulta.usuario}</Text>

          <View style={[styles.containerTextoPadrao]}>
            <FontAwesome6 name="people-arrows" size={19} color="#3E3D3D" />
            <Text style={[styles.textoPadrao, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Dependente:</Text>
          </View>
          <Text style={[styles.textoConfirmacao, { fontFamily: 'MPlusRounded1c-Medium' }]}>{consulta.dependente ? consulta.dependente : "N/A"}</Text>

          <View style={[styles.containerTextoPadrao]}>
            <FontAwesome6 name="user-doctor" size={19} color="#3E3D3D" />
            <Text style={[styles.textoPadrao, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Médico:</Text>
          </View>
          <Text style={[styles.textoConfirmacao, { fontFamily: 'MPlusRounded1c-Medium' }]}>{consulta.medico}</Text>

          <View style={[styles.containerTextoPadrao]}>
            <FontAwesome6 name="briefcase-medical" size={19} color="#3E3D3D" />
            <Text style={[styles.textoPadrao, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Especialidade:</Text>
          </View>
          <Text style={[styles.textoConfirmacao, { fontFamily: 'MPlusRounded1c-Medium' }]}>{consulta.especialidade}</Text>

          <View style={[styles.containerTextoPadrao]}>
            <FontAwesome5 name="calendar-alt" size={19} color="#3E3D3D" />
            <Text style={[styles.textoPadrao, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Data da Emissão:</Text>
          </View>
          <Text style={[styles.textoConfirmacao, { fontFamily: 'MPlusRounded1c-Medium' }]}>{formatarData(new Date().toISOString())}</Text>

          <View style={[styles.containerTextoPadrao]}>
            <FontAwesome5 name="clock" size={19} color="#3E3D3D" />
            <Text style={[styles.textoPadrao, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Horário da Emissão:</Text>
          </View>
          <Text style={[styles.textoConfirmacao, { fontFamily: 'MPlusRounded1c-Medium' }]}>{horarioAtual}</Text>

          <View style={[styles.containerTextoPadrao]}>
            <FontAwesome6 name="phone-volume" size={19} color="#3E3D3D" />
            <Text style={[styles.textoPadrao, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Telefone de Contato:</Text>
          </View>
          <Text style={[styles.textoConfirmacao, { fontFamily: 'MPlusRounded1c-Medium' }]}>{consulta.telefoneContato}</Text>
          
          <View style={[styles.containerButton]}>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirm}
            >
              <Text style={[styles.confirmButtonText, {fontFamily: 'MPlusRounded1c-Bold'}]}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={onClose}
            >
              <Text style={[styles.cancelButtonText, {fontFamily: 'MPlusRounded1c-Bold'}]}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}