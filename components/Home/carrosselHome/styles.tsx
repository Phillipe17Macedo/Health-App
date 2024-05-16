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
    //borderWidth: 1,
    //borderColor: '#DFEBF2',
    //padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemCarrossel: {
    //width: '40%',
    //height: '60%',
    //marginTop: 15,
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