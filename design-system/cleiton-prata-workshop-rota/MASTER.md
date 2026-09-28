# Sistema visual do Workshop Seu Próximo Passo na Prótese

## Conceito

Da tela à peça. A página traduz a passagem entre desenho digital, impressão, bancada e cerâmica por meio de superfícies técnicas, linhas de percurso e fotografias reais do trabalho.

## Paleta

- Ink `#0B0D0F`: fundo principal e CTA.
- Graphite `#262B30`: superfícies técnicas.
- Steel `#737B82`: texto secundário e marcadores.
- Porcelain `#F3F3F1`: fundo claro.
- White `#FFFFFF`: alto contraste e CTA em fundo escuro.
- Signal `#DCE6E9`: superfície fria da oferta.
- Border `#D7D9D7`: divisores em fundo claro.

O azul sugerido pela busca foi rejeitado porque os materiais do cliente definem preto, cinza e branco. A paleta final usa a própria aparência do laboratório e da cerâmica.

## Tipografia

- Títulos: Manrope, 700 a 800.
- Texto: DM Sans, 400 a 600.
- Hero desktop: 50 a 84 px.
- Hero mobile: 41 a 58 px.
- Títulos de seção: 35 a 77 px.
- Texto corrido: 17 a 20 px, com largura confortável.

## Composição

- Container máximo de 1200 px e margens fluidas.
- Seções claras e escuras alternadas para criar ritmo.
- Cantos quase retos e bordas finas, sem estética genérica de cards arredondados.
- Fotografias reais do cliente, da bancada e dos trabalhos como evidência visual.
- Mapa R.O.T.A horizontal no desktop e vertical no celular, com marcadores ancorados ao traço.

## Movimento

- Entrada coordenada da hero para hierarquia.
- Revelações por seção para continuidade.
- Feixe de leitura na foto principal para representar a passagem da tela à peça.
- Feedback de CTA em 120 a 180 ms.
- Transform e opacity como propriedades principais.
- Curva de entrada `cubic-bezier(0.23, 1, 0.32, 1)`.
- Respeitar `prefers-reduced-motion` e pausar o feixe fora da tela.

## Acessibilidade e responsividade

- Contraste mínimo de 4.5:1 em texto normal.
- Foco visível, elementos semânticos e alvos de pelo menos 44 px quando possível.
- Sem dependência de hover ou movimento para compreender conteúdo.
- Imagens com dimensões reservadas e texto alternativo útil.
- Composição validada para celular, tablet, notebook e desktop.

## Decisões rejeitadas da busca inicial

- Não usar depoimentos ou antes e depois porque a copy final não os aprovou.
- Não usar carrossel de pacientes.
- Não usar GSAP: CSS e IntersectionObserver cobrem o movimento com menor custo.
- Não criar conteúdo ou seções para preencher um padrão genérico.
