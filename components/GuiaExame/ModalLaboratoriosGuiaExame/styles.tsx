import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#3E3D3D'
  },
  modalText: {
    fontSize: 14,
    marginBottom: 10,
    color: '#9B9B9B'
  },
  mapLink: {
    marginBottom: 20,
  },
  mapLinkText: {
    color: '#1ED960',
    textDecorationLine: 'underline',
  },
  containerButtonsModal: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    //backgroundColor: 'blue',
    justifyContent: 'space-evenly',
  },
  closeButton: {
    backgroundColor: '#F22',
    padding: 12,
    borderRadius: 25,
  },
  buttonGerarGuia: {
    backgroundColor: '#1ED960',
    padding: 12,
    borderRadius: 25,
  }, 
  textoButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
});