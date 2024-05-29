import { StatusBar } from "expo-status-bar";
import { Platform, View, Text } from "react-native";
import { styles } from "../styles/StylesPerfilPage/styles";
import { HeaderPerfil } from "@/components/Perfil/HeaderPerfil/Header";
import { ContainersPerfil } from "@/components/Perfil/Containers/ContainersPerfil";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <HeaderPerfil />
      <View style={[styles.areaInformacoes]}>
        <ContainersPerfil/>
      </View>
    </View>
  );
}
