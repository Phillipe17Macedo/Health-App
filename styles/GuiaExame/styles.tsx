import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#03A66A',
  },
  checkboxContainer: {
    width: '90%',
    flexDirection: "row",
    alignItems: "center",
    marginTop: width * 0.1,
    marginBottom: 15,
    alignSelf: 'center',
    backgroundColor: '#F8F8F6',
    padding: 10,
    borderRadius: 20,
    borderColor: '#65A693',
    borderWidth: 0.5,
    elevation: 2,
  },
  label: {
    marginLeft: 5,
    textAlign: 'justify',
    color: '#025940',
    fontSize: 16,
  },
});