import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoShadowContainer: {
    borderRadius: 100,
    backgroundColor: '#FFF',
    elevation: 15, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginBottom: 40,
  },
  logoRoundWrapper: {
    width: 180,
    height: 180,
    borderRadius: 90,
    overflow: 'hidden',
    borderWidth: 4, 
    borderColor: '#FFFFFF', 
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#2C3E50',
    letterSpacing: 1,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#5D6D7E',
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#0077b6',
    paddingVertical: 16,
    paddingHorizontal: 80,
    borderRadius: 35,
    elevation: 6,
    shadowColor: '#0077b6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 2,
  },
});