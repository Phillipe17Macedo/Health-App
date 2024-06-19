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


// Minha função que defini os dias da semana, coloquei uteis, mas são os dias corridos
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
        customStyles?: { text: { textDecorationLine: string } };
      }
    >
  >({});

  useEffect(() => {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = hoje.getMonth();
    
    // Obter o último dia do mês atual
    const ultimoDiaMes = new Date(ano, mes + 1, 0);
    const hojeFormatado = hoje.toISOString().split("T")[0];
    const ultimoDiaFormatado = ultimoDiaMes.toISOString().split("T")[0];

    const novaDataMarcada: Record<
      string,
      {
        selected?: boolean;
        marked?: boolean;
        selectedColor?: string;
        disabled?: boolean;
        textColor?: string;
        customStyles?: { text: { textDecorationLine: string } };
      }
    > = {};

    for (let i = 0; i <= ultimoDiaMes.getDate(); i++) {
      const date = new Date(ano, mes, i + 1);
      const formattedDate = date.toISOString().split("T")[0];
      const dayOfWeek = diasUteis[date.getDay()];

      novaDataMarcada[formattedDate] = {
        disabled: !diasDisponiveis.includes(dayOfWeek) || formattedDate < hojeFormatado,
        textColor: diasDisponiveis.includes(dayOfWeek) && formattedDate >= hojeFormatado ? "#03A66A" : "#878787",
        customStyles: {
          text: {
            textDecorationLine: !diasDisponiveis.includes(dayOfWeek) || formattedDate < hojeFormatado ? 'line-through' : 'none',
          },
        },
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
            maxDate={new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).toISOString().split('T')[0]}
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
