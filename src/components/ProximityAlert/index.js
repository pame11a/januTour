import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export function ProximityAlert({ isVisible, onClose, styles, data }) {
  const [imagemAtualIndex, setImagemAtualIndex] = useState(0);

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

  return (
    <View style={styles.alertContainer}>
      <View style={styles.alertBox}>
        <Text style={styles.alertTitle}>{data.title}</Text>
        <Text style={styles.alertMessage}>{data.message}</Text>
        
        {data.imagens && data.imagens.length > 0 && (
          <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
            
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              
              <TouchableOpacity 
                onPress={prevImage} 
                disabled={imagemAtualIndex === 0}  imagem
                style={{ padding: 5, opacity: imagemAtualIndex === 0 ? 0.2 : 1 }}
              >
                <MaterialIcons name="chevron-left" size={32} color="#1C2B40" />
              </TouchableOpacity>

              <Image 
                source={data.imagens[imagemAtualIndex].imagem} 
                style={{ width: 220, height: 160, borderRadius: 8, backgroundColor: '#e2e8f0', marginHorizontal: 5 }} 
                resizeMode="cover" 
              />

              <TouchableOpacity 
                onPress={nextImage} 
                disabled={imagemAtualIndex === data.imagens.length - 1} 
                style={{ padding: 5, opacity: imagemAtualIndex === data.imagens.length - 1 ? 0.2 : 1 }}
              >
                <MaterialIcons name="chevron-right" size={32} color="#1C2B40" />
              </TouchableOpacity>
              
            </View>

            {data.imagens[imagemAtualIndex].descricao ? (
              <Text style={[styles.carouselDescription, { marginTop: 8, maxWidth: 220 }]}>
                {data.imagens[imagemAtualIndex].descricao}
              </Text>
            ) : null}

          </View>
        )}
        
        <TouchableOpacity 
          style={styles.alertButton} 
          onPress={() => {
            setImagemAtualIndex(0); 
            onClose();
          }}
        >
          <Text style={styles.alertButtonText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}