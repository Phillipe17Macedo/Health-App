import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { styles } from "./styles";

interface User {
  nome: string;
  dataNasc: string;
  tipoAdesao: string;
  statusContrato: boolean;
  titularDoContrato: boolean;
  fotoBase64: string;
}
interface CartaoProps {
  user: User;
}

export function Cartao({ user }: CartaoProps) {
  const alterarEstiloStatus = () => {
    return user.statusContrato ? styles.statusAtivado : styles.statusDesativado;
  };

  const alterarEstiloUsuario = () => {
    return user.titularDoContrato ? styles.userTitular : styles.userDependente;
  };

  const statusText = user.statusContrato ? "Ativado" : "Desativado";

  const titularContrato = user.titularDoContrato ? "Titular" : "Dependente";

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
                  style={[{width: 90, height: 120, borderRadius: 8, borderWidth: 0.7, borderColor: 'black'}]}
                />
              </View>

              <View style={[styles.containerDadosUser]}>
                <Text style={[styles.textoPadraoUser]}>{user.nome}</Text>
                <Text style={[styles.descricaoNome]}>Nome do Beneficiário</Text>

                <Text style={[styles.textoPadraoUser]}>
                  {user.dataNasc}
                </Text>
                <Text style={[styles.descricaoDataNascimento]}>
                  Data de Nascimento
                </Text>

                <Text style={[styles.textoPadraoUser]}>{user.tipoAdesao}</Text>
                <Text style={[styles.descricaoDataNascimento]}>Tipo de Adesão</Text>

                <Text style={[styles.textoPadraoUser, alterarEstiloUsuario()]}>{titularContrato}</Text>
                <Text style={[styles.descricaoDataNascimento]}>Tipo de Usuário</Text>

                <View style={[styles.containerStatusPessoa]}>
                  <Text style={[styles.descricaoStatusPessoa]}>STATUS CONTRATO:</Text>
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
