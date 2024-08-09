import React, { useEffect, useState } from "react";
import { View, Text, Image, Alert, SafeAreaView, ScrollView } from "react-native";
import * as Location from 'expo-location';
import { styles } from "./styles";
import Fontisto from "@expo/vector-icons/Fontisto";
import * as Font from "expo-font";
import { buscarLaboratorios } from "@/utils/requestConfig";
import ModalCarregamento from "@/components/constants/ModalCarregamento";

function calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371e3; // Raio da Terra em metros
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon1 - lon2) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // Distância em metros
  return d;
}

export default function LaboratoriosGuiaExame({ onLoading }) {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [laboratorios, setLaboratorios] = useState<any[]>([]);
  const [userLocation, setUserLocation] = useState<{ latitude: number, longitude: number } | null>(null);

  // Função que carrega dados, fontes e calcula distâncias
  const loadResourcesAndDataAsync = async () => {
    try {
      onLoading(true);

      await Font.loadAsync({
        "MPlusRounded1c-Medium": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Medium.ttf"),
        "MPlusRounded1c-Regular": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Regular.ttf"),
        "MPlusRounded1c-Bold": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-Bold.ttf"),
        "MPlusRounded1c-ExtraBold": require("@/assets/fonts/M_PLUS_Rounded_1c/MPLUSRounded1c-ExtraBold.ttf"),
      });

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão de localização negada');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      const laboratoriosResponse = await buscarLaboratorios();

      if (laboratoriosResponse.success && Array.isArray(laboratoriosResponse.data)) {
        const geocodedLaboratorios = await Promise.all(laboratoriosResponse.data.map(async (lab: any) => {
          const geocoded = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(lab.endereco)}&key=AIzaSyBfL9nlJjhyO51zAeoe8_tz80ndf8H9OxQ`
          ).then(res => res.json());

          if (geocoded.results.length > 0) {
            const { lat, lng } = geocoded.results[0].geometry.location;
            const distancia = location.coords
              ? calcularDistancia(location.coords.latitude, location.coords.longitude, lat, lng)
              : null;
            return {
              ...lab,
              latitude: lat,
              longitude: lng,
              distancia,
            };
          } else {
            return { ...lab, distancia: null }; // Caso a geocodificação falhe
          }
        }));

        geocodedLaboratorios.sort((a, b) => (a.distancia || 0) - (b.distancia || 0));
        setLaboratorios(geocodedLaboratorios);
      } else {
        Alert.alert("Erro", "A resposta do servidor não está no formato esperado.");
      }

      setFontLoaded(true);
    } catch (e) {
      console.warn(e);
      Alert.alert("Erro", "Erro ao carregar os dados. Tente novamente.");
    } finally {
      onLoading(false);
    }
  };

  // Chamar a função de carregamento apenas quando o componente é montado pela primeira vez
  useEffect(() => {
    loadResourcesAndDataAsync();
  }, []);  // Esse efeito é chamado apenas na montagem inicial do componente

  if (!fontLoaded || !userLocation) {
    return null;
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        {laboratorios.map((lab, index) => (
          <View key={index} style={[styles.componenteLaboratorio]}>
            <View style={[styles.containerImagemLaboratorio]}>
              <Image
                source={require("@/assets/images/medicos/estrutura-clinica.png")}
                style={[{ width: 52, height: 80, position: "relative", borderRadius: 5 }]}
              />
            </View>
            <View style={[styles.containerTextoLaboratorio]}>
              <Text style={[styles.textoNomeLaboratorio, { fontFamily: "MPlusRounded1c-ExtraBold" }]}>{lab.nome}</Text>
              <Text style={[styles.textoEnderecoLaboratorio, { fontFamily: "MPlusRounded1c-Bold" }]}>{lab.endereco}</Text>
              <Text style={[styles.textoDistanciaLaboratorio, { fontFamily: "MPlusRounded1c-ExtraBold" }]}>
                {lab.distancia ? `📍${(lab.distancia / 1000).toFixed(2)} km` : "📍Distância desconhecida"}
              </Text>
            </View>
            <View style={[styles.containerIconeMaps]}>
              <Fontisto name="map" size={32} color="black" />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}