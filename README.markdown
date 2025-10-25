```markdown
# Passadores de Semestre — Site Front-end

Este repositório contém a Entrega I do projeto da disciplina de Desenvolvimento Front-end do UDF, focado na criação de uma plataforma web para ONGs, com ênfase em semântica HTML5, acessibilidade (WCAG 2.1), responsividade e desempenho.

## Estrutura do Projeto

```
passadores-de-semestre/
├── css/
│   └── styles.css           # Estilização unificada do site
├── js/
│   └── scripts.js           # Máscaras de formulário e funcionalidade do modal
├── assets/
│   └── img/
│       ├── ong.jpg         # Imagem da ONG (400px, ~100KB)
│       ├── contato.jpg     # Imagem de contato (400px, ~100KB)
│       ├── projeto1.jpg    # Imagem do projeto Oficinas de Leitura (300px, ~80KB)
│       ├── projeto2.jpg    # Imagem do projeto Materiais para Estudantes (300px, ~80KB)
│       ├── projeto3.jpg    # Imagem do projeto Fundo de Emergência (300px, ~80KB)
│       ├── voluntario.jpg  # Imagem de voluntários (400px, ~100KB)
│       ├── doacao.jpg      # Imagem de doações (400px, ~100KB)
├── index.html              # Página inicial
├── projetos.html           # Página de projetos
├── cadastro.html           # Página de cadastro
├── capitacao.html          # Página de captação de recursos
└── README.md               # Documentação
```

## Como Configurar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/MaiconDS28/passadores-de-semestre.git
   ```

2. **Adicione imagens**:
   - Baixe imagens livres de direitos autorais de sites como [Unsplash](https://unsplash.com) ou [Pexels](https://pexels.com).
   - Otimize com [TinyPNG](https://tinypng.com) ou [Squoosh](https://squoosh.app), mantendo dimensões e tamanhos indicados (~80-100KB).
   - Coloque na pasta `assets/img` com os nomes especificados.

3. **Validação**:
   - Valide os arquivos HTML no [W3C Validator](https://validator.w3.org).
   - Teste a responsividade em diferentes dispositivos (mobile, tablet, desktop).

4. **Acesse**:
   - Abra `index.html` em um navegador ou use um servidor local (ex.: `npx serve`).

## Funcionalidades

- **Semântica HTML5**: Uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Acessibilidade**: Conformidade com WCAG 2.1 nível AA (skip-link, atributos ARIA, navegação por teclado, contraste).
- **Responsividade**: Design mobile-first com CSS Grid e media queries (640px, 700px, 880px).
- **Formulários**:
  - Cadastro com validação nativa HTML5 e máscaras JavaScript para CPF, telefone e CEP.
  - Campo extra de interesse (voluntário/doador).
- **Captação de Recursos**:
  - Página com campanhas, progresso em tempo real (elemento `<progress>`).
  - Pop-up de doação com formulário (nome, email, valor) e chave Pix (8c651631-ea65-4aa8-ad11-88113d6b60c5).
- **Desempenho**: Imagens otimizadas com `loading="lazy"` para carregamento <5s.
- **SEO**: Meta tags (`description`, `keywords`) em todas as páginas.

## Notas

- O repositório deve permanecer público para avaliação.
- As imagens devem ser otimizadas para garantir desempenho.
- Os formulários são simulados (exibem alertas ao invés de envios reais).
- O arquivo `capitacao.js` foi integrado ao `scripts.js` para simplificação.

© 2025 Passadores de Semestre
```