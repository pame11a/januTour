import React from 'react';
import { View } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import { MaterialIcons } from '@expo/vector-icons';

export const MapMarkers = ({ points }) => {
  if (!points || points.length === 0) return null;

  return (
    <>
      {points.map((point) => (
        <Mapbox.PointAnnotation
          key={`marker-${point.id}`}
          id={`marker-${point.id}`}
          coordinate={[point.longitude, point.latitude]}
          anchor={{ x: 0.5, y: 1 }} // Garante que a "ponta" do alfinete aponte para a coordenada exata
        >
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <MaterialIcons name="location-pin" size={46} color="#EA4335" />
          </View>
        </Mapbox.PointAnnotation>
      ))}
    </>
  );
};