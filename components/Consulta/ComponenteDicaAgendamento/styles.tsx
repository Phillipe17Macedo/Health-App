import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerOrientacao: {
    alignSelf: 'center',
    marginTop: 450,
    backgroundColor: '#03A66A',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
    height: "100%",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    elevation: 3,
    position: 'absolute',
  },
  tituloOrientacao: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 21,
    color: '#fff',
    marginBottom: 15,
    marginTop: 45,
  },
  orientacao: {
    textAlign: 'justify',
    color: '#fff',
    fontSize: 16,
    marginLeft: 15,
  },
});