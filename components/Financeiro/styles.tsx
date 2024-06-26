import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    width: '100%',
    height: '100%',
  },
  containerOpcoes: {
    backgroundColor: "#03A66A",
    width: "95%",
    height: 1000,
    alignSelf: "center",
    borderRadius: 5,
    paddingHorizontal: 15,
    flexDirection: "column",
    marginTop: 25,
    elevation: 3,
    marginBottom: 100,
    borderWidth: 0.5,
    borderColor: "#107357",
  },
  textoTituloContainer: {
    alignSelf: 'center',
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#F2F2F2',
    fontVariant: ['small-caps'],
    marginBottom: 15,
  },
  containerItem: {
    width: '100%',
    height: 100,
    backgroundColor: '#F8F8F6',
    alignSelf: 'center',  
    elevation: 3,
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: '#CACACA'
  },
  tituloTextoItem: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'justify',
    color: '#3E3D3D'
  },
  containerIcone: {
    width: 64,
    position: 'absolute',
    marginLeft: width * 0.65,
    marginTop: 18 
  },
  textoDescricaoItem: {
    fontSize: 12,
    color: '#3E3D3D'
  }
});