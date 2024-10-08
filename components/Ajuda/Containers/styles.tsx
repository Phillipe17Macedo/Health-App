import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F6',
    width: '90%',
    height: 75,
    borderRadius: 5,
    elevation: 3,
    marginBottom: 20,
    borderWidth: 0.2,
    borderColor: '#B2B2B2',
    paddingTop: 32,
    paddingLeft: 15,
  },
  containerLink: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    //backgroundColor: 'yellow',
    width: '100%',
    height: 75,
    position: 'absolute',
    paddingLeft: 15,
    paddingTop: 10,
  },
  textoContainer: {
    fontSize: 18,
    color: '#3E3D3D',
  },
  textoDescricao: {
    fontSize: 14,
    color: '#B2B2B2',
  }
});