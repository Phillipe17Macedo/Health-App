import React, { useState, useEffect } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { styles } from "./styles";

// Configurar as traduções para o português
LocaleConfig.locales['pt'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  monthNamesShort: [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ],
  dayNames: [
    'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};

// Definir a configuração global de localidade para 'pt'
LocaleConfig.defaultLocale = 'pt';

interface CalendarioConsultaProps {
  visivel: boolean;
  onClose: () => void;
  onDateSelect: (date: string) => void;
  diasDisponiveis: string[];
}

const diasUteis = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado"
];

export default function CalendarioConsulta({
  visivel,
  onClose,
  onDateSelect,
  diasDisponiveis,
}: CalendarioConsultaProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [dataMarcada, setDataMarcada] = useState<
    Record<
      string,
      {
        selected?: boolean;
        marked?: boolean;
        selectedColor?: string;
        disabled?: boolean;
        textColor?: string;
      }
    >
  >({});

  useEffect(() => {
    const today = new Date();
    const todayFormatted = today.toISOString().split("T")[0];
    const novaDataMarcada: Record<
      string,
      {
        selected?: boolean;
        marked?: boolean;
        selectedColor?: string;
        disabled?: boolean;
        textColor?: string;
      }
    > = {};

    for (let i = -30; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const formattedDate = date.toISOString().split("T")[0];
      const dayOfWeek = diasUteis[date.getDay()];

      console.log(`Data: ${formattedDate}, Dia da Semana: ${dayOfWeek}, Disponível: ${diasDisponiveis.includes(dayOfWeek)}`);

      novaDataMarcada[formattedDate] = {
        disabled: !diasDisponiveis.includes(dayOfWeek) || formattedDate < todayFormatted,
        textColor: diasDisponiveis.includes(dayOfWeek) && formattedDate >= todayFormatted ? "#03A66A" : "darkgray",
      };
    }

    setDataMarcada(novaDataMarcada);
  }, [diasDisponiveis]);

  const handleDiaPress = (dia: DateData) => {
    const date = dia.dateString;
    if (!dataMarcada[date]?.disabled) {
      setSelectedDate(date);
      setDataMarcada((prev) => {
        const newMarkedDates = { ...prev };

        // Remover a marcação do dia anteriormente selecionado
        if (selectedDate && newMarkedDates[selectedDate]) {
          newMarkedDates[selectedDate] = {
            ...newMarkedDates[selectedDate],
            selected: false,
            selectedColor: undefined,
          };
        }
        // Adicionar a marcação ao novo dia selecionado
        newMarkedDates[date] = {
          ...newMarkedDates[date],
          selected: true,
          selectedColor: "#03A66A",
        };

        return newMarkedDates;
      });
    }
  };

  const handleConfirm = () => {
    if (selectedDate) {
      onDateSelect(selectedDate);
      onClose();
    }
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
          <Text style={styles.modalTitle}>Selecione uma Data Disponível</Text>
          <Calendar
            onDayPress={handleDiaPress}
            markedDates={dataMarcada}
            markingType={"custom"}
            theme={{
              selectedDayBackgroundColor: "#03A66A",
              selectedDayTextColor: "#fff",
              todayTextColor: "#0106E6",
              dayTextColor: "#03A66A",
              textDisabledColor: "#878787",
              arrowColor: "#03A66A",
            }}
            minDate={new Date().toISOString().split('T')[0]}
          />
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirm}
          >
            <Text style={styles.confirmButtonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
