import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerCarrossel: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '88%',
    marginTop: 25,
    borderRadius: 10,
    flexDirection: 'row',
  },
  carrossel: {
    backgroundColor: '#CACACA',
    width: 150,
    height: 180,
    borderRadius: 15,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#DFEBF2',
    padding: 10,
  },
  imagemCarrossel: {
    width: '60%',
    height: '60%',
    marginTop: 15,
    alignSelf: 'center',
  },
  textoSituacaoMedica: {
    fontSize: 18,
    textAlign: 'center',
    color: '#025940',
    fontWeight: 'bold',
    marginTop: 10,
  },
});