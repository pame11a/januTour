import React from 'react';
import { View, Text, Image } from 'react-native';

export function FooterIF({ style }) {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 24,
          marginBottom: 20,
          gap: 8,
        },
        style,
      ]}
    >
      <Text style={{ fontSize: 11, color: '#1C2B40', fontWeight: '500' }}>
        Desenvolvido por:
      </Text>
      <Image
        source={require('../../../assets/images/extras/logoIF_horizontalColorida.png')}
        style={{ width: 105, height: 34 }}
        resizeMode="contain"
      />
    </View>
  );
}