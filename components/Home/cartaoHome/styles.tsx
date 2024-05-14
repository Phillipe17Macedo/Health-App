import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerCard: {
    width: "90%",
    height: "auto",
    marginTop: 25,
    borderRadius: 15,
    backgroundColor: "#107357",
    borderWidth: 1,
    borderColor: "#65A693",
    alignSelf: 'center',
  },
  componenteCard: {
    width: 300,
    height: 200,
    padding: 20,
  },
  nomeCartao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 30,
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
  textoStatus: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#fff",
  },
});
