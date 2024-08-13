import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Alert,
  RefreshControl,
  View,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/StylesServicosPage/styles";
import { StatusBar } from "expo-status-bar";
import { ComponentesConsulta } from "@/components/Servicos/ComponentesConsulta/ComponenteConsulta";
import { ComponentesExame } from "@/components/Servicos/ComponentesExame/ComponenteExame";
import AgendadoConsulta from "@/components/Servicos/Agendados/Consulta/AgendadoConsulta";
import {
  ConsultasFicticias,
  ExamesFicticios,
} from "@/components/Servicos/Agendados/AgedamentosFiciticios";
import { buscarAgendamentosConsulta } from "@/utils/buscarAgendamentoConsulta";
import { buscarUnidadeAtendimento } from "@/utils/buscarUnidadesAtendimento";
import ModalCarregamento from "@/components/constants/ModalCarregamento";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

interface Consulta {
  idAgenda: number;
  dataAgenda: string | null;
  horaAgenda: string | null;
  medico: string;
  status: string;
}

const Servicos: React.FC = () => {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [exames, setExames] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [idAderente, setIdAderente] = useState<string | null>(null);
  const [idEmpresas, setIdEmpresas] = useState<string[]>([]);

  const fetchConsultas = async () => {
    try {
      setLoading(true);
      const userId = await AsyncStorage.getItem("userId");
      if (userId && idEmpresas.length > 0) {
        setIdAderente(userId);

        let allConsultas: Consulta[] = [];

        for (const empresaId of idEmpresas) {
          const response = await buscarAgendamentosConsulta(userId, empresaId);
          allConsultas = allConsultas.concat(response.data ?? []);
        }

        const consultaOrdenada = allConsultas.sort(
          (a: Consulta, b: Consulta) => {
            const dateA = new Date(
              `${a.dataAgenda?.split("T")[0]}T${a.horaAgenda}`
            );
            const dateB = new Date(
              `${b.dataAgenda?.split("T")[0]}T${b.horaAgenda}`
            );
            return dateA.getTime() - dateB.getTime();
          }
        );

        setConsultas(consultaOrdenada);
      } else {
        console.error(
          "Erro",
          "Usuário ou unidades de atendimento não encontrados."
        );
      }
    } catch (error) {
      console.error("Erro ao carregar as consultas:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userId = await AsyncStorage.getItem("userId");
        if (userId) {
          setIdAderente(userId);
          const unidadesResponse = await buscarUnidadeAtendimento();
          const empresasIds = unidadesResponse.data.map(
            (unidade: any) => unidade.idEmpresa
          );
          setIdEmpresas(empresasIds);
          await AsyncStorage.setItem("empresaIds", JSON.stringify(empresasIds));
          await fetchConsultas();
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    setExames(ExamesFicticios);
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchConsultas();
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
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.containerOpcoesServicos}>
          <ComponentesConsulta />
          <ComponentesExame />
        </View>

        <View style={styles.constainerTituloAgendamento}>
          <MaterialCommunityIcons
            name="calendar-clock"
            size={28}
            color="#025940"
          />
          <Text
            style={[
              styles.tituloAgendamento,
              { fontFamily: "MPlusRounded1c-Bold" },
            ]}
          >
            Meus Agendamentos
          </Text>
        </View>

        {loading ? (
          <ModalCarregamento visivel={loading} />
        ) : consultas.length > 0 ? (
          <AgendadoConsulta
            consultas={consultas}
            onConsultaCancelada={fetchConsultas}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Text
              style={[
                styles.emptyText,
                { fontFamily: "MPlusRounded1c-Medium" },
              ]}
            >
              Não há agendamentos.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Servicos;
