import React from 'react';
import { View } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import { MaterialIcons } from '@expo/vector-icons';

export const MapMarkers = ({ activePoint, inactivePoints = [] }) => {
  return (
    <>
      {inactivePoints.map((point) => (
        <Mapbox.PointAnnotation
          key={`inactive-${point.id}`}
          id={`inactive-${point.id}`}
          coordinate={[point.longitude, point.latitude]}
          anchor={{ x: 0.5, y: 1 }}
        >
          <View style={{ alignItems: 'center', justifyContent: 'center', opacity: 0.6 }}>
            <MaterialIcons name="location-pin" size={34} color="#9E9E9E" />
          </View>
        </Mapbox.PointAnnotation>
      ))}

      {activePoint && (
        <Mapbox.PointAnnotation
          key={`active-${activePoint.id}`}
          id={`active-${activePoint.id}`}
          coordinate={[activePoint.longitude, activePoint.latitude]}
          anchor={{ x: 0.5, y: 1 }}
        >
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <MaterialIcons name="location-pin" size={46} color="#EA4335" />
          </View>
        </Mapbox.PointAnnotation>
      )}
    </>
  );
};