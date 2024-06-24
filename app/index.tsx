import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { useRouter } from "expo-router";
import { Link } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { styles } from "../styles/StylesIndexPage/styles";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const temporizador = setTimeout(() => {
      router.push("/login");
    }, 3000);

    return () => clearTimeout(temporizador);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={[styles.containerImage]}>
        <Image
          source={require("../assets/images/logo-aserpa/logo-animated.gif")}
          style={[styles.imageStyle]}
        />
      </View>
    </View>
  );
}
