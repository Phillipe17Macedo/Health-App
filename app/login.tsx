import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles/StylesLoginPage/styles";

import { LogoLogin } from "../components/Login/LogoLogin/LogoLogin";
import { InputLogin } from "../components/Login/InputLogin/InputLogin";

export default function Login() {
  return (
    <View style={[styles.container]}>
      <StatusBar style="auto" />
        <LogoLogin/>
        <InputLogin/>
    </View>
  );
}
