import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, Text, Platform, TouchableOpacity, Switch, Image} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Mapbox from '@rnmapbox/maps';
import * as Location from 'expo-location';
import * as geolib from 'geolib'; // Mantido apenas para a Label de Distância
import { MaterialIcons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { RouteFinishedAlert } from '../../components/RouteFinishedAlert';

// IMPORTAÇÕES DO TURF.JS (Para a lógica de Polígonos)
import { point, polygon } from '@turf/helpers';
import booleanPointInPolygon from '@turf/boolean-point-in-polygon';

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
  const { rotaSelecionada, modo = 'tour' } = route.params || {};
  const isAutonomo = modo === 'autonomo';

  // Estados de Localização e Rota
  const [ultimaInstrucaoFalada, setUltimaInstrucaoFalada] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [rotaAtiva, setRotaAtiva] = useState([]);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [fullRouteCoordinates, setFullRouteCoordinates] = useState([]);
  const [instruction, setInstruction] = useState('');
  const cameraRef = useRef(null);

  // Estados de Alerta e Polígonos
  const [ultimaDistanciaFalada, setUltimaDistanciaFalada] = useState(9999);
  const [isPointActive, setIsPointActive] = useState(false);
  const [ultimoPontoAvisado, setUltimoPontoAvisado] = useState(null);
  const [showRouteFinished, setShowRouteFinished] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [activePointData, setActivePointData] = useState(null);
  const [audioAtivo, setAudioAtivo] = useState(true);
  const [pontosVisitados, setPontosVisitados] = useState([]);
  const DEBUG_SHOW_POLYGONS = false; 

  const handleToggleAudio = () => {
    setAudioAtivo((prev) => {
      const novoEstado = !prev;
      if (!novoEstado) {
        Speech.stop();
      } else if (showAlert && activePointData?.message) {
        Speech.stop();
        Speech.speak(activePointData.message, {
          language: 'pt-BR',
          pitch: 1.0,
          rate: 0.9,
          voice: 'pt-br-x-ptd-network',
        });
      }
      return novoEstado;
    });
  };

  const abrirPonto = (pointData) => {
    if (!pointData) return;
    const idx = rotaAtiva.indexOf(pointData.id);
    if (idx !== -1) setIndiceAtual(idx);

    setIsPointActive(true);
    setActivePointData({
      title: pointData.title,
      message: pointData.message,
      imagens: pointData.imagens,
    });
    setShowAlert(true);
    setUltimoPontoAvisado(pointData.id);
    setPontosVisitados((prev) =>
      prev.includes(pointData.id) ? prev : [...prev, pointData.id]
    );

    Speech.stop();
    if (audioAtivo) {
      Speech.speak(pointData.message, {
        language: 'pt-BR',
        pitch: 1.0,
        rate: 0.9,
        voice: 'pt-br-x-ptd-network',
      });
    }
  };

  useEffect(() => {
    if (rotaSelecionada && rotaSelecionada.sequence) {
      setRotaAtiva(rotaSelecionada.sequence);
      setIndiceAtual(0);
      setPontosVisitados([]);
      setStartTime(Date.now());
      fetchFullRoute(rotaSelecionada.sequence);

      const primeiroId = rotaSelecionada.sequence[0];
      const primeiroPonto = POINTS_OF_INTEREST.find(p => p.id === primeiroId);

      if (!isAutonomo && primeiroPonto && cameraRef.current) {
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
        const steps = route.legs[0].steps;

        if (steps.length > 1) {
          const distanciaAteManobra = Math.round(steps[0].distance); 
          const proximaManobra = steps[1].maneuver.instruction; 
          
          setInstruction(`Em ${distanciaAteManobra}m: ${proximaManobra}`);
        } else {
          setInstruction(steps[0].maneuver.instruction);
        }
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
    setUltimaInstrucaoFalada(''); 
    setInstruction('');

    if (indiceAtual < rotaAtiva.length - 1) {
      setIndiceAtual((prev) => prev + 1);
      setRouteCoordinates([]); 
    } else {
      setShowRouteFinished(true);
    }
  };

  // Monitoramento de GPS e Proximidade usando Turf.js e Polígonos
  useEffect(() => {
    if (isAutonomo) return;
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
            const pointData = POINTS_OF_INTEREST.find(p => p.id === rotaAtiva[indiceAtual]);
            
            // Verifica se o ponto possui o polígono desenhado
            if (pointData && pointData.polygon) {
              try {
                const userPt = point(newCoords);
                // O Turf espera um array contendo o anel do polígono
                const targetPoly = polygon([pointData.polygon]); 
                
                const isInside = booleanPointInPolygon(userPt, targetPoly);

                // Gatilho ativado apenas se o usuário estiver DENTRO do polígono e ainda não tiver visto esta tela
                if (isInside && ultimoPontoAvisado !== pointData.id) {
                  setIsPointActive(true);
                  setActivePointData({ 
                    title: pointData.title, 
                    message: pointData.message, 
                    imagens: pointData.imagens 
                  });
                  setShowAlert(true);
                  setUltimoPontoAvisado(pointData.id); 
                  Speech.stop();
                  if (audioAtivo) {
                    Speech.speak(pointData.message, { 
                      language: 'pt-BR', 
                      pitch: 1.0, 
                      rate: 0.9,
                      voice: 'pt-br-x-ptd-network'
                    });
                  }
                  
                }
              } catch (error) {
                console.warn("Erro ao calcular intersecção do polígono:", error);
              }
            }
          }
        }
      );
    })();
    return () => subscription?.remove();
  }, [rotaAtiva, indiceAtual, showAlert, ultimoPontoAvisado, isAutonomo, audioAtivo]);

  // Atualiza traçado das ruas conforme o usuário anda
  useEffect(() => {
    if (isAutonomo) return;
    if (userLocation && rotaAtiva[indiceAtual]) {
      const target = POINTS_OF_INTEREST.find(p => p.id === rotaAtiva[indiceAtual]);
      if (target) {
        fetchRoute(userLocation, [target.longitude, target.latitude]);
      }
    }
  }, [userLocation, indiceAtual, rotaAtiva]);

  // Função para separar a ação dos metros 
  const analisarInstrucao = (texto) => {
    if (!texto) return { acao: '', distancia: 0 };
    const match = texto.match(/Em (\d+)m:(.*)/i);
    if (match) {
      return { distancia: parseInt(match[1], 10), acao: match[2].trim() };
    }
    return { acao: texto, distancia: 0 };
  };

  useEffect(() => {
    // Se a tela do ponto estiver aberta, o GPS não tem permissão para falar.
    if (isAutonomo || !audioAtivo || isPointActive || showRouteFinished) return;

    if (instruction) {
      const atual = analisarInstrucao(instruction);
      const antiga = analisarInstrucao(ultimaInstrucaoFalada);

      const acaoMudou = atual.acao !== antiga.acao;
      const diferencaDistancia = antiga.distancia - atual.distancia;
      
      // Só fala se a manobra mudou ou se desceu 50 metros desde a última fala
      const passouMargem = antiga.distancia === 0 || diferencaDistancia >= 50;

      if (acaoMudou || (atual.distancia > 0 && passouMargem)) {
        Speech.stop();
        Speech.speak(instruction, { 
          language: 'pt-BR', 
          pitch: 1.0, 
          rate: 1.0 
        });
        setUltimaInstrucaoFalada(instruction);
        setUltimaDistanciaFalada(atual.distancia);
      }
    }
  }, [instruction, isPointActive, showRouteFinished, ultimaInstrucaoFalada, ultimaDistanciaFalada, isAutonomo, audioAtivo]);

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
    const ids = isAutonomo
      ? rotaAtiva.filter((_, idx) => idx !== indiceAtual)
      : rotaAtiva.slice(indiceAtual + 1);
    return ids.map(id => POINTS_OF_INTEREST.find(p => p.id === id)).filter(Boolean);
  }, [rotaAtiva, indiceAtual, isAutonomo]);

  const autonomoCameraConfig = useMemo(() => {
    if (!isAutonomo || rotaAtiva.length === 0) return null;
    const pontos = rotaAtiva
      .map(id => POINTS_OF_INTEREST.find(p => p.id === id))
      .filter(Boolean);
    if (pontos.length === 0) return null;

    if (pontos.length === 1) {
      return {
        centerCoordinate: [pontos[0].longitude, pontos[0].latitude],
        zoomLevel: 16,
      };
    }

    const lats = pontos.map(p => p.latitude);
    const lngs = pontos.map(p => p.longitude);
    return {
      bounds: {
        ne: [Math.max(...lngs), Math.max(...lats)],
        sw: [Math.min(...lngs), Math.min(...lats)],
        paddingTop: 60,
        paddingBottom: 60,
        paddingLeft: 40,
        paddingRight: 40,
      },
    };
  }, [isAutonomo, rotaAtiva]);

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

  // Ajuste de segurança para garantir que a função onOpenMenu não quebre caso mude a prop
  const handleOpenMenu = () => {
    if (navigation && navigation.openDrawer) {
      navigation.openDrawer();
    } else {
      console.log("Menu action not fully configured in this screen yet.");
    }
  };

  return (
    <SafeAreaProvider>
      <ExpoStatusBar style="light" backgroundColor={colors.cardBackground} translucent={false} />
      
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right', 'bottom']}>
        
        <Header onOpenMenu={handleOpenMenu} navigation={navigation} />
        {!isAutonomo && <NavigationCard instruction={rotaAtiva.length > 0 ? instruction : null} />}

        <Mapbox.MapView 
          style={styles.map} 
          styleURL={Mapbox.StyleURL.Street}
          logoPosition={{ bottom: 125, left: 10 }} 
          attributionPosition={{ bottom: 125, right: 10 }} 
          compassPosition={{ top: 10, right: 10 }} 
        >
          {isAutonomo && autonomoCameraConfig ? (
            <Mapbox.Camera
              {...autonomoCameraConfig}
              animationMode="moveTo"
              animationDuration={0}
            />
          ) : (
            <Mapbox.Camera
              ref={cameraRef}
              centerCoordinate={userLocation || FALLBACK_COORDS}
              zoomLevel={INITIAL_ZOOM}
              animationMode="flyto"
            />
          )}

          <Mapbox.UserLocation visible={!isAutonomo} showsUserHeadingIndicator={!isAutonomo} />

          <MapMarkers
            activePoint={currentTarget}
            inactivePoints={inactivePoints}
            modoAutonomo={isAutonomo}
            visitedPointIds={isAutonomo ? pontosVisitados : []}
            onSelectPoint={isAutonomo ? abrirPonto : undefined}
          />

          {DEBUG_SHOW_POLYGONS && currentTarget && currentTarget.polygon && (
             <Mapbox.ShapeSource 
                id="activePolygonSource" 
                shape={{ type: 'Feature', geometry: { type: 'Polygon', coordinates: [currentTarget.polygon] } }}
             >
                <Mapbox.FillLayer id="activePolygonFill" style={{ fillColor: colors.cardBackground, fillOpacity: 0.3 }} />
                <Mapbox.LineLayer id="activePolygonLine" style={{ lineColor: colors.cardBackground, lineWidth: 2 }} />
             </Mapbox.ShapeSource>
          )}

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
        
        {!isAutonomo && (
          <TouchableOpacity style={styles.recenterButton} onPress={handleRecenter} activeOpacity={0.7}>
            <MaterialIcons name="my-location" size={24} color={colors.cardBackground} />
          </TouchableOpacity>
        )}

        {!isAutonomo && currentTarget && !showAlert && (
          <View style={styles.destinationBadge}>
            <View style={styles.badgeIconContainer}>
              <MaterialIcons name="place" size={24} color={colors.cardBackground} />
            </View>
            
            <View style={styles.badgeTextContainer}>
              <Text 
                style={styles.destinationTitle} 
                numberOfLines={2} 
                ellipsizeMode="tail"
              >
                {currentTarget.title}
              </Text>
              
              <View style={styles.badgeFooter}>
                <Text style={styles.destinationDistance}>
                  Distância: <Text style={{ fontWeight: 'bold' }}>{distanceLabel}</Text>
                </Text>

                {rotaAtiva.length > 0 && (
                  <TouchableOpacity style={styles.inlineSkipButton} onPress={pularDestino} activeOpacity={0.7}>
                    <Text style={styles.inlineSkipText}>Pular</Text>
                    <MaterialIcons name="skip-next" size={16} color={colors.cardBackground} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        )}

        <ProximityAlert 
          isVisible={showAlert} 
          data={activePointData}
          audioAtivo={audioAtivo}
          onToggleAudio={handleToggleAudio}
          onDismiss={() => { 
            setShowAlert(false); 
            setIsPointActive(false); 
            Speech.stop(); 
          }}
          onClose={() => { 
            Speech.stop();

            if (isAutonomo) {
              if (indiceAtual < rotaAtiva.length - 1) {
                const proximoId = rotaAtiva[indiceAtual + 1];
                const proximoPonto = POINTS_OF_INTEREST.find(p => p.id === proximoId);
                if (proximoPonto) {
                  abrirPonto(proximoPonto);
                  return;
                }
              }
              setShowAlert(false);
              setIsPointActive(false);
              return;
            }

            setShowAlert(false); 
            setIsPointActive(false); 
            setUltimaInstrucaoFalada(''); 
            setInstruction('');
            
            if (indiceAtual < rotaAtiva.length - 1) {
              setIndiceAtual((prev) => prev + 1);
              setRouteCoordinates([]);
            } else {
              setShowRouteFinished(true);
            }
          }} 
        />
        <RouteFinishedAlert 
          isVisible={showRouteFinished} 
          totalPontos={rotaAtiva.length}
          startTime={startTime}
          onFinish={() => {
            setShowRouteFinished(false);
            navigation.goBack(); 
          }} 
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}