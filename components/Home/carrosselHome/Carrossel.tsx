import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Anuncios } from "../anunciosHome/Anuncios";
import { styles } from "./styles";
import { Fontisto } from "@expo/vector-icons";

export function Carrossel() {
  return (
    <>
      <View style={[styles.container]}>
        <View style={[styles.ContainertextoAcessoRapido]}>
          <Text style={[styles.textoAcessoRapido]}>
            AGENDAMENTOS CLÍNICAS ASERPA
          </Text>
          <AntDesign name="doubleright" size={21} color="#03A66A" />
        </View>

        <View style={[styles.containerOpcoes]}>
          <TouchableOpacity>
            <Link href={"/consulta"} style={[styles.containerLink]}>
              <View style={[styles.opcoes]}>
                <MaterialIcons
                  name="medical-information"
                  size={50}
                  color="#107357"
                />
                <Text style={[styles.textoOpcoesIcone]}>AGENDAR CONSULTA</Text>
              </View>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href={"/exame"} style={[styles.containerLink]}>
              <View style={[styles.opcoes]}>
                <Fontisto name="heartbeat" size={48} color="#107357" />
                <Text style={[styles.textoOpcoesIcone]}>AGENDAR EXAME</Text>
              </View>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href={"/consulta"} style={[styles.containerLink]}>
              <View style={[styles.opcoes]}>
                <FontAwesome5 name="money-bill-alt" size={45} color="#107357" />
                <Text style={[styles.textoOpcoesIcone]}>FINANCEIRO TESTE</Text>
              </View>
            </Link>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.container]}>
        <View style={[styles.ContainertextoAcessoRapido]}>
          <Text style={[styles.textoAcessoRapido]}>SOLICITAÇÃO DE GUIAS</Text>
          <AntDesign name="doubleright" size={21} color="#03A66A" />
        </View>
        <View style={[styles.containerOpcoes, { marginBottom: 95 }]}>
          <TouchableOpacity>
            <Link href={"/guiaConsulta"} style={[styles.containerLink]}>
              <View style={[styles.opcoes]}>
                <MaterialCommunityIcons
                  name="calendar-clock-outline"
                  size={48}
                  color="#107357"
                />
                <Text style={[styles.textoOpcoesIcone]}>
                  GUIA DE CONSULTAS
                </Text>
              </View>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href={"/exame"} style={[styles.containerLink]}>
              <View style={[styles.opcoes]}>
                <MaterialCommunityIcons
                  name="clipboard-text-clock-outline"
                  size={48}
                  color="#107357"
                />
                <Text style={[styles.textoOpcoesIcone]}>GUIA DE EXAMES</Text>
              </View>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href={"/consulta"} style={[styles.containerLink]}>
              <View style={[styles.opcoes]}>
                <FontAwesome5 name="money-bill-alt" size={45} color="#107357" />
                <Text style={[styles.textoOpcoesIcone]}>TESTE</Text>
              </View>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
