import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  containerImage: {
    alignSelf: "center",
    height: "85%",
    justifyContent: "space-evenly",
  },
  imageStyle: {
    resizeMode: "contain",
    height: 280,
  },
  areaButton: {
    width: "100%",
    height: 70,
    position: "absolute",
    alignSelf: "center",
    bottom: 0,
  },
  containerButton: {
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 25,
  },
});
