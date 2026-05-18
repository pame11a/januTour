import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8F9FA' },
  container: { padding: 20, flexGrow: 1 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 24, marginTop: 10 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1C2B40', marginLeft: 10 },
  card: { backgroundColor: '#FFF', borderRadius: 12, marginBottom: 12, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 2, overflow: 'hidden' },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 18, backgroundColor: '#FFF' },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#333', textTransform: 'capitalize' },
  cardContent: { paddingHorizontal: 18, paddingBottom: 18, backgroundColor: '#FAFAFA', borderTopWidth: 1, borderColor: '#EEEEEE' },
  infoRow: { marginTop: 12, marginBottom: 16 },
  infoText: { fontSize: 14, color: '#666', marginBottom: 6 },
  startButton: { backgroundColor: '#1C2B40', paddingVertical: 12, borderRadius: 8, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  startButtonText: { color: '#FFF', fontWeight: 'bold', marginRight: 8, fontSize: 15 },
  footer: { marginTop: 'auto', paddingTop: 30 },
  footerButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#E9ECEF', padding: 16, borderRadius: 10, marginBottom: 12 },
  footerButtonText: { marginLeft: 12, fontSize: 16, fontWeight: '500', color: '#1C2B40' }
});