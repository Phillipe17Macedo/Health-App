import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '90%',
    height: 180,
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'column',
  },
  containerInput: {
    position: 'absolute',
    width: '90%',
    height: 60,
    marginTop: 15,
    backgroundColor: '#F2F2F2',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#65A693',
    padding: 15,
    elevation: 3,
  },
  textInput: {
    textAlign: 'left',
    fontSize: 18,
  },
  containerButtonEntrar: {
    alignSelf: 'center',
    marginBottom: 25,
    marginTop: 100,
    width: '80%',
  },
  buttonEntrar: {
    backgroundColor: '#DFF2ED',
    padding: 10,
    borderRadius: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    elevation: 3,
  },
  textoButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 21,
    color: '#025940',
  },
});