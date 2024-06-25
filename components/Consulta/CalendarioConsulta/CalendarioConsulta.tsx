import React, { useState, useEffect } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { buscarDiasEHorariosDisponiveisMedico } from "@/utils/requestConfig";
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
  medicoId: string;
}

export default function CalendarioConsulta({
  visivel,
  onClose,
  onDateSelect,
  medicoId
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
  const [mesAtual, setMesAtual] = useState<number>(new Date().getMonth() + 1);
  const [anoAtual, setAnoAtual] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    if (medicoId) {
      fetchDiasEHorariosDisponiveis(medicoId, mesAtual, anoAtual);
    }
  }, [medicoId, mesAtual, anoAtual]);

  const fetchDiasEHorariosDisponiveis = async (medicoId: string, mes: number, ano: number) => {
    try {
      const response = await buscarDiasEHorariosDisponiveisMedico(medicoId, mes, ano);
      const diasDisponiveis = response.data.map((item: any) => item.data);
      const novaDataMarcada: Record<string, any> = {};

      diasDisponiveis.forEach((data: string) => {
        novaDataMarcada[data] = {
          marked: true,
          textColor: "#03A66A",
        };
      });

      setDataMarcada(novaDataMarcada);
    } catch (error) {
      console.error("Erro ao buscar dias e horários disponíveis:", error);
    }
  };

  const handleMonthChange = (month: DateData) => {
    setMesAtual(month.month);
    setAnoAtual(month.year);
  };

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
            onMonthChange={handleMonthChange}
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