import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  scrollContent: { padding: 20, paddingBottom: 40 },
  previaBg: { flex: 1, width: '100%', height: '100%' },
  titleContainer: { marginBottom: 15 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1C2B40' },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#1C2B40',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  titleContainer: { marginBottom: 15 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1C2B40' },
  
  mapContainer: {
    height: 320,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  map: { flex: 1 },
  
  // Marcadores de Início e Fim 
  marker: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  // Pontos intermediários (Reduzidos de 14 para 10)
  markerNormal: { 
    backgroundColor: '#6C757D', 
    width: 10, 
    height: 10, 
    borderRadius: 5 
  }, 
  markerStart: { backgroundColor: '#28A745' }, 
  markerEnd: { backgroundColor: '#DC3545' },
  
  // Botão Iniciar Caminhada
  startButton: {
    backgroundColor: '#1C2B40',
    flexDirection: 'row',
    paddingVertical: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  startButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  
  // Acordeon de Resumo
  accordionContainer: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    overflow: 'hidden',
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  accordionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1C2B40' },
  accordionContent: { padding: 16, backgroundColor: '#FAFAFA' },
  summaryText: { fontSize: 16, color: '#333', marginBottom: 10 },
  summaryLabel: { fontWeight: 'bold', color: '#1C2B40' },
});