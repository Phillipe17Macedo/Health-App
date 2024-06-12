import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContainer: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#202022'
  },
});