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
  
  // NOVO: Estado para guardar o desenho da linha nas ruas
  const [fullRouteCoordinates, setFullRouteCoordinates] = useState([]);

  const routePoints = useMemo(() => {
    if (!rotaSelecionada || !rotaSelecionada.sequence) return [];
    return rotaSelecionada.sequence
      .map(id => POINTS_OF_INTEREST.find(p => p.id === id))
      .filter(Boolean); 
  }, [rotaSelecionada]);

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

  // NOVO: Busca o traçado real pelas ruas assim que a tela abre
  useEffect(() => {
    const fetchFullRoute = async () => {
      if (!routePoints || routePoints.length < 2) return;
      try {
        const coords = routePoints.map(p => `${p.longitude},${p.latitude}`).join(';');
        
        // Usamos o perfil 'walking' para fazer caminhos de pedestre
        const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${coords}?geometries=geojson&overview=full&access_token=${MAPBOX_TOKEN}`;
        const response = await fetch(url);
        
        if (!response.ok) return;

        const data = await response.json();
        if (data.routes && data.routes.length > 0) {
          setFullRouteCoordinates(data.routes[0].geometry.coordinates);
        }
      } catch (error) {
        console.log("Erro ao buscar rota completa na prévia:", error);
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
                  {rotaSelecionada?.distance || 'A calcular...'}
                </Text>
                
                <Text style={styles.summaryText}>
                  <Text style={styles.summaryLabel}>Duração: </Text>
                  {rotaSelecionada?.duration || 'A calcular...'}
                </Text>
                
                <Text style={styles.summaryText}>
                  <Text style={styles.summaryLabel}>Quantidade de Imóveis históricos: </Text>
                  {routePoints.length}
                </Text>

                <Text style={[styles.summaryLabel, { marginTop: 10, marginBottom: 5 }]}>
                  Imóveis por tipo:
                </Text>
                
                <Text style={styles.summaryText}>- Colonial: {rotaSelecionada?.stats?.colonial || '-'}</Text>
                <Text style={styles.summaryText}>- Regional: {rotaSelecionada?.stats?.regional || '-'}</Text>
                <Text style={styles.summaryText}>- Eclético: {rotaSelecionada?.stats?.ecletico || '-'}</Text>
                <Text style={styles.summaryText}>- Protomoderno: {rotaSelecionada?.stats?.protomoderno || '-'}</Text>
                <Text style={styles.summaryText}>- Moderno: {rotaSelecionada?.stats?.moderno || '-'}</Text>
              </View>
            )}
          </View>

        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}