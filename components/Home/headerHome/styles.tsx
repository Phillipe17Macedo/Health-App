import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 250,
    flexDirection: 'row',
    backgroundColor: '#03A66A',
    paddingTop: 35,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 2,
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
    color: '#FFF',
  },
  textoPerfilConfi: {
    fontSize: 12,
    color: '#FFF',
    fontWeight: 'normal',
  },
  containerIconHelp: {
    alignItems: 'center',
    justifyContent: 'center',
    //flexDirection: 'row',
    //backgroundColor: 'yellow',
    marginRight: 25,
    width: 38,
  },
  textoAjuda: {
    fontSize: 13,
    textAlign: 'center',
    color: '#FFF',
    //backgroundColor: 'red'
  },
  containerBoasVindas: {
    position: 'absolute',
    //backgroundColor: 'blue',
    width: '100%',
    top: 120,
    padding: 25,
  },
  textoBoasVindas: {
    color: "#FFF",
    fontSize: 21,
  }
});