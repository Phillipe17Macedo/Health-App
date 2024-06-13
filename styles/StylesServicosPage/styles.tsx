// StylesServicosPage/styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  secaoContainer: {
    marginVertical: 10,
  },
  naoAgendamentosText: {
    textAlign: 'center',
    margin: 10,
    fontSize: 16,
    color: '#555',
  },
  containerScroll: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    //marginBottom: 90,
    width: '100%',
    elevation: 3,
    borderRadius: 5,
  },
  textoSecao: {
    fontWeight: 'bold',
    fontSize: 22,
    alignSelf: 'center',
    color: '#025940',
  }
});
