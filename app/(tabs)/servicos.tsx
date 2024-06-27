import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, ScrollView, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/StylesServicosPage/styles";
import { StatusBar } from "expo-status-bar";
import { ComponentesConsulta } from "@/components/Servicos/ComponentesConsulta/ComponenteConsulta";
import { ComponentesExame } from "@/components/Servicos/ComponentesExame/ComponenteExame";
import AgendadoConsulta from "@/components/Servicos/Agendados/Consulta/AgendadoConsulta";
import AgendadoExame from "@/components/Servicos/Agendados/Exames/AgendadoExame";
import { ConsultasFicticias, ExamesFicticios } from "@/components/Servicos/Agendados/AgedamentosFiciticios";
import { buscarAgendamentosConsulta, buscarUnidadeAtendimento } from "@/utils/requestConfig";
import ModalCarregamento from "@/components/constants/ModalCarregamento";

const Servicos: React.FC = () => {
  const [consultas, setConsultas] = useState<any[]>([]);
  const [exames, setExames] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [idAderente, setIdAderente] = useState<string | null>(null);
  const [idEmpresa, setIdEmpresa] = useState<string | null>(null);

  useEffect(() => {
    const fetchUnidadesAtendimento = async () => {
      try {
        setLoading(true);
        const userId = await AsyncStorage.getItem('userId');
        console.log("User ID:", userId);

        if (userId) {
          setIdAderente(userId);
          const response = await buscarUnidadeAtendimento();
          const unidades = response.data;
          console.log("Unidades de Atendimento recebidas:", unidades);

          if (unidades.length > 0) {
            const empresaId = unidades[0].idEmpresa.toString();
            await AsyncStorage.setItem('empresaId', empresaId);
            setIdEmpresa(empresaId);
            return empresaId;
          } else {
            Alert.alert('Erro', 'Nenhuma unidade de atendimento encontrada.');
            console.error('Erro: Nenhuma unidade de atendimento encontrada.');
            return null;
          }
        } else {
          Alert.alert('Erro', 'Usuário não encontrado.');
          console.error('Erro: Usuário não encontrado.');
          return null;
        }
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar as unidades de atendimento.');
        console.error('Erro ao carregar as unidades de atendimento:', error);
        return null;
      } finally {
        setLoading(false);
      }
    };

    const fetchConsultas = async () => {
      try {
        setLoading(true);
        const userId = await AsyncStorage.getItem('userId');
        const empresaId = await AsyncStorage.getItem('empresaId');
        console.log("User ID:", userId);
        console.log("Empresa ID:", empresaId);

        if (userId && empresaId) {
          setIdAderente(userId);
          setIdEmpresa(empresaId);
          const response = await buscarAgendamentosConsulta(userId, empresaId);
          console.log("Consultas recebidas:", response.data);
          setConsultas(response.data);
        } else {
          const fetchedEmpresaId = await fetchUnidadesAtendimento();
          if (fetchedEmpresaId) {
            const response = await buscarAgendamentosConsulta(userId, fetchedEmpresaId);
            console.log("Consultas recebidas após buscar unidades:", response.data);
            setConsultas(response.data);
          } else {
            Alert.alert('Erro', 'Usuário ou empresa não encontrados.');
            console.error('Erro: Usuário ou empresa não encontrados.');
          }
        }
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar as consultas.');
        console.error('Erro ao carregar as consultas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConsultas();
    setExames(ExamesFicticios);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <ComponentesConsulta/>
        <ComponentesExame/>
        {loading ? (
          <ModalCarregamento visivel={loading} />
        ) : (
          <AgendadoConsulta consultas={consultas} />
        )}
        <AgendadoExame exames={exames} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Servicos;