# 📍 JanuTour - Guia Turístico Autoguiado

O **JanuTour** é um aplicativo mobile desenvolvido para auxiliar turistas e moradores na exploração do patrimônio histórico e cultural de **Januária-MG**. O app oferece rotas inteligentes, geolocalização em tempo real e instruções de navegação passo a passo.

## 🚀 Como começar

### Pré-requisitos
* [Node.js](https://nodejs.org/) instalado.
* [Expo Go](https://expo.dev/client) instalado no seu smartphone.
* Uma conta e um Token de acesso da [Mapbox](https://www.mapbox.com/).

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/TkMaia7/janutour.git](https://github.com/TkMaia7/janutour.git)
    cd janutour
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configuração do Ambiente (CRÍTICO):**
    Crie um arquivo chamado `.env` na raiz do projeto e adicione seu token do Mapbox:
    ```env
    EXPO_PUBLIC_MAPBOX_TOKEN=seu_token_aqui
    ```

4.  **Inicie o projeto:**
    ```bash
    npx expo start
    ```
    Escaneie o QR Code com o app **Expo Go** no seu celular.

