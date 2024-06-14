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
    paddingHorizontal: 10,
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
  confirmButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#8CBF1F",
    borderRadius: 5,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cancelButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#F22222",
    borderRadius: 5,
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
