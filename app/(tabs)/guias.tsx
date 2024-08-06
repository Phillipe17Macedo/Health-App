import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  RefreshControl,
  View,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/StylesServicosPage/styles";
import { StatusBar } from "expo-status-bar";
import { ComponenteGuiaConsulta } from "@/components/Guias/ComponentesGuiaConsulta/ComponenteGuiaConsulta";
import { ComponenteGuiaExame } from "@/components/Guias/ComponentesGuiaExame/ComponenteGuiaExame";
import GuiaConsultaEmitida from '@/components/Guias/GuiasEmitidas/GuiaConsulta/GuiaConsultaEmitida';
import {
  buscarGuiasConsultasEmitidas,
  buscarUnidadeAtendimento,
} from "@/utils/requestConfig";
import ModalCarregamento from "@/components/constants/ModalCarregamento";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

interface Guia {
  idGuia: number;
  dataGuia: string;
  aderente: string;
  dependente: string | null;
  especialidade: string;
  idMedico: number;
  medico: string;
  status: string;
  vlrGuia: number;
}

const Guias: React.FC = () => {
  const [guias, setGuias] = useState<Guia[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [idAderente, setIdAderente] = useState<string | null>(null);
  const [idEmpresas, setIdEmpresas] = useState<string[]>([]);

  const fetchGuias = async (): Promise<void> => {
    try {
      if (idAderente) {
        const response = await buscarGuiasConsultasEmitidas(Number(idAderente));
        const guiasOrdenadas = response.data.sort((a: Guia, b: Guia) => {
          const dataA = new Date(a.dataGuia).getTime();
          const dataB = new Date(b.dataGuia).getTime();
          return dataB - dataA;
        });
        setGuias(guiasOrdenadas);
      }
    } catch (error) {
      console.error("Erro ao buscar guias de consulta:", error);
    }
  };

  const loadUser = async (): Promise<void> => {
    setLoading(true);
    try {
      const userId = await AsyncStorage.getItem("userId");
      if (userId) {
        setIdAderente(userId);
        const unidadesResponse = await buscarUnidadeAtendimento();
        const empresasIds = unidadesResponse.data.map((unidade: any) => unidade.idEmpresa);
        setIdEmpresas(empresasIds);

        await fetchGuias();
      }
    } catch (error) {
      console.error("Erro ao carregar dados do usuário:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onRefresh = async (): Promise<void> => {
    setRefreshing(true);
    await loadUser();
    setRefreshing(false);
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
        <View style={styles.containerOpcoesServicos} >
          <ComponenteGuiaConsulta />
          <ComponenteGuiaExame />
        </View>

        <View style={styles.constainerTituloAgendamento}>
          <MaterialCommunityIcons name="calendar-clock" size={21} color="#025940" />
          <Text style={[styles.tituloAgendamento, {fontFamily: 'MPlusRounded1c-Bold'}]}>Minhas Guias</Text>
        </View>

        {loading ? (
          <ModalCarregamento visivel={loading} />
        ) : (
          guias.length > 0 ? (
            <GuiaConsultaEmitida
              guias={guias}
              onGuiaCancelada={fetchGuias}
            />
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={[styles.emptyText, {fontFamily: 'MPlusRounded1c-Medium'}]}>Não há guias emitidas.</Text>
            </View>
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Guias;