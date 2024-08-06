import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center'
  },
  item: {
    width: '95%',
    height: 260,
    marginBottom: 45,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 15,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#9C71D9'
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
    marginTop: 15,
    marginBottom: 5,
  },
  containerButtonConfirmar: {
    height: 40,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#9C71D9',
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
    borderRadius: 10,
    padding: 5,
    height: 35,
    width: "100%",
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
    height: 75,
    width: "95%",
    alignSelf: 'center',
    position: 'absolute',
    bottom: -30,
    elevation: 2,
    borderRadius: 10,
    flexDirection: 'column',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#9C71D9'
  }
});