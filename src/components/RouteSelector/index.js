import React from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { ROUTES_LIST } from '../../data/routes';
import { styles } from './styles';

export function RouteSelector({ isVisible, onClose, onSelectRoute }) {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione uma Rota</Text>
          
          <FlatList
            data={ROUTES_LIST}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={[styles.routeItem, { borderLeftColor: item.color }]}
                onPress={() => {
                  onSelectRoute(item);
                  onClose();
                }}
              >
                <Text style={styles.routeTitle}>{item.title}</Text>
                <Text style={styles.routeDescription}>{item.description}</Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}