import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    width: '100%',
    height: '100%',
  },
  textoTituloContainer: {
    alignSelf: 'center',
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#025940',
    fontVariant: ['small-caps'],
    marginBottom: 15,
  },
  containerItem: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    alignSelf: 'center',  
    elevation: 3,
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: '#65A693'
  },
  tituloTextoItem: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'justify',
    color: '#025940'
  },
  containerIcone: {
    width: 64,
    position: 'absolute',
    marginLeft: width * 0.65,
    marginTop: 18 
  },
  textoDescricaoItem: {
    fontSize: 12,
    color: '#025940'
  }
});