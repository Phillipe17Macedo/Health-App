import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../styles/StylesHomePage/styles";

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <TouchableOpacity>
          <View style={[styles.containerCard]}>
            <View style={[styles.componenteCard]}>
              <Image
                source={require("../../assets/images/logoCartaoDeTodos.png")}
                style={[styles.imagemLogo]}
              />

              <Text style={[styles.nomeCartao]}>
                MARIA APARECIDA SOUZA SILVA
              </Text>
              <Text style={[styles.descricaoNome]}>Nome do Beneficiário</Text>

              <Text style={[styles.dataNascimentoCartao]}>19/04/1965</Text>
              <Text style={[styles.descricaoDataNascimento]}>
                Data de Nascimento
              </Text>

              <View style={[styles.containerStatusPessoa]}>
                <Text style={[styles.descricaoStatusPessoa]}>STATUS:</Text>
                <View style={[styles.containerStatus]}>
                  <Text style={[styles.textoStatus]}>DESATIVADO</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
