import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 25,
    alignSelf: 'center',
    alignItems: 'center',
  },
  anuncio: {
    width: width * 0.9,
    height: width * 0.45,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,

  },
  containerTextoAnuncio: {
    width: '100%',
    height: '100%',
    padding: 15,
    //backgroundColor: '#fff',
  },
  textoTituloAnuncio: {
    fontSize: height * 0.025,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  textoDescricaoAnuncio: {
    width: 190,
    textAlign: 'justify',
    marginBottom: 3,
    fontSize: 12,
    color: '#fff',
    marginLeft: 5
  },
});