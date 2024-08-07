import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Image } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { styles } from '@/styles/GuiaExame/styles';
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Checkbox } from "react-native-paper";

import ModalCarregamento from '@/components/constants/ModalCarregamento';
import { HeaderGuiaExame } from '@/components/GuiaExame/HeaderGuiaExame/Header';
import { DicaGuiaExame } from '@/components/GuiaExame/ComponenteDicaSolicitacao/DicaGuiaExame';
import DropDownGuiaExame from '@/components/GuiaExame/DropDownGuiaExame/DropDownExame';

export default function TelaGuiaExame() {
  const [loading, setLoading] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          "MPlusRounded1c-Medium": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Medium.ttf"),
          "MPlusRounded1c-Regular": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Regular.ttf"),
          "MPlusRounded1c-Bold": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Bold.ttf"),
          "MPlusRounded1c-ExtraBold": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-ExtraBold.ttf"),
        });

        setFontLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
      <ModalCarregamento visivel={loading}/>
      <Image 
        source={require("@/assets/images/medicos/exame-guia.png")}
        style={[{ width: "100%", height: 500, position: "relative" }]}
      />
      <HeaderGuiaExame/>
      <DicaGuiaExame/>

      <DropDownGuiaExame/>
      <View style={[{ width: '100%', height: 140, backgroundColor: '#03A66A' }]}></View>
      </ScrollView>
    </SafeAreaView>
  );
}