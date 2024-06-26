import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  confirmButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#8CBF1F",
    borderRadius: 50,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
  },
});
