import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#03A66A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLink: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    paddingLeft: 25,
    paddingTop: 45,
  },
  containerIcone: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTexto: {
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  textoHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#F2F2F2',
    fontVariant: ['small-caps'],
  },
});