import React, { useEffect } from "react";
import { View, Image, NativeModules } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../styles/StylesLoginPage/styles";
import { LogoLogin } from "../components/Login/LogoLogin/LogoLogin";
import { InputLogin } from "../components/Login/InputLogin/InputLogin";
import { OneSignal, LogLevel } from "react-native-onesignal";
const RNOneSignal = NativeModules.OneSignal;

export default function Login() {

  useEffect(() => {
    OneSignal.initialize("45d50449-03b9-463e-a6a7-e6c1258cfd7d");
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);

    OneSignal.Notifications.requestPermission(true);

    OneSignal.Notifications.addEventListener('click', (event) => {
      console.log('OneSignal: notification clicked:', event);
    });
    
  }, []);

  return (
    <View style={[styles.container]}>
      <StatusBar style="auto" />
        <LogoLogin/>
        <InputLogin/>
        <View style={[styles.containerLogoBackground]} >
          <Image source={require("@/assets/images/logo-aserpa/Icone.png")} style={[styles.logoBackground]} />
        </View>
    </View>
  );
}
