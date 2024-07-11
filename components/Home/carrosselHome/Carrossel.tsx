// components/Home/carrosselHome/Carrossel.tsx
import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { styles } from './styles';

const { width: screenWidth } = Dimensions.get('window');

const entries = [
  { illustration: 'https://lh3.googleusercontent.com/p/AF1QipOecfU1S4yNfPlzedSVdYojxS8kWPQ_XSSUQtJj=s1360-w1360-h1020' },
  { illustration: 'https://lh3.googleusercontent.com/p/AF1QipPCICXa3XR-HxpplKZrPDaZvam4BDWI-rhf6P33=s1360-w1360-h1020' },
  { illustration: 'https://lh3.googleusercontent.com/p/AF1QipPJOKecUKXCm4zhyBwLEk0gCErreLhOvR3wP_RW=s1360-w1360-h1020' },
  
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
        scrollAnimationDuration={5500}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Carrossel;