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
    fontSize: 17,
    marginBottom: 20,
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  confirmButton: {
    width: "60%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#8CBF1F",
    borderRadius: 50,
    elevation: 3,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  cancelButton: {
    width: 90,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F22222",
    borderRadius: 50,
    elevation: 3,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});
