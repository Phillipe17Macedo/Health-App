import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerCarrossel: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 25,
    borderRadius: 10,
    flexDirection: 'row',
  },
  carrossel: {
    backgroundColor: '#DFF2ED',
    width: 100,
    height: 100,
    borderRadius: 15,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemCarrossel: {
    alignSelf: 'center',
  },
  textoSituacaoMedica: {
    fontSize: 12,
    textAlign: 'center',
    color: '#025940',
    fontWeight: 'bold',
    marginTop: 10,
  },
});