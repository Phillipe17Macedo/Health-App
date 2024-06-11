import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    width: '100%',
    height: '100%',
  },
  textoTituloContainer: {
    alignSelf: 'center',
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#202022',
    fontVariant: ['small-caps'],
    marginBottom: 15,
  },
  containerItem: {
    width: '100%',
    height: 70,
    backgroundColor: '#fff',
    alignSelf: 'center',  
    elevation: 3,
    borderRadius: 10,
    padding: 15,
  }
});