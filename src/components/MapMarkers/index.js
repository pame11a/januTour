import React from 'react';
import { View } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import { MaterialIcons } from '@expo/vector-icons';

export const MapMarkers = ({
  activePoint,
  inactivePoints = [],
  onSelectPoint,
  modoAutonomo = false,
  visitedPointIds = [],
}) => {
  return (
    <>
      {inactivePoints.map((point) => {
        const isVisited = modoAutonomo && visitedPointIds.includes(point.id);

        const pinColor = modoAutonomo
          ? (isVisited ? '#9E9E9E' : '#0077b6')
          : '#9E9E9E';

        const pinOpacity = modoAutonomo
          ? (isVisited ? 0.7 : 1)
          : 0.6;

        const pinSize = modoAutonomo
          ? (isVisited ? 36 : 38)
          : 34;

        const markerKey = `inactive-${point.id}-${
          modoAutonomo ? (isVisited ? 'visited' : 'unvisited') : 'tour'
        }`;

        return (
          <Mapbox.PointAnnotation
            key={markerKey}
            id={`inactive-${point.id}`}
            coordinate={[point.longitude, point.latitude]}
            anchor={{ x: 0.5, y: 1 }}
            onSelected={() => onSelectPoint && onSelectPoint(point)}
          >
            <View style={{ alignItems: 'center', justifyContent: 'center', opacity: pinOpacity }}>
              <MaterialIcons
                name="location-pin"
                size={pinSize}
                color={pinColor}
              />
            </View>
          </Mapbox.PointAnnotation>
        );
      })}

      {activePoint && (
        <Mapbox.PointAnnotation
          key={`active-${activePoint.id}`}
          id={`active-${activePoint.id}`}
          coordinate={[activePoint.longitude, activePoint.latitude]}
          anchor={{ x: 0.5, y: 1 }}
          onSelected={() => onSelectPoint && onSelectPoint(activePoint)}
        >
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <MaterialIcons name="location-pin" size={46} color="#EA4335" />
          </View>
        </Mapbox.PointAnnotation>
      )}
    </>
  );
};