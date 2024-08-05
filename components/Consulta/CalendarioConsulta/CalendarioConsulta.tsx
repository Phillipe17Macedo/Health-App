import React, { useState, useEffect } from "react";
import { Modal, View, Text, TouchableOpacity, Alert } from "react-native";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { buscarDiasAtendimentoMedico } from "@/utils/requestConfig";
import { styles } from "./styles";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

LocaleConfig.locales["pt"] = {
  monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  today: "Hoje",
};

LocaleConfig.defaultLocale = "pt";

interface Horario {
  idHorario: string;
  horario: string;
}

interface DiaAtendimento {
  data: string;
  dia: string;
  horarios: Horario[];
}

interface CalendarioConsultaProps {
  visivel: boolean;
  onClose: () => void;
  onDateSelect: (date: string) => void;
  medicoId: string;
  diasDisponiveis: DiaAtendimento[]; // Adicione esta linha
  setDiasDisponiveis: React.Dispatch<React.SetStateAction<DiaAtendimento[]>>; // Adicione esta linha
}

export default function CalendarioConsulta({
  visivel,
  onClose,
  onDateSelect,
  medicoId,
  diasDisponiveis,
  setDiasDisponiveis
}: CalendarioConsultaProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [dataMarcada, setDataMarcada] = useState<Record<string, any>>({});
  const [mesAtual, setMesAtual] = useState<number>(new Date().getMonth() + 1);
  const [anoAtual, setAnoAtual] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    if (medicoId) {
      fetchDiasAtendimento(medicoId, mesAtual, anoAtual);
    }
  }, [medicoId, mesAtual, anoAtual]);

  const fetchDiasAtendimento = async (medicoId: string, mes: number, ano: number) => {
    try {
      console.log(`Calendario: Buscando dias de atendimento para o médico ${medicoId} no mês ${mes}/${ano}`);
      const response = await buscarDiasAtendimentoMedico(medicoId, mes, ano);
      console.log("Calendario: Resposta da API - Dias de Atendimento: ", response);
      const diasAtendimento: DiaAtendimento[] = response.data || [];
      const novaDataMarcada: Record<string, any> = {};

      const dataAtual = new Date();
      diasAtendimento.forEach((item) => {
        const dataFormatada = item.data.split("T")[0];
        const horariosDisponiveis = item.horarios.map((horario) => new Date(`${dataFormatada}T${horario.horario}`).getTime());

        const haHorariosDisponiveis = horariosDisponiveis.some((horario) => horario > dataAtual.getTime());

        novaDataMarcada[dataFormatada] = {
          marked: true,
          textColor: "#03A66A",
          disabled: !haHorariosDisponiveis,
          customStyles: {
            text: {
              textDecorationLine: haHorariosDisponiveis ? "none" : "line-through",
            },
          },
        };
      });

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

      console.log("Calendario: Dias de Atendimento Carregados: ", diasAtendimento);

      setDiasDisponiveis(diasAtendimento);
      setDataMarcada(novaDataMarcada);
    } catch (error) {
      console.error("Calendario: Erro ao buscar dias de atendimento:", error);
    }
  };

  const handleMonthChange = (month: DateData) => {
    console.log(`Calendario: Mudança de mês: ${month.month}/${month.year}`);
    setMesAtual(month.month);
    setAnoAtual(month.year);
  };

  const handleDiaPress = (dia: DateData) => {
    const date = dia.dateString;
    console.log("Calendario: Dia Pressionado: ", date);
    if (dataMarcada[date] && !dataMarcada[date].disabled) {
      setSelectedDate(date);
      setDataMarcada((prev) => {
        const newMarkedDates = { ...prev };

        if (selectedDate && newMarkedDates[selectedDate]) {
          newMarkedDates[selectedDate] = {
            ...newMarkedDates[selectedDate],
            selected: false,
            selectedColor: undefined,
          };
        }

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
      const diaSelecionado = diasDisponiveis.find((dia) => dia.data.split("T")[0] === selectedDate);

      if (diaSelecionado && diaSelecionado.horarios.length > 0) {
        onDateSelect(selectedDate);
        onClose();
      } else {
        Alert.alert("Erro", "Não há horários disponíveis para esta data.");
      }
    }
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
    <Modal animationType="slide" transparent={true} visible={visivel} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={[styles.modalTitle, { fontFamily: "MPlusRounded1c-ExtraBold" }]}>Selecione uma Data Disponível</Text>
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
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
              <Text style={[styles.confirmButtonText, { fontFamily: "MPlusRounded1c-Bold" }]}>Confirmar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={[styles.cancelButtonText, { fontFamily: "MPlusRounded1c-Bold" }]}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
