// components/Home/carrosselHome/Carrossel.tsx
import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width: screenWidth } = Dimensions.get('window');

const entries = [
  { title: 'Image-1 ', illustration: 'https://via.placeholder.com/600/92c952' },
  { title: 'Image-2 ', illustration: 'https://via.placeholder.com/600/771796' },
  { title: 'Image-3 ', illustration: 'https://via.placeholder.com/600/24f355' },
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
      <Text style={styles.header}>Carrossel de Imagens</Text>
      <Carousel
        loop
        width={screenWidth}
        height={250}
        autoPlay={true}
        data={entries}
        scrollAnimationDuration={1000}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 150,
    padding: 20,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    resizeMode: 'cover',
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Carrossel;