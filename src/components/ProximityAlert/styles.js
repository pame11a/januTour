import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  fullScreenContainer: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: '#F8F9FA',
    zIndex: 999,
  },
  safeArea: {
    flex: 1,
  },
  headerNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FFF',
  },
  iconButton: {
    padding: 5,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  nextButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    marginRight: 4,
    fontSize: 15,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.cardBackground,
    marginBottom: 20,
    textAlign: 'center',
  },
  imageSection: {
    alignItems: 'center',
    marginBottom: 25,
  },
  carouselRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  arrowButton: {
    padding: 5,
  },
  mainImage: {
    width: '75%',
    aspectRatio: 4/3,
    borderRadius: 12,
    backgroundColor: '#e2e8f0',
    marginHorizontal: 10,
  },
  imageDescription: {
    marginTop: 12,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  }
});