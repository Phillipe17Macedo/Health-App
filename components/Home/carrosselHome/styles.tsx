import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'blue',
    marginTop: 25,
  },
  ContainertextoAcessoRapido: {
    position: 'relative',
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
  containerOpcoes: {
    alignSelf: 'center',
    width: '100%',
    height: 200,
    borderRadius: 10,
    //backgroundColor: 'blue',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  containerLink: {
    justifyContent: 'center',
    width: "90%",
    //backgroundColor: 'gray',
    alignSelf: 'center',
    flexDirection: 'column',
  },
  opcoes: {
    backgroundColor: '#F2F2F2',
    width: 325,
    height: 80,
    borderRadius: 10,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  imagemOpcoes: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textoOpcoesIcone: {
    fontSize: 11,
    textAlign: 'center',
    color: '#202022',
    fontWeight: 'normal',
    fontStyle: 'italic',
    marginTop: 5,
  },
});