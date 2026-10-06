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
    backgroundColor: '#E5E9F1',
    padding: 20,
    marginBottom: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.primary,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
  },
  cardImage: {
    width: '75%',
    height: 180,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardImageInfografico: {
    width: '100%',
    height: 160, 
    borderRadius: 12,
    resizeMode: 'contain',
  },
  arrowButton: {
    padding: 5,
  },
  cardText: {
    fontSize: 15,
    textAlign: 'justify',
    color: colors.inputBackground,
    lineHeight: 22,
  },
  modalFundo: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Fundo escuro semitransparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBotaoFechar: {
    position: 'absolute',
    top: 50,
    right: 25,
    zIndex: 10,
    padding: 10,
  },
  modalImagemGrande: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain', // Garante que a imagem não é cortada
  },
});