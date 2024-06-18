import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center'
  },
  dropdown: {
    backgroundColor: '#DFF2ED',
    borderColor: '#65A693',
    borderWidth: 0.5,
    elevation: 2,
    borderRadius: 5,
  },
  textoDropdown: {
    color: '#025940',
    fontSize: 16,
  },
  dropDownContainerStyle: {
    backgroundColor: '#DFF2ED',
    borderColor: '#65A693',
    borderWidth: 0.5,
    elevation: 2,
    borderRadius: 5,
    zIndex: height * 3000,
    height: height * 0.27
  },
  itensLista: {
    color: '#025940',
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemSelecionado: {
    fontWeight: 'bold',
    color: '#8CBF1F',
  },
});