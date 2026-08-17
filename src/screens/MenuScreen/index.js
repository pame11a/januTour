import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { ROUTES_LIST } from '../../data/routes';
// IMPORTANTE: Adicionamos a importação dos pontos e do token do Mapbox
import { POINTS_OF_INTEREST, MAPBOX_TOKEN } from '../../config/constants'; 

import { styles } from './styles';

export default function MenuScreen({ navigation }) {
  const [rotaExpandida, setRotaExpandida] = useState(null);
  
  // NOVO ESTADO: Vai guardar os cálculos de cada rota. Ex: { 'núcleo_histórico': { distance: '1.2 km', duration: '15 min' } }
  const [metricasRotas, setMetricasRotas] = useState({}); 

  const toggleExpandir = (id) => {
    setRotaExpandida(rotaExpandida === id ? null : id);
  };

  const iniciarRota = (rota) => {
    navigation.navigate('Previa', { rotaSelecionada: rota });
  };

  // NOVO EFEITO: Calcula a distância e duração na hora que o card é aberto
  useEffect(() => {
    // Só faz o cálculo se a rota foi expandida e se ainda não calculamos ela antes
    if (rotaExpandida && !metricasRotas[rotaExpandida]) {
      const rota = ROUTES_LIST.find(r => r.id === rotaExpandida);
      
      if (rota && rota.sequence) {
        const routePoints = rota.sequence
          .map(id => POINTS_OF_INTEREST.find(p => p.id === id))
          .filter(Boolean);

        if (routePoints.length >= 2) {
          // Pega as coordenadas de todos os pontos da rota e monta a URL do Mapbox
          const coords = routePoints.map(p => `${p.longitude},${p.latitude}`).join(';');
          const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${coords}?access_token=${MAPBOX_TOKEN}`;
          
          fetch(url)
            .then(response => response.json())
            .then(data => {
              if (data.routes && data.routes.length > 0) {
                const metros = data.routes[0].distance;
                const segundos = data.routes[0].duration;
                
                // Formata os números
                const distanciaFormatada = metros > 1000 
                  ? (metros / 1000).toFixed(1) + ' km' 
                  : Math.round(metros) + ' m';
                  
                const duracaoFormatada = Math.round(segundos / 60) + ' min';

                // Salva o resultado no estado para esta rota específica
                setMetricasRotas(prev => ({
                  ...prev,
                  [rotaExpandida]: { distance: distanciaFormatada, duration: duracaoFormatada }
                }));
              }
            })
            .catch(err => console.log("Erro ao calcular métricas no menu:", err));
        }
      }
    }
  }, [rotaExpandida]); // Dispara toda vez que você abre um card diferente

  return (
    <SafeAreaView style={styles.safeArea}>
      <ExpoStatusBar style="dark" />
      
      <ImageBackground 
        source={require('../../../assets/pattern.png')} 
        style={styles.menuBg}
        resizeMode="repeat"
        imageStyle={{ opacity: 0.5 }} 
      >
        <ScrollView contentContainerStyle={styles.container}>
          
          <View style={styles.header}>
            <MaterialIcons name="alt-route" size={28} color="#1C2B40" />
            <Text style={styles.title}>Rotas - Trajetos</Text>
          </View>

          {ROUTES_LIST && ROUTES_LIST.map((rota) => {
            
            // LÓGICA DE EXIBIÇÃO: Mostra o cálculo automático. Se ainda não tiver calculado, mostra 'Calculando...'
            const displayDistance = metricasRotas[rota.id]?.distance || (rota.distance !== '... ' && rota.distance !== '...' ? rota.distance : 'Calculando...');
            const displayDuration = metricasRotas[rota.id]?.duration || (rota.duration !== '... ' && rota.duration !== '...' ? rota.duration : 'Calculando...');

            return (
              <View key={rota.id} style={styles.card}>
                <TouchableOpacity 
                  style={styles.cardHeader} 
                  onPress={() => toggleExpandir(rota.id)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.cardTitle}>{rota.title || 'Sem título'}</Text>
                  <MaterialIcons 
                    name={rotaExpandida === rota.id ? "expand-less" : "expand-more"} 
                    size={24} 
                    color="#1C2B40" 
                  />
                </TouchableOpacity>

                {rotaExpandida === rota.id && (
                  <View style={styles.cardContent}>
                    
                    {rota.description && (
                      <Text style={{ fontSize: 14, color: '#4a5568', marginBottom: 12, fontStyle: 'italic' }}>
                        {rota.description}
                      </Text>
                    )}

                    <View style={styles.infoRow}>
                      <Text style={styles.infoText}>🚶 Caminhada: {displayDistance}</Text>
                      <Text style={styles.infoText}>⏱️ Duração: {displayDuration}</Text>
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
            );
          })}

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
      </ImageBackground>
    </SafeAreaView>
  );
}