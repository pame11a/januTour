import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, View, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from './src/components/header';
import { styles } from './styles'; 
import Mapbox from '@rnmapbox/maps';
import * as Location from 'expo-location';
import * as geolib from 'geolib'; 
import { ProximityAlert } from './src/components/ProximityAlert'; 
import { MapMarkers } from './src/components/MapMarkers'; 
import { 
  FALLBACK_COORDS, 
  INITIAL_ZOOM, 
  POINTS_OF_INTEREST 
} from './src/config/constants';

// Configuração do Token
const MAPBOX_TOKEN = "pk.eyJ1IjoicGFtZTExYSIsImEiOiJjbWlnMjY5c2IwMmRsM2Zwb3FzamxkbGg3In0.335QLoA_FqHQDF6EGP49EQ";
Mapbox.setAccessToken(MAPBOX_TOKEN);

const SEQUENCIA_ROTA_IGREJA = [
  'catedral',
  'cartorio',
  'lanchonete_lanchinho',
  'go_laser',
  'gorilla_celulares',
  'casa_da_memoria',
  'prefeitura_municipal'
];

export default function App() {
  const [userLocation, setUserLocation] = useState(null); 
  const [showAlert, setShowAlert] = useState(false);
  const [activePointData, setActivePointData] = useState(null); 

  const [rotaAtiva, setRotaAtiva] = useState([]);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [isRouteSelected, setIsRouteSelected] = useState(false);
  const [routeCoordinates, setRouteCoordinates] = useState([]); // Coordenadas das ruas
  
  const rotaInicializada = useRef(false);

  // Busca o traçado real pelas ruas via API
  const fetchRoute = async (start, end) => {
    try {
      const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${MAPBOX_TOKEN}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.routes && data.routes[0]) {
        setRouteCoordinates(data.routes[0].geometry.coordinates);
      }
    } catch (error) {
      console.error("Erro ao buscar rota viária:", error);
    }
  };

  // Diálogo inicial de escolha
  const perguntarPreferencia = (coords) => {
    Alert.alert(
      "JanuTour - Rota da Igreja",
      "Como deseja iniciar seu percurso?",
      [
        {
          text: "Ponto mais próximo",
          onPress: () => {
            definirMelhorInicio(coords);
            setIsRouteSelected(true);
          }
        },
        {
          text: "Início Oficial",
          onPress: () => {
            setRotaAtiva(SEQUENCIA_ROTA_IGREJA);
            setIsRouteSelected(true);
          }
        }
      ],
      { cancelable: false }
    );
  };

  const definirMelhorInicio = (coords) => {
    let closestId = SEQUENCIA_ROTA_IGREJA[0];
    let minDistance = Infinity;

    SEQUENCIA_ROTA_IGREJA.forEach(id => {
      const p = POINTS_OF_INTEREST.find(poi => poi.id === id);
      const d = geolib.getDistance(
        { latitude: coords[1], longitude: coords[0] },
        { latitude: p.latitude, longitude: p.longitude }
      );
      if (d < minDistance) {
        minDistance = d;
        closestId = id;
      }
    });

    const idx = SEQUENCIA_ROTA_IGREJA.indexOf(closestId);
    setRotaAtiva([...SEQUENCIA_ROTA_IGREJA.slice(idx), ...SEQUENCIA_ROTA_IGREJA.slice(0, idx)]);
  };

  const checkProximity = (coords) => {
    if (showAlert || !isRouteSelected || rotaAtiva.length === 0) return;

    const currentId = rotaAtiva[indiceAtual];
    const point = POINTS_OF_INTEREST.find(p => p.id === currentId);
    
    const distance = geolib.getDistance(
      { latitude: coords[1], longitude: coords[0] },
      { latitude: point.latitude, longitude: point.longitude }
    );

    if (distance < (point.radius || 15)) {
      setActivePointData({ title: point.title, message: point.message });
      setShowAlert(true);
      setIndiceAtual((prev) => (prev + 1) % rotaAtiva.length);
      setRouteCoordinates([]); // Limpa para recalcular no próximo destino
    }
  };

  const startLocationTracking = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') return;
    
    return await Location.watchPositionAsync(
      { accuracy: Location.Accuracy.High, distanceInterval: 3 },
      (loc) => {
        const newCoords = [loc.coords.longitude, loc.coords.latitude];
        setUserLocation(newCoords);

        if (!rotaInicializada.current) {
          perguntarPreferencia(newCoords);
          rotaInicializada.current = true;
        }

        checkProximity(newCoords);
      }
    );
  };

  useEffect(() => {
    let sub;
    startLocationTracking().then(s => sub = s);
    return () => sub?.remove();
  }, [isRouteSelected, rotaAtiva, indiceAtual, showAlert]);

  // Hook para atualizar o traçado sempre que a posição ou alvo mudar
  useEffect(() => {
    if (userLocation && isRouteSelected && rotaAtiva[indiceAtual]) {
      const target = POINTS_OF_INTEREST.find(p => p.id === rotaAtiva[indiceAtual]);
      fetchRoute(userLocation, [target.longitude, target.latitude]);
    }
  }, [userLocation, indiceAtual, isRouteSelected]);

  const currentTarget = rotaAtiva.length > 0 ? POINTS_OF_INTEREST.find(p => p.id === rotaAtiva[indiceAtual]) : null;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        
        <Mapbox.MapView style={styles.map} styleURL={Mapbox.StyleURL.Street}>
          <Mapbox.Camera 
            centerCoordinate={userLocation || FALLBACK_COORDS} 
            zoomLevel={INITIAL_ZOOM} 
            animationMode="Flyto" 
          />

          <MapMarkers finalCoords={userLocation || FALLBACK_COORDS} styles={styles} />

          {/* Traçado que segue as ruas */}
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
                  lineCap: 'round',
                  lineDasharray: [1, 1]
                }}
              />
            </Mapbox.ShapeSource>
          )}
        </Mapbox.MapView>

        {isRouteSelected && currentTarget && !showAlert && (
          <View style={{ position: 'absolute', bottom: 50, alignSelf: 'center', backgroundColor: 'white', padding: 12, borderRadius: 25, elevation: 5 }}>
            <Text style={{ color: '#0077b6', fontWeight: 'bold' }}>📍 Próximo: {currentTarget.title}</Text>
          </View>
        )}

        <ProximityAlert isVisible={showAlert} data={activePointData} onClose={() => setShowAlert(false)} styles={styles} />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}