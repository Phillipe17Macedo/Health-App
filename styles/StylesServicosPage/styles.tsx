import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerOpcoesServicos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    //backgroundColor: 'gray',
    marginTop: 25,
    marginBottom: 25,
  },
  toggleButton: {
    width: '85%',
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#03A66A',
    alignItems: 'center',
    margin: 10,
    borderRadius: 8,
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
    fontWeight: 'bold'
  },
  constainerTituloAgendamento: {
    width: '90%',
    height: 40, 
    backgroundColor: '#F8F8F6',
    elevation: 3,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tituloAgendamento: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#025940',
    marginLeft: 10,
  },
});
