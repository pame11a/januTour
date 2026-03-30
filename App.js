import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Mapbox from '@rnmapbox/maps';
import * as Location from 'expo-location';
import * as geolib from 'geolib';
import { MaterialIcons } from '@expo/vector-icons';

// Componentes Modulares
import { Header } from './src/components/header';
import { ProximityAlert } from './src/components/ProximityAlert';
import { MapMarkers } from './src/components/MapMarkers';
import { RouteSelector } from './src/components/RouteSelector';
import { StartModeModal } from './src/components/StartModeModal';
import { NavigationCard } from './src/components/NavigationCard';

// Configurações e Estilos
import { styles } from './styles';
import { colors } from './src/styles/colors';
import { MAPBOX_TOKEN, FALLBACK_COORDS, INITIAL_ZOOM, POINTS_OF_INTEREST } from './src/config/constants';
import { ROUTES_LIST } from './src/data/routes';

Mapbox.setAccessToken(MAPBOX_TOKEN);

export default function App() {
  // Estados de Interface
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStartModalVisible, setIsStartModalVisible] = useState(false);
  const [isRouteSelected, setIsRouteSelected] = useState(false);
  const [tempSelectedRoute, setTempSelectedRoute] = useState(null);
  const [instruction, setInstruction] = useState('');

  // Estados de Localização e Rota
  const [userLocation, setUserLocation] = useState(null);
  const [rotaAtiva, setRotaAtiva] = useState([]);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const cameraRef = useRef(null);

  // Estados de Alerta
  const [showAlert, setShowAlert] = useState(false);
  const [activePointData, setActivePointData] = useState(null);

  // Busca o traçado real pelas ruas
  const fetchRoute = async (start, end) => {
    if (!start || !end || start.length < 2 || end.length < 2) {
      setRouteCoordinates([]);
      return;
    }
    try {

      const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&overview=full&steps=true&language=pt-BR&access_token=${MAPBOX_TOKEN}`;
      
      const response = await fetch(url);
      
      if (!response.ok) return;

      const data = await response.json();
      
      if (data.code !== 'Ok' || !data.routes || data.routes.length === 0) {
        return;
      }

      const route = data.routes[0];
      setRouteCoordinates(route.geometry.coordinates);
      
      if (route.legs && route.legs[0].steps && route.legs[0].steps.length > 0) {
        const currentInstruction = route.legs[0].steps[0].maneuver.instruction;
        setInstruction(currentInstruction);
      }

    } catch (error) {
      if (__DEV__) {
      }
    }
  };

  // Lógica de Início da Rota
  const iniciarTour = (rota, modo, coords) => {
    let novaSequencia = [...rota.sequence];

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
    setRouteCoordinates([]);
  };

  const handleRouteSelect = (rota) => {
    setTempSelectedRoute(rota);
    setIsStartModalVisible(true);
  };

  const handleModeSelect = (modo) => {
    if (tempSelectedRoute) {
      iniciarTour(tempSelectedRoute, modo, userLocation);
      setIsStartModalVisible(false);
    }
  };

  // Monitoramento de GPS e Proximidade
  useEffect(() => {
    let subscription;
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      subscription = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 3 },
        (loc) => {
          const newCoords = [loc.coords.longitude, loc.coords.latitude];
          setUserLocation(newCoords);

          if (isRouteSelected && rotaAtiva.length > 0 && !showAlert) {
            const point = POINTS_OF_INTEREST.find(p => p.id === rotaAtiva[indiceAtual]);
            if (point) {
              const dist = geolib.getDistance(
                { latitude: newCoords[1], longitude: newCoords[0] },
                { latitude: point.latitude, longitude: point.longitude }
              );

              if (dist < (point.radius || 15)) {
                setActivePointData({ title: point.title, message: point.message });
                setShowAlert(true);
                setIndiceAtual((prev) => (prev + 1) % rotaAtiva.length);
                setRouteCoordinates([]);
              }
            }
          }
        }
      );
    })();
    return () => subscription?.remove();
  }, [isRouteSelected, rotaAtiva, indiceAtual, showAlert]);

  // Atualiza traçado das ruas
  useEffect(() => {
    if (userLocation && isRouteSelected && rotaAtiva[indiceAtual]) {
      const target = POINTS_OF_INTEREST.find(p => p.id === rotaAtiva[indiceAtual]);
      if (target) {
        fetchRoute(userLocation, [target.longitude, target.latitude]);
      }
    }
  }, [userLocation, indiceAtual, isRouteSelected]);

  const handleRecenter = () => {
    if (userLocation && cameraRef.current) {
      cameraRef.current.setCamera({
        centerCoordinate: userLocation,
        zoomLevel: INITIAL_ZOOM,
        animationMode: 'flyTo',
        animationDuration: 1000,
      });
    }
  };

  const currentTarget = rotaAtiva.length > 0 ? POINTS_OF_INTEREST.find(p => p.id === rotaAtiva[indiceAtual]) : null;

  return (
    <SafeAreaProvider>
      <ExpoStatusBar style="light" backgroundColor={colors.cardBackground} translucent={false} />
      
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right', 'bottom']}>
        
        <Header onOpenMenu={() => setIsMenuOpen(true)} />
        <NavigationCard instruction={isRouteSelected ? instruction : null} />

        <Mapbox.MapView style={styles.map} styleURL={Mapbox.StyleURL.Street}>
          <Mapbox.Camera 
            ref={cameraRef}
            centerCoordinate={userLocation || FALLBACK_COORDS} 
            zoomLevel={INITIAL_ZOOM} 
            animationMode="Flyto" 
          />
          <MapMarkers 
            points={isRouteSelected && currentTarget ? [currentTarget] : []} 
            userLocation={userLocation} 
            styles={styles} 
          />

          {routeCoordinates.length > 0 && (
            <Mapbox.ShapeSource
              id="routeSource"
              shape={{ type: 'Feature', geometry: { type: 'LineString', coordinates: routeCoordinates }}}
            >
              <Mapbox.LineLayer
                id="routeLayer"
                style={{ lineColor: '#0077b6', lineWidth: 5, lineJoin: 'round', lineDasharray: [1, 1] }}
              />
            </Mapbox.ShapeSource>
          )}
        </Mapbox.MapView>
        
        <TouchableOpacity 
          style={styles.recenterButton} 
          onPress={handleRecenter}
          activeOpacity={0.7}
        >
          <MaterialIcons name="my-location" size={24} color={colors.cardBackground} />
        </TouchableOpacity>

        <RouteSelector 
          isVisible={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
          onSelectRoute={handleRouteSelect}
        />

        <StartModeModal
          isVisible={isStartModalVisible}
          routeTitle={tempSelectedRoute?.title}
          onClose={() => setIsStartModalVisible(false)}
          onSelectMode={handleModeSelect}
        />

        {isRouteSelected && currentTarget && !showAlert && (
          <View style={styles.destinationBadge}>
            <Text style={styles.destinationText}>📍 Próximo: {currentTarget.title}</Text>
          </View>
        )}

        <ProximityAlert 
          isVisible={showAlert} 
          data={activePointData} 
          onClose={() => setShowAlert(false)} 
          styles={styles} 
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}