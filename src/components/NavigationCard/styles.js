import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors'; 

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 125, 
    left: 15,
    right: 15,
    backgroundColor: colors.cardBackground, 
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    zIndex: 999, 
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', 
    flex: 1,
  },
});