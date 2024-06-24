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
    color: '#3E3D3D',
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
    marginTop: 15
  },
  containerLink: {
    justifyContent: 'center',
    width: 110,
    //backgroundColor: 'gray',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  opcoes: {
    backgroundColor: '#F2F2F2',
    width: 110,
    height: 90,
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
    resizeMode: 'contain',
    height: 50
  },
  textoOpcoesIcone: {
    fontSize: 14,
    textAlign: 'center',
    color: '#202022',
    fontWeight: 'normal',
    fontStyle: 'italic',
    marginTop: 5,
  },
});