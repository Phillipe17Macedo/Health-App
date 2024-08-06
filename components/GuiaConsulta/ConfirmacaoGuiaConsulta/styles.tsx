import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "90%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "flex-start",
  },
  modalTitle: {
    fontSize: 21,
    marginBottom: 20,
    alignSelf: 'center',
    color: '#3E3D3D',
    textAlign: 'center',
  },
  containerTextoPadrao: {
    flexDirection: 'row',
    width: "100%",
    //backgroundColor: 'red'
  },
  textoPadrao: {
    fontSize: 15,
    marginVertical: 3,
    color: "#3E3D3D",
    marginLeft: 8,
  },
  textoConfirmacao: {
    fontSize: 13,
    marginVertical: 3,
    fontWeight: 'normal',
    marginBottom: 5,
    color: "#03A66A"
  },
  containerButton: {
    //backgroundColor: 'blue',
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginTop: 15,
  },
  confirmButton: {
    alignSelf: 'center',
    //marginTop: 20,
    padding: 15,
    backgroundColor: "#8CBF1F",
    borderRadius: 50,
    width: "65%",
    elevation: 3,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: 'center'
  },
  cancelButton: {
    alignSelf: 'center',
    //marginTop: 10,
    padding: 15,
    backgroundColor: "#F22222",
    borderRadius: 50,
    elevation: 3,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
