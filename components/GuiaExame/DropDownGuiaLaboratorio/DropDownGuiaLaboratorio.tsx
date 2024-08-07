import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { styles } from "./styles";

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
          placeholderStyle={styles.textoDropdown}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          listItemLabelStyle={styles.itensLista}
          selectedItemLabelStyle={styles.itemSelecionado}
          zIndex={2000}
          zIndexInverse={2000}
        />
      </View>
    </>
  );
}
