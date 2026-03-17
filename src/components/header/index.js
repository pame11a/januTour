import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons'; // Usando ícones nativos do Expo

export function Header({ onOpenMenu }){ // Recebe a função como prop
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>JanuTour</Text>
      
      <TouchableOpacity onPress={onOpenMenu} activeOpacity={0.7}>
        {/* Trocando o texto ☰ pelo ícone oficial de 3 pontos */}
        <Entypo name="dots-three-vertical" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};