import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import Mapbox from '@rnmapbox/maps';

// Importando os pontos de interesse e o Token do Mapbox
import { POINTS_OF_INTEREST, MAPBOX_TOKEN } from '../../config/constants';
import { styles } from './styles';

export default function PreviaRotaScreen({ route, navigation }) {
  const { rotaSelecionada } = route.params || {};
  const [isResumoOpen, setIsResumoOpen] = useState(true);
  
  const [fullRouteCoordinates, setFullRouteCoordinates] = useState([]);
  
  // NOVOS ESTADOS: Para guardar a distância e duração reais da API
  const [distanciaCalculada, setDistanciaCalculada] = useState('Calculando...');
  const [duracaoCalculada, setDuracaoCalculada] = useState('Calculando...');

  const routePoints = useMemo(() => {
    if (!rotaSelecionada || !rotaSelecionada.sequence) return [];
    return rotaSelecionada.sequence
      .map(id => POINTS_OF_INTEREST.find(p => p.id === id))
      .filter(Boolean); 
  }, [rotaSelecionada]);

  // NOVO: Calcula dinamicamente a quantidade de imóveis por tipo
  const statsImoveis = useMemo(() => {
    const counts = { colonial: 0, regional: 0, ecletico: 0, protomoderno: 0, moderno: 0 };
    
    routePoints.forEach(ponto => {
      if (ponto.type) {
        // Padroniza para letras minúsculas para evitar erros de digitação
        const tipo = ponto.type.toLowerCase(); 
        
        if (tipo.includes('colonial')) counts.colonial++;
        if (tipo.includes('regional')) counts.regional++;
        if (tipo.includes('eclético') || tipo.includes('ecletico')) counts.ecletico++;
        // Garante que não vai contar 'protomoderno' como 'moderno' duas vezes
        if (tipo.includes('protomoderno')) {
            counts.protomoderno++;
        } else if (tipo.includes('moderno')) {
            counts.moderno++;
        }
      }
    });
    
    return counts;
  }, [routePoints]);

  const mapCameraConfig = useMemo(() => {
    if (routePoints.length === 0) return null;
    
    if (routePoints.length === 1) {
      return {
        centerCoordinate: [routePoints[0].longitude, routePoints[0].latitude],
        zoomLevel: 16
      };
    }

    const lats = routePoints.map(p => p.latitude);
    const lngs = routePoints.map(p => p.longitude);
    
    return {
      bounds: {
        ne: [Math.max(...lngs), Math.max(...lats)],
        sw: [Math.min(...lngs), Math.min(...lats)],
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 40,
        paddingRight: 40,
      }
    };
  }, [routePoints]);

  useEffect(() => {
    const fetchFullRoute = async () => {
      if (!routePoints || routePoints.length < 2) {
        setDistanciaCalculada('-');
        setDuracaoCalculada('-');
        return;
      }
      try {
        const coords = routePoints.map(p => `${p.longitude},${p.latitude}`).join(';');
        
        const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${coords}?geometries=geojson&overview=full&access_token=${MAPBOX_TOKEN}`;
        const response = await fetch(url);
        
        if (!response.ok) return;

        const data = await response.json();
        if (data.routes && data.routes.length > 0) {
          const rota = data.routes[0];
          setFullRouteCoordinates(rota.geometry.coordinates);

          // LÓGICA DE DISTÂNCIA E DURAÇÃO DA API
          const metros = rota.distance;
          if (metros > 1000) {
            setDistanciaCalculada((metros / 1000).toFixed(1) + ' km');
          } else {
            setDistanciaCalculada(Math.round(metros) + ' m');
          }

          const segundos = rota.duration;
          const minutos = Math.round(segundos / 60);
          setDuracaoCalculada(minutos + ' min');
        }
      } catch (error) {
        console.log("Erro ao buscar rota completa na prévia:", error);
        setDistanciaCalculada('Erro');
        setDuracaoCalculada('Erro');
      }
    };

    fetchFullRoute();
  }, [routePoints]);

  const handleIniciarCaminhada = () => {
    if (rotaSelecionada) {
      navigation.navigate('Mapa', { rotaSelecionada });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="dark" />
      
      <ImageBackground 
        source={require('../../../assets/pattern.png')} 
        style={styles.previaBg}
        resizeMode="repeat"
        imageStyle={{ opacity: 0.5 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <MaterialIcons name="arrow-back" size={24} color="#1C2B40" />
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>{rotaSelecionada?.title || 'Trajeto Núcleo Histórico'}</Text>
          </View>

          <View style={styles.mapContainer}>
            <Mapbox.MapView 
              style={styles.map} 
              styleURL={Mapbox.StyleURL.Street}
              compassEnabled={false} 
              logoEnabled={false} 
              attributionEnabled={false}
              scrollEnabled={false} 
              zoomEnabled={false}   
              pitchEnabled={false}
            >
              {mapCameraConfig && (
                <Mapbox.Camera
                  {...mapCameraConfig}
                  animationMode="moveTo"
                  animationDuration={0}
                />
              )}

              {fullRouteCoordinates.length > 0 && (
                <Mapbox.ShapeSource 
                  id="previaRouteSource" 
                  shape={{ 
                    type: 'Feature', 
                    geometry: { type: 'LineString', coordinates: fullRouteCoordinates }
                  }}
                >
                  <Mapbox.LineLayer 
                    id="previaRouteLayer" 
                    style={{ 
                      lineColor: '#0077b6', 
                      lineWidth: 4, 
                      lineOpacity: 0.7,
                      lineJoin: 'round',
                      lineCap: 'round'
                    }} 
                  />
                </Mapbox.ShapeSource>
              )}

              {routePoints.map((point, index) => {
                const isStart = index === 0;
                const isEnd = index === routePoints.length - 1;

                return (
                  <Mapbox.PointAnnotation
                    key={`previa-${point.id}`}
                    id={`previa-${point.id}`}
                    coordinate={[point.longitude, point.latitude]}
                  >
                    {isStart ? (
                      <View style={[styles.marker, styles.markerStart]}>
                        <FontAwesome5 name="flag" size={10} color="#FFF" />
                      </View>
                    ) : isEnd ? (
                      <View style={[styles.marker, styles.markerEnd]}>
                        <FontAwesome5 name="flag-checkered" size={10} color="#FFF" />
                      </View>
                    ) : (
                      <View style={styles.markerNormal} />
                    )}
                  </Mapbox.PointAnnotation>
                );
              })}
            </Mapbox.MapView>
          </View>

          <TouchableOpacity 
            style={styles.startButton} 
            onPress={handleIniciarCaminhada} 
            activeOpacity={0.8}
          >
            <FontAwesome5 name="location-arrow" size={18} color="#FFF" />
            <Text style={styles.startButtonText}>Iniciar caminhada</Text>
          </TouchableOpacity>

          <View style={styles.accordionContainer}>
            <TouchableOpacity
              style={styles.accordionHeader}
              activeOpacity={0.7}
              onPress={() => setIsResumoOpen(!isResumoOpen)}
            >
              <Text style={styles.accordionTitle}>Resumo:</Text>
              <MaterialIcons 
                name={isResumoOpen ? "expand-less" : "expand-more"} 
                size={26} 
                color="#1C2B40" 
              />
            </TouchableOpacity>

            {isResumoOpen && (
              <View style={styles.accordionContent}>
                <Text style={styles.summaryText}>
                  <Text style={styles.summaryLabel}>Distância: </Text>
                  {distanciaCalculada}
                </Text>
                
                <Text style={styles.summaryText}>
                  <Text style={styles.summaryLabel}>Duração estimada: </Text>
                  {duracaoCalculada}
                </Text>
                
                <Text style={styles.summaryText}>
                  <Text style={styles.summaryLabel}>Quantidade de Imóveis: </Text>
                  {routePoints.length}
                </Text>

                <Text style={[styles.summaryLabel, { marginTop: 10, marginBottom: 5 }]}>
                  Imóveis por tipo:
                </Text>
                
                <Text style={styles.summaryText}>- Colonial: {statsImoveis.colonial}</Text>
                <Text style={styles.summaryText}>- Regional: {statsImoveis.regional}</Text>
                <Text style={styles.summaryText}>- Eclético: {statsImoveis.ecletico}</Text>
                <Text style={styles.summaryText}>- Protomoderno: {statsImoveis.protomoderno}</Text>
                <Text style={styles.summaryText}>- Moderno: {statsImoveis.moderno}</Text>
              </View>
            )}
          </View>

        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}