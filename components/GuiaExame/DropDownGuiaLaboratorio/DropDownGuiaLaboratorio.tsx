import React, { useState, useEffect } from 'react';
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { styles } from "./styles";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function DropDownGuiaLaboratorio() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Laboratorio 1", value: "laboratorio1" },
    { label: "Laboratorio 2", value: "laboratorio2" },
    { label: "Laboratorio 3", value: "laboratorio3" },
    { label: "Laboratorio 4", value: "laboratorio4" },
    { label: "Laboratorio 5", value: "laboratorio5" },
    { label: "Laboratorio 6", value: "laboratorio6" },
  ]);

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
    <>
      <View style={styles.container}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Selecione um Laboratorio"
          style={styles.dropdown}
          placeholderStyle={[styles.textoDropdown, { fontFamily: 'MPlusRounded1c-ExtraBold' }]}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          listItemLabelStyle={[styles.itensLista, { fontFamily: 'MPlusRounded1c-ExtraBold' }]}
          selectedItemLabelStyle={[styles.itemSelecionado, { fontFamily: 'MPlusRounded1c-ExtraBold' }]}
          zIndex={2000}
          zIndexInverse={2000}
        />
      </View>
    </>
  );
}
