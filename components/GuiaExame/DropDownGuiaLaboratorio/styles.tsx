import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
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