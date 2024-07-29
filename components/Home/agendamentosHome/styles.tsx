import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'blue',
    width: '100%',
    height: 240,
    marginTop: 20,
    alignItems: 'center',
  },
  containerAgendamento: {
    width: "90%",
    height: 180,
    backgroundColor: '#9C71D9',
    borderRadius: 15,
    elevation: 2,
    padding: 15,
  },
  containerMedicoAgendamento: {
    width: "80%",
    height: 80,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 20,
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  containerAreaTitulo: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  textoTituloAgendamento: {
    color: "#fff",
    fontSize: 14,
  },
  containerAreaDataAgendamento: {
    flexDirection: 'row',
   //backgroundColor: 'red',
    width: '100%',
    marginTop: 22,
    marginLeft: 10,
  },
  textoDataAgendamento: {
    color: "#FFF",
    fontSize: 16,
  },
  containerAreaHorarioAgendamento: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 15,
    marginLeft: 10,
  },
  containerAreaFotoMedico: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  containerAreaDadosMedico: {
    //backgroundColor: 'red',
    width: '75%',
    height: 50,
    marginLeft: 10,
    padding: 5,
    justifyContent: 'space-between'
  },
  textoNomeMedico: {
    color: "#3E3D3D",
    fontSize: 15,
  },
  textoDescricaoMedico: {
    color: "#3E3D3D",
    fontSize: 13,
  },
});