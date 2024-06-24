import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 60,
    backgroundColor: '#F8F8F6',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    alignSelf: 'center',
    marginTop: 25,
    paddingLeft: 20,
    borderWidth: 0.5,
    borderColor: '#B2B2B2'
  },
  containerLink: {
    width: '95%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  textoConsultas: {
    fontSize: 21,
    fontWeight: 'bold',
    fontVariant: ['small-caps'],
    color: '#3E3D3D',
    marginRight: 15,
  },
});