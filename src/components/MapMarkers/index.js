import React from 'react';
import { View } from 'react-native';
import Mapbox from '@rnmapbox/maps';

export function MapMarkers({ points, userLocation, styles }) {
  return (
    <>
      {points && points.map((point) => (
        <Mapbox.PointAnnotation
          key={point.id}
          id={point.id}
          coordinate={[point.longitude, point.latitude]}
        >
          <View style={styles.poiMarker} />
        </Mapbox.PointAnnotation>
      ))}

      {userLocation && (
        <Mapbox.PointAnnotation
          id="meuPontoAtual"
          coordinate={userLocation}
        >
        </Mapbox.PointAnnotation>
      )}
    </>
  );
}