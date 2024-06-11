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
    color: '#202022',
    fontVariant: ['small-caps'],
    marginBottom: 15,
  },
  containerItem: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    alignSelf: 'center',  
    elevation: 3,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  tituloTextoItem: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'justify',
  },
  containerIcone: {
    width: 64,
    position: 'absolute',
    marginLeft: width * 0.65,
    marginTop: 18 
  },
  textoDescricaoItem: {
    fontSize: 12,

  }
});