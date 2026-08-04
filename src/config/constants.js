import { MAPBOX_ACCESS_TOKEN } from '@env';
export const MAPBOX_TOKEN = MAPBOX_ACCESS_TOKEN;

export const FALLBACK_COORDS = [-44.3916585, -15.4802473];

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
    polygon: [
      [-44.362133, -15.488366],
      [-44.362391, -15.488475],
      [-44.362144, -15.488898],
      [-44.361908, -15.488795],
      [-44.362133, -15.488366] 
    ]
  },

  {
    id: 'casa_da_memoria',
    title: 'Casa da Memória do Vale São Francisco',
    message: 'Você chegou à Casa da Memória do Vale do São Francisco. Este imponente prédio de estilo eclético, construído por volta da década de 1910, possui dois pavimentos e já abrigou o Fórum e a antiga cadeia municipal. As grades reforçadas nas janelas do andar térreo ainda revelam marcas desse passado como prisão. Atualmente, o imóvel passa por restauração e está temporariamente fechado para visitação.',
    latitude: -15.488537112917218,
    longitude: -44.36194030748854,
    radius: 15,
    polygon: [
      [-44.362181, -15.488469],
      [-44.361865, -15.488288],
      [-44.361586, -15.488588],
      [-44.36202, -15.488836],
      [-44.362181, -15.488469]
    ]
  },

  {
    id: 'cartorio',
    title: 'Cartório',
    message: 'Você chegou ao imóvel localizado na Praça Dom Daniel, nº 91, atual sede do Cartório do 2º Ofício. Este elegante prédio de tipo arquitetônico protomoderno chama atenção por suas linhas mais retas e sóbrias.',
    latitude: -15.489341286219025, 
    longitude: -44.36216951445289,
    radius: 15,
    polygon: [
      [-44.362208, -15.489472],
      [-44.361935, -15.489276],
      [-44.362037, -15.489141],
      [-44.362321, -15.489353],
      [-44.362208, -15.489472] 
    ]
  },

  {
    id: 'catedral',
    title: 'Catedral Nossa Senhora das Dores',
    message: 'Você chegou à Catedral Nossa Senhora das Dores, uma das centralidades que marcaram o desenvolvimento da cidade. A construção atual, inaugurada em 1973, substituiu a antiga matriz, erguida em 1878. Sua fachada está voltada para o Rio São Francisco e, ao fundo, destacam-se os antigos prédios da prefeitura e do fórum.',
    latitude: -15.4892315,
    longitude: -44.3619033,
    radius: 15,
    polygon: [
      [-44.361913, -15.48879],
      [-44.361452, -15.489421],
      [-44.361742, -15.489643],
      [-44.362273, -15.489017],
      [-44.361913, -15.48879] 
    ]
  },

  {
    id: 'lanchonete_lanchinho',
    title: 'Lanchonete Lannchinho',
    message: 'Você chegou ao imóvel da Praça Dom Daniel, número 41, na esquina com a rua Cesário Alvim. Atualmente, o espaço abriga a Lanchonete Lanchino e a loja Osheer. Com tipologia arquitetônica regional, o prédio se destaca pela fachada com frontão central e detalhes decorativos em forma de rosáceas. Embora as aberturas tenham sido adaptadas para uso comercial, o charme original da fachada foi preservado.',
    latitude: -15.489651410087054, 
    longitude: -44.36185436362453,
    radius: 15,
    polygon: [
      [-44.361758, -15.489493],
      [-44.362026, -15.489689],
      [-44.361822, -15.489891],
      [-44.361565, -15.489674],
      [-44.361758, -15.489493] 
    ]
  },

  {
    id: 'clinica_novo_sorrisso',
    title: 'Clinica Novo Sorriso',
    message: 'Você chegou ao imóvel da Praça Dom Daniel, número 13, onde hoje funciona a Clínica Novo Sorriso no andar térreo. Este sobrado, de arquitetura protomoderna, contribui para a diversidade de estilos presentes no patrimônio histórico da cidade.',
    latitude: -15.489894007607662, 
    longitude: -44.361644541144976,
    radius: 15,
    polygon: [
      [-44.361414, -15.48986],
      [-44.361559, -15.489689],
      [-44.361876, -15.489922],
      [-44.36172, -15.490098],
      [-44.361414, -15.48986] 
    ]
  },

  {
    id: 'gorilla_celulares',
    title: 'Gorila Celulares',
    message: 'Você chegou ao imóvel da Praça Dom Daniel, número 13, onde hoje funciona a Clínica Novo Sorriso no andar térreo. Este sobrado, de arquitetura protomoderna, contribui para a diversidade de estilos presentes no patrimônio histórico da cidade.',
    latitude: -15.4895986371885,  
    longitude: -44.36131792528753,
    radius: 15,
    polygon: [
      [-44.361275, -15.489762],
      [-44.361422, -15.489588],
      [-44.361237, -15.489444],
      [-44.361098, -15.489602],
      [-44.361275, -15.489762] 
    ]
  },

  {
    id: 'loterica',
    title: 'Loterica', 
    message: 'Você chegou ao imóvel número 52 da Praça Dom Daniel, onde atualmente funciona uma agência lotérica. Apesar das dimensões reduzidas, o edifício se destaca pela composição marcante e é um dos mais belos exemplares da arquitetura eclética em Januária. Seu frontão recortado, com linhas curvas que se elevam ao centro, apresenta um conjunto ornamentado com pináculos e arco vazado. O toldo instalado sobre os vãos de acesso acaba ocultando parte desses detalhes, que merecem um olhar mais atento. Reserve um momento para apreciar esta joia do patrimônio arquitetônico januarense.',
    latitude: -15.489475747332492, 
    longitude: -44.361398537699074,
    radius: 15,
    polygon: [
      [-44.361418, -15.489593],
      [-44.361248, -15.489453],
      [-44.361337, -15.489358],
      [-44.361506, -15.489488],
      [-44.361418, -15.489593] 
    ]
  },

];

