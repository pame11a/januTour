import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, View, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Mapbox from '@rnmapbox/maps';
import * as Location from 'expo-location';
import * as geolib from 'geolib'; 

// Componentes Modulares
import { Header } from './src/components/header';
import { ProximityAlert } from './src/components/ProximityAlert'; 
import { MapMarkers } from './src/components/MapMarkers'; 
import { RouteSelector } from './src/components/RouteSelector'; // Sua estrutura de pasta/index

// Configurações, Segurança e Dados
import { styles } from './styles'; 
import { MAPBOX_TOKEN, FALLBACK_COORDS, INITIAL_ZOOM, POINTS_OF_INTEREST } from './src/config/constants';
import { ROUTES_LIST } from './src/data/routes';

Mapbox.setAccessToken(MAPBOX_TOKEN);

export default function App() {
  // --- Estados de Interface ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRouteSelected, setIsRouteSelected] = useState(false);
  
  // --- Estados de Navegação ---
  const [userLocation, setUserLocation] = useState(null); 
  const [rotaAtiva, setRotaAtiva] = useState([]);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [routeCoordinates, setRouteCoordinates] = useState([]); // Traçado das ruas

  // --- Estados de Alerta ---
  const [showAlert, setShowAlert] = useState(false);
  const [activePointData, setActivePointData] = useState(null); 

  // 1. Busca o traçado real (Walking) pela malha viária de Januária
  const fetchRoute = async (start, end) => {
    try {
      const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${MAPBOX_TOKEN}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.routes && data.routes[0]) {
        setRouteCoordinates(data.routes[0].geometry.coordinates);
      }
    } catch (error) {
      console.error("Erro na Directions API:", error);
    }
  };

  // 2. Configura a sequência da rota baseada na escolha do usuário
  const iniciarTour = (rota, modo, coords) => {
    let novaSequencia = [...rota.sequence];

    // Lógica Circular: Reordena a partir do ponto mais próximo se solicitado
    if (modo === 'PROXIMO' && coords) {
      let closestId = rota.sequence[0];
      let minDistance = Infinity;

      rota.sequence.forEach(id => {
        const p = POINTS_OF_INTEREST.find(poi => poi.id === id);
        if (p) {
          const d = geolib.getDistance(
            { latitude: coords[1], longitude: coords[0] },
            { latitude: p.latitude, longitude: p.longitude }
          );
          if (d < minDistance) {
            minDistance = d;
            closestId = id;
          }
        }
      });

      const idx = rota.sequence.indexOf(closestId);
      novaSequencia = [...rota.sequence.slice(idx), ...rota.sequence.slice(0, idx)];
    }

    setRotaAtiva(novaSequencia);
    setIndiceAtual(0);
    setIsRouteSelected(true);
    setRouteCoordinates([]); // Limpa traçados antigos
  };

  // 3. Callback disparado pelo RouteSelector
  const handleRouteSelect = (rota) => {
    Alert.alert(
      rota.title,
      "Escolha o ponto de partida:",
      [
        { 
          text: "Ponto mais próximo", 
          onPress: () => iniciarTour(rota, 'PROXIMO', userLocation) 
        },
        { 
          text: "Início Oficial (Catedral)", 
          onPress: () => iniciarTour(rota, 'ORIGINAL', null) 
        }
      ],
      { cancelable: true }
    );
  };

  // 4. Efeito principal de Monitoramento (GPS e Proximidade)
  useEffect(() => {
    let locationSubscription;

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      locationSubscription = await Location.watchPositionAsync(
        { 
          accuracy: Location.Accuracy.High, 
          distanceInterval: 3 // Atualiza a cada 3 metros para suavidade
        },
        (loc) => {
          const newCoords = [loc.coords.longitude, loc.coords.latitude];
          setUserLocation(newCoords);

          // Só checa proximidade se houver uma rota ativa e nenhum alerta aberto
          if (isRouteSelected && rotaAtiva.length > 0 && !showAlert) {
            const pointId = rotaAtiva[indiceAtual];
            const point = POINTS_OF_INTEREST.find(p => p.id === pointId);
            
            if (point) {
              const dist = geolib.getDistance(
                { latitude: newCoords[1], longitude: newCoords[0] },
                { latitude: point.latitude, longitude: point.longitude }
              );

              if (dist < (point.radius || 15)) {
                setActivePointData({ title: point.title, message: point.message });
                setShowAlert(true);
                // Prepara o próximo destino da sequência circular
                setIndiceAtual((prev) => (prev + 1) % rotaAtiva.length);
                setRouteCoordinates([]); // Limpa a linha para o novo traçado
              }
            }
          }
        }
      );
    })();

    return () => { if (locationSubscription) locationSubscription.remove(); };
  }, [isRouteSelected, rotaAtiva, indiceAtual, showAlert]);

  // 5. Efeito para atualizar o traçado das ruas (sempre que posição ou alvo mudar)
  useEffect(() => {
    if (userLocation && isRouteSelected && rotaAtiva[indiceAtual]) {
      const target = POINTS_OF_INTEREST.find(p => p.id === rotaAtiva[indiceAtual]);
      if (target) {
        fetchRoute(userLocation, [target.longitude, target.latitude]);
      }
    }
  }, [userLocation, indiceAtual, isRouteSelected]);

  const currentTarget = rotaAtiva.length > 0 
    ? POINTS_OF_INTEREST.find(p => p.id === rotaAtiva[indiceAtual]) 
    : null;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
        {/* Header configurado para abrir o modal de seleção */}
        <Header onOpenMenu={() => setIsMenuOpen(true)} />

        <Mapbox.MapView style={styles.map} styleURL={Mapbox.StyleURL.Street}>
          <Mapbox.Camera 
            centerCoordinate={userLocation || FALLBACK_COORDS} 
            zoomLevel={INITIAL_ZOOM} 
            animationMode="Flyto" 
          />

          <MapMarkers finalCoords={userLocation || FALLBACK_COORDS} styles={styles} />

          {/* Traçado dinâmico pelas ruas de Januária */}
          {routeCoordinates.length > 0 && (
            <Mapbox.ShapeSource
              id="routeSource"
              shape={{ 
                type: 'Feature', 
                geometry: { type: 'LineString', coordinates: routeCoordinates }
              }}
            >
              <Mapbox.LineLayer
                id="routeLayer"
                style={{ 
                  lineColor: '#0077b6', 
                  lineWidth: 5, 
                  lineJoin: 'round', 
                  lineDasharray: [1, 1] 
                }}
              />
            </Mapbox.ShapeSource>
          )}
        </Mapbox.MapView>

        {/* Modal Seletor de Rotas (Modular) */}
        <RouteSelector 
          isVisible={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
          onSelectRoute={handleRouteSelect}
        />

        {/* Painel Informativo do Destino Atual */}
        {isRouteSelected && currentTarget && !showAlert && (
          <View style={{ 
            position: 'absolute', 
            bottom: 50, 
            alignSelf: 'center', 
            backgroundColor: 'white', 
            padding: 12, 
            borderRadius: 25, 
            elevation: 5,
            borderWidth: 1,
            borderColor: '#0077b6'
          }}>
            <Text style={{ color: '#0077b6', fontWeight: 'bold' }}>
              📍 Próximo: {currentTarget.title}
            </Text>
          </View>
        )}

        {/* Alerta de Proximidade (Conteúdo Histórico) */}
        <ProximityAlert 
          isVisible={showAlert} 
          data={activePointData} 
          onClose={() => setShowAlert(false)} 
          styles={styles} 
        />

        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}