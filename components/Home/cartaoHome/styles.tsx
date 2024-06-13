import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  containerLink: {
    height: "auto",
    marginTop: 25,
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCard: {
    width: width * 0.9,
    height: width * 0.6,
    marginTop: 25,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#65A693",
    alignItems: 'center',
    justifyContent: 'center',
  },
  componenteCard: {
    width: '100%',
    height: '100%',
    padding: width * 0.03,
    flexDirection: 'row', 
    paddingTop: width * 0.05
  },
  containerImagemUser: {
    backgroundColor: '#DFF2ED',
    width: 94,
    height: 124,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3
  },
  containerDadosUser: {
    flexDirection: 'column',
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
    marginTop: 15,
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
    backgroundColor: "#8CBF1F", //STATUS ATIVO: #8CBF1F, STATUS DESATIVADO: #E55951
    width: "auto",
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  statusAtivado: {
    backgroundColor: "#8CBF1F",
  },
  statusDesativado: {
    backgroundColor: "#E55951",
  },
  textoStatus: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#fff",
  },
  userTitular: {
    color: '#9AEBA3'
  },
  userDependente: {
    color: '#DAFDBA'
  }
});
