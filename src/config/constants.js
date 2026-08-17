import { MAPBOX_ACCESS_TOKEN } from '@env';
export const MAPBOX_TOKEN = MAPBOX_ACCESS_TOKEN;
export const FALLBACK_COORDS = [-44.3916585, -15.4802473];

// Nível de zoom inicial do mapa
export const INITIAL_ZOOM = 18; 

export const POINTS_OF_INTEREST = [

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


];

