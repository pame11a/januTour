import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { styles } from './styles';

export function ProximityAlert({ isVisible, onClose, onDismiss, data }) {
  const [imagemAtualIndex, setImagemAtualIndex] = useState(0);
  const insets = useSafeAreaInsets(); 

  if (!isVisible || !data) return null;

  const nextImage = () => {
    if (data.imagens && imagemAtualIndex < data.imagens.length - 1) {
      setImagemAtualIndex(imagemAtualIndex + 1);
    }
  };

  const prevImage = () => {
    if (data.imagens && imagemAtualIndex > 0) {
      setImagemAtualIndex(imagemAtualIndex - 1);
    }
  };

  const handleNextPoint = () => {
    setImagemAtualIndex(0);
    onClose(); 
  };

  const handleDismiss = () => {
    setImagemAtualIndex(0);
    onDismiss();
  };

  return (
    <ImageBackground 
      source={require('../../../assets/pattern.png')} // 
      style={styles.fullScreenContainer}
      imageStyle={{ opacity: 0.5 }} 
      resizeMode="repeat" 
    >
        <ExpoStatusBar style="dark" />
        
        <View style={[styles.headerNav, { paddingTop: insets.top + 15 }]}>
          <TouchableOpacity onPress={handleDismiss} style={styles.iconButton}>
            <MaterialIcons name="close" size={28} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNextPoint} style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Próximo</Text>
            <MaterialIcons name="arrow-forward" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          <Text style={styles.title}>{data.title}</Text>
          
          {data.imagens && data.imagens.length > 0 && (
            <View style={styles.imageSection}>
              
              <View style={styles.carouselRow}>
                <TouchableOpacity 
                  onPress={prevImage} 
                  disabled={imagemAtualIndex === 0}  
                  style={[styles.arrowButton, { opacity: imagemAtualIndex === 0 ? 0.2 : 1 }]}
                >
                  <MaterialIcons name="chevron-left" size={36} color={colors.cardBackground} />
                </TouchableOpacity>

                <Image 
                  source={data.imagens[imagemAtualIndex].imagem} 
                  style={styles.mainImage} 
                  resizeMode="cover" 
                />

                <TouchableOpacity 
                  onPress={nextImage} 
                  disabled={imagemAtualIndex === data.imagens.length - 1} 
                  style={[styles.arrowButton, { opacity: imagemAtualIndex === data.imagens.length - 1 ? 0.2 : 1 }]}
                >
                  <MaterialIcons name="chevron-right" size={36} color={colors.cardBackground} />
                </TouchableOpacity>
              </View>

              {data.imagens[imagemAtualIndex].descricao ? (
                <Text style={styles.imageDescription}>
                  {data.imagens[imagemAtualIndex].descricao}
                </Text>
              ) : null}

            </View>
          )}

          <Text style={styles.messageText}>{data.message}</Text>
          
        </ScrollView>
    </ImageBackground>
  );
}