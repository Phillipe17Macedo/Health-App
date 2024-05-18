import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerOpcoes: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 25,
    borderRadius: 10,
    flexDirection: 'row',
  },
  opcoes: {
    backgroundColor: '#DFF2ED',
    width: 100,
    height: 100,
    borderRadius: 15,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLink: {
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  imagemOpcoes: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textoOpcoesIcone: {
    fontSize: 12,
    textAlign: 'center',
    color: '#025940',
    fontWeight: 'bold',
    marginTop: 10,
  },
});