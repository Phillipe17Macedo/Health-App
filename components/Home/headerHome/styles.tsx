import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 95,
    flexDirection: 'row',
    //backgroundColor: 'red',
    paddingTop: 35,
  },
  headerRight: {
    marginLeft: 15, 
  },
  containerTextoHeader: {
    width: '100%',
    height: 60,
    paddingLeft: 15,
    justifyContent: 'center',
    marginRight: 40,
  },
  nomeUsuario: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#202022',
  },
  textoPerfilConfi: {
    fontSize: 12,
    color: '#878787',
    fontWeight: 'normal',
  },
});