import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerMedicos: {
    backgroundColor: '#D9D9D9',
    width: '90%',
    height: 120,
    alignSelf: 'center',
    marginTop: 25,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
  },
  imagemIcone: {
    marginRight: 15,
    //backgroundColor: 'lightgray',
    width: 50,
    height: 60,
    borderRadius: 10,
    borderWidth: 0.4,
    //borderColor: 'gray',
  },
  areaTextos: {
    position: 'absolute',
    backgroundColor: 'gray',
    width: '80%',
    marginLeft: 70,
    height: '100%',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'column',
  },
  textoNomeMedico: {},
  textoEndereco: {},
  nomeMedico: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  nomeEndereco: {
    color: '#fff',
  },
});
