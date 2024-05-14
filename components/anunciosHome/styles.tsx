import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    marginTop: 25,
    alignSelf: 'center',
    alignItems: 'center',
  },
  anuncio: {
    width: 320,
    height: 120,
    borderRadius: 15,
    padding: 15,
  },
  iconAnuncio: {
    width: 65,
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  textoAnuncio: {
    position: 'absolute',
    flexDirection: 'column',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 21,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15
  },
});