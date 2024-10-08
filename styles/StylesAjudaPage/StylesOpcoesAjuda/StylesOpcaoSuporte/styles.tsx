import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  containerInstrucao: {
    width: '95%',
    height: '70%',
    backgroundColor: '#F8F8F6',
    elevation: 3,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  textoTituloInstrucao: {
    fontSize: 18,
    color: '#3E4A59',
    textAlign: 'left',
  },
  textoInstrucao: {
    fontSize: 16,
    color: '#9B9B9B',
    textAlign: 'left',
  },
  containerButtonSuporte: {
    width: '75%',
    height: 65,
    backgroundColor: '#52D981',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    position: 'absolute',
    bottom: 30,
  },
  textoButtonSuporte: {
    fontSize: 24,
    color: '#fff',
  },
});