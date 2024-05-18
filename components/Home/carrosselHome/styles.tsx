import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerOpcoes: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: 140,
    marginTop: 25,
    borderRadius: 10,
    flexDirection: 'row',
  },
  ContainertextoAcessoRapido: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
  },
  textoAcessoRapido: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#03A66A',
    marginLeft: 5,
    marginRight: 5,
    fontVariant: ['small-caps'],
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
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 15,
    marginTop: 35,
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