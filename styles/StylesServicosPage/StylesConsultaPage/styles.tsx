// styles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  medicosContainer: {
    maxHeight: 300, // Ajuste conforme necessário
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  resultText: {
    fontSize: 16,
  },
  noResultsText: {
    fontSize: 16,
    color: "#888",
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#8CBF1F",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  containerAreaPesquisa: {
    flexDirection: "row",
    margin: 10,
  },
  containerTextInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    elevation: 2,
  },
  textoTextInput: {
    height: 40,
  },
  containerIconePesquisar: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginLeft: 5,
    paddingHorizontal: 15,
    elevation: 2,
  },
  medicoCard: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 3,
  },
  medicoName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  medicoDetails: {
    fontSize: 14,
    color: "#555",
  },
});