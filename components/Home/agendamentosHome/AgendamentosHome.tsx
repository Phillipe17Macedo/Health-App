import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { styles } from "./styles";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";

interface Consulta {
  idAgenda: number;
  dataAgenda: string;
  horaAgenda: string;
  medico: string;
  especialidade: string;
  status: string;
}

interface AgendamentosHomeProps {
  consultas: Consulta[];
}

const AgendamentosHome: React.FC<AgendamentosHomeProps> = ({ consultas }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [consultaMaisProxima, setConsultaMaisProxima] = useState<Consulta | null>(null);

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

        findProximaConsulta();

        setFontLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, [consultas]);

  const findProximaConsulta = () => {
    const now = new Date();
    const proximaConsulta = consultas
      .filter((consulta) => {
        if (consulta.dataAgenda && consulta.horaAgenda) {
          const dataConsulta = new Date(`${consulta.dataAgenda.split("T")[0]}T${consulta.horaAgenda}`);
          return dataConsulta >= now;
        }
        return false;
      })
      .sort((a, b) => {
        const dateA = new Date(`${a.dataAgenda?.split("T")[0]}T${a.horaAgenda}`);
        const dateB = new Date(`${b.dataAgenda?.split("T")[0]}T${b.horaAgenda}`);
        return dateA.getTime() - dateB.getTime();
      })[0];
    setConsultaMaisProxima(proximaConsulta || null);
  };

  if (!fontLoaded) {
    return null;
  }

  if (!consultaMaisProxima) {
    return (
      <Link href={"/servicos"} style={[{alignContent: 'center', marginTop: 20, alignSelf: 'center', justifyContent: 'center', width: "100%" }]}>
        <View style={styles.container}>
          <View style={[styles.containerAgendamento]}>
            <View style={[styles.containerAreaTitulo]}>
              <Text
                style={[
                  styles.textoTituloAgendamento,
                  { fontFamily: "MPlusRounded1c-Medium" },
                ]}
              >
                Agende uma Consulta ou Exame agora!
              </Text>
              <View>
                <Entypo name="chevron-right" size={18} color="#FFF" />
              </View>
            </View>
            <View style={[styles.containerAreaDataAgendamento]}>
              <View>
                <FontAwesome5 name="calendar-alt" size={18} color="#FFF" />
              </View>
              <Text
                style={[
                  styles.textoDataAgendamento,
                  { fontFamily: "MPlusRounded1c-Bold" },
                ]}
              >
                {"  "}
                Nenhum agendamento
              </Text>
            </View>
            <View style={[styles.containerAreaHorarioAgendamento]}>
              <View>
                <FontAwesome5 name="clock" size={18} color="#FFF" />
              </View>
              <Text
                style={[
                  styles.textoDataAgendamento,
                  { fontFamily: "MPlusRounded1c-Bold" },
                ]}
              >
                {"  "}
                Nenhum agendamento
              </Text>
            </View>
          </View>
          <View style={[styles.containerMedicoAgendamento]}>
            <View style={[styles.containerAreaFotoMedico]}>
              <Image
                source={require("@/assets/images/medicos/medico-consulta.png")}
                style={[
                  {
                    width: "100%",
                    height: "100%",
                    borderRadius: 10,
                    resizeMode: "contain",
                  },
                ]}
              />
            </View>
            <View style={[styles.containerAreaDadosMedico]}>
              <Text style={[styles.textoNomeMedico, { fontFamily: "MPlusRounded1c-ExtraBold" }]}>
                Nenhum agendamento
              </Text>
              <Text style={[styles.textoDescricaoMedico, { fontFamily: "MPlusRounded1c-Medium" }]}>
                Nenhum agendamento
              </Text>
            </View>
          </View>
        </View>
      </Link>
    );
  }

  return (
    <View style={styles.container}>
      <View style={[styles.containerAgendamento]}>
        <View style={[styles.containerAreaTitulo]}>
          <Text
            style={[
              styles.textoTituloAgendamento,
              { fontFamily: "MPlusRounded1c-Medium" },
            ]}
          >
            Meu Próximo Agendamento
          </Text>
          <View>
            <Entypo name="chevron-right" size={18} color="#FFF" />
          </View>
        </View>
        <View style={[styles.containerAreaDataAgendamento]}>
          <View>
            <FontAwesome5 name="calendar-alt" size={18} color="#FFF" />
          </View>
          <Text
            style={[
              styles.textoDataAgendamento,
              { fontFamily: "MPlusRounded1c-Bold" },
            ]}
          >
            {"  "}
            {new Date(consultaMaisProxima.dataAgenda).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </Text>
        </View>
        <View style={[styles.containerAreaHorarioAgendamento]}>
          <View>
            <FontAwesome5 name="clock" size={18} color="#FFF" />
          </View>
          <Text
            style={[
              styles.textoDataAgendamento,
              { fontFamily: "MPlusRounded1c-Bold" },
            ]}
          >
            {"  "}
            {consultaMaisProxima.horaAgenda}
          </Text>
        </View>
      </View>
      <View style={[styles.containerMedicoAgendamento]}>
        <View style={[styles.containerAreaFotoMedico]}>
          <Image
            source={require("@/assets/images/medicos/medico-consulta.png")}
            style={[
              {
                width: "100%",
                height: "100%",
                borderRadius: 10,
                resizeMode: "contain",
              },
            ]}
          />
        </View>
        <View style={[styles.containerAreaDadosMedico]}>
          <Text style={[styles.textoNomeMedico, { fontFamily: "MPlusRounded1c-ExtraBold" }]}>
            {consultaMaisProxima.medico}
          </Text>
          <Text style={[styles.textoDescricaoMedico, { fontFamily: "MPlusRounded1c-Medium" }]}>
            {consultaMaisProxima.especialidade}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AgendamentosHome;