import React, { useState, useEffect } from "react";
import {
  View,
  Alert,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { styles } from "../styles/GuiaConsulta/styles";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HeaderGuiaConsulta } from "@/components/GuiaConsulta/HeaderGuiaConsulta/Header";
import { DicaGuiaConsulta } from "../components/GuiaConsulta/ComponenteDicaSolicitacao/DicaGuiaConsulta";
import Especialidade from "@/components/GuiaConsulta/DropDownEspecialidade/Especialidade";
import Medico from "@/components/GuiaConsulta/DropDownMedicos/Medico";
import SelecaoDependente from "@/components/GuiaConsulta/ModalSelecaoDependentes/SelecaoDependente";
import ModalCarregamento from "@/components/constants/ModalCarregamento";
import ConfirmacaoGuiaConsulta from "@/components/GuiaConsulta/ConfirmacaoGuiaConsulta/ConfirmacaoGuiaConsulta";
import {
  buscarAderente,
  buscarDependentes,
  EmitirGuiaDeConsulta,
} from "@/utils/requestConfig";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function TelaGuiaConsulta() {
  const [loading, setLoading] = useState(false);
  const [usuario, setUsuario] = useState<any | null>(null);
  const [cpfUsuario, setCpfUsuario] = useState<string | null>(null);
  const [dependentes, setDependentes] = useState<any[]>([]);
  const [selectDependenteVisivel, setSelectDependenteVisivel] = useState(false);
  const [isDependente, setIsDependente] = useState(false);
  const [dependenteSelecionado, setDependenteSelecionado] = useState<string | null>(null);
  const [especialidadeId, setEspecialidadeId] = useState<string | null>(null);
  const [especialidadeNome, setEspecialidadeNome] = useState<string | null>(null);
  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState<string | null>(null);
  const [medico, setMedico] = useState<any | null>(null);
  const [consulta, setConsulta] = useState({
    idAderente: 0,
    cpfAderente: "",
    idEspecialidade: 0,
    idMedico: 0,
    idDep: null as number | null,
    dataEmissao: new Date().toISOString(),
    vlrConsulta: 0,
    usuario: "",
    dependente: "",
    medico: "",
    especialidade: "",
    data: "",
    horario: "",
    telefoneContato: "(34) 99931-7302",
  });
  const [confirmacaoVisivel, setConfirmacaoVisivel] = useState(false);
  const [especialidadeAberta, setEspecialidadeAberta] = useState(false);
  const [medicoAberto, setMedicoAberto] = useState(false);

  useEffect(() => {
    const fetchUsuarioLogado = async () => {
      try {
        setLoading(true);
        const cpfDoBanco = await AsyncStorage.getItem("userCpf");
        if (cpfDoBanco) {
          setCpfUsuario(cpfDoBanco);

          console.log("Buscando usuário com CPF:", cpfDoBanco);

          const response = await buscarAderente(cpfDoBanco, true);
          const usuarioLogado = response.data;

          console.log("Dados do usuário:", usuarioLogado);
          setUsuario(usuarioLogado);
          setConsulta((prev) => ({
            ...prev,
            idAderente: usuarioLogado.idAderente,
            cpfAderente: cpfDoBanco,
            usuario: usuarioLogado.nome,
          }));

          if (usuarioLogado && usuarioLogado.idAderente) {
            const dependentesResponse = await buscarDependentes(usuarioLogado.idAderente);
            setDependentes(dependentesResponse.data);
          }
        }
      } catch (error) {
        console.error("Erro ao buscar usuário logado:", error);
        Alert.alert("Erro", "Usuário não encontrado");
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarioLogado();
  }, []);

  const handleConfirmDependente = () => {
    if (isDependente && dependenteSelecionado) {
      setConsulta((prev) => ({
        ...prev,
        idDep: Number(dependenteSelecionado),
        dependente: dependenteSelecionado || "",
        usuario: usuario.nome || "",
      }));
    } else {
      setConsulta((prev) => ({
        ...prev,
        idDep: null,
        dependente: "null",
        usuario: usuario.nome || "",
      }));
    }
    setSelectDependenteVisivel(false);
  };

  const handleCheckboxChange = (checked: boolean) => {
    setIsDependente(checked);
    if (checked) {
      setSelectDependenteVisivel(true);
    }
  };

  const handleMedicoSelect = (medico: any) => {
    console.log("Medico Selecionado: ", medico);
    const now = new Date().toISOString();
    setConsulta((prev) => ({
      ...prev,
      idMedico: medico.value,
      medico: medico.label || "",
      especialidade: especialidadeNome || "",
      dataEmissao: now,
    }));
    setConfirmacaoVisivel(true);
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

  const handleConfirmacao = async (json: any) => {
    try {
      setLoading(true);
      const { idEmpresa, ...jsonWithoutIdEmpresa } = json;
      const response = await EmitirGuiaDeConsulta(jsonWithoutIdEmpresa);

      if (response.success) {
        if (response.data.status) {
          Alert.alert("Sucesso", "Guia de consulta emitida com sucesso!");
          // Limpar os campos após emissão bem-sucedida
          setIsDependente(false);
          setDependenteSelecionado(null);
          setEspecialidadeId(null);
          setEspecialidadeNome(null);
          setMedico(null);
          setConsulta({
            idAderente: consulta.idAderente,
            cpfAderente: consulta.cpfAderente,
            idEspecialidade: 0,
            idMedico: 0,
            idDep: null,
            dataEmissao: new Date().toISOString(),
            vlrConsulta: 0,
            usuario: consulta.usuario,
            dependente: "",
            medico: "",
            especialidade: "",
            data: "",
            horario: "",
            telefoneContato: "(34) 99931-7302",
          });
        } else {
          Alert.alert("Não foi possível emitir sua guia de consulta:", `${response.data.motivo}`);
        }
      } else {
        Alert.alert("Atenção", "Erro ao emitir guia de consulta.");
      }
    } catch (error) {
      console.error("Erro ao emitir guia de consulta:", error);
      Alert.alert("Erro", "Erro ao emitir guia de consulta.");
    } finally {
      setLoading(false);
      setConfirmacaoVisivel(false);
    }
  };

  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <Image
          source={require("@/assets/images/medicos/estrutura-clinica.png")}
          style={[{ width: "100%", height: 600, position: "relative" }]}
        />
        <HeaderGuiaConsulta />
        <ModalCarregamento visivel={loading} />
        <DicaGuiaConsulta />
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={isDependente ? "checked" : "unchecked"}
            onPress={() => handleCheckboxChange(!isDependente)}
          />
          <Text
            style={[styles.label, { fontFamily: "MPlusRounded1c-ExtraBold" }]}
          >
            Para um dependente?
          </Text>
        </View>
        <Especialidade
          EspecialidadeCarregada={(id, nome) => {
            setEspecialidadeId(id);
            setEspecialidadeNome(nome);
            setConsulta((prev) => ({
              ...prev,
              idEspecialidade: Number(id),
              especialidade: nome || "",
            }));
          }}
          especialidadeSelecionada={especialidadeSelecionada}
          onOpen={() => {
            setMedicoAberto(false);
            setEspecialidadeAberta(true);
          }}
          onClose={() => setEspecialidadeAberta(false)}
          aberto={especialidadeAberta}
        />
        {especialidadeId && (
          <Medico
            especialidadeId={especialidadeId}
            medicoSelecionado={medico ? medico.id : null}
            onMedicoSelect={(medico) => {
              handleMedicoSelect(medico);
              setMedico(medico);
              setConsulta((prev) => ({
                ...prev,
                idMedico: Number(medico.value),
                medico: medico.label || "",
              }));
            }}
            onOpen={() => {
              setEspecialidadeAberta(false);
              setMedicoAberto(true);
            }}
            onClose={() => setMedicoAberto(false)}
            aberto={medicoAberto}
          />
        )}
        <SelecaoDependente
          visivel={selectDependenteVisivel}
          onClose={() => setSelectDependenteVisivel(false)}
          onConfirm={handleConfirmDependente}
          isDependente={isDependente}
          setIsDependente={setIsDependente}
          dependentes={dependentes}
          selectedDependente={dependenteSelecionado}
          setSelectedDependente={setDependenteSelecionado}
        />
        <ConfirmacaoGuiaConsulta
          visivel={confirmacaoVisivel}
          onClose={() => setConfirmacaoVisivel(false)}
          onConfirm={handleConfirmacao}
          consulta={consulta}
        />
        <View style={[{ width: '100%', height: 140, backgroundColor: '#03A66A' }]}></View>
      </ScrollView>
    </SafeAreaView>
  );
}