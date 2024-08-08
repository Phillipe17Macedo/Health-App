import React, { useState, useEffect } from 'react';
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { styles } from "./styles";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";


export default function DropDownGuiaExame() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Exame 1", value: "exame1" },
    { label: "Exame 2", value: "exame2" },
    { label: "Exame 3", value: "exame3" },
    { label: "Exame 4", value: "exame4" },
    { label: "Exame 5", value: "exame5" },
    { label: "Exame 6", value: "exame6" },
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
          placeholder="Selecione a Especialidade do Exame"
          style={styles.dropdown}
          placeholderStyle={[styles.textoDropdown, { fontFamily: 'MPlusRounded1c-ExtraBold' }]}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          listItemLabelStyle={[styles.itensLista, { fontFamily: 'MPlusRounded1c-ExtraBold' }]}
          selectedItemLabelStyle={[styles.itemSelecionado, { fontFamily: 'MPlusRounded1c-ExtraBold' }]}
          zIndex={3000}
          zIndexInverse={1000}
        />
      </View>
    </>
  );
}
