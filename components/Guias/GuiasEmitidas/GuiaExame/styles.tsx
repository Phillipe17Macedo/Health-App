import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center', 
    marginBottom: 75,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#F8F8F6',
    borderRadius: 10,
    elevation: 3,
    width: '95%',
    borderWidth: 0.5,
    borderColor: '#B2B2B2'
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
    color: "#52D981",
    fontWeight: 'bold',
    marginLeft: 10,
  }
});