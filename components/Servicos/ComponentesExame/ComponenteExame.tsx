import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Link } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";

export function ComponentesExame() {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <Link href={"/exame"} style={{ width: 150 }}>
          <View style={[styles.containerLink]}>
            <MaterialCommunityIcons
              name="heart-plus"
              size={64}
              color="#52D981"
            />
            <Text style={[styles.textoConsultas]}>Agendar Exame</Text>
          </View>
        </Link>
      </TouchableOpacity>
    </>
  );
}
