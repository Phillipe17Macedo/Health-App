import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 95,
    flexDirection: 'row',
    //backgroundColor: 'red',
    paddingTop: 35,
    justifyContent: 'space-between',
  },
  headerRight: {
    marginLeft: 15, 
    //backgroundColor: 'blue',
    marginRight: -55,
  },
  containerTextoHeader: {
    //width: '68%',
    height: 60,
    paddingLeft: 15,
    justifyContent: 'center',
    //marginRight: 5,
    //backgroundColor: 'red'
  },
  nomeUsuario: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#3E3D3D',
  },
  textoPerfilConfi: {
    fontSize: 12,
    color: '#878787',
    fontWeight: 'normal',
  },
  containerIconHelp: {
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'yellow',
    marginRight: 25,
  },
});