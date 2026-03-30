import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function NavigationCard({ instruction }) {
  if (!instruction) return null;

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="navigation-variant" size={24} color="#FFFFFF" />
      <Text style={styles.text}>{instruction}</Text>
    </View>
  );
}