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
  confirmButton: {
    alignSelf: 'center',
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
    alignSelf: 'center',
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
