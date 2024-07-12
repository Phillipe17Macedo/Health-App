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
    backgroundColor: "#FFF",
    borderRadius: 4,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: 'center',
    color: '#3E3D3D'
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
    color: '#3E3D3D',
    paddingHorizontal: 15,
    fontWeight: 'normal'
    //textAlign: 'justify',
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    width: "90%",
    //backgroundColor: 'gray'
  },
  buttonAceitar: {
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    //margin: 5,
    width: "100%",
    alignItems: "center",
    marginTop:  5,
  },
  buttonNegar: {
    padding: 10,
    backgroundColor: "#F22",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginTop:  5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
