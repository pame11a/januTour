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