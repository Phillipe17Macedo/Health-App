// components/Home/carrosselHome/Carrossel.tsx
import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { styles } from './styles';

const { width: screenWidth } = Dimensions.get('window');

const entries = [
  { illustration: 'https://aserpasaude.com.br/wp-content/uploads/2024/06/2149511750.jpg' },
  { illustration: 'https://aserpasaude.com.br/wp-content/uploads/2024/06/427.jpg' },
  { illustration: 'https://aserpasaude.com.br/wp-content/uploads/2024/06/2150167817-e1718891594707.jpg' },
  // Adicione mais imagens conforme necessário
];

const Carrossel = () => {
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.illustration }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={screenWidth}
        height={150}
        autoPlay={true}
        data={entries}
        scrollAnimationDuration={1000}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Carrossel;