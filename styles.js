import { StyleSheet, Platform } from 'react-native';
import { colors } from './src/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cardBackground, 
  },
  map: {
    flex: 1,
    width: '100%',
    // O flex: 1 dentro de um SafeAreaView com edge 'bottom' 
    // fará o mapa respeitar a barra de navegação no Android.
  },
  
  destinationBadge: {
    position: 'absolute', 
    bottom: Platform.OS === 'android' ? 60 : 50, 
    alignSelf: 'center', 
    backgroundColor: 'white', 
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    borderRadius: 25, 
    elevation: 5,
    borderWidth: 1,
    borderColor: colors.cardBackground,
    zIndex: 10 
  },
  destinationText: {
    color: colors.cardBackground, 
    fontWeight: 'bold',
    fontSize: 14,
  },

  // Estilos de Marcadores
  poiMarker: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#0077b6',
    borderWidth: 2,
    borderColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },

  alertContainer: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  alertBox: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    elevation: 10,
  },
  alertTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.cardBackground,
  },
  alertMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
    lineHeight: 22,
  },
  alertButton: {
    backgroundColor: colors.cardBackground,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  alertButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});