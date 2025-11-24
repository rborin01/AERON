# 🎵 BLUEPRINT COMPLETO - SITE AERON GENESIS
## Documentação Técnica Detalhada - Novembro 2025

---

## 📋 ÍNDICE
1. [Visão Geral](#visão-geral)
2. [Arquitetura Técnica](#arquitetura-técnica)
3. [Estado Atual Completo](#estado-atual-completo)
4. [Estrutura de Arquivos](#estrutura-de-arquivos)
5. [Funcionalidades Implementadas](#funcionalidades-implementadas)
6. [Formulários e Backend](#formulários-e-backend)
7. [SEO e Performance](#seo-e-performance)
8. [Próximos Passos](#próximos-passos)
9. [Instruções para IA](#instruções-para-ia)

---

## 🎯 VISÃO GERAL

### Informações do Projeto
- **Nome:** AERON Genesis - Site Oficial
- **URL Produção:** https://aeronoficial.com
- **URL GitHub Pages:** https://rborin01.github.io/AERON/
- **Repositório:** https://github.com/rborin01/AERON
- **Domínio:** aeronoficial.com (Namecheap)
- **Hospedagem:** GitHub Pages (GRÁTIS)
- **SSL/HTTPS:** ✅ Ativo (Let's Encrypt via GitHub)
- **Data de Lançamento:** 19 de Novembro de 2025

### Objetivo do Site
Site oficial do projeto musical AERON - Álbum "Genesis", focado em Neuro-Trance aplicado a flow states e performance. O site promove o álbum de 11 faixas, captura leads (newsletter), fornece press kit para promoters/DJs, e facilita contato para bookings.

### Público-Alvo
1. Empreendedores e executivos que buscam música para flow state
2. Atletas de alta performance
3. Criadores e artistas
4. DJs e promoters de eventos
5. Imprensa especializada em música eletrônica

---

## 🏗️ ARQUITETURA TÉCNICA

### Stack Tecnológico
```
Frontend:
- HTML5 (index.html - arquivo único de 1,124 linhas)
- CSS3 inline + embedded (dentro do <style>)
- JavaScript vanilla (inline no HTML)
- Sem frameworks (pure HTML/CSS/JS)

Hospedagem:
- GitHub Pages (branch: main)
- Servidor: GitHub CDN
- Deploy: Automático via git push

DNS/Domínio:
- Registrador: Namecheap
- Nameservers: Namecheap BasicDNS
- Records:
  * 4x A Records (@) → IPs do GitHub Pages
  * 1x CNAME (www) → rborin01.github.io

Formulários:
- FormSubmit.co (50 envios/mês grátis)
- Destino: rborin01@gmail.com
- Sem backend próprio (stateless)
```

### Configuração DNS Detalhada
```
Type: A Record
Host: @
Values:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
TTL: Automatic

Type: CNAME Record
Host: www
Value: rborin01.github.io
TTL: Automatic
```

### Arquivo CNAME (GitHub Pages)
```
aeronoficial.com
```

---

## ✅ ESTADO ATUAL COMPLETO

### Seções do Site (em ordem)

#### 1. HEADER (Fixo)
- **Logo AERON** (clicável, volta ao topo)
- **Navegação:** 8 links
  - SOBRE (#about)
  - OUÇA (#spotify-player)
  - FAIXAS (#tracks)
  - SOCIAL (#social)
  - PRESS KIT (#epk)
  - NEWSLETTER (#newsletter)
  - CONTATO (#contact)
  - SPOTIFY (link externo - laranja/dourado)
- **Seletor de idioma:** PT/EN (botões no canto direito)

#### 2. HERO SECTION
- **Logo AERON** gigante (transparente, sem fundo)
- **Título:** GENESIS (fonte Teko, 10rem, gradiente dourado)
- **Subtítulo:** "UM DOS PIONEIROS DO NEURO-TRANCE"
- **Descrição:** Texto sobre o álbum projetado para flow states
- **CTA Principal:** "▶ OUÇA NO SPOTIFY" (botão laranja/dourado)
- **Imagem de fundo:** Genesis (com parallax effect)

#### 3. SOBRE GENESIS (#about)
- **Título:** SOBRE GENESIS
- **Conteúdo:** 
  - Foco no álbum (não no artista)
  - 11 capítulos de evolução sônica
  - Neuro-Trance: fusão de melodic trance + neuroscience
  - BPM 122-126 (flow state optimized)
  - 8 Hz Beta waves para foco e criatividade
- **Fundo:** Gradiente escuro

#### 4. SPOTIFY PLAYER (#spotify-player)
- **Título:** OUÇA GENESIS COMPLETO
- **Descrição:** Jornada completa de 11 capítulos
- **Embed:** Spotify Player (iframe responsivo)
- **Dimensões:** 900px width, 450px height

#### 5. GENESIS: 11 CAPÍTULOS (#tracks)
- **Título:** GENESIS: 11 CAPÍTULOS
- **Layout:** Grid responsivo (3 colunas desktop, 1 mobile)
- **Cada faixa contém:**
  - Capa (imagem PNG sem fundo)
  - Número do capítulo (ex: "Capítulo 1")
  - Nome da faixa (ex: "Spark the Fire")
  - Descrição poética (ex: "Acenda o fogo interior")
  - Link para Spotify (track individual)

**Lista completa das 11 faixas:**
1. Spark the Fire - Acenda o fogo interior
2. Rising Tides - A maré da transformação
3. Ignite the Mind - Desperte sua mente
4. Pulse of Power - O pulso da força
5. Flow State - O estado de fluxo perfeito
6. Synaptic Fire - Conexões neurais em chamas
7. Neural Pathways - Caminhos para o infinito
8. Peak Performance - Performance no auge
9. Echoes of the Sky - Ecos da conquista
10. Eternal Pulse - O batimento eterno
11. Eternal Ascent - Transcendência final

#### 6. CONECTE-SE (#social)
- **Título:** CONECTE-SE
- **Descrição:** "Siga a jornada do AERON"
- **Links:**
  - 📸 Instagram (@aeron_oficial)
  - 🎵 Spotify (álbum Genesis)
- **Estilo:** Botões grandes com bordas, fundo transparente

#### 7. PRESS KIT (#epk)
- **Título:** PRESS KIT
- **Descrição:** "Materiais profissionais para imprensa, promoters e mídia"
- **3 Cards:**
  1. **📄 Bio**
     - Biografia completa para press releases
     - Botão: "📥 BAIXAR" (AERON-Bio.txt)
  2. **📸 Photos**
     - Fotos de alta resolução
     - Botão: "📥 BAIXAR" (AERON GENESIS.png)
  3. **🎨 Logos**
     - Logos AERON & GENESIS em alta qualidade
     - 2 Botões: "AERON" + "GENESIS"

#### 8. NEWSLETTER (#newsletter)
- **Título:** NEWSLETTER
- **Descrição:** "Receba novidades exclusivas, lançamentos e acesso VIP"
- **Formulário:**
  - Campo: Email (required)
  - Botão: "INSCREVER"
  - Action: FormSubmit.co
  - Destino: rborin01@gmail.com
  - Hidden fields:
    * _subject: "Nova inscrição Newsletter AERON"
    * _captcha: false
    * _next: https://aeronoficial.com/#newsletter

#### 9. CONTATO (#contact)
- **Título:** CONTATO
- **Descrição:** "Bookings, Press, Collaborations & General Inquiries"
- **Formulário:**
  - Campo: Nome/Name (text, required)
  - Campo: Email (email, required)
  - Campo: Assunto/Subject (select dropdown, required)
    * Booking
    * Press / Media
    * Collaboration
    * General Inquiry
  - Campo: Mensagem/Message (textarea, required, 6 rows)
  - Botão: "ENVIAR MENSAGEM"
  - Action: FormSubmit.co
  - Destino: rborin01@gmail.com
  - Hidden fields:
    * _subject: "Contato AERON - Booking/Press"
    * _captcha: false
    * _next: https://aeronoficial.com/#contact

#### 10. FOOTER
- **Conteúdo:** © 2025 AERON. All rights reserved.
- **Estilo:** Texto centralizado, fundo escuro

---

## 📁 ESTRUTURA DE ARQUIVOS

### Repositório GitHub: rborin01/AERON

```
/
├── index.html (1,124 linhas - ARQUIVO PRINCIPAL)
├── CNAME (1 linha: aeronoficial.com)
├── sitemap.xml (40 linhas - SEO)
├── robots.txt (25 linhas - SEO)
├── success.html (88 linhas - página de sucesso formulários)
│
├── /images (Capas e assets)
│   ├── AERON.png (Logo principal)
│   ├── GENESIS.png (Logo Genesis)
│   ├── AERON GENESIS.png (Capa completa)
│   ├── Genesis.png (Imagem de fundo hero)
│   ├── Spark_the_Fire.png (Capa faixa 1)
│   ├── Rising_Tides.png (Capa faixa 2)
│   ├── Ignite_the_Mind.png (Capa faixa 3)
│   ├── Pulse_of_Power.png (Capa faixa 4)
│   ├── Flow_State.png (Capa faixa 5)
│   ├── Synaptic_Fire.png (Capa faixa 6)
│   ├── Neural_Pathways.png (Capa faixa 7)
│   ├── Peak_Performance.png (Capa faixa 8)
│   ├── Echoes_of_the_Sky.png (Capa faixa 9)
│   ├── Eternal_Pulse.png (Capa faixa 10)
│   └── Eternal_Ascent.png (Capa faixa 11)
│
└── /press-kit (Arquivos para download)
    ├── AERON-Bio.txt
    ├── AERON.png (logo)
    └── GENESIS.png (logo)
```

---

## 🎨 DESIGN SYSTEM

### Paleta de Cores
```css
:root {
    --primary: #FF6B35;     /* Laranja vibrante */
    --gold: #FFD700;        /* Dourado */
    --dark: #0a0a0f;        /* Fundo escuro principal */
    --dark-blue: #0f1419;   /* Azul escuro secundário */
    --cyan: #00d9ff;        /* Cyan (pouco usado) */
    --light: rgba(255, 255, 255, 0.8); /* Texto claro */
}
```

### Tipografia
```css
Fontes Google:
- Teko: Títulos principais (font-weight: 700, 900)
- Rajdhani: Textos secundários (font-weight: 300, 400, 600)

Hierarquia:
- H1 (GENESIS): 10rem (clamp: 4rem - 10rem)
- H2 (Section titles): 3-4rem (Teko, uppercase)
- Body: 1rem-1.2rem (Rajdhani)
- Nav links: 0.9rem (Rajdhani, uppercase)
```

### Efeitos Visuais
```css
Parallax:
- Hero background: translateZ(-1px) scale(1.5)

Gradientes:
- Botões CTA: linear-gradient(135deg, #FF6B35, #FFD700)
- Títulos: linear-gradient(135deg, #FFD700, #FF6B35)
- Text shadow nos títulos: 0 0 30px rgba(255, 215, 0, 0.8)

Transições:
- Links: transform 0.3s ease
- Botões: all 0.3s ease
- Cards: transform 0.3s ease (hover: scale 1.05)

Sombras:
- Cards: 0 10px 30px rgba(0, 0, 0, 0.3)
- Hover: 0 15px 40px rgba(255, 107, 53, 0.4)
```

### Responsividade
```css
Breakpoints:
- Mobile: max-width: 768px
  * Grid: 1 coluna
  * Font-size reduzido (clamp)
  * Header: layout vertical
  * Padding reduzido

- Desktop: min-width: 769px
  * Grid: 3 colunas (tracks)
  * Header: layout horizontal
  * Parallax ativo
```

---

## ⚙️ FUNCIONALIDADES IMPLEMENTADAS

### 1. Navegação
```javascript
Funcionalidade:
- Smooth scroll para âncoras (#about, #tracks, etc)
- Header fixo (position: fixed, z-index: 1000)
- Logo clicável (href="#" - volta ao topo)
- Hover effects em links
- Active state visual

Comportamento:
- Scroll suave com CSS: scroll-behavior: smooth
- Destacar link ativo ao rolar página (futuro: implementar)
```

### 2. Seletor de Idioma (PT/EN)
```javascript
Localização: Header direito
Idiomas: Português (PT) / English (EN)

Funcionamento:
- Botões togglam classes .lang-content
- Classe .active controla visibilidade
- Textos duplicados em HTML (um PT, um EN)

Estado atual:
- PT ativo por padrão
- ⚠️ ATENÇÃO IA: JavaScript de troca de idioma está INLINE no HTML
  Localização: final do <body>, antes de </body>
  
Código atual (NÃO MODIFICAR SEM REVISAR):
```
<parameter name="description">Criar blueprint completo do site AERON