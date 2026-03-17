import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    elevation: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.cardBackground,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
  },
  button: {
    width: '100%',
    backgroundColor: colors.cardBackground,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonSecondary: {
    backgroundColor: '#64748b', // Um tom mais neutro para a segunda opção
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});