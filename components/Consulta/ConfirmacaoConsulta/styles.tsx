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
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: 'center',
  },
  confirmText: {
    fontSize: 16,
    marginVertical: 3,
    fontWeight: 'bold',
  },
  containerButton: {
    //backgroundColor: 'blue',
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
  },
  confirmButton: {
    alignSelf: 'center',
    //marginTop: 20,
    padding: 10,
    backgroundColor: "#8CBF1F",
    borderRadius: 50,
    width: "68%",
    elevation: 3,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cancelButton: {
    alignSelf: 'center',
    //marginTop: 10,
    padding: 10,
    backgroundColor: "#F22222",
    borderRadius: 50,
    elevation: 3,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
  },
});
