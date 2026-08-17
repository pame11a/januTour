import { MAPBOX_ACCESS_TOKEN } from '@env';
export const MAPBOX_TOKEN = MAPBOX_ACCESS_TOKEN;
export const FALLBACK_COORDS = [-44.3916585, -15.4802473];

// Nível de zoom inicial do mapa
export const INITIAL_ZOOM = 18; 

export const POINTS_OF_INTEREST = [
  {
    id: 'casa',
    title: 'Casa',
    message: 'Você chegou em casa',
    latitude: -15.470266,
    longitude: -44.376689,
    radius: 15,
    polygon: [
      [-44.376829, -15.470131], // Topo-Esquerda (Noroeste)
      [-44.376549, -15.470131], // Topo-Direita (Nordeste)
      [-44.376549, -15.470401], // Baixo-Direita (Sudeste)
      [-44.376829, -15.470401], // Baixo-Esquerda (Sudoeste)
      [-44.376829, -15.470131]  // Fechamento do polígono
    ],
  
    imagens: [{ 
        id: '1', 
        imagem: require('../../assets/icon.png'), // Importação direta do arquivo
        descricao: 'Vista frontal do casarão.' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/icon.png'), 
        descricao: 'Detalhes em azul e branco.' 
      }
    ] 
  },
  {
    id: 'predio_sup',
    title: 'predio_sup', 
    message: 'Você chegou ao Prédio do Superior',
    latitude: -15.447412174500034, 
    longitude: -44.368119072314094,
    radius: 15,
    polygon: [
      [-44.368259, -15.447277], 
      [-44.367979, -15.447277], 
      [-44.367979, -15.447547], 
      [-44.368259, -15.447547], 
      [-44.368259, -15.447277]  
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/icon.png'), // Importação direta do arquivo
        descricao: 'Vista frontal do casarão.' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/icon.png'), 
        descricao: 'Detalhes em azul e branco.' 
      }
    ]
  },

// Núcleo Histórico

  {
    id: 'prefeitura_municipal',
    title: 'Prefeitura Municipal',
    message: 'Você chegou ao prédio histórico da Prefeitura Municipal de Januária. Este casarão, datado de 1890, tem estilo eclético e chama atenção pelas suas cores vibrantes em azul e branco. Durante muito tempo, foi o coração administrativo da cidade. Hoje, abriga o Centro de Atendimento ao Turista (CAT). Aproveite para entrar e descobrir mais sobre Januária.',
    latitude:-15.488692266036272,
    longitude: -44.36216932359738,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.362133, -15.488366],
      [-44.362391, -15.488475],
      [-44.362144, -15.488898],
      [-44.361908, -15.488795],
      [-44.362133, -15.488366] 
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/icon.png'), // Importação direta do arquivo
        descricao: 'Vista frontal do casarão.' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/icon.png'), 
        descricao: 'Detalhes em azul e branco.' 
      }
    ]
  },

  {
    id: 'casa_da_memoria',
    title: 'Casa da Memória do Vale São Francisco',
    message: 'Você chegou à Casa da Memória do Vale do São Francisco. Este imponente prédio de estilo eclético, construído por volta da década de 1910, possui dois pavimentos e já abrigou o Fórum e a antiga cadeia municipal. As grades reforçadas nas janelas do andar térreo ainda revelam marcas desse passado como prisão. Atualmente, o imóvel passa por restauração e está temporariamente fechado para visitação.',
    latitude: -15.488537112917218,
    longitude: -44.36194030748854,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.362181, -15.488469],
      [-44.361865, -15.488288],
      [-44.361586, -15.488588],
      [-44.36202, -15.488836],
      [-44.362181, -15.488469]
    ]
  },

  {
    id: 'catedral',
    title: 'Catedral Nossa Senhora das Dores',
    message: 'Você chegou à Catedral Nossa Senhora das Dores, uma das centralidades que marcaram o desenvolvimento da cidade. A construção atual, inaugurada em 1973, substituiu a antiga matriz, erguida em 1878. Sua fachada está voltada para o Rio São Francisco e, ao fundo, destacam-se os antigos prédios da prefeitura e do fórum.',
    latitude: -15.4892315,
    longitude: -44.3619033,
    radius: 15,
    type: 'Não Tombado',
    polygon: [
      [-44.361913, -15.48879],
      [-44.361452, -15.489421],
      [-44.361742, -15.489643],
      [-44.362273, -15.489017],
      [-44.361913, -15.48879] 
    ]
  },

  {
    id: 'ponto_x',
    title: 'Ponto X',
    message: 'Você está diante do Imóvel Número 16, de estilo eclético, situado na esquina da Praça Getúlio Vargas com a Rua Mata Machado. A edificação térrea comercial destaca-se por sua coluna de esquina com capitel decorado e pela platibanda reta ornada com rosáceas vazadas, além de sobrevergas, frisos e cimalha. Seus vãos originais foram descaracterizados com adaptações comerciais recentes.', 
    latitude: -15.490841607366924,
    longitude: -44.360563459707386,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.360703, -15.490706], 
      [-44.360423, -15.490706], 
      [-44.360423, -15.490976], 
      [-44.360703, -15.490976], 
      [-44.360703, -15.490706]  
    ],
  },

  {
    id: 'imovel_17',
    title: 'Imóvel 17',
    message: 'Você está diante do casarão antigo número 17. Ele chama a atenção por sua fachada alta com topo em degraus e duas janelinhas no sótão. A frente da casa é dividida por pilares e molduras de massa, e conta também com dois portões nas laterais. Infelizmente, o imóvel está bastante deteriorado, e suas portas e janelas de baixo foram fechadas com tijolos.',
    latitude: -15.49094930313358,
    longitude: -44.359765768306275,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.359906, -15.490814],
      [-44.359626, -15.490814],
      [-44.359626, -15.491084],
      [-44.359906, -15.491084],
      [-44.359906, -15.490814]
    ]
  },

  {
    id: 'imovel_19',
    title: 'Imóvel 19',
    message: 'Você está diante do imóvel número 19, uma construção térrea de estilo protomoderno localizada em uma esquina. O prédio se destaca pelas suas linhas simples e modernas, com platibanda no topo trazendo detalhes geométricos escalonados. Suas portas comerciais possuem enrolamento metálico e pequenas aberturas superiores para ventilação e iluminação.',
    latitude: -15.490627699819317,
    longitude: -44.35963238843153,
    radius: 15,
    type: 'Protomoderno',
    polygon: [
      [-44.359772, -15.490493],
      [-44.359492, -15.490493],
      [-44.359492, -15.490763],
      [-44.359772, -15.490763],
      [-44.359772, -15.490493]
    ]
  },

  {
    id: 'imovel_21',
    title: 'Imóvel 21',
    message: 'Você está diante de um imóvel térreo de estilo protomoderno, localizado na esquina da Rua Dom Joaquim com um beco. A construção chama a atenção pela sua esquina chanfrada e pela platibanda reta com detalhes em relevo geométrico. Ao longo do tempo, o imóvel passou por significativas modificações em sua fachada: as antigas portas de madeira foram totalmente substituídas e já não existem na construção atual, dando lugar a novos fechamentos em alvenaria e portas de enrolar metálicas.',
    latitude: -15.490614411215406,
    longitude: -44.35962893189584,
    radius: 15,
    type: 'Protomoderno',
    polygon: [
      [-44.359769, -15.490479],
      [-44.359489, -15.490479],
      [-44.359489, -15.490749],
      [-44.359769, -15.490749],
      [-44.359769, -15.490479]
    ]
  },

  {
    id: 'imovel_31',
    title: 'Imóvel 31',
    message: 'Você está diante de um imóvel comercial térreo de pé-direito alto, situado na esquina da Rua Lindolfo Caetano com a Rua onze de Março. O prédio destaca-se por sua platibanda reta com pilaretes nos cantos, molduras na parte superior e um conjunto de cinco portas antigas de madeira espalhadas pelas duas frentes. A construção preserva suas características originais, porém encontra-se fechada e com marcas do tempo em sua pintura e fachada.',
    latitude: -15.488463424921578,
    longitude: -44.36006984211007,
    radius: 15,
    type: 'Colonial',
    polygon: [
      [-44.360210, -15.488328],
      [-44.359930, -15.488328],
      [-44.359930, -15.488598],
      [-44.360210, -15.488598],
      [-44.360210, -15.488328]
    ]
  },

  {
    id: 'imovel_32',
    title: 'Imóvel 32',
    message: 'Você está diante de um casarão de uso misto - residencial e comercial - com alto pé-direito, que se destaca pela fachada bem dividida por pilares ornamentados e frisos de massa. A edificação possui portas e janelas de madeira dispostas de forma organizada, além de um portão lateral. Hoje, o imóvel abriga o "CEMEI Mundo Mágico", contando com rampa de acessibilidade na entrada e pintura recente em tons de verde. ',
    latitude: -15.48810807897231,
    longitude: -44.36051451082531,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.360655, -15.487973],
      [-44.360375, -15.487973],
      [-44.360375, -15.488243],
      [-44.360655, -15.488243],
      [-44.360655, -15.487973]
    ]
  },

  {
    id: 'imovel_33',
    title: 'Imóvel 33',
    message: 'Você está diante do conjunto de casas de números 330 e 340. A casa 330, à direita, é mais simples, com fachada amarela, detalhes azuis e topo em formato triangular (frontão). Já a casa 340, à esquerda, é mais trabalhada, com uma porta central, cinco janelas e um topo decorado com balaustrada. Entre as duas construções há um portão de garagem azul, e ambas preservam suas portas e janelas originais de madeira. ',
    latitude: -15.487756728243626,
    longitude: -44.36094554862254,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.361086, -15.487622],
      [-44.360806, -15.487622],
      [-44.360806, -15.487892],
      [-44.361086, -15.487892],
      [-44.361086, -15.487622]
    ]
  },

  {
    id: 'imovel_34',
    title: 'Imóvel 34',
    message: 'Você está diante de um imóvel de estilo regional situado na esquina da Rua Lindolfo Caetano com a Rua 24 de Fevereiro. O prédio, onde antigamente funcionavam um comércio e uma oficina, encontra-se atualmente fechado e sem uso ativo. Destaca-se por sua fachada dividida em módulos por pilares, frisos e platibanda reta no topo. Ao longo do tempo, a edificação passou por alterações visíveis: a pintura foi alterada para tons rosados e parte das antigas portas de madeira deu lugar a portas de enrolar metálicas, além de vãos que foram adaptados ou fechados. ',
    latitude: -15.487871067625445,
    longitude: -44.360988811096334,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.361129, -15.487736],
      [-44.360849, -15.487736],
      [-44.360849, -15.488006],
      [-44.361129, -15.488006],
      [-44.361129, -15.487736]
    ]
  },

  {
    id: 'imovel_35',
    title: 'Imóvel 35',
    message: 'Você está diante de um conjunto de casas geminadas localizado na esquina da Rua Gualberto de Almeida. A edificação térrea, com sótão, chama a atenção por sua platibanda reta com frisos decorativos e divisão da fachada em módulos. Ao comparar com o registro antigo, percebe-se que o imóvel passou por significativas modificações: as esquadrias originais de madeira foram substituídas por portas e janelas modernas com frestas e grades metálicas, além da alteração nas cores da pintura e inclusão de barrado inferior texturizado. ',
    latitude: -15.488576901778771,
    longitude: -44.361565854909095,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.361706, -15.488442],
      [-44.361426, -15.488442],
      [-44.361426, -15.488712],
      [-44.361706, -15.488712],
      [-44.361706, -15.488442]
    ]
  },

// Patrocinio mota  

  {
    id: 'imovel_37',
    title: 'Imóvel 37',
    message: 'Você está diante do prédio onde funcionava o Minas Hotel, uma edificação de dois pavimentos com marcantes características neoclássicas situada em frente à Praça Patrocínio Mota. O casarão destaca-se por sua fachada ritmada com dezenas de janelas e portas com balaustradas em madeira no segundo piso, além de cunhais, cimalhas e platibanda decorada com pináculos e frontões. Por sua localização privilegiada de frente para o Rio São Francisco e para a praça do cais.',
    latitude: -15.491675886856795,
    longitude: -44.36008611448064,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.360226, -15.491541],
      [-44.359946, -15.491541],
      [-44.359946, -15.491811],
      [-44.360226, -15.491811],
      [-44.360226, -15.491541]
    ]
  },
  {
    id: 'imovel_41',
    title: 'Imóvel 41',
    message: 'Você está diante de um casarão histórico construído em 1879, localizado na esquina da Rua Visconde de Ouro Preto com o beco de acesso à Praça Getúlio Vargas. Atualmente, o espaço abriga um Centro de Artesanato e Ponto de Cultura. A edificação chama a atenção pelo pé-direito alto, fachadas em tons de branco, azul e amarelo, além dos frisos ornamentados e cunhais marcantes.',
    latitude: -15.492275377312069,
    longitude: -44.36078105064742,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.360921, -15.492140],
      [-44.360641, -15.492140],
      [-44.360641, -15.492410],
      [-44.360921, -15.492410],
      [-44.360921, -15.492140]
    ]
  },
  {
    id: 'imovel_44',
    title: 'Imóvel 44',
    message: 'Você está diante da edificação de número 126, situada na Rua Visconde de Ouro Preto. Trata-se de uma construção térrea de pé-direito elevado, implantada no alinhamento da via e que forma uma única edificação contínua junto ao número 134. O prédio chama a atenção por sua pintura marcante em azul e branco com detalhes em amarelo, além de uma rica platibanda trabalhada com óculos decorativos e um medalhão central. Sua fachada conta com janelas de caixilhos em madeira, venezianas e bandeiras de vidro, acompanhadas por portas em folha tipo calha.',
    latitude: -15.492413455095432,
    longitude: -44.361085048363776,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.361225, -15.492278],
      [-44.360945, -15.492278],
      [-44.360945, -15.492548],
      [-44.361225, -15.492548],
      [-44.361225, -15.492278]
    ]
  },
  {
    id: 'imovel_47',
    title: 'Imóvel 47',
    message: 'Você está diante do sobrado de número 156, uma edificação residencial de dois pavimentos implantada no alinhamento da via. Construído com estrutura autônoma de madeira, o imóvel se destaca pelo aproveitamento do vão do telhado para a criação do segundo piso. Sua fachada é enquadrada por cunhais e cimalhas, sendo arrematada no topo por uma platibanda reta com decorações geométricas. A composição conta com quatro vãos bem rítmicos em cada andar, com vergas alteadas, portas e janelas de madeira no térreo e janelas rasgadas com balaustradas torneadas no pavimento superior.',
    latitude: -15.492520661276624,
    longitude: -44.36133110196431,
    radius: 15,
    type: 'Colonial',
    polygon: [
      [-44.361471, -15.492386],
      [-44.361191, -15.492386],
      [-44.361191, -15.492656],
      [-44.361471, -15.492656],
      [-44.361471, -15.492386]
    ]
  },
  {
    id: 'imovel_48',
    title: 'Imóvel 48',
    message: 'Você está diante da edificação residencial de número 166, uma casa térrea implantada no alinhamento da via. O imóvel destaca-se por sua fachada horizontalizada em tons rosados, enquadrada por cunhais e por uma larga cimalha no topo que remata o beiral do telhado. A composição conta com oito vãos com vergas levemente curvadas (em canga de boi) e esquadrias de madeira, sendo cinco portas e três janelas com venezianas. Lateralmente, há um portão de acesso delimitado por um pilar decorativo em destaque.',
    latitude: -15.492561225888938,
    longitude: -44.361419108622805,
    radius: 15,
    type: 'Colonial',
    polygon: [
      [-44.361559, -15.492426],
      [-44.361279, -15.492426],
      [-44.361279, -15.492696],
      [-44.361559, -15.492696],
      [-44.361559, -15.492426]
    ]
  },
  {
    id: 'imovel_49',
    title: 'Imóvel 49',
    message: 'Você está diante do imponente prédio de características art-nouveau onde funcionou o Grêmio Recreativo Mário dos Santos Reis, utilizado posteriormente como escola. A edificação de grande porte destaca-se por seus elevados pés-direitos e por sua rica platibanda trabalhada com pequenos pilares, desenhos vazados e o ornamento central de uma águia de asas abertas. Sua fachada apresenta vãos agrupados de dois em dois com verga reta, acompanhados por sobrevergas vazadas em meia-lua e aberturas circulares para ventilação do porão.',
    latitude: -15.492671738203578,
    longitude: -44.36165945597777,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.361799, -15.492537],
      [-44.361519, -15.492537],
      [-44.361519, -15.492807],
      [-44.361799, -15.492807],
      [-44.361799, -15.492537]
    ]
  },
  {
    id: 'imovel_50',
    title: 'Imóvel 50',
    message: 'Está edificação de expressão colonial, implantada no alinhamento da via sobre passeio em pedras. O imóvel térreo destaca-se pelo enquadramento da fachada principal com cunhal em destaque na quina e uma elaborada cimalha decorativa que remata o beiral com telhas curvas (capa e bica). A fachada conta com janelas retangulares protegidas por grades de ferro e emolduradas em relevo com acabamento em tom amarelo, contrastando com a pintura em tom neutro da parede.',
    latitude: -15.492890902326575,
    longitude: -44.36201799715112,
    radius: 15,
    type: 'Colonial',
    polygon: [
      [-44.362158, -15.492756],
      [-44.361878, -15.492756],
      [-44.361878, -15.493026],
      [-44.362158, -15.493026],
      [-44.362158, -15.492756]
    ]
  },
  {
    id: 'imovel_54',
    title: 'Imóvel 54',
    message: 'Você está diante da edificação residencial neoclássica de números 173 e 177, recentemente reformada e em excelente estado de conservação. O imóvel térreo é implantado no alinhamento da via e atende a duas residências. Sua fachada harmoniosa conta com oito vãos em arco pleno (seis janelas e duas portas) ornamentados por molduras em relevo realçadas em tom amarelo sobre paredes brancas. A estrutura é delimitada por cunhais e cimalha destacados, sendo coroada por uma platibanda decorada com rosáceas e detalhes geométricos.',
    latitude: -15.492652474839073,
    longitude: -44.36223404244172,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.362374, -15.492517],
      [-44.362094, -15.492517],
      [-44.362094, -15.492787],
      [-44.362374, -15.492787],
      [-44.362374, -15.492517]
    ]
  },
  {
    id: 'imovel_60',
    title: 'Imóvel 60',
    message: 'Você está diante da edificação residencial de número 80, implantada na testada do lote diretamente no alinhamento da via. O imóvel destaca-se por sua volumetria com pé-direito elevado e enquadramento frontal marcado por destacados cunhais trabalhados nas extremidades e cornija que arremata a cobertura. No centro da fachada principal, sobre a porta central de verga reta, sobressai-se um escudo ornamental com o ano de 1877 registrado. A composição dos vãos conta com janelas retangulares protegidas por grades de ferro e uma grande abertura lateral adaptada com portão de garagem moderno.',
    latitude: -15.491908400479037,
    longitude: -44.36162219975322,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.361762, -15.491773],
      [-44.361482, -15.491773],
      [-44.361482, -15.492043],
      [-44.361762, -15.492043],
      [-44.361762, -15.491773]
    ]
  },
  {
    id: 'imovel_61',
    title: 'Imóvel 61',
    message: 'Você está diante da elegante casa neoclássica de número 43, elevada sobre porão alteado com aberturas de ventilação. Destaca-se por sua fachada amarela ornamentada por pilastras, almofadas decorativas sob as janelas, vãos em arco pleno e óculos florais. O topo é arrematado por cimalha e platibanda reta.',
    latitude: -15.491744587053224,
    longitude: -44.361305896518644,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.361446, -15.491609],
      [-44.361166, -15.491609],
      [-44.361166, -15.491880],
      [-44.361446, -15.491880],
      [-44.361446, -15.491609]
    ]
  },
  {
    id: 'imovel_67',
    title: 'Imóvel 67',
    message: 'Você está diante da edificação de esquina situada no cruzamento da Rua Manoel Ambrósio com a Rua Cônego Marinho. O imóvel térreo possui alto pé-direito com sótão aproveitado na cobertura. Destaca-se pelos robustos cunhais ornados na quina, moldura decorativa de argamassa sob o beiral e empena lateral com duas janelas superiores.',
    latitude: -15.490998531178668,
    longitude: -44.36139614840612,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.361536, -15.490864],
      [-44.361256, -15.490864],
      [-44.361256, -15.491134],
      [-44.361536, -15.491134],
      [-44.361536, -15.490864]
    ]
  },
  {
    id: 'imovel_68',
    title: 'Imóvel 68',
    message: 'Você está diante da edificação comercial de esquina de número 68, atualmente adaptada para uso comercial. O imóvel térreo destaca-se por sua fachada com enquadramento azul em pilastras e frisos horizontais na platibanda reta. Apresenta aberturas modificadas para portas de enrolar metálicas e vitrines comerciais, além de janela lateral e sótão com duas aberturas na empena da edificação.',
    latitude: -15.49090691287588,
    longitude: -44.36152240773368,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.361662, -15.490772],
      [-44.361382, -15.490772],
      [-44.361382, -15.491042],
      [-44.361662, -15.491042],
      [-44.361662, -15.490772]
    ]
  },
  {
    id: 'imovel_79',
    title: 'Imóvel 79',
    message: 'Você está diante da edificação comercial de estilo protomoderno, marcada por sua fachada simétrica e marcante volumetria geométrica. O imóvel térreo destaca-se pelo frontão central escalonado com pilastras verticais, além de frisos e detalhes decorativos em tom azul sobre a pintura branca.',
    latitude: -15.49132682254007,
    longitude: -44.36174248199646,
    radius: 15,
    type: 'Protomoderno',
    polygon: [
      [-44.361882, -15.491192],
      [-44.361602, -15.491192],
      [-44.361602, -15.491462],
      [-44.361882, -15.491462],
      [-44.361882, -15.491192]
    ]
  },
  {
    id: 'imovel_83',
    title: 'Imóvel 83',
    message: 'Você está diante do imóvel residencial de esquina situado na junção da Rua Cônego Marinho com um beco. A construção térrea conta com aproveitamento de sótão e destaca-se pelo canto chanfrado na quina, onde há uma janela. Suas fachadas são ritmadas por pilastras, cunhais e molduras decorativas sob o beiral, apresentando vãos de verga com cantos arredondados e empena lateral que abriga duas janelas superiores do sótão.',
    latitude: -15.492034261823166,
    longitude: -44.36247576629665,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.362616, -15.491899],
      [-44.362336, -15.491899],
      [-44.362336, -15.492169],
      [-44.362616, -15.492169],
      [-44.362616, -15.491899]
    ]
  },
  {
    id: 'imovel_86',
    title: 'Imóvel 86',
    message: 'Você está no Imóvel N.º 86, bem na esquina da Rua Barão do Rio Branco com a Travessa Joaquim Carlos. Este casarão térreo chama a atenção por ter um sótão no telhado com duas janelinhas de madeira, um detalhe bem típico das casas antigas de Januária. A fachada é cheia de detalhes feitos em massa, com portas e janelas de madeira que se abrem direto para a calçada. O local junta comércio e moradia, mantendo vivo o charme histórico da cidade.',
    latitude: -15.49288954210313,
    longitude: -44.36273288616389,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.362873, -15.492754],
      [-44.362593, -15.492754],
      [-44.362593, -15.493025],
      [-44.362873, -15.493025],
      [-44.362873, -15.492754]
    ]
  },
  {
    id: 'imovel_90',
    title: 'Imóvel 90',
    message: 'Você está diante do Imóvel número 90, um casarão de esquina muito bem conservado, destacado por sua pintura em tons amarelos e detalhes em branco. A construção chama a atenção pela platibanda decorada no topo da fachada e pelos acabamentos trabalhados na quina do prédio. Suas portas e janelas de madeira vermelha dão acesso direto à calçada e, na lateral, é possível notar duas janelas na parte superior, aproveitando o espaço do sótão.',
    latitude: -15.492983057309846,
    longitude: -44.362867889626784,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.363008, -15.492848],
      [-44.362728, -15.492848],
      [-44.362728, -15.493118],
      [-44.363008, -15.493118],
      [-44.363008, -15.492848]
    ]
  },
  {
    id: 'imovel_91',
    title: 'Imóvel 91',
    message: 'Você está no Imóvel N.º 91, localizado na esquina da Rua Barão do Rio Branco com a Travessa Joaquim Carlos. O destaque desta construção neoclássica é o topo da fachada, com detalhes decorativos, esculturas e pinhas nas pontas. As portas e janelas possuem arcos arredondados no topo e, na lateral, o sótão se destaca com janelas acompanhadas de sacadas em ferro fundido. O espaço abriga residência e comércio.',
    latitude: -15.49299795079196,
    longitude: -44.362632726027286,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.362773, -15.492863],
      [-44.362493, -15.492863],
      [-44.362493, -15.493133],
      [-44.362773, -15.493133],
      [-44.362773, -15.492863]
    ]
  }

];

