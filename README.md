# Juba - Chatbot Oficial dos Fãs da Fúria
<div align="center">
    <img alt="HTML5 Badge" src="https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=HTML5&logoColor=black&labelColor=%23feffbc">
    <img alt="CSS3 Badge" src="https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=CSS3&logoColor=black&labelColor=%23feffbc">
    <img alt="JavaScript Badge" src="https://img.shields.io/badge/Javascript-black?style=for-the-badge&logo=Javascript&logoColor=black&labelColor=%23feffbc">
    <img alt="Git Badge" src="https://img.shields.io/badge/GIT-black?style=for-the-badge&logo=git&logoColor=black&labelColor=%23feffbc">
    <img alt="Github Badge" src="https://img.shields.io/badge/Github-black?style=for-the-badge&logo=github&logoColor=black&labelColor=%23feffbc">
    </div>
  <div align="center">
    <img align="center" alt="" height="200px" width="200px" src="imagens/favcon.png">
  </div>
 <div align="center">
  https://neto-furiachatbot.netlify.app
  </div>
  
  <img align="center" alt="" height="400px" width="900" src="imagens/furia-banner.gif">

## 1. Introdução

Se liga, torcedor! O Juba é o nosso chatbot oficial, feito de fã para fã, com a pegada e a paixão que só a comunidade Fúria tem. Esse projeto nasceu com a ideia de ser mais do que um simples robô de conversa: queremos que ele seja seu parceiro para tirar dúvidas, te manter atualizado e até botar à prova seus conhecimentos sobre o nosso time de CS:GO.

O Juba é um teste técnico para o processo seletivo de Assistente de Engenharia de Software, mostrando que a nossa torcida também tem talento de sobra na área da tecnologia.

## 2. Funcionalidades Atuais

Por enquanto, o Juba já tá dando um gás com as seguintes funcionalidades:

* **Tirar suas dúvidas sobre o time de CS:GO:** Escalação atual, histórico de jogadores, informações sobre campeonatos passados e futuros.
* **Ficar por dentro das últimas notícias e resultados:** Receba em primeira mão as novidades do mundo Fúria, resultados de partidas e anúncios importantes.
* **Descobrir informações sobre a organização Furia:** Conheça mais sobre a história da organização, seus valores e outras modalidades além do CS:GO.
* **Guia de Navegação na Landing Page:** Se você se perder no site, o Juba te dá um help para encontrar o que procura.
* **Quiz de Conhecimento (4 Níveis):** Mostre que você é um verdadeiro INSIDER e teste seus conhecimentos sobre a Fúria com nosso quiz em diferentes níveis de dificuldade.

## 3. Roadmap de Desenvolvimento (Próximos Passos)

Ainda temos muito GG para dar! Nosso plano é evoluir o Juba com as seguintes features:

* **Integração com outras plataformas:** Levar o Juba para o Discord, Twitch e outras redes onde a torcida marca presença.
* **Alertas personalizados:** Configure alertas para partidas, notícias e seus jogadores favoritos.
* **Análise de partidas:** Informações básicas sobre o desempenho do time em jogos recentes.
* **Interação com a Loja Oficial:** Consultar produtos, disponibilidade e até ajudar no processo de compra.
* **Novos Quizzes e Desafios:** Manter a galera engajada com conteúdos interativos e atualizados.
* **Reconhecimento de voz e comandos mais complexos:** Tornar a interação ainda mais fluida e natural.

## 4. Arquitetura do Projeto

A estrutura do projeto está organizada da seguinte forma:

A estrutura do projeto está organizada da seguinte forma:

* `juba-chatbot/`
    * `README.md` - (Este arquivo)
    * `imagens/` - (Diretório contendo as imagens do projeto)
        * `Icones/` - (Ícones utilizados no site)
            * `Brancos/` - (Ícones brancos)
            * `Pretos/` - (Ícones pretos)
        * `jogadores/` - (Fotos dos jogadores, reservas e coach)
        * `Loja/` - (Imagens de produtos da loja)
        * `Noticias/` - (Imagens de notícias)
        * `Prints/` - (Screenshots do chatbot)
        * `SobreNos/` - (Imagens da seção Sobre Nós)
        * `favcon.png` - (Favicon do site)
        * `logo-furia.svg` - (Logo da Fúria)
    * `js/` - (Diretório contendo os arquivos JavaScript)
        * `loja.js` - (Lógica específica da seção da loja)
        * `main.js` - (Lógica principal do site e funcionalidades gerais)
        * `noticias.js` - (Lógica específica da seção de notícias)
        * `prints.js` - (Lógica específica do carrossel de prints do chatbot)
        * `scroll.js` - (Lógica relacionada à rolagem suave da navegação)
        * `sobreNos.js` - (Lógica específica da seção Sobre Nós)
    * `Styles/` - (Diretório contendo os arquivos de estilo CSS)
        * `main.css` - (Estilos gerais do site)
        * `chatbot.css` - (Estilos específicos da seção do chatbot)
        * `elenco.css` - (Estilos específicos da seção do elenco)
        * `loja.css` - (Estilos específicos da seção da loja)
        * `noticias.css` - (Estilos específicos da seção de notícias)
        * `sobreNos.css` - (Estilos específicos da seção Sobre Nós)
        * `footer.css` - (Estilos do rodapé)
        * `header.css` - (Estilos do cabeçalho)
    * `index.html` - (Arquivo HTML principal da Landing Page)

### 4.1. Tecnologias Utilizadas

* `**HTML:**` Estrutura da página web.
* `**CSS:**` Estilização visual da página (incluindo responsividade).
* `**JavaScript:**` Lógica interativa do chatbot e funcionalidades dinâmicas.
* `**Chatling.ai (Widget):`** Plataforma utilizada para incorporar o widget de chatbot na página.

### 4.2. Componentes Principais do Chatbot (Lado Cliente - Front-end)

* **`index.html`:** Contém a estrutura da seção do chatbot (`.welcome-area`, `.project-section`, `.chatbot-screenshots`, `.chatbot-widget`).
* **`Styles/chatbot.css`:** Define a aparência visual da seção do chatbot, incluindo o layout da descrição, carrossel de screenshots e o widget do Chatling.ai.
* **`js/main.js`:** Lida com a lógica do carrossel de screenshots, a rolagem suave da navegação e, potencialmente, outras interações futuras com o chatbot (além do widget em si).
* **`Widget Chatling.ai`:** O iframe incorporado que renderiza a interface de conversação do chatbot fornecido pela plataforma Chatling.ai. A configuração básica do chatbot (ID) é feita diretamente no HTML.

## 5. Contato

Dúvidas, sugestões ou feedback sobre o Juba? Manda um salve para `joaobatistarn.05@gmail.com`

**\#GoFuria \#JubaBot \#FeitoDeFãParaFã**
