import React from 'react';
import { 
  Modal, 
  View, 
  Text, 
  TouchableOpacity, 
  FlatList, 
  TouchableWithoutFeedback 
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ROUTES_LIST } from '../../data/routes';
import { styles } from './styles';

export function RouteSelector({ isVisible, onClose, onSelectRoute }) {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      {/* 1. Este Touchable detecta o clique na área escura (fora) */}
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          
          {/* 2. Este Touchable impede que cliques DENTRO do menu fechem o modal */}
          <TouchableWithoutFeedback>
            <View style={[styles.container, { paddingBottom: insets.bottom + 20 }]}>
              <View style={styles.dragIndicator} />
              
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
          </TouchableWithoutFeedback>

        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}