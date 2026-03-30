import React from 'react';
import { Modal, View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';

export function StartModeModal({ isVisible, onClose, onSelectMode, routeTitle }) {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback> 
            <View style={styles.container}>
              <Text style={styles.title}>{routeTitle}</Text>
              <Text style={styles.subtitle}>Como deseja iniciar seu percurso?</Text>

              <TouchableOpacity 
                style={[styles.button, styles.buttonSecondary]} 
                onPress={() => onSelectMode('ORIGINAL')}
              >
                <Text style={styles.buttonText}>Início Oficial</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.button} 
                onPress={() => onSelectMode('PROXIMO')}
              >
                <Text style={styles.buttonText}>Ponto mais próximo</Text>
              </TouchableOpacity>
              
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}