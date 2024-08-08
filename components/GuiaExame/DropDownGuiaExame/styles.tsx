import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  dropdown: {
    backgroundColor: '#F8F8F6',
    borderColor: '#65A693',
    borderWidth: 0.5,
    elevation: 2,
    borderRadius: 20,
  },
  textoDropdown: {
    color: '#025940',
    fontSize: 15,
  },
  dropDownContainerStyle: {
    backgroundColor: '#F8F8F6',
    borderColor: '#65A693',
    borderWidth: 0.5,
    elevation: 2,
    borderRadius: 20,
    zIndex: height * 3000,
    height: height * 0.27
  },
  itensLista: {
    color: '#025940',
    fontSize: 15,
  },
  itemSelecionado: {
    color: '#8CBF1F',
    fontSize: 15,
  },
});