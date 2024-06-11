import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#202022",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 20,
  },
  confirmText: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  confirmButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#8CBF1F",
    borderRadius: 5,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#F22222",
    borderRadius: 5,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
  },
});
