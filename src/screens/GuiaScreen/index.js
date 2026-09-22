import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from '../../styles/colors';


export default function GuiaScreen({ navigation }) {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Erro ao abrir link:", err));
  };

  return (
    <SafeAreaProvider>
        {/* Força a área da barra de notificações a ficar azul */}
        <SafeAreaView style={{ backgroundColor: colors.cardBackground }} edges={['top']} />
        <ExpoStatusBar style="light" backgroundColor={colors.cardBackground} translucent={false} />
        
        {/* O restante da tela com o fundo padrão */}
        <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
            
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <MaterialIcons name="arrow-back" size={24} color="#FFF" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Descubra Januária</Text> 
                </View>

                {/* Logótipo do IFNMG clicável */}
                <TouchableOpacity onPress={() => openLink('https://ifnmg.edu.br/')}>
                    <Image 
                        source={require('../../../assets/images/extras/ifnmg.png')} 
                        style={styles.logoIfnmg}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <ImageBackground 
                source={require('../../../assets/pattern.png')} 
                style={{ flex: 1, width: '100%' }} 
                resizeMode="repeat"
                imageStyle={{ opacity: 0.5 }} 
            >
                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    
                    <View style={styles.contentWrapper}>
                        <Image 
                            source={require('../../../assets/images/extras/guiajanu.png')} 
                            style={styles.guiaLogo}
                            resizeMode="contain"
                        />
                        <Text style={styles.title}>Portal Guia Janu</Text>
                        
                        <Text style={styles.paragraph}>
                            Quer conhecer ainda mais sobre as belezas, a cultura e a história da nossa cidade? 
                        </Text>
                        <Text style={styles.paragraph}>
                            O <Text style={styles.bold}>Guia Janu</Text> é o portal oficial do nosso projeto de extensão. Lá você encontra um acervo completo sobre a gastronomia local, as tradições, opções de hospedagem, eventos e as maravilhas naturais da região, como o Rio São Francisco e o Rio Pandeiros.
                        </Text>
                        <Text style={styles.paragraph}>
                            Acesse o portal e planeje a sua próxima aventura com informações detalhadas e dicas exclusivas para aproveitar o melhor de Januária!
                        </Text>

                        <TouchableOpacity 
                            style={styles.primaryButton} 
                            onPress={() => openLink('https://www.guiajanu.com.br/')}
                        >
                            <Text style={styles.primaryButtonText}>Acessar GuiaJanu.com.br</Text>
                            <MaterialIcons name="open-in-new" size={20} color="#FFF" style={{ marginLeft: 8 }} />
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}