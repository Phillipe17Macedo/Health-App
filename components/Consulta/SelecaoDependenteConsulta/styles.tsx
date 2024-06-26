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
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 20,
  },
  containerButtons: {
    flexDirection: "row",
    width: "100%", 
    //backgroundColor: 'blue',
    justifyContent: 'space-between',
    marginTop: 15,

  },
  confirmButton: {
    width: "60%",
    height: 50,
    backgroundColor: "#8CBF1F",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cancelButton: {
    width: "35%",
    height: 50,
    backgroundColor: "#F22222",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  picker: {
    height: 50,
    width: "100%",
    backgroundColor: '#F0F0F0',
    elevation: 3,
  },
});
