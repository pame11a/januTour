import { MAPBOX_ACCESS_TOKEN } from '@env';
export const MAPBOX_TOKEN = MAPBOX_ACCESS_TOKEN;

// Coordenada Fallback (IFNMG)
export const FALLBACK_COORDS = [-44.362229, -15.4885799];

// Nível de zoom inicial do mapa
export const INITIAL_ZOOM = 18; 

export const POINTS_OF_INTEREST = [

  {
    id: 'prefeitura_municipal',
    title: 'Prefeitura Municipal',
    message: 'Você chegou ao prédio histórico da Prefeitura Municipal de Januária. Este casarão, datado de 1890, tem estilo eclético e chama atenção pelas suas cores vibrantes em azul e branco. Durante muito tempo, foi o coração administrativo da cidade. Hoje, abriga o Centro de Atendimento ao Turista (CAT). Aproveite para entrar e descobrir mais sobre Januária',
    latitude:-15.488692266036272,
    longitude: -44.36216932359738,
    radius: 15,
  },

  {
    id: 'casa_da_memoria',
    title: 'Casa da Memória do Vale São Francisco',
    message: 'Você chegou à Casa da Memória do Vale do São Francisco. Este imponente prédio de estilo eclético, construído por volta da década de 1910, possui dois pavimentos e já abrigou o Fórum e a antiga cadeia municipal. As grades reforçadas nas janelas do andar térreo ainda revelam marcas desse passado como prisão. Atualmente, o imóvel passa por restauração e está temporariamente fechado para visitação.',
    latitude: -15.488537112917218,
    longitude: -44.36194030748854,
    radius: 15,
  },

  {
    id: 'cartorio',
    title: 'Cartório',
    message: 'Você chegou ao imóvel localizado na Praça Dom Daniel, nº 91, atual sede do Cartório do 2º Ofício. Este elegante prédio de tipo arquitetônico protomoderno chama atenção por suas linhas mais retas e sóbrias.',
    latitude: -15.489341286219025, 
    longitude: -44.36216951445289,
    radius: 15,
  },

  {
    id: 'catedral',
    title: 'Catedral Nossa Senhora das Dores',
    message: 'Você chegou à Catedral Nossa Senhora das Dores, uma das centralidades que marcaram o desenvolvimento da cidade. A construção atual, inaugurada em 1973, substituiu a antiga matriz, erguida em 1878. Sua fachada está voltada para o Rio São Francisco e, ao fundo, destacam-se os antigos prédios da prefeitura e do fórum.',
    latitude: -15.4892315,
    longitude: -44.3619033,
    radius: 15,
  },

  {
    id: 'lanchonete_lanchinho',
    title: 'Lanchonete Lannchinho',
    message: 'Você chegou ao imóvel da Praça Dom Daniel, número 41, na esquina com a rua Cesário Alvim. Atualmente, o espaço abriga a Lanchonete Lanchino e a loja Osheer. Com tipologia arquitetônica regional, o prédio se destaca pela fachada com frontão central e detalhes decorativos em forma de rosáceas. Embora as aberturas tenham sido adaptadas para uso comercial, o charme original da fachada foi preservado.',
    latitude: -15.489651410087054, 
    longitude: -44.36185436362453,
    radius: 15,
  },

  {
    id: 'clinica_novo_sorrisso',
    title: 'Clinica Novo Sorriso',
    message: 'Você chegou ao imóvel da Praça Dom Daniel, número 13, onde hoje funciona a Clínica Novo Sorriso no andar térreo. Este sobrado, de arquitetura protomoderna, contribui para a diversidade de estilos presentes no patrimônio histórico da cidade.',
    latitude: -15.489894007607662, 
    longitude: -44.361644541144976,
    radius: 15,
  },

  {
    id: 'gorilla_celulares',
    title: 'Gorila Celulares',
    message: 'Você chegou ao imóvel da Praça Dom Daniel, número 13, onde hoje funciona a Clínica Novo Sorriso no andar térreo. Este sobrado, de arquitetura protomoderna, contribui para a diversidade de estilos presentes no patrimônio histórico da cidade.',
    latitude: -15.4895986371885,  
    longitude: -44.36131792528753,
    radius: 15,
  },

  {
    id: 'loterica',
    title: 'Loterica', 
    message: 'Você chegou ao imóvel número 52 da Praça Dom Daniel, onde atualmente funciona uma agência lotérica. Apesar das dimensões reduzidas, o edifício se destaca pela composição marcante e é um dos mais belos exemplares da arquitetura eclética em Januária. Seu frontão recortado, com linhas curvas que se elevam ao centro, apresenta um conjunto ornamentado com pináculos e arco vazado. O toldo instalado sobre os vãos de acesso acaba ocultando parte desses detalhes, que merecem um olhar mais atento. Reserve um momento para apreciar esta joia do patrimônio arquitetônico januarense.',
    latitude: -15.489475747332492, 
    longitude: -44.361398537699074,
    radius: 15,
  },
];


export const SEQUENCIA_ROTA_IGREJA = [
  'catedral',
  'cartorio',
  'lanchonete_lanchinho',
  'go_laser',
  'gorilla_celulares',
  'casa_da_memoria',
  'prefeitura_municipal'
];