import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '50%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  routeItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderLeftWidth: 4,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  routeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0077b6',
  },
  routeDescription: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
  closeButton: {
    marginTop: 15,
    padding: 15,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'red',
    fontWeight: 'bold',
  }
});