import React, { useEffect, useState } from "react";
import { View, Image, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../styles/StylesLoginPage/styles";
import { LogoLogin } from "../components/Login/LogoLogin/LogoLogin";
import { InputLogin } from "../components/Login/InputLogin/InputLogin";

export default function Login() {
  return (
    <View style={[styles.container]}>
      <StatusBar style="auto" />
      <View style={[styles.conteudo]}>
        <LogoLogin />
        <InputLogin />
        <View style={[styles.containerLogoBackground]}>
          <Image source={require("@/assets/images/logo-aserpa/Icone.png")} style={[styles.logoBackground]} />
        </View>
      </View>
    </View>
  );
}