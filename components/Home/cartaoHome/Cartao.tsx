import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { styles } from "./styles";

interface User {
  nome: string;
  dataNasc: string;
  statusContrato: boolean;
  fotoBase64: string;
}
interface CartaoProps {
  user: User;
}

export function Cartao({ user }: CartaoProps) {
  const alterarEstiloStatus = () => {
    return user.statusContrato ? styles.statusAtivado : styles.statusDesativado;
  };

  const statusText = user.statusContrato ? "Ativado" : "Desativado";


  // Aqui eu convert a string base64 para um URI utilizável pelo componente <Image />
  const fotoUri = `data:image/jpeg;base64,${user.fotoBase64}`;

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
                  source={{ uri: fotoUri }}
                />
              </View>

              <View style={[styles.containerDadosUser]}>
                <Text style={[styles.nomeCartao]}>{user.nome}</Text>
                <Text style={[styles.descricaoNome]}>Nome do Beneficiário</Text>

                <Text style={[styles.dataNascimentoCartao]}>
                  {user.dataNasc}
                </Text>
                <Text style={[styles.descricaoDataNascimento]}>
                  Data de Nascimento
                </Text>

                <View style={[styles.containerStatusPessoa]}>
                  <Text style={[styles.descricaoStatusPessoa]}>STATUS:</Text>
                  <View style={[styles.containerStatus, alterarEstiloStatus()]}>
                    <Text style={[styles.textoStatus]}>{statusText}</Text>
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
