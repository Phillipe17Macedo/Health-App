import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Anuncios } from "../anunciosHome/Anuncios";
import { styles } from "./styles";
import { Fontisto } from '@expo/vector-icons';
export function Carrossel() {
  return (
    <>
      <View style={[styles.containerOpcoes]}>
        <View style={[styles.ContainertextoAcessoRapido]}>
          <Text style={[styles.textoAcessoRapido]}>ACESSO RÁPIDO</Text>
          <AntDesign name="doubleright" size={21} color="#03A66A" />
        </View>
        <TouchableOpacity>
          <Link href={"/consulta"} style={[styles.containerLink]}>
            <View style={[styles.opcoes]}>
              <MaterialIcons
                name="medical-information"
                size={50}
                color="#107357"
              />
              <Text style={[styles.textoOpcoesIcone]}>CONSULTAS</Text>
            </View>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity>
          <Link href={"/exame"} style={[styles.containerLink]}>
            <View style={[styles.opcoes]}>
              <Fontisto
                name="heartbeat"
                size={48}
                color="#107357"
              />
              <Text style={[styles.textoOpcoesIcone]}>EXAMES</Text>
            </View>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity>
          <Link href={"/financeiro"} style={[styles.containerLink]}>
            <View style={[styles.opcoes]}>
              <MaterialCommunityIcons
                name="file-document"
                size={48}
                color="#107357"
              />
              <Text style={[styles.textoOpcoesIcone]}>RELATÓRIOS</Text>
            </View>
          </Link>
        </TouchableOpacity>
      </View>

      <Anuncios />

      <View style={[styles.containerOpcoes, { marginBottom: 95 }]}>
        <View style={[styles.ContainertextoAcessoRapido]}>
          <Text style={[styles.textoAcessoRapido]}>ACESSO RÁPIDO</Text>
          <AntDesign name="doubleright" size={21} color="#03A66A" />
        </View>
        <TouchableOpacity>
          <Link href={"/exame"} style={[styles.containerLink]}>
            <View style={[styles.opcoes]}>
              <MaterialCommunityIcons
                name="calendar-clock-outline"
                size={48}
                color="#107357"
              />
              <Text style={[styles.textoOpcoesIcone]}>CONSULTAS MARCADAS</Text>
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
              <Text style={[styles.textoOpcoesIcone]}>EXAMES MARCADOS</Text>
            </View>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity>
          <Link href={"/consulta"} style={[styles.containerLink]}>
            <View style={[styles.opcoes]}>
              <FontAwesome5 name="money-bill-alt" size={45} color="#107357" />
              <Text style={[styles.textoOpcoesIcone]}>PENDÊNCIAS</Text>
            </View>
          </Link>
        </TouchableOpacity>
      </View>
    </>
  );
}
