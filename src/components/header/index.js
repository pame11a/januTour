import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons'; 
import { styles } from './styles';

export function Header({ navigation }) { 
  return (
    <View style={styles.headerContainer}>
      
      <View style={styles.leftContainer}>
        {navigation && (
          <TouchableOpacity 
            onPress={() => navigation.goBack()} 
            activeOpacity={0.7}
            style={styles.backButton}
          >
            <MaterialIcons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        )}
        <Text style={styles.headerTitle}>JanuTour</Text>
      </View>
    
    </View>
  );
}
