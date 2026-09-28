import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 15,
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
    padding: 20,
    paddingBottom: 40,
  },
  textWrapper: {
    marginBottom: 25,
  },
  paragraph: {
    fontSize: 15,
    color: '#444',
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
    color: colors.cardBackground,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  devsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  devCard: {
    backgroundColor: colors.cardBackground, 
    width: '48%', 
    borderRadius: 16,
    padding: 15,
    alignItems: 'center',
    elevation: 4,
  },
  imageBorder: {
    borderWidth: 2,
    borderColor: '#E9ECEF', 
    borderRadius: 50,
    padding: 2,
    marginBottom: 12,
  },
  devImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  devName: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  devRole: {
    color: '#E0E0E0',
    fontSize: 12,
    marginBottom: 15,
  },
  linkButton: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#E9ECEF', 
    borderRadius: 20,
    paddingVertical: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  linkButtonText: {
    color: '#E9ECEF', 
    fontSize: 13,
    fontWeight: '600',
  }
});