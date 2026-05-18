import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { ROUTES_LIST } from '../../data/routes';

import { styles } from './styles';

export default function MenuScreen({ navigation }) {
  const [rotaExpandida, setRotaExpandida] = useState(null);

  const toggleExpandir = (id) => {
    setRotaExpandida(rotaExpandida === id ? null : id);
  };

  const iniciarRota = (rota) => {
    navigation.navigate('Mapa', { rotaSelecionada: rota });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ExpoStatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <MaterialIcons name="alt-route" size={28} color="#1C2B40" />
          <Text style={styles.title}>Rotas - Trajetos</Text>
        </View>

        {ROUTES_LIST && ROUTES_LIST.map((rota) => (
          <View key={rota.id} style={styles.card}>
            <TouchableOpacity 
              style={styles.cardHeader} 
              onPress={() => toggleExpandir(rota.id)}
              activeOpacity={0.7}
            >
              {/* O texto "Rota" redundante foi removido, agora puxa direto o nome limpo */}
              <Text style={styles.cardTitle}>{rota.title || 'Sem título'}</Text>
              <MaterialIcons 
                name={rotaExpandida === rota.id ? "expand-less" : "expand-more"} 
                size={24} 
                color="#1C2B40" 
              />
            </TouchableOpacity>

            {rotaExpandida === rota.id && (
              <View style={styles.cardContent}>
                <View style={styles.infoRow}>
                  <Text style={styles.infoText}>🚶 Caminhada: {rota.distancia || 'A calcular...'}</Text>
                  <Text style={styles.infoText}>⏱️ Duração: {rota.duracao || 'A calcular...'}</Text>
                </View>
                
                <TouchableOpacity 
                  style={styles.startButton}
                  onPress={() => iniciarRota(rota)}
                >
                  <Text style={styles.startButtonText}>Selecionar Rota</Text>
                  <MaterialIcons name="arrow-forward" size={18} color="#FFF" />
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}

        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <MaterialIcons name="info-outline" size={22} color="#1C2B40" />
            <Text style={styles.footerButtonText}>Dicas e Histórias</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.footerButton}>
            <MaterialIcons name="people-outline" size={22} color="#1C2B40" />
            <Text style={styles.footerButtonText}>Sobre Nós</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}