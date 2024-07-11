import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "95%",
    height: "85%",
    backgroundColor: "#3E3D3D",
    borderRadius: 4,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: 'center',
    color: '#FFF'
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 15,
    fontWeight: 'normal'
    //textAlign: 'justify',
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonAceitar: {
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    margin: 5,
    width: "45%",
    alignItems: "center",
  },
  buttonNegar: {
    padding: 10,
    backgroundColor: "#F22",
    borderRadius: 5,
    margin: 5,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
