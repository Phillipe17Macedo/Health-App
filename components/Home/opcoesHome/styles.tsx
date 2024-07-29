import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'blue',
    marginTop: 20,
  },
  ContainertextoAcessoRapido: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    //backgroundColor: 'yellow',
    paddingLeft: 25,
  },
  textoAcessoRapido: {
    fontSize: 18,
    color: '#03A66A',
    marginLeft: 5,
    marginRight: 5,
  },
  containerOpcoes: {
    alignSelf: 'center',
    width: '100%',
    height: 'auto',
    borderRadius: 10,
    //backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  containerLink: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    //backgroundColor: 'gray',
    alignSelf: 'center',
  },
  opcoes: {
    backgroundColor: '#F2F2F2',
    width: 80,
    height: 75,
    borderRadius: 15,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    alignSelf: 'center',
    borderWidth: 0.4,
    borderColor: "#CACACA"
  },
  imagemOpcoes: {
    alignSelf: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    height: 50
  },
  textoOpcoesIcone: {
    fontSize: 13,
    textAlign: 'center',
    color: '#3E3D3D',
    marginTop: 5,
  },
});