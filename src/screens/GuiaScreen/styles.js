import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    height: 60,
    backgroundColor: colors.cardBackground, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingHorizontal: 15,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, 
  },
  logoIfnmg: {
    width: 70,
    height: 30,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  contentWrapper: {
    alignItems: 'center',
    marginTop: 10,
  },
  guiaLogo: {
    width: 250,
    height: 115,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.cardBackground,
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 15,
    color: '#444',
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
    color: colors.cardBackground,
  },
  primaryButton: {
    flexDirection: 'row',
    backgroundColor: colors.cardBackground,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 15,
  },
  primaryButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
});