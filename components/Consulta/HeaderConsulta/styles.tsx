import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#03A66A',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  containerLink: {
    width: '75%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    paddingLeft: 25,
    paddingTop: 45,
    //backgroundColor: 'blue'
  },
  containerIcone: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTexto: {
    height: 42,
    justifyContent: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
  },
  textoHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#F2F2F2',
    fontVariant: ['small-caps'],
  },
  refreshButton: {
    padding: 10,
    marginTop: 30,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoIcone: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF'
  },
});