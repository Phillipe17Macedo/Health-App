import React, { useState, useEffect } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles/StylesEditarPerfil/styles";
import { HeaderEditarPerfil } from "@/components/Perfil/EditarPerfil/Header";
import DadosUser from "@/components/Perfil/EditarPerfil/Areadados/DadosUser";
import ModalCarregamento from "@/components/constants/ModalCarregamento";

export default function PerfilEditar() {
  const [cpf, setCpf] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getCpfDoBanco = async () => {
      const cpfDoBanco = await AsyncStorage.getItem("userCpf");
      console.log("CPF do banco: ", cpfDoBanco);
      setCpf(cpfDoBanco);
      setLoading(false);
    };

    getCpfDoBanco();
  }, []);

  if (!cpf) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <HeaderEditarPerfil />
        <DadosUser cpf={cpf} />
        <ModalCarregamento visivel={loading} />
      </View>
    </>
  );
}
