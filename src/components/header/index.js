import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons'; 

export function Header({ onOpenMenu }){ 
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>JanuTour</Text>
      
      <TouchableOpacity onPress={onOpenMenu} activeOpacity={0.7}>
        <Entypo name="dots-three-vertical" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};