import React, { useState, useEffect } from "react";
import { Modal, View, Text, TouchableOpacity, Alert } from "react-native";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { buscarDiasAtendimentoMedico } from "@/utils/requestConfig";
import { styles } from "./styles";

// Configurar as traduções para o português
LocaleConfig.locales["pt"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  today: "Hoje",
};

// Definir a configuração global de localidade para 'pt'
LocaleConfig.defaultLocale = "pt";

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
  medicoId,
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
  const [diasDisponiveis, setDiasDisponiveis] = useState<any[]>([]);
  const [mesAtual, setMesAtual] = useState<number>(new Date().getMonth() + 1);
  const [anoAtual, setAnoAtual] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    if (medicoId) {
      fetchDiasAtendimento(medicoId, mesAtual, anoAtual);
    }
  }, [medicoId, mesAtual, anoAtual]);

  const fetchDiasAtendimento = async (
    medicoId: string,
    mes: number,
    ano: number
  ) => {
    try {
      console.log(
        `Buscando dias de atendimento para o médico ${medicoId} no mês ${mes}/${ano}`
      );
      const response = await buscarDiasAtendimentoMedico(medicoId, mes, ano);
      const diasAtendimento = response.data;
      //const novaDataMarcada: Record<string, any> = {};

      if (diasAtendimento.lenght === 0) {
        if(mes === 12) {
          await fetchDiasAtendimento(medicoId, 1, ano + 1);
        } else {
          await fetchDiasAtendimento(medicoId, mes + 1, ano);
        }
      } else {
        const novaDataMarcada: Record<string, any> = {};

        diasAtendimento.forEach((item: any) => {
          const dataFormatada = item.data.split("T")[0];
          novaDataMarcada[dataFormatada] = {
            marked: true,
            textColor: "#03A66A",
          };
        });

        //const hoje = new Date();
        const ultimoDiaMes = new Date(ano, mes, 0);
        for (let dia = 1; dia <= ultimoDiaMes.getDate(); dia++) {
          const date = new Date(ano, mes - 1, dia).toISOString().split("T")[0];
          if (!novaDataMarcada[date]) {
            novaDataMarcada[date] = {
              disabled: true,
              textColor: "#878787",
              customStyles: {
                text: {
                  textDecorationLine: "line-through",
                },
              },
            };
          }
        }
      
        console.log("Dias de Atendimento Carregados: ", diasAtendimento);

        setDiasDisponiveis(diasAtendimento);
        setDataMarcada(novaDataMarcada);
      }
    } catch (error) {
      console.error("Erro ao buscar dias de atendimento:", error);
    }
  };

  const handleMonthChange = (month: DateData) => {
    setMesAtual(month.month);
    setAnoAtual(month.year);
  };

  const handleDiaPress = (dia: DateData) => {
    const date = dia.dateString;
    console.log("Dia Pressionado: ", date);
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
      const diaSelecionado = diasDisponiveis.find(
        (dia: any) => dia.data.split("T")[0] === selectedDate
      );

      if (diaSelecionado && diaSelecionado.horarios.length > 0) {
        onDateSelect(selectedDate);
        onClose();
      } else {
        Alert.alert("Erro", "Não há horários disponíveis para esta data.");
      }
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
            onMonthChange={handleMonthChange}
            markingType={"custom"}
            theme={{
              selectedDayBackgroundColor: "#03A66A",
              selectedDayTextColor: "#fff",
              todayTextColor: "#0106E6",
              dayTextColor: "#03A66A",
              textDisabledColor: "#878787",
              arrowColor: "#03A66A",
            }}
            minDate={new Date().toISOString().split("T")[0]}
          />
          <View style={[styles.containerButton]}>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirm}
            >
              <Text style={styles.confirmButtonText}>Confirmar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}