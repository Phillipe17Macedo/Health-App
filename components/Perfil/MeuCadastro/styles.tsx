import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 400,
    backgroundColor: '#F8F8F6',
    alignSelf: 'center',
    marginTop: 25,
    elevation: 2,
    borderRadius: 10,
    padding: 15,
    paddingTop: 55,
    borderWidth: 1,
    borderColor: '#52D981',
  },
  containerAreaDados: {
    alignSelf: 'center',
    //backgroundColor: 'red',
    width: "100%"
  },
  tituloDados: {
    fontSize: 18,
    color: "#3E3D3D",
    marginLeft: 8,
  },
  containerTextInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    marginTop: 5,
    borderRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#52D981'
  },
  textInput: {
    color: '#52D981',
    fontSize: 16,
    height: 50,
    padding: 10,
  },
  containerButton: {
    width: '100%',
    height: 60,
    alignSelf: 'center',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#94F2B5',
    height: '100%',
    width: '60%',
    borderRadius: 50,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoButton: {
    color: '#025940',
    fontSize: 21,
  },
});