import { MAPBOX_ACCESS_TOKEN } from '@env';
import { polygon } from '@turf/helpers';
export const MAPBOX_TOKEN = MAPBOX_ACCESS_TOKEN;
export const FALLBACK_COORDS = [-44.3916585, -15.4802473];

// Nível de zoom inicial do mapa
export const INITIAL_ZOOM = 18; 

export const POINTS_OF_INTEREST = [

// Núcleo Histórico

  {
    id: 'prefeitura_municipal',
    title: 'Prédio Histórico da Prefeitura Municipal de Januária',
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
        imagem: require('../../assets/images/prefeitura_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/prefeitura_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
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
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/memoria_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/memoria_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
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
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/catedral_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/catedral_2.png'), 
        descricao: 'IFNMG Campus Januária - 2026' 
      },
    ]
  },
  {
    id: 'lanchonete_lanchinho',
    title: 'Imóvel Comercial - Lanchonete Lannchinho',
    message: 'Você chegou ao imóvel número 41 da Praça Dom Daniel, na esquina com a Rua Cesário Alvim. Atualmente, o prédio abriga uma lanchonete e uma loja de roupas. De arquitetura regional, destaca-se pela fachada ornamentada com rosáceas, elementos decorativos em forma de flores, dispostos em círculos vazados na parte superior do imóvel.', 
    latitude: -15.48963386619075,
    longitude: -44.36183772809814,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.361951, -15.489684],
      [-44.36186, -15.489782],
      [-44.361693, -15.489664],
      [-44.36179, -15.489529],
      [-44.361951, -15.489684]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/04_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/04_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'loterica',
    title: 'Lotérica',
    message: 'Você chegou ao imóvel onde atualmente funciona uma casa lotérica. Apesar de pequeno, o prédio se destaca pela beleza de sua fachada eclética, bastante ornamentada. Entre os detalhes, estão os cunhais decorados, o frontão de linhas curvas, os pináculos e os desenhos em baixo-relevo. Atualmente, o toldo e a placa comercial escondem parte desses elementos. Por isso, vale observar a fachada com atenção para descobrir os detalhes que revelam a riqueza arquitetônica deste imóvel.', 
    latitude: -15.489477831549058,
    longitude: -44.361387568523824,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.361409, -15.489581],
      [-44.361253, -15.489488],
      [-44.361323, -15.48939],
      [-44.361495, -15.489503],
      [-44.361409, -15.489581]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/loterica_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/loterica_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
    {
    id: 'imovel_8',
    title: 'Imóvel localizado na Rua Cônego Livínio, Nº 33',
    message: 'tVocê chegou ao imóvel número 33 da Rua Cônego Livínio. De estilo eclético, o prédio se destaca pela fachada com feições mouriscas, marcada por formas e ornamentos inspirados na tradição arquitetônica islâmica.', 
    latitude: -15.490536909094978,
    longitude: -44.36103355798111,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.361211, -15.490625],
      [-44.361146, -15.490718],
      [-44.360948, -15.490527],
      [-44.361012, -15.490486],
      [-44.361211, -15.490625]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/8_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/8_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
   {
    id: 'imovel_12',
    title: 'Imóvel localizado na Rua Cônego Livínio, Nº 24/28/32',
    message: ' Você chegou ao conjunto de imóveis de números 24, 28 e 32 da Rua Cônego Livínio. De tipo colonial, as fachadas apresentam sete óculos circulares sobre os vãos, pequenas aberturas na parte superior que contribuem para a ornamentação dos imóveis e também podem favorecer a iluminação e a ventilação naturais.', 
    latitude: -15.490475290076127,
    longitude: -44.36089654999652,
    radius: 15,
    type: 'Colonial',
    polygon: [
      [-44.360958, -15.490491],
      [-44.360846, -15.49061],
      [-44.360738, -15.49048],
      [-44.36084, -15.490387],
      [-44.360958, -15.490491]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/12_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/12_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
      {
    id: 'imovel_14',
    title: 'Imóvel localizado na Rua Cônego Livínio, Nº 2',
    message: 'Você chegou ao imóvel número 2 da Rua Cônego Livínio. De estilo eclético, o prédio chama a atenção pela platibanda bastante ornamentada, com elementos vazados e um frontão central que se integra à composição da fachada.', 
    latitude: -15.490671481490825,
    longitude: -44.3606893694373,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.360797, -15.490682],
      [-44.360717, -15.49078],
      [-44.360417, -15.490553],
      [-44.360535, -15.490434],
      [-44.360797, -15.490682]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/14_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/14_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'ponto_x',
    title: 'Lanchonete Ponto X',
    message: ' Você chegou ao imóvel número 114 da Praça Getúlio Vargas, onde há algumas décadas funciona a Lanchonete Ponto X. De estilo eclético, a construção se destaca pela platibanda ornamentada com rosáceas vazadas e pela interessante coluna de esquina, que apresenta a parte superior decorada. Os imóveis geminados da Rua Mata-Machado seguem características arquitetônicas semelhantes.', 
    latitude: -15.490841607366924,
    longitude: -44.360563459707386,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.360679, -15.490858],
      [-44.360551, -15.490982],
      [-44.3604, -15.490842],
      [-44.360588, -15.490687],
      [-44.360679, -15.490858]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/pontox_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/pontox_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_17',
    title: 'Imóvel localizado na Rua Dom Joaquim, Nº 54',
    message: 'Você chegou às ruínas de um antigo imóvel na Rua Dom Joaquim, número 54. De tipo regional, a construção foi demolida, restando apenas a fachada, com os vãos de portas e janelas atualmente bloqueados. Mesmo em ruínas, a fachada chama a atenção por suas grandes dimensões, pelo topo em degraus e pelo oitão vazado, que integrava o sótão do imóvel e podia favorecer a iluminação e a ventilação naturais.',
    latitude: -15.49094930313358,
    longitude: -44.359765768306275,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.359714, -15.49078],
      [-44.359569, -15.490935],
      [-44.35966, -15.491008],
      [-44.35981, -15.490853],
      [-44.359714, -15.49078]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/17_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/17_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_18',
    title: 'Imóvel localizado na Rua Dom Joaquim, Nº 67 ',
    message: 'Você chegou ao imóvel número 67 da Rua Dom Joaquim. O imóvel de tipo colonial teve seus vãos adaptados para abrigar duas residências. O imóvel apresenta fachada com platibanda, ornamentada apenas por cunhais, cimalha e um frontão circular.',
    latitude:  -15.490794970678929,
    longitude: -44.35977152065295,
    radius: 15,
    type: 'Colonial',
    polygon:[
      [-44.359767, -15.490863],
      [-44.359687, -15.490785],
      [-44.3598, -15.490698],
      [-44.359885, -15.490775],
      [-44.359767, -15.490863]
    ],
    imagens: [
      {
        id: '1',
        imagem: require('../../assets/images/18_1.png'),
        descricao: 'Inventário IEPHA - 1985'
      },
      {
        id: '2',
        imagem: require('../../assets/images/18_2.png'),
        descricao: 'Inventário IEPHA - Atualizado'
      },
    ]
  },
  {
    id: 'imovel_21',
    title: 'Imóvel localizado na esquina da Rua Dom Joaquim com a Rua Gualberto de Almeida, Nº 330',
    message: 'Você chegou ao imóvel localizado na esquina da Rua Dom Joaquim com a Rua Gualberto de Almeida, nº 330. De tipologia protomoderna, foi construído originalmente para uso residencial e posteriormente adaptado para atividades comerciais, encontrando-se atualmente sem uso. Destaca-se pela esquina chanfrada e pela platibanda reta com elementos geométricos em relevo. Ao longo do tempo, sua fachada foi modificada, com a substituição das antigas portas de madeira por fechamentos em alvenaria e portas metálicas de enrolar',
    latitude: -15.490614411215406,
    longitude: -44.35962893189584,
    radius: 15,
    type: 'Protomoderno',
    polygon: [
      [-44.359574, -15.490718],
      [-44.359467, -15.490635],
      [-44.359649, -15.49047],
      [-44.359767, -15.490563],
      [-44.359574, -15.490718]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/21_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/21_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_24',
    title: 'Imóvel localizado na Rua Dom Joaquim, Nº 144',
    text: 'Você está diante da edificação térrea de esquina onde funciona o Sindicato Rural. O imóvel possui implantação no alinhamento da via com o canto chanfrado, onde se localiza o acesso principal por meio de pequena escada. A estrutura simples apresenta barrado pintado em tom verde na base, janelas retangulares protegidas por grades de ferro e telhado em duas águas com telhas coloniais de barro e beiral aparente.',
    latitude: -15.49025637462457,
    longitude: -44.35899387005083,
    radius: 15,
    type: 'Protomoderno',
    polygon: [
      [-44.359081, -15.490274],
      [-44.359016, -15.490356],
      [-44.358855, -15.490227],
      [-44.358952, -15.490134],
      [-44.359081, -15.490274]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/24_1.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_26',
    title: 'Imóvel localizado na Rua Lindolfo Caetano, Nº 62',
    text: 'Você está diante do imóvel térreo de número 62, implantado no alinhamento da rua com parede-meia de um dos lados. Sua fachada destaca-se pelos cunhais ornamentados e moldura decorativa no topo, encimados por uma platibanda reta com relevos geométricos. A composição inclui porta de madeira central, janelas com grades de ferro e uma grande porta de enrolar em aço. O telhado possui calhas e canos projetados na fachada para escoamento da água.',
    latitude: -15.48956846305711,
    longitude: -44.358772131975776,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.358882, -15.489591],
      [-44.358759, -15.489684],
      [-44.358587, -15.489503],
      [-44.358727, -15.4894],
      [-44.358882, -15.489591]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/26_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/26_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_28',
    title: 'Imóvel localizado na Rua Lindolfo Caetano, Nº 120',
    text: 'Você está diante do imóvel residencial térreo de alto pé-direito, implantado no alinhamento da via. O principal destaque da edificação é sua platibanda trabalhada com pilaretes encimados por pináculos e vedações rendilhadas em alvenaria. A fachada amarela conta com sete vãos de verga reta (uma porta central ladeada por seis janelas de madeira com tapa-vento em veneziana) e apresenta um revestimento de pedras na base.',
    latitude:  -15.489189188843834, 
    longitude: -44.35921145451291,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.359317, -15.489193],
      [-44.359215, -15.489286],
      [-44.359043, -15.489116],
      [-44.359145, -15.489038],
      [-44.359317, -15.489193]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/28_1.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_30',
    title: 'Imóvel localizado Rua Lindolfo Caetano, Nº 229',
    text: 'Você está diante desta casa de esquina de um andar, localizada no cruzamento da Rua Lindolfo Caetano com a Rua Francisco Sá. O imóvel foi construído bem no limite da calçada e chama a atenção por sua parede lateral alta na esquina, que traz pequenos furos redondos no topo para ventilação. As janelas têm formato retangular e são protegidas por grades de ferro, enquanto a parte da frente conta com uma mureta escondendo o telhado de telhas de barro. ',
    latitude: -15.488579545087962, 
    longitude: -44.36013427047611,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.360143, -15.488692],
      [-44.36002, -15.488568],
      [-44.360127, -15.4885],
      [-44.360218, -15.488599],
      [-44.360143, -15.488692]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/30.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_31',
    title: 'Imóvel localizado na Rua Lindolfo Caetano, Nº 224',
    message: 'Você está diante de um imóvel comercial térreo de pé-direito alto, situado na esquina da Rua Lindolfo Caetano com a Rua 11 de Março. O prédio destaca-se por sua platibanda reta com pilaretes nos cantos, molduras na parte superior e um conjunto de cinco portas antigas de madeira espalhadas pelas duas frentes. A construção preserva suas características originais, porém encontra-se fechada e com marcas do tempo em sua pintura e fachada. ',
    latitude: -15.488463424921578,
    longitude: -44.36006984211007,
    radius: 15,
    type: 'Colonial',
    polygon: [
      [-44.359987, -15.488557],
      [-44.359859, -15.488433],
      [-44.36003, -15.488299],
      [-44.360213, -15.488433],
      [-44.359987, -15.488557]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/31_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/31_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_32',
    title: 'Imóvel localizado na Rua Lindolfo Caetano, Nº 278',
    message: 'Você está diante de um casarão de uso misto (residencial e comercial) com alto pé-direito, que se destaca pela fachada bem dividida por pilares ornamentados e frisos de massa. A edificação possui portas e janelas de madeira dispostas de forma organizada, além de um portão lateral. Hoje, o imóvel abriga o "CEMEI Mundo Mágico", contando com rampa de acessibilidade na entrada e pintura recente em tons de verde. ',
    latitude: -15.48810807897231,
    longitude: -44.36051451082531,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.360497, -15.488211],
      [-44.360358, -15.48802],
      [-44.360518, -15.487937],
      [-44.360663, -15.488082],
      [-44.360497, -15.488211]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/32_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/32_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_33',
    title: 'Imóvel localizado na Rua Lindolfo Caetano, Nº 330/340',
    message: ' Você está diante do conjunto de casas de números 330 e 340. A casa 330, à direita, é mais simples, com fachada amarela, detalhes azuis e topo em formato triangular (frontão). Já a casa 340, à esquerda, é mais trabalhada, com uma porta central, cinco janelas e um topo decorado com balaustrada. Entre as duas construções há um portão de garagem azul, e ambas preservam suas portas e janelas originais de madeira. ',
    latitude: -15.487756728243626,
    longitude: -44.36094554862254,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.360899, -15.487854],
      [-44.36076, -15.487684],
      [-44.36091, -15.487591],
      [-44.361071, -15.487725],
      [-44.360899, -15.487854]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/33_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/33_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_34',
    title: 'Imóvel localizado na Rua Lindolfo Caetano, Nº 331/339 ',
    message: 'Você está diante de um imóvel de estilo regional situado na esquina da Rua Lindolfo Caetano com a Rua 24 de Fevereiro. O prédio, onde antigamente funcionavam um comércio e uma oficina, encontra-se atualmente fechado e sem uso ativo. Destaca-se por sua fachada dividida em módulos por pilares, frisos e platibanda reta no topo. Ao longo do tempo, a edificação passou por alterações visíveis: a pintura foi alterada para tons rosados e parte das antigas portas de madeira deu lugar a portas de enrolar metálicas, além de vãos que foram adaptados ou fechados. ',
    latitude: -15.487871067625445,
    longitude: -44.360988811096334,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.360937, -15.487963],
      [-44.360856, -15.487849],
      [-44.36098, -15.487756],
      [-44.361103, -15.487875],
      [-44.360937, -15.487963]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/34_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/34_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_35',
    title: 'Imóvel localizado na Rua Gualberto de Almeida, Nº 294/298',
    message: 'Você está diante de um conjunto de casas geminadas localizado na esquina da Rua Gualberto de Almeida. A edificação térrea, com sótão, chama a atenção por sua platibanda reta com frisos decorativos e divisão da fachada em módulos. Ao comparar com o registro antigo, percebe-se que o imóvel passou por significativas modificações: as esquadrias originais de madeira foram substituídas por portas e janelas modernas com frestas e grades metálicas, além da alteração nas cores da pintura e inclusão de barrado inferior texturizado. ',
    latitude: -15.488576901778771,
    longitude: -44.361565854909095,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.361506, -15.488454],
      [-44.361355, -15.488599],
      [-44.361495, -15.488692],
      [-44.361672, -15.488562],
      [-44.361506, -15.488454]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/35_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/35_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },

// Patrocinio mota  

  {
    id: 'imovel_37',
    title: 'Antigo Minas Hotel',
    message: 'Você está diante do prédio onde funcionava o Minas Hotel, uma edificação de dois pavimentos com marcantes características neoclássicas situada em frente à Praça Patrocínio Mota. O casarão destaca-se por sua fachada ritmada com dezenas de janelas e portas com balaustradas em madeira no segundo piso, além de cunhais, cimalhas e platibanda decorada com pináculos e frontões. Por sua localização privilegiada de frente para o Rio São Francisco e para a praça do cais.',
    latitude: -15.491675886856795,
    longitude: -44.36008611448064,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.360218, -15.491752],
      [-44.360116, -15.491566],
      [-44.359939, -15.491752],
      [-44.36003, -15.491835],
      [-44.360218, -15.491752]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/37_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/37_2.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      {
        id: '3',
        imagem: require('../../assets/images/37_3.png'),
        descricao: 'Inventário IEPHA - Atualizado'
      }
    ]
  },
  {
    id: 'imovel_41',
    title: 'Imóvel localizado na Rua Visconde de Ouro Preto, Nº 92',
    message: 'Você está diante de um casarão histórico construído em 1879, localizado na esquina da Rua Visconde de Ouro Preto com o beco de acesso à Praça Getúlio Vargas. Atualmente, o espaço abriga um Centro de Artesanato e Ponto de Cultura. A edificação chama a atenção pelo pé-direito alto, fachadas em tons de branco, azul e amarelo, além dos frisos ornamentados e cunhais marcantes.',
    latitude: -15.492275377312069,
    longitude: -44.36078105064742,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.360604, -15.492305],
      [-44.360663, -15.492145],
      [-44.36084, -15.492176],
      [-44.360728, -15.492372],
      [-44.360604, -15.492305]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/41_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/41_2.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      {
        id: '3',
        imagem: require('../../assets/images/41_3.png'),
        descricao: 'Inventário IEPHA - Atualizado'
      }
    ]
  },
  {
    id: 'imovel_44',
    title: 'Imóvel localizado na Rua Visconde de Ouro Preto, Nº 126/134',
    message: 'Você está diante da edificação de número 126, situada na Rua Visconde de Ouro Preto. Trata-se de uma construção térrea de pé-direito elevado, implantada no alinhamento da via e que forma uma única edificação contínua junto ao número 134. O prédio chama a atenção por sua pintura marcante em azul e branco com detalhes em amarelo, além de uma rica platibanda trabalhada com óculos decorativos e um medalhão central. Sua fachada conta com janelas de caixilhos em madeira, venezianas e bandeiras de vidro, acompanhadas por portas em folha tipo calha.',
    latitude: -15.492413455095432,
    longitude: -44.361085048363776,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.360953, -15.492434],
      [-44.361033, -15.4923],
      [-44.361205, -15.492383],
      [-44.361087, -15.492543],
      [-44.360953, -15.492434]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/44_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/44_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_47',
    title: 'Imóvel localizado na Rua Visconde de Ouro Preto, Nº 156',
    message: 'Você está diante do sobrado de número 156, uma edificação residencial de dois pavimentos implantada no alinhamento da via. Construído com estrutura autônoma de madeira, o imóvel se destaca pelo aproveitamento do vão do telhado para a criação do segundo piso. Sua fachada é enquadrada por cunhais e cimalhas, sendo arrematada no topo por uma platibanda reta com decorações geométricas. A composição conta com quatro vãos bem rítmicos em cada andar, com vergas alteadas, portas e janelas de madeira no térreo e janelas rasgadas com balaustradas torneadas no pavimento superior.',
    latitude: -15.492520661276624,
    longitude: -44.36133110196431,
    radius: 15,
    type: 'Colonial',
    polygon: [
      [-44.361146, -15.492543],
      [-44.361264, -15.492393],
      [-44.36142, -15.49245],
      [-44.361296, -15.492626],
      [-44.361146, -15.492543]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/47_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/47_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_48',
    title: 'Imóvel localizado na Rua Visconde de Ouro Preto, Nº 166',
    message: 'Você está diante da edificação residencial de número 166, uma casa térrea implantada no alinhamento da via. O imóvel destaca-se por sua fachada horizontalizada em tons rosados, enquadrada por cunhais e por uma larga cimalha no topo que remata o beiral do telhado. A composição conta com oito vãos com vergas levemente curvadas (em canga de boi) e esquadrias de madeira, sendo cinco portas e três janelas com venezianas. Lateralmente, há um portão de acesso delimitado por um pilar decorativo em destaque.',
    latitude: -15.492561225888938,
    longitude: -44.361419108622805,
    radius: 15,
    type: 'Colonial',
    polygon: [
      [-44.361312, -15.4926],
      [-44.361398, -15.492445],
      [-44.361543, -15.492517],
      [-44.361441, -15.492698],
      [-44.361312, -15.4926]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/48_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/48_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_49',
    title: 'Imóvel localizado na Rua Visconde de Ouro Preto, Nº 186',
    message: 'Você está diante do imponente prédio de características art-nouveau onde funcionou o Grêmio Recreativo Mário dos Santos Reis, utilizado posteriormente como escola. A edificação de grande porte destaca-se por seus elevados pés-direitos e por sua rica platibanda trabalhada com pequenos pilares, desenhos vazados e o ornamento central de uma águia de asas abertas. Sua fachada apresenta vãos agrupados de dois em dois com verga reta, acompanhados por sobrevergas vazadas em meia-lua e aberturas circulares para ventilação do porão.',
    latitude: -15.492671738203578,
    longitude: -44.36165945597777,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.361522, -15.492724],
      [-44.361656, -15.492486],
      [-44.361886, -15.492641],
      [-44.361747, -15.492858],
      [-44.361522, -15.492724]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/49_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/49_2.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '3', 
        imagem: require('../../assets/images/49_3.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      {
        id: '4',
        imagem: require('../../assets/images/49_4.png'),
        descricao: 'Inventário IEPHA - Atualizado'
      }
    ]
  },
  {
    id: 'imovel_52',
    title: 'Imóvel localizado na Rua Barão do Rio Branco, Nº 173/177',
    message: 'Você está diante da edificação residencial neoclássica de números 173 e 177, recentemente reformada e em excelente estado de conservação. O imóvel térreo é implantado no alinhamento da via e atende a duas residências. Sua fachada harmoniosa conta com oito vãos em arco pleno (seis janelas e duas portas) ornamentados por molduras em relevo realçadas em tom amarelo sobre paredes brancas. A estrutura é delimitada por cunhais e cimalha destacados, sendo coroada por uma platibanda decorada com rosáceas e detalhes geométricos.',
    latitude: -15.492652474839073,
    longitude: -44.36223404244172,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.36238, -15.492739],
      [-44.362251, -15.492936],
      [-44.361999, -15.492745],
      [-44.362165, -15.492533],
      [-44.36238, -15.492739]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/52_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/52_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      },
      {
        id: '3',
        imagem: require('../../assets/images/52_3.png'),
        descricao: 'Google Maps - 2026'
      }
    ]
  },
  {
    id: 'imovel_54',
    title: 'Imóvel localizado na Rua Barão do Rio Branco, Nº 80',
    message: 'Você está diante da edificação residencial de número 80, implantada na testada do lote diretamente no alinhamento da via. O imóvel destaca-se por sua volumetria com pé-direito elevado e enquadramento frontal marcado por destacados cunhais trabalhados nas extremidades e cornija que arremata a cobertura. No centro da fachada principal, sobre a porta central de verga reta, sobressai-se um escudo ornamental com o ano de 1877 registrado. A composição dos vãos conta com janelas retangulares protegidas por grades de ferro e uma grande abertura lateral adaptada com portão de garagem moderno.',
    latitude: -15.491908400479037,
    longitude: -44.36162219975322,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.36164, -15.492021],
      [-44.361468, -15.491907],
      [-44.361597, -15.491752],
      [-44.361747, -15.491907],
      [-44.36164, -15.492021]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/54_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/54_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_55',
    title: 'Imóvel localizado na Rua Barão do Rio Branco, Nº 43 ',
    message: 'Você está diante da elegante casa neoclássica de número 43, elevada sobre porão alteado com aberturas de ventilação. Destaca-se por sua fachada amarela ornamentada por pilastras, almofadas decorativas sob as janelas, vãos em arco pleno e óculos florais. O topo é arrematado por cimalha e platibanda reta.',
    latitude: -15.491744587053224,
    longitude: -44.361305896518644,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.3612, -15.491902],
      [-44.361076, -15.491788],
      [-44.361216, -15.491659],
      [-44.361393, -15.491809],
      [-44.3612, -15.491902]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/55_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/55_2.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      {
        id: '3',
        imagem: require('../../assets/images/55_3.png'),
        descricao: 'Inventário IEPHA - Atualizado'
      }
    ]
  },
  {
    id: 'imovel_60',
    title: 'Imóvel localizado na Rua Professor Manoel Ambrósio, Nº 21',
    message: 'Você está diante da edificação de esquina situada no cruzamento da Rua Manoel Ambrósio com a Rua Cônego Marinho. O imóvel térreo possui alto pé-direito com sótão aproveitado na cobertura. Destaca-se pelos robustos cunhais ornados na quina, moldura decorativa de argamassa sob o beiral e empena lateral com duas janelas superiores.',
    latitude: -15.490998531178668,
    longitude: -44.36139614840612,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.361586, -15.491121],
      [-44.361441, -15.491266],
      [-44.361248, -15.491096],
      [-44.361396, -15.490999],
      [-44.361586, -15.491121]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/60_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/60_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_61',
    title: 'Imóvel localizado na Rua Professor Manoel Ambrósio, Nº 39  ',
    message: 'Você está diante da edificação comercial de esquina de número 39, atualmente adaptada para uso comercial. O imóvel térreo destaca-se por sua fachada com enquadramento azul em pilastras e frisos horizontais na platibanda reta. Apresenta aberturas modificadas para portas de enrolar metálicas e vitrines comerciais, além de janela lateral e sótão com duas aberturas na empena da edificação.',
    latitude: -15.49090691287588,
    longitude: -44.36152240773368,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.361532, -15.491044],
      [-44.361409, -15.490935],
      [-44.361516, -15.490816],
      [-44.361656, -15.490966],
      [-44.361532, -15.491044]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/61_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/61_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_69',
    title: 'Imóvel localizado na Rua Cônego Marinho, Nº 242',
    message: 'Você está diante da casa residencial localizada na Rua Cônego Marinho, construída bem no limite da calçada e encostada nas vizinhas. O imóvel chama a atenção por sua mureta no topo (platibanda) ornamentada com furos em formato de losangos que ajudam na ventilação. A parte de baixo da fachada recebeu um revestimento de pedras, e suas aberturas contam com portas e janelas retangulares protegidas por grades de ferro trabalhadas.',
    latitude: -15.492605577743749, 
    longitude: -44.3631363554389,
    radius: 15,
    type:  'Eclético',
    polygon: [
      [-44.363141, -15.492708],
      [-44.363007, -15.49259],
      [-44.363275, -15.492403],
      [-44.363409, -15.492517],
      [-44.363141, -15.492708]
    ],
    imagens: [
      {
        id: '1', 
        imagem: require('../../assets/images/69_1.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/69_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]

  },
  {
    id: 'imovel_70',
    title: 'Imóvel localizado na Rua Cônego Marinho, Nº 65',
    message: 'Você está diante da edificação comercial de estilo protomoderno, marcada por sua fachada simétrica e marcante volumetria geométrica. O imóvel térreo destaca-se pelo frontão central escalonado com pilastras verticais, além de frisos e detalhes decorativos em tom azul sobre a pintura branca.',
    latitude: -15.49132682254007,
    longitude: -44.36174248199646,
    radius: 15,
    type: 'Protomoderno',
    polygon: [
      [-44.361849, -15.491385],
      [-44.361656, -15.49153],
      [-44.361554, -15.491416],
      [-44.36172, -15.491209],
      [-44.361849, -15.491385]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/70_1.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      },
    ]
  },
  {
    id: 'imovel_71',
    title: 'Imóvel localizado na Rua Cônego Marinho, Nº 83/97',
    message: 'Você está diante do Imovél situado na Rua Cônego Marinho, número 83/97, construído bem no limite da calçada. A fachada traz detalhes azuis nas pilastras e na mureta superior (platibanda) que esconde o telhado, decorada com pequenas rosáceas. As janelas e portas possuem acabamento em tom avermelhado, e no lado esquerdo da construção há um portão de acesso com topo curvado.',
    latitude: -15.491492770266108, 
    longitude: -44.36190319768391,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.36195, -15.491519],
      [-44.361842, -15.491628],
      [-44.361757, -15.491545],
      [-44.361864, -15.491437],
      [-44.36195, -15.491519]
    ],
    imagens: [
      {
        id: '1', 
        imagem: require('../../assets/images/71_1.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/71_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]

  },
  {
    id: 'imovel_73',
    title: 'Imóvel localizado na Rua Cônego Marinho, Nº 151/161',
    message: 'Você está diante do imóvel residencial de esquina situado na junção da Rua Cônego Marinho com um beco. A construção térrea conta com aproveitamento de sótão e destaca-se pelo canto chanfrado na quina, onde há uma janela. Suas fachadas são ritmadas por pilastras, cunhais e molduras decorativas sob o beiral, apresentando vãos de verga com cantos arredondados e empena lateral que abriga duas janelas superiores do sótão.',
    latitude: -15.492034261823166,
    longitude: -44.36247576629665,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.362412, -15.491933],
      [-44.362299, -15.492078],
      [-44.362439, -15.492171],
      [-44.362568, -15.492093],
      [-44.362412, -15.491933]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/73_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/73_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_75',
    title: 'Imóvel localizado na Travessa Joaquim Carlos, Nº 50',
    message: 'Você está no Imóvel localizado na Travessa Joaquim Carlos, bem na esquina da Rua Barão do Rio Branco com a Travessa Joaquim Carlos. Este casarão térreo chama a atenção por ter um sótão no telhado com duas janelinhas de madeira, um detalhe bem típico das casas antigas de Januária. A fachada é cheia de detalhes feitos em massa, com portas e janelas de madeira que se abrem direto para a calçada. O local junta comércio e moradia, mantendo vivo o charme histórico da cidade.',
    latitude: -15.49288954210313,
    longitude: -44.36273288616389,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.362809, -15.492724],
      [-44.362562, -15.492941],
      [-44.362648, -15.493044],
      [-44.362938, -15.492817],
      [-44.362809, -15.492724]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/75_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/75_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_77',
    title: 'Imóvel localizado na Rua Gualberto de Carvalho, Nº 269',
    message: 'Você está diante deste imóvel comercial de esquina, onde funciona um minimercado. Construído no limite da calçada, o prédio conta com barrado de pedras na base e cobertura tradicional em telhas de barro. Chama a atenção sua parede lateral alta (empena), que traz duas janelas de madeira no sótão, enquanto as entradas do térreo possuem aberturas em arco e portas de enrolar metálicas protegidas por um toldo vermelho.',
    latitude: -15.492827386978659, 
    longitude: -44.36326645865668,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.363302, -15.492864],
      [-44.363151, -15.493019],
      [-44.363023, -15.492905],
      [-44.363157, -15.492755],
      [-44.363302, -15.492864]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/77_1.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_79',
    title: 'Imóvel localizado na Rua Doutor Hermenegildo Barros, Nº 8',
    message: 'Você está diante do Imóvel localizado na Rua Doutor Hermenegildo Barros, número 8, um casarão de esquina muito bem conservado, destacado por sua pintura em tons amarelos e detalhes em branco. A construção chama a atenção pela platibanda decorada no topo da fachada e pelos acabamentos trabalhados na quina do prédio. Suas portas e janelas de madeira vermelha dão acesso direto à calçada e, na lateral, é possível notar duas janelas na parte superior, aproveitando o espaço do sótão.',
    latitude: -15.492983057309846,
    longitude: -44.362867889626784,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.362766, -15.493117],
      [-44.362686, -15.493013],
      [-44.362949, -15.492802],
      [-44.363072, -15.492895],
      [-44.362766, -15.493117]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/79_1.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      },
    ]
  },
  {
    id: 'imovel_80',
    title: 'Imóvel localizado na Rua Barão do Rio Branco, Nº 223',
    message: 'Você está no Imóvel localizado na Rua Barão do Rio Branco com a Travessa Joaquim Carlos. O destaque desta construção neoclássica é o topo da fachada, com detalhes decorativos, esculturas e pinhas nas pontas. As portas e janelas possuem arcos arredondados no topo e, na lateral, o sótão se destaca com janelas acompanhadas de sacadas em ferro fundido. O espaço abriga residência e comércio.',
    latitude: -15.49299795079196,
    longitude: -44.362632726027286,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.362509, -15.493143],
      [-44.362391, -15.492988],
      [-44.362557, -15.492879],
      [-44.362696, -15.493086],
      [-44.362509, -15.493143]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/80_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/80_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },

  // Mata machado

  {
    id: 'imovel_92',
    title: 'Imóvel 92',
    message: 'Você está no Imóvel número 92, situado na esquina da Praça Getúlio Vargas com a Rua Mata Machado. Esta edificação térrea destaca-se por ser dividida em três espaços comerciais com pinturas coloridas e independentes. Seu topo traz uma platibanda decorada com rosáceas, rostos neoclássicos e desenhos de coroas de louro em massa, mantendo o charme do centro histórico',
    latitude: -15.490781849957987,
    longitude: -44.360469191914696,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.360469, -15.490782],
      [-44.360293, -15.490656],
      [-44.360433, -15.490517],
      [-44.36062, -15.490682],
      [-44.360469, -15.490782]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/92_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/92_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_96',
    title: 'Imóvel 96',
    message: 'Você está diante do Imóvel Número 96, um imponente sobrado colonial de dois pavimentos localizado em uma esquina da Rua Mata Machado. O casarão chama a atenção pelo alinhamento das suas portas no andar térreo e pelas várias janelas rasgadas no andar superior. A construção mantém suas características históricas marcantes, como o telhado de quatro águas e os detalhes em madeira.',
    latitude: -15.490290739014773,
    longitude: -44.3600277994801,
    radius: 15,
    type: 'Colonial',
    polygon: [
      [-44.360028, -15.490291],
      [-44.359869, -15.490165],
      [-44.360046, -15.489994],
      [-44.360234, -15.490196],
      [-44.360028, -15.490291]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/96_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/96_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_99',
    title: 'Imóvel 99',
    message: 'Você está diante do Imóvel Número 99, uma grande edificação de estilo eclético situada na esquina da Rua Mata Machado com a Rua Lindolfo Caetano. O casarão térreo chama a atenção pela sequência harmoniosa de janelas em arco pleno e pela porta principal com uma pequena escada de acesso. Sua fachada é ornamentada por pilastras, detalhes decorativos em massa e uma platibanda que esconde o telhado de quatro águas.',
    latitude: -15.489419951441798,
    longitude: -44.35924034405003,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.359274, -15.489545],
      [-44.359102, -15.489374],
      [-44.359263, -15.489224],
      [-44.35944, -15.4894],
      [-44.359274, -15.489545]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/99_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/99_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_101',
    title: 'Imóvel 101',
    message: 'Você está diante do Imóvel Número 101, uma edificação residencial de estilo eclético. A residência térrea se destaca por sua platibanda rendada com elementos vazados, pilaretes com coruchéus e um frontão central ornamentado em alto-relevo. Sua fachada conta com seis vãos em arco abatido, sendo uma porta central e cinco janelas, todos com emolduramento trabalhado em massa e vedações de madeira.',
    latitude: -15.488853246680613,
    longitude: -44.35870381940221,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.358678, -15.488955],
      [-44.358555, -15.488836],
      [-44.358711, -15.488671],
      [-44.358845, -15.488811],
      [-44.358678, -15.488955]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/101_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/101_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_105',
    title: 'Imóvel 105',
    message: 'Você está diante do Imóvel Número 105, uma relevante edificação comercial de estilo eclético situada na esquina da Rua Barão de São Romão com a Rua Mata Machado. A construção térrea chama a atenção pela sua esquina chanfrada, pilastras moduladas e platibanda ornada com pináculos e frisos decorativos. Em bom estado de conservação, a fachada combina janelas originais de madeira com intervenções mais recentes.',
    latitude: -15.488638134573783,
    longitude: -44.35829509824856,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.3584, -15.488676],
      [-44.35826, -15.488516],
      [-44.358158, -15.488681],
      [-44.358271, -15.488764],
      [-44.3584, -15.488676]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/105_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/105_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_106',
    title: 'Imóvel 106',
    message: 'Você está diante de uma edificação comercial de estilo regional, situada numa esquina da Rua Barão de São Romão. Esta construção térrea de partido retangular destaca-se pelos seus três panos de parede modulados por pilares e pelo friso decorado com desenhos em alto-relevo. O telhado possui cobertura em duas águas com telhas artesanais do tipo capa e bica.',
    latitude: -15.4884848869256,
    longitude: -44.35815894432452,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.358265, -15.488485],
      [-44.358153, -15.488656],
      [-44.357927, -15.488449],
      [-44.358067, -15.488257],
      [-44.358265, -15.488485]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/106_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/106_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_110',
    title: 'Imóvel 110',
    message: 'Você está diante do antigo Edifício do Batalhão da Polícia Militar, uma edificação de estilo eclético construída em dois pavimentos na esquina da Praça Santa Cruz com a Rua Mata Machado. O prédio chama a atenção por seus alicerces elevados de pedra, ritmo rítmico das aberturas e platibanda decorada com balaustrada e frontão central. O imóvel encontra-se atualmente em avançado estado de degradação.',
    latitude: -15.487476966637827,
    longitude: -44.357394374275145,
    radius: 15,
    type: 'Eclético',
    polygon: [
      [-44.357584, -15.487461],
      [-44.357461, -15.487601],
      [-44.357246, -15.487472],
      [-44.357439, -15.487327],
      [-44.357584, -15.487461]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/110_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/110_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_111',
    title: 'Imóvel 111',
    message: 'Você está diante desta pequena edificação de estilo regional com o Número 7 gravado na fachada. O imóvel térreo destaca-se pela sua platibanda decorada com recorte curvo no topo e pelo enquadramento que une a porta e a janela frontal, onde se lê o ano "1909" em relevo.',
    latitude: -15.487178783444588,
    longitude: -44.35768087885222,
    radius: 15,
    type: 'Regional',
    polygon: [
      [-44.357761, -15.487255],
      [-44.357681, -15.487179],
      [-44.357793, -15.487012],
      [-44.35789, -15.48713],
      [-44.357761, -15.487255]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/111_1.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      },
    ]
  },
  {
    id: 'imovel_112',
    title: 'Imóvel 112',
    message: 'Você está diante de um relevante conjunto arquitetônico de estilo colonial situado na Rua Operária, composto por edificações térreas de partido retangular implantadas no alinhamento da via e em parede-meia. O conjunto abrange o prédio de número 65 e 73, que possui platibanda ornamental reta e cunhais, e a sequência de casas geminadas de número 79, 83, 87, 91 e 97, destacando-se pela fachada modulada por pilares, frisos, cornijas e ritmo ordenado de portas e janelas.',
    latitude: -15.487890218330442,
    longitude: -44.35893415684557,
    radius: 15,
    type: 'Colonial',
    polygon: [
      [-44.358915, -15.48804],
      [-44.35878, -15.487906],
      [-44.358995, -15.487673],
      [-44.359161, -15.487803],
      [-44.358915, -15.48804]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/112_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/112_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_114',
    title: 'Imóvel 114',
    message: 'Você está diante do antigo Cine Januária, edificação de estilo protomoderno e único cinema de rua da história do município. Inaugurado na década de 1950, o espaço funcionou regularmente até os anos 1980 e operou com exibições intermitentes até seu fechamento definitivo nos anos 1990. O imóvel destaca-se por sua fachada geométrica com platibanda escalonada, portão central pantográfico com letreiro original e barrado inferior em revestimento de pedra.',
    latitude: -15.490052143109176,
    longitude: -44.36077058209159,
    radius: 15,
    type: 'Protomoderno',
    polygon: [
      [-44.360776, -15.490155],
      [-44.36061, -15.490025],
      [-44.360889, -15.48971],
      [-44.361066, -15.489845],
      [-44.360776, -15.490155]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/114_1.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      },
    ]
  },

  //Trajeto D. São Francisco 

  {
    id: 'imovel_115',
    title: 'Imóvel 115',
    message: 'Você está diante da edificação número 115, localizada na Avenida São Francisco. Este imóvel de arquitetura simples apresenta um estado atual de conservação bastante deteriorado, com marcas do tempo visíveis em sua estrutura.',
    latitude: -15.49118598076174,
    longitude: -44.35964844483142,
    radius: 15,
    type: 'Colonial',
    polygon: [
      [-44.359648, -15.491186],
      [-44.35944, -15.491065],
      [-44.359553, -15.49093],
      [-44.3598, -15.491106],
      [-44.359648, -15.491186]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/115_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/115_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  },
  {
    id: 'imovel_118',
    title: 'Imóvel 118',
    message: 'Você está diante do Imóvel número 118, antiga sede da "Cooperativa de Consumo dos Rodoviários de Minas Gerais Ltda.", localizado em uma esquina da Rua Humaitá. A construção fica em um nível mais alto que a calçada, com acesso por uma escada frontal. Chama a atenção pela sua fachada com empena triangular emoldurada e estilo simples, apresentando desgaste no acabamento.',
    latitude: -15.490418660275342,
    longitude: -44.358915556137376,
    radius: 15,
    type: 'Colonial',
    polygon: [
      [-44.358995, -15.490413],
      [-44.358882, -15.490522],
      [-44.358711, -15.490377],
      [-44.358818, -15.490268],
      [-44.358995, -15.490413]
    ],
    imagens: [
      { 
        id: '1', 
        imagem: require('../../assets/images/118_1.png'), 
        descricao: 'Inventário IEPHA - 1985' 
      },
      { 
        id: '2', 
        imagem: require('../../assets/images/118_2.png'), 
        descricao: 'Inventário IEPHA - Atualizado' 
      }
    ]
  }
];

