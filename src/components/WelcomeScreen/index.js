import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

export function WelcomeScreen({ onEnter }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoShadowContainer}>
        <View style={styles.logoRoundWrapper}>
          <Image 
            source={require('../../../assets/logo.jpg')} 
            style={styles.logo}
            resizeMode="cover" 
          />
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>JanuTour</Text>
        <Text style={styles.subtitle}>
          Explore o patrimônio histórico de Januária na palma da sua mão.
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={onEnter}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}