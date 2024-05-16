import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 60,
    marginTop: 25,
    flexDirection: 'row',
  },
  headerRight: {
    marginLeft: 15, // id de costumização do icone do header
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
  },
  textoPerfilConfi: {
    fontSize: 12,
    color: '#878787',
    fontWeight: 'normal',
  },
});