import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, 
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10, 
    paddingBottom: 15,
    backgroundColor: colors.background,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, 
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
  listContent: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: colors.primary.substring(0, 7) + '1A', 
    padding: 20,
    marginBottom: 20,
    borderRadius: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary, 
    marginBottom: 12,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  cardImage: {
    width: '75%',
    height: 160,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  arrowButton: {
    padding: 5,
  },
  
  cardText: {
    fontSize: 15,
    color: colors.inputBackground,
    lineHeight: 22,
  },
});