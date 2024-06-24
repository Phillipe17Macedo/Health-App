import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1CA67F',
    width: '90%',
    height: 250,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'column',
    position: 'relative',
    justifyContent: 'center',
    elevation: 3,
    padding: width * 0.05,
  },
  containerCheckbox: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
    elevation: 3,
    borderWidth: 0.5,
    borderColor: '#9B9B9B',
    padding: 3,
    marginTop: 15,
  },
  textoCheckBox: {
    fontWeight: 'bold',
    fontSize: width * 0.04,
    color: '#3E4A59'
  },
  containerInput: {
    width: '90%',
    height: 60,
    marginTop: height * 0.01,
    backgroundColor: '#FFF',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#9B9B9B',
    padding: 15,
    elevation: 3,
  },
  textInput: {
    textAlign: 'left',
    fontSize: 18,
  },
  containerButtonEntrar: {
    alignSelf: 'center',
    marginTop: 20,
    width: '80%',
    backgroundColor: '#52D981',
    borderRadius: 60,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    elevation: 3,
  },
  textoButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 21,
    color: '#fff',
  },
});