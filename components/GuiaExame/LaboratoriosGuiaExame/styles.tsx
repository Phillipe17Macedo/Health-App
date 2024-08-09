import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    //backgroundColor: 'blue',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  componenteLaboratorio: {
    width: 340,
    height: 110,
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    alignSelf: 'center',
    marginBottom: 15,
    elevation: 3
  },
  containerImagemLaboratorio: {
    marginRight: 10,
    width: 52,
    height: 80,
    borderRadius: 5,
    //backgroundColor: 'red',
  },
  containerTextoLaboratorio: {
    //backgroundColor: 'lightgray',
    width: 210,
  },
  textoNomeLaboratorio: {
    fontSize: 15,
    marginBottom: 3,
    color: '#3E3D3D',
  },
  textoEnderecoLaboratorio: {
    fontSize: 12,
    marginBottom: 3,
    color: '#9B9B9B',
  },
  textoDistanciaLaboratorio: {
    fontSize: 12,
    marginBottom: 3,
    color: '#3E3D3D',
  },
  containerIconeMaps: {
    right: 10,
    //backgroundColor: 'gray',
    marginLeft: 15,
  },
});