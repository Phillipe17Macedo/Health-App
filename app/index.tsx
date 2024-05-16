import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles/StylesLoginPage/styles";

import { LogoLogin } from "../components/Login/LogoLogin/LogoLogin";

export default function Login() {
  return (
    <View style={[styles.container]}>
      <StatusBar style="auto" />
      <LinearGradient
        colors={["#025940", "#8CBF1F"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1.3, y: 0.4 }}
        style={[styles.container]}
      >
        <LogoLogin/>
        <View style={[styles.containerLink]}>
          <Link href={"/(tabs)/home"}>
            <Text style={[styles.textoLink]}>OLA LOGIN</Text>
          </Link>
        </View>
      </LinearGradient>
    </View>
  );
}
