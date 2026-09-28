import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingBottom: 15,
    paddingTop: 10,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.cardBackground,
    marginLeft: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.cardBackground,
  },
  logoIfnmg: {
    width: 70,
    height: 30,
    marginTop: 8, 
  },
  scrollContent: {
    paddingHorizontal: 20,
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