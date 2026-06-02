import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Mapbox from '@rnmapbox/maps';
import * as Location from 'expo-location';
import * as geolib from 'geolib';
import { MaterialIcons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

// 1. CAMINHOS CORRIGIDOS (Subindo dois andares: ../../)
import { Header } from '../../components/header';
import { ProximityAlert } from '../../components/ProximityAlert';
import { MapMarkers } from '../../components/MapMarkers';
import { NavigationCard } from '../../components/NavigationCard';

// 2. CAMINHOS CORRIGIDOS PARA ESTILOS E CONFIGS
import { styles } from './styles'; // Estilo local
import { colors } from '../../styles/colors';
import { MAPBOX_TOKEN, FALLBACK_COORDS, INITIAL_ZOOM, POINTS_OF_INTEREST } from '../../config/constants';

Mapbox.setAccessToken(MAPBOX_TOKEN);

// 3. RECEBENDO AS PROPS ROUTE E NAVIGATION
export default function MapaScreen({ route, navigation }) {
  
  // 4. CAPTURANDO A ROTA QUE O MENU ENVIOU
  const { rotaSelecionada } = route.params || {};

  // Estados de Localização e Rota
  const [userLocation, setUserLocation] = useState(null);
  const [rotaAtiva, setRotaAtiva] = useState([]);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [fullRouteCoordinates, setFullRouteCoordinates] = useState([]);
  const [instruction, setInstruction] = useState('');
  const cameraRef = useRef(null);

  // Estados de Alerta
  const [showAlert, setShowAlert] = useState(false);
  const [activePointData, setActivePointData] = useState(null);

  useEffect(() => {
    if (rotaSelecionada && rotaSelecionada.sequence) {
      setRotaAtiva(rotaSelecionada.sequence);
      setIndiceAtual(0);
      fetchFullRoute(rotaSelecionada.sequence);

      const primeiroId = rotaSelecionada.sequence[0];
      const primeiroPonto = POINTS_OF_INTEREST.find(p => p.id === primeiroId);

      if (primeiroPonto && cameraRef.current) {
        cameraRef.current.setCamera({
          centerCoordinate: [primeiroPonto.longitude, primeiroPonto.latitude],
          zoomLevel: INITIAL_ZOOM,
          animationMode: 'flyTo',
          animationDuration: 2000, 
        });
      }
    }
  }, [rotaSelecionada]);

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
      if (data.code !== 'Ok' || !data.routes || data.routes.length === 0) return;

      const route = data.routes[0];
      setRouteCoordinates(route.geometry.coordinates);
      
      if (route.legs && route.legs[0].steps && route.legs[0].steps.length > 0) {
        setInstruction(route.legs[0].steps[0].maneuver.instruction);
      }
    } catch (error) {
      console.log("Erro no fetchRoute", error);
    }
  };

  // Busca o traçado completo 
  const fetchFullRoute = async (sequenciaIds) => {
    if (!sequenciaIds || sequenciaIds.length < 2) return;
    try {
      const coords = sequenciaIds.map(id => {
        const p = POINTS_OF_INTEREST.find(poi => poi.id === id);
        return p ? `${p.longitude},${p.latitude}` : null;
      }).filter(Boolean);

      if (coords.length < 2) return;

      const coordinatesString = coords.join(';');
      const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${coordinatesString}?geometries=geojson&overview=full&access_token=${MAPBOX_TOKEN}`;
      const response = await fetch(url);
      if (!response.ok) return;

      const data = await response.json();
      if (data.routes && data.routes.length > 0) {
        setFullRouteCoordinates(data.routes[0].geometry.coordinates);
      }
    } catch (error) {
      console.log("Erro ao buscar rota completa:", error);
    }
  };

  const pularDestino = () => {
    if (rotaAtiva.length === 0) return;
    Speech.stop(); 
    setShowAlert(false); 
    setIndiceAtual((prev) => (prev + 1) % rotaAtiva.length);
    setRouteCoordinates([]); 
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

          if (rotaAtiva.length > 0 && !showAlert) {
            const point = POINTS_OF_INTEREST.find(p => p.id === rotaAtiva[indiceAtual]);
            if (point) {
              const dist = geolib.getDistance(
                { latitude: newCoords[1], longitude: newCoords[0] },
                { latitude: point.latitude, longitude: point.longitude }
              );

              if (dist < (point.radius || 15)) {
                setActivePointData({ title: point.title, message: point.message });
                setShowAlert(true);
                Speech.stop();
                Speech.speak(point.message, { language: 'pt-BR', pitch: 1.0, rate: 0.9 });
                setIndiceAtual((prev) => (prev + 1) % rotaAtiva.length);
                setRouteCoordinates([]);
              }
            }
          }
        }
      );
    })();
    return () => subscription?.remove();
  }, [rotaAtiva, indiceAtual, showAlert]);

  // Atualiza traçado das ruas conforme o usuário anda
  useEffect(() => {
    if (userLocation && rotaAtiva[indiceAtual]) {
      const target = POINTS_OF_INTEREST.find(p => p.id === rotaAtiva[indiceAtual]);
      if (target) {
        fetchRoute(userLocation, [target.longitude, target.latitude]);
      }
    }
  }, [userLocation, indiceAtual, rotaAtiva]);

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

  const inactivePoints = useMemo(() => {
    if (rotaAtiva.length === 0) return [];
    const futureIds = rotaAtiva.slice(indiceAtual + 1);
    return futureIds.map(id => POINTS_OF_INTEREST.find(p => p.id === id)).filter(Boolean);
  }, [rotaAtiva, indiceAtual]);

  const currentTarget = useMemo(() => {
    if (rotaAtiva.length > 0 && rotaAtiva[indiceAtual]) {
      return POINTS_OF_INTEREST.find(p => p.id === rotaAtiva[indiceAtual]);
    }
    return null;
  }, [rotaAtiva, indiceAtual]);

  const distanceLabel = useMemo(() => {
    if (!userLocation || userLocation.length < 2 || !currentTarget) return "Calculando...";
    try {
      const dist = geolib.getDistance(
        { latitude: Number(userLocation[1]), longitude: Number(userLocation[0]) },
        { latitude: Number(currentTarget.latitude), longitude: Number(currentTarget.longitude) }
      );
      if (dist >= 1000) return `${(dist / 1000).toFixed(1)} km`;
      return `${dist} m`;
    } catch (error) {
      return "Erro GPS";
    }
  }, [userLocation, currentTarget]); 

  return (
    <SafeAreaProvider>
      <ExpoStatusBar style="light" backgroundColor={colors.cardBackground} translucent={false} />
      
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right', 'bottom']}>
        
        <Header onOpenMenu={() => setIsMenuOpen(true)} navigation={navigation} />
        <NavigationCard instruction={rotaAtiva.length > 0 ? instruction : null} />

        <Mapbox.MapView style={styles.map} styleURL={Mapbox.StyleURL.Street}>
          <Mapbox.Camera ref={cameraRef} centerCoordinate={userLocation || FALLBACK_COORDS} zoomLevel={INITIAL_ZOOM} animationMode="flyto" />
          <Mapbox.UserLocation visible={true} showsUserHeadingIndicator={true} />
          <MapMarkers activePoint={currentTarget} inactivePoints={inactivePoints} />

          {fullRouteCoordinates.length > 0 && (
            <Mapbox.ShapeSource id="fullRouteSource" shape={{ type: 'Feature', geometry: { type: 'LineString', coordinates: fullRouteCoordinates }}}>
              <Mapbox.LineLayer id="fullRouteLayer" style={{ lineColor: '#9E9E9E', lineWidth: 4, lineOpacity: 0.5 }} />
            </Mapbox.ShapeSource>
          )}

          {routeCoordinates.length > 0 && (
            <Mapbox.ShapeSource id="routeSource" shape={{ type: 'Feature', geometry: { type: 'LineString', coordinates: routeCoordinates }}}>
              <Mapbox.LineLayer id="routeLayer" style={{ lineColor: '#0077b6', lineWidth: 5, lineJoin: 'round', lineDasharray: [1, 1] }} />
            </Mapbox.ShapeSource>
          )}
        </Mapbox.MapView>
        
        <TouchableOpacity style={styles.recenterButton} onPress={handleRecenter} activeOpacity={0.7}>
          <MaterialIcons name="my-location" size={24} color={colors.cardBackground} />
        </TouchableOpacity>

        {rotaAtiva.length > 0 && (
          <TouchableOpacity style={styles.skipButton} onPress={pularDestino} activeOpacity={0.8}>
            <MaterialIcons name="skip-next" size={20} color="#FFF" />
            <Text style={styles.skipButtonText}>Pular</Text>
          </TouchableOpacity>
        )}

        {currentTarget && !showAlert && (
          <View style={styles.destinationBadge}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialIcons name="place" size={18} color={colors.cardBackground} style={{ marginRight: 5 }} />
              <Text style={styles.destinationText}>{currentTarget.title} • <Text style={{ fontWeight: '900' }}>{distanceLabel}</Text></Text>
            </View>
          </View>
        )}

        <ProximityAlert isVisible={showAlert} data={activePointData} onClose={() => { setShowAlert(false); Speech.stop(); }} styles={styles} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}