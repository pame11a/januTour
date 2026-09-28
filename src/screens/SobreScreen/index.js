import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import { SafeAreaView, SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from '../../styles/colors';

const desenvolvedores = [
  {
    id: '1',
    nome: 'Thalles Maia',
    cargo: 'Desenvolvedor',
    imagem: require('../../../assets/images/extras/thalles.jpeg'), 
    lattes: 'https://lattes.cnpq.br/8104928086979359',
    linkedin: 'https://linkedin.com/in/tkmaia'
  },
  {
    id: '2',
    nome: 'Pâmella Ferreira',
    cargo: 'Desenvolvedora',
    imagem: require('../../../assets/images/extras/pamella.jpeg'), 
    lattes: 'https://lattes.cnpq.br/1059090318128308',
    linkedin: 'https://www.linkedin.com/in/p%C3%A2mella-ferreira-197840275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  }
];

export default function SobreScreen({ navigation }) {
  const insets = useSafeAreaInsets(); // Adicionado para calcular a barra superior

  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Erro ao abrir link:", err));
  };

  return (
    <SafeAreaProvider>
        {/* Removido o 'top' da SafeAreaView para o fundo subir */}
        <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
            <ExpoStatusBar style="dark" backgroundColor="transparent" translucent={true} />
            
            <ImageBackground 
                source={require('../../../assets/pattern.png')} 
                style={{ flex: 1, width: '100%' }}
                resizeMode="repeat"
                imageStyle={{ opacity: 0.5 }} 
            >
                {/* Empurramos o cabeçalho dinamicamente para baixo da barra de status */}
                <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
                    <View style={styles.headerTopRow}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <Ionicons name="arrow-back" size={24} color={colors.cardBackground} />
                            <Text style={styles.backButtonText}>Voltar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => openLink('https://ifnmg.edu.br/')}>
                            <Image 
                                source={require('../../../assets/images/extras/ifnmg.png')} 
                                style={styles.logoIfnmg}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                    
                    <Text style={styles.headerTitle}>Sobre Nós</Text> 
                </View>

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    
                    <View style={styles.textWrapper}>
                    <Text style={styles.paragraph}>
                        O <Text style={styles.bold}>JanuTour</Text> é resultado do projeto de extensão “Aplicações de Tecnologia da Informação para o Desenvolvimento do Turismo em Januária/MG”, desenvolvido no Instituto Federal do Norte de Minas Gerais (IFNMG) Campus Januária.
                    </Text>
                    <Text style={styles.paragraph}>
                        Nossa equipe é formada por estudantes da Unidade Curricular de Extensão do curso de Bacharelado em Sistemas de Informação (UCE-BSI).
                    </Text>
                    <Text style={styles.paragraph}>
                        Mais do que um projeto acadêmico, o JanuTour nasce da nossa conexão com Januária e da crença no potencial transformador do turismo para o desenvolvimento local. Acreditamos que valorizar a cultura, a história, a arquitetura e as tradições da região é também fortalecer a identidade do nosso povo. Por meio da tecnologia, buscamos criar experiências imersivas que aproximem visitantes e moradores das riquezas do município, incentivando a descoberta e a preservação do patrimônio histórico januarense.
                    </Text>
                    </View>

                    <Text style={styles.sectionTitle}>Desenvolvedores</Text>
                    
                    <View style={styles.devsContainer}>
                    {desenvolvedores.map((dev) => (
                        <View key={dev.id} style={styles.devCard}>
                        <View style={styles.imageBorder}>
                            <Image source={dev.imagem} style={styles.devImage} />
                        </View>
                        
                        <Text style={styles.devName}>{dev.nome}</Text>
                        <Text style={styles.devRole}>{dev.cargo}</Text>

                        <TouchableOpacity style={styles.linkButton} onPress={() => openLink(dev.lattes)}>
                            <Text style={styles.linkButtonText}>Currículo Lattes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.linkButton} onPress={() => openLink(dev.linkedin)}>
                            <Text style={styles.linkButtonText}>LinkedIn</Text>
                        </TouchableOpacity>
                        </View>
                    ))}
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}