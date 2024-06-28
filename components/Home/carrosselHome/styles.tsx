import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignSelf: 'center',
    marginBottom: 70,
  },
  item: {
    //backgroundColor: "red",
    borderRadius: 5,
    height: 150,
    width: "90%",
    marginLeft: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  title: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
    color: '#3E3D3D'
  },
});
