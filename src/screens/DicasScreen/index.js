import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from '../../styles/colors'; 
import { dicasData } from '../../config/dicasData'; 


function CardItem({ item }) {
  const [indiceFoto, setIndiceFoto] = useState(0);

  const imagensDisponiveis = item.imagens && item.imagens.length > 0 ? item.imagens : null;

  const proximaFoto = () => {
    if (imagensDisponiveis) {
      setIndiceFoto((prev) => (prev + 1) % imagensDisponiveis.length);
    }
  };

  const fotoAnterior = () => {
    if (imagensDisponiveis) {
      setIndiceFoto((prev) => (prev - 1 + imagensDisponiveis.length) % imagensDisponiveis.length);
    }
  };

  return (
    <View style={styles.card}>

      <Text style={styles.cardTitle}>{item.titulo}</Text>

      {imagensDisponiveis ? (
        <View>
          <View style={styles.imageContainer}>

            <TouchableOpacity onPress={fotoAnterior} style={styles.arrowButton}>
              <Ionicons name="chevron-back" size={28} color={colors.secondary} />
            </TouchableOpacity>

            <Image source={imagensDisponiveis[indiceFoto].imagem} style={styles.cardImage} />

            <TouchableOpacity onPress={proximaFoto} style={styles.arrowButton}>
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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.cardBackground} />
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Dicas e histórias</Text>
      </View>
      <FlatList
        data={dicasData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardItem item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}