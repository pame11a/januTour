import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { styles } from './styles';

export function RouteFinishedAlert({ isVisible, totalPontos, startTime, onFinish }) {
  
  const tempoGasto = useMemo(() => {
    if (!startTime) return "0 min";
    const diffMs = Date.now() - startTime;
    const diffMin = Math.round(diffMs / 60000);
    
    if (diffMin < 1) return "Menos de 1 min";
    if (diffMin < 60) return `${diffMin} min`;
    
    const horas = Math.floor(diffMin / 60);
    const min = diffMin % 60;
    return `${horas}h ${min}m`;
  }, [isVisible, startTime]); 

  if (!isVisible) return null;

  return (
    <View style={styles.container}>
      <ExpoStatusBar style="light" />
      <View style={styles.content}>
        
        <Text style={styles.title}>Parabéns!</Text>
        <Text style={styles.message}>Você concluiu todos os pontos desta rota com sucesso. Esperamos que tenha aproveitado o seu passeio pelo centro histórico!</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <MaterialIcons name="place" size={32} color="#FFF" />
            <Text style={styles.statValue}>{totalPontos}</Text>
            <Text style={styles.statLabel}>Pontos Visitados</Text>
          </View>

          <View style={styles.statCard}>
            <MaterialIcons name="timer" size={32} color="#FFF" />
            <Text style={styles.statValue}>{tempoGasto}</Text>
            <Text style={styles.statLabel}>Tempo de Passeio</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={onFinish}>
          <Text style={styles.buttonText}>Voltar ao Menu</Text>
          <MaterialIcons name="home" size={24} color={styles.buttonText.color} />
        </TouchableOpacity>
      </View>
    </View>
  );
}