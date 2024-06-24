import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'blue',
    marginTop: 25,
  },
  containerOpcoes: {
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 140,
    borderRadius: 10,
    flexDirection: 'row',
  },
  ContainertextoAcessoRapido: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    //backgroundColor: 'yellow',
    paddingLeft: 15,
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
    //backgroundColor: '#DFF2ED',
    width: 100,
    height: 100,
    borderRadius: 5,
    //elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 0.5,
    //borderColor: '#65A693',
    paddingHorizontal: 5,
  },
  containerLink: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 5,
    marginTop: 35,
  },
  imagemOpcoes: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textoOpcoesIcone: {
    fontSize: 10,
    textAlign: 'center',
    color: '#025940',
    fontWeight: 'normal',
    fontStyle: 'italic',
    marginTop: 5,
  },
});