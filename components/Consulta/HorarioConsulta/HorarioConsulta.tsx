import React, { useEffect, useState } from "react";
import { Modal, View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from './styles';
import { FontAwesome6 } from '@expo/vector-icons';

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

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visivel}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Selecione um Horário Disponível</Text>
          <FlatList
            data={filteredHorarios}
            keyExtractor={(item) => item.idHorario.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.timeItem}
                onPress={() => handleTimePress(item)}
              >
                <FontAwesome6 name="clock" size={14} color="#3E3D3D" />
                <Text style={styles.timeText}>{item.horario}</Text>
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
              <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={onClose}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
