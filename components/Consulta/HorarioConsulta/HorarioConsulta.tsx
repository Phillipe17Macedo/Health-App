import React, { useEffect, useState } from "react";
import { Modal, View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from './styles';
import { FontAwesome6 } from '@expo/vector-icons';
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

interface HorarioConsultaProps {
  visivel: boolean;
  onClose: () => void;
  onTimeSelect: (horario: any) => void;
  horariosDisponiveis: any[];
  dataSelecionada: string | null;
  onBackToCalendar: () => void;
}

export default function HorarioConsulta({
  visivel,
  onClose,
  onTimeSelect,
  horariosDisponiveis,
  dataSelecionada,
  onBackToCalendar,
}: HorarioConsultaProps) {
  const [filteredHorarios, setFilteredHorarios] = useState<any[]>([]);

  useEffect(() => {
    const now = new Date();
    const currentDateString = now.toISOString().split('T')[0];

    console.log("Data atual:", currentDateString);
    console.log("Data selecionada:", dataSelecionada);

    if (horariosDisponiveis && horariosDisponiveis.length > 0) {
      let filtered = horariosDisponiveis;

      if (dataSelecionada === currentDateString) {
        const currentTime = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        console.log("Horário atual em segundos:", currentTime);

        filtered = horariosDisponiveis.filter((horario) => {
          const [horas, minutos, segundos] = horario.horario.split(':').map(Number);
          const horarioSegundos = horas * 3600 + minutos * 60 + segundos;
          console.log(`Horário: ${horario.horario}, em segundos: ${horarioSegundos}, comparando com o atual: ${currentTime}`);
          return horarioSegundos > currentTime;
        });

        console.log("Horários filtrados para o dia de hoje:", filtered);
      } else {
        console.log("Data selecionada não é hoje, exibindo todos os horários.");
      }

      setFilteredHorarios(filtered);
    } else {
      console.log("Nenhum horário disponível encontrado.");
    }
  }, [horariosDisponiveis, dataSelecionada]);

  const handleTimePress = (horario: any) => {
    onTimeSelect(horario);
    onClose();
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
      animationType="slide"
      transparent={true}
      visible={visivel}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={[styles.modalTitle, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Selecione um Horário Disponível</Text>
          <FlatList
            data={filteredHorarios}
            keyExtractor={(item) => item.idHorario.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.timeItem}
                onPress={() => handleTimePress(item)}
              >
                <FontAwesome6 name="clock" size={14} color="#3E3D3D" />
                <Text style={[styles.timeText, {fontFamily: 'MPlusRounded1c-Bold'}]}>{item.horario}</Text>
              </TouchableOpacity>
            )}
            numColumns={3}
            columnWrapperStyle={styles.columnWrapper}
          />
          <View style={styles.conatinerButtons}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={onBackToCalendar}
            >
              <Text style={[styles.backButtonText, {fontFamily: 'MPlusRounded1c-Bold'}]}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={onClose}
            >
              <Text style={[styles.closeButtonText, {fontFamily: 'MPlusRounded1c-Bold'}]}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
