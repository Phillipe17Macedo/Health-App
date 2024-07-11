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
  timeItem: {
    flex: 1,
    padding: 5,
    backgroundColor: "#F8F8F6",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 5,
    borderWidth: 0.5,
    borderColor: "#CACACA",
    flexDirection: 'row',
  },
  timeText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: "#3E3D3D",
    marginLeft: 5,
  },
  selectedTimeText: {
    color: "white",
  },
  conatinerButtons: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-evenly',
    marginTop: 15,
    //backgroundColor: 'blue'
  },
  closeButton: {
    backgroundColor: '#F22222',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 45,
    elevation: 3
  },
  backButton: {
    backgroundColor: '#8CBF1F',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 45,
    elevation: 3
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  columnWrapper: {
    alignSelf: 'center',
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});
