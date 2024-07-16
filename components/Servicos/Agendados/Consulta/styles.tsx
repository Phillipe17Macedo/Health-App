import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center'
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#F8F8F6',
    borderRadius: 5,
    elevation: 3,
    width: '95%',
    borderWidth: 0.5,
    borderColor: '#B2B2B2'
  },
  text: {
    fontSize: 16,
    color: '#3E3D3D',
  },
  constainerIcone :{
    flexDirection: 'row',
    alignContent: 'space-evenly',
    marginBottom: 10,
  }, 
  textoIcone: {
    fontSize: 18,
    color: "#9C71D9",
    marginLeft: 10,
  },
  conatinersButtons: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    //backgroundColor: 'gray',
    marginTop: 12,
    marginBottom: 5,
  },
  containerButtonConfirmar: {
    height: 40,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#8CBF1F',
    elevation: 3,
  },
  textoButtonConfirmar: {
    fontSize: 16,
    color: '#FFF',
  },
  containerButtonCancelar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F22',
    borderRadius: 5,
    padding: 5,
    height: 45,
    width: 80,
    elevation: 3,
  },
  textoButtonCancelar: {
    fontSize: 11,
    color: '#fff',
    textAlign: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  textoContainerTempo: {
    fontSize: 13,
    color: "#3E3D3D",
    fontWeight: 'normal',
  },
  textoTempo: { 
    fontSize: 14,
    color: "#3E3D3D",
  },
  containerTempo: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    height: 60,
    padding: 10,
    borderRadius: 5,
  }
});