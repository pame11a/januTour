import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Header(){
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}> JanuTour</Text>
      <TouchableOpacity>
        <Text style={styles.iconPlaceholder}>☰</Text>
      </TouchableOpacity>
    </View>
  );
};