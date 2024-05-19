import { StyleSheet } from "react-native";

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
    width: '100%',
    height: "auto",
    marginTop: 25,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#65A693",
  },
  componenteCard: {
    width: 330,
    height: 200,
    padding: 12,
    flexDirection: 'row'
  },
  containerImagemUser: {
    backgroundColor: '#DFF2ED',
    width: 94,
    height: 94,
    borderRadius: 8,
    marginRight: 10,
  },
  containerDadosUser: {
    flexDirection: 'column',
  },
  nomeCartao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 10,
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
    marginTop: 30,
    alignSelf: "center",
  },
  descricaoStatusPessoa: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    paddingTop: 3,
  },
  containerStatus: {
    marginLeft: 10,
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
});
