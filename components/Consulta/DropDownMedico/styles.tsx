import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    marginRight: 35,
    marginLeft: 35,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center'
  },
  dropdown: {
    backgroundColor: '#DFF2ED',
    borderColor: '#65A693',
    borderWidth: 0.5,
    elevation: 3,
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
  containerOrientacao: {
    alignSelf: 'center',
    backgroundColor: '#03A66A',
    padding: 10,
    width: '100%',
    borderRadius: 5,
    elevation: 3,
    borderWidth: 0.5,
    borderColor: '#025940',
    marginBottom: 5
  },
  orientacao: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 14,
  },
});