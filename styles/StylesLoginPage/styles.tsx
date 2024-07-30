import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  conteudo: {
    backgroundColor: '#52D981',
    width: '100%',
    height: '45%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  containerLogoBackground: {
    width: "170%",
    position: 'absolute',
    //backgroundColor: "blue",
    marginTop: "140%",
  },
  logoBackground: {
    //backgroundColor: 'red',
    resizeMode: 'contain',
    height: 400,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});