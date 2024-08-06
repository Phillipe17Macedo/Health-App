import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  containerLink: {
    height: "auto",
    marginTop: 10,
    borderRadius: 10,
    alignSelf: 'center',
    //backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCard: {
    width: width * 1.1,  // Aqui você usa a altura como largura
    height: height * 0.31, // Aqui você usa a largura como altura
    marginTop: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CACACA",
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3
  },
  componenteCard: {
    width: '100%',
    height: '100%',
    padding: width * 0.03,
    flexDirection: 'row',
    paddingTop: width * 0.05
  },
  containerImagemUser: {
    backgroundColor: '#F8F8F6',
    width: 112,   // Ajustar conforme necessário
    height: 140,   // Ajustar conforme necessário
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    marginTop: 7,
    marginLeft: 5,
  },
  containerNome: {
    position: 'absolute',
    marginTop: "49%",
    marginLeft: 15
  },
  containerDadosUser: {
    flexDirection: 'column',
    //backgroundColor: 'red',
    justifyContent: 'space-around',
    height: '63%'
  },
  textoPadraoUser: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: height * 0.001,
  },
  descricaoNome: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#fff",
  },
  dataNascimentoCartao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 10,
  },
  descricaoDataNascimento: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#fff",
  },
  containerStatusPessoa: {
    flexDirection: "row",
    alignSelf: "flex-start",
    //backgroundColor: 'red'
  },
  descricaoStatusPessoa: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    paddingTop: 3,
  },
  containerStatus: {
    marginLeft: 5,
    backgroundColor: "#8CBF1F", //STATUS ATIVO: #8CBF1F, STATUS DESATIVADO: #F22222
    width: "auto",
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  statusAtivado: {
    backgroundColor: "#8CBF1F",
    elevation: 3
  },
  statusDesativado: {
    backgroundColor: "#F22222",
    elevation: 3
  },
  textoStatus: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#fff",
  },
  userTitular: {
    color: '#F2E49B'
  },
  userDependente: {
    color: '#F2E49B'
  }
});