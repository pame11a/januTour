import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from '../../styles/colors'; 
import { dicasData } from '../../config/dicasData'; 

function CardItem({ item }) {
  const [indiceFoto, setIndiceFoto] = useState(0);

  const imagensDisponiveis = item.imagens && item.imagens.length > 0 ? item.imagens : null;

  const proximaFoto = () => {
    if (imagensDisponiveis && indiceFoto < imagensDisponiveis.length - 1) {
      setIndiceFoto((prev) => prev + 1);
    }
  };

  const fotoAnterior = () => {
    if (imagensDisponiveis && indiceFoto > 0) {
      setIndiceFoto((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.titulo}</Text>

      {imagensDisponiveis ? (
        <View>
          <View style={styles.imageContainer}>
            <TouchableOpacity 
              onPress={fotoAnterior} 
              style={[styles.arrowButton, { opacity: indiceFoto === 0 ? 0.3 : 1 }]}
              disabled={indiceFoto === 0}
            >
              <Ionicons name="chevron-back" size={28} color={colors.secondary} />
            </TouchableOpacity>

            <Image source={imagensDisponiveis[indiceFoto].imagem} style={styles.cardImage} />

            <TouchableOpacity 
              onPress={proximaFoto} 
              style={[styles.arrowButton, { opacity: indiceFoto === imagensDisponiveis.length - 1 ? 0.3 : 1 }]}
              disabled={indiceFoto === imagensDisponiveis.length - 1}
            >
              <Ionicons name="chevron-forward" size={28} color={colors.secondary} />
            </TouchableOpacity>
          </View>

          <Text style={{ textAlign: 'center', color: colors.textSecondary, fontSize: 12, marginBottom: 8 }}>
            {imagensDisponiveis[indiceFoto].descricao}
          </Text>
        </View>
      ) : null}
      <Text style={styles.cardText}>{item.texto}</Text>
    </View>
  );
}

export default function DicasScreen({ navigation }) {
  const insets = useSafeAreaInsets(); 

  const renderHeader = () => (
    <View style={[styles.header, { paddingTop: insets.top + 10, paddingHorizontal: 0, marginBottom: 15 }]}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color={colors.cardBackground} />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      
      <Text style={styles.headerTitle}>Dicas e histórias</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <ExpoStatusBar style="dark" backgroundColor="transparent" translucent={true} />
      
      <ImageBackground 
        source={require('../../../assets/pattern.png')} 
        style={{ flex: 1, width: '100%' }}
        resizeMode="repeat"
        imageStyle={{ opacity: 0.5 }} 
      >
        <FlatList
          data={dicasData}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={renderHeader} 
          renderItem={({ item }) => <CardItem item={item} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}