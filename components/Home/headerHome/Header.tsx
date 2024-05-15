import React from "react";
import {
  MaterialIcons,
  Ionicons,
  AntDesign,
  FontAwesome6,
} from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Link href="/perfil" asChild>
        <Pressable>
          {({ pressed }) => (
            <Ionicons
              name="person-circle"
              size={58}
              color="#65A693"
              style={[styles.headerRight, { opacity: pressed ? 0.5 : 1 }]}
            />
          )}
        </Pressable>
      </Link>
      <View style={[styles.containerTextoHeader]}>
        <Text>HEADER</Text>
      </View>
    </View>
  );
}
