import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { styles } from "./styles";

interface User {
  nome: string;
  dataNascimento: string;
  status: string;
}
interface CartaoProps {
  user: User;
}

export function Cartao({ user }: CartaoProps) {
  return (
    <>
      <TouchableOpacity>
        <Link href={"/perfil"} style={[styles.containerLink]}>
          <LinearGradient
            colors={["#025940", "#8CBF1F"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1.3, y: 0.5 }}
            style={[styles.containerCard]}
          >
            <View style={[styles.componenteCard]}>
              <View style={[styles.containerImagemUser]}>
                <Image
                  source={require("../../../assets/images/icons8-person-94.png")}
                />
              </View>

              <View style={[styles.containerDadosUser]}>
                <Text style={[styles.nomeCartao]}>{user.nome}</Text>
                <Text style={[styles.descricaoNome]}>Nome do Beneficiário</Text>

                <Text style={[styles.dataNascimentoCartao]}>
                  {user.dataNascimento}
                </Text>
                <Text style={[styles.descricaoDataNascimento]}>
                  Data de Nascimento
                </Text>

                <View style={[styles.containerStatusPessoa]}>
                  <Text style={[styles.descricaoStatusPessoa]}>STATUS:</Text>
                  <View style={[styles.containerStatus]}>
                    <Text style={[styles.textoStatus]}>{user.status}</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </Link>
      </TouchableOpacity>
    </>
  );
}
