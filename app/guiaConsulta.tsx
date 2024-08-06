import React, { useState, useEffect } from "react";
import { View, Alert, Text } from "react-native";
import { Checkbox } from "react-native-paper";
import { styles } from "../styles/GuiaConsulta/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HeaderGuiaConsulta } from "@/components/GuiaConsulta/HeaderGuiaConsulta/Header";
import { DicaGuiaConsulta } from "../components/GuiaConsulta/ComponenteDicaSolicitacao/DicaGuiaConsulta";
import Especialidade from "@/components/GuiaConsulta/DropDownEspecialidade/Especialidade";
import Medico from "@/components/GuiaConsulta/DropDownMedicos/Medico";
import SelecaoDependente from "@/components/GuiaConsulta/ModalSelecaoDependentes/SelecaoDependente";
import ModalCarregamento from "@/components/constants/ModalCarregamento";
import {
  buscarAderente,
  buscarDependentes,
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
  const [dependenteSelecionado, setDependenteSelecionado] = useState<
    string | null
  >(null);
  const [especialidadeId, setEspecialidadeId] = useState<string | null>(null);
  const [especialidadeNome, setEspecialidadeNome] = useState<string | null>(
    null
  );
  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState<
    string | null
  >(null);
  const [medico, setMedico] = useState<any | null>(null);
  const [consulta, setConsulta] = useState({
    usuario: "",
    dependente: "",
    medico: "",
    especialidade: "",
    data: "",
    horario: "",
    telefoneContato: "(34) 99931-7302",
  });

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
            usuario: usuarioLogado.nome,
          }));

          if (usuarioLogado && usuarioLogado.idAderente) {
            const dependentesResponse = await buscarDependentes(
              usuarioLogado.idAderente
            );
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
        dependente: dependenteSelecionado || "",
        usuario: usuario.nome || "",
      }));
    } else {
      setConsulta((prev) => ({
        ...prev,
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
    setConsulta((prev) => ({
      ...prev,
      medico: medico.nome || "",
      especialidade: especialidadeNome || "",
    }));
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
    <View style={styles.container}>
      <HeaderGuiaConsulta />
      <ModalCarregamento visivel={loading} />
      <DicaGuiaConsulta />
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={isDependente ? "checked" : "unchecked"}
          onPress={() => handleCheckboxChange(!isDependente)}
        />
        <Text style={[styles.label, {fontFamily: 'MPlusRounded1c-ExtraBold'}]}>Para um dependente?</Text>
      </View>
      <Especialidade
        EspecialidadeCarregada={(id, nome) => {
          setEspecialidadeId(id);
          setEspecialidadeNome(nome);
          setConsulta((prev) => ({
            ...prev,
            especialidade: nome || "",
          }));
        }}
        especialidadeSelecionada={especialidadeSelecionada}
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
              medico: medico.label || "",
            }));
          }}
        />
      )}
      <SelecaoDependente
        visivel={selectDependenteVisivel}
        onClose={() => setSelectDependenteVisivel(false)}
        onConfirm={handleConfirmDependente}
        isDependente={isDependente}
        setIsDependente={setIsDependente}
        dependentes={dependentes} // Passa os dependentes para o modal
        selectedDependente={dependenteSelecionado}
        setSelectedDependente={setDependenteSelecionado}
      />
    </View>
  );
}