import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

export function WelcomeScreen({ onEnter }) {
  return (
    <View style={styles.container}>
        <View style={styles.spotlight} />
        <Image 
            source={require('../../../assets/pattern.png')} 
            style={styles.pattern}
            resizeMode="repeat"
        />
        
        <View style={styles.logoShadowContainer}>
            <View style={styles.logoRoundWrapper}>
            <Image 
                source={require('../../../assets/logo.jpg')} 
                style={styles.logo}
                resizeMode="cover" 
            />
            </View>
        </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>JanuTour</Text>
        
        <Text style={styles.subtitle}>
          O que é o app Janu Tour?
        </Text>

        <Text style={styles.bodyText}>
          O Janu Tour é um aplicativo desenvolvido para turistas e interessados em explorar o Centro Histórico de Januária. A proposta é oferecer uma experiência guiada que permita ao usuário conhecer, de forma acessível e envolvente, o rico patrimônio arquitetônico da cidade, cuja preservação contribui para contar a história e a identidade cultural do município.
        </Text>   

        <Text style={styles.bodyText}>
         Em 2024, o Centro Histórico de Januária foi oficialmente tombado pelo Instituto Estadual do Patrimônio Histórico e Artístico de Minas Gerais (IEPHA-MG), reconhecendo seu valor histórico, cultural e arquitetônico.
         </Text>
      </View>

      <TouchableOpacity 
          style={styles.button} 
          onPress={onEnter}
          activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}