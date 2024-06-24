import React from "react";
import { View, Image } from "react-native";
import { Link } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { styles } from "../styles/StylesIndexPage/styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={[styles.containerImage]}>
        <Image
          source={require("../assets/images/logo-aserpa/logo-animated.gif")}
          style={[styles.imageStyle]}
        />
        <View style={[styles.areaButton]}>
          <View style={[styles.containerButton]}>
            <Link href={"/login"}>
              <FontAwesome6
                name="circle-arrow-right"
                size={54}
                color="#8CBF1F"
              />
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
