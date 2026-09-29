export type HeroVariant = {
  kicker: string
  title: string
  description: string
  cta: string
}

export const checkoutUrl = 'https://pay.hotmart.com/S107483590M?bid=1789599580879'

export const heroVariants: Record<'a1' | 'a2' | 'a3', HeroVariant> = {
  a1: {
    kicker: 'WORKSHOP AO VIVO PARA TPDs EM FORMAÇÃO FINAL, RECÉM-FORMADOS E TÉCNICOS EM TRANSIÇÃO',
    title: 'Você não precisa aprender tudo agora. Precisa saber qual é o seu próximo passo na prótese.',
    description:
      'Em 2h30 ao vivo, Cleiton Prata conduz você pelo Método R.O.T.A para localizar seu estágio, entender como cerâmica e fluxo digital se conectam e sair com uma prioridade prática para os próximos 30 dias.',
    cta: 'QUERO DEFINIR MEU PRÓXIMO PASSO — R$ 47',
  },
  a2: {
    kicker: 'WORKSHOP AO VIVO • CERÂMICA E FLUXO DIGITAL',
    title: 'Cerâmica ou digital? Talvez a pergunta esteja separando duas partes do mesmo trabalho.',
    description:
      'Veja como o fluxo pode sair do desenho 3D, passar pela impressão e adaptação e chegar a uma peça final em cerâmica — e use o Método R.O.T.A para decidir qual competência você precisa desenvolver primeiro.',
    cta: 'QUERO ENXERGAR O FLUXO COMPLETO — R$ 47',
  },
  a3: {
    kicker: 'WORKSHOP AO VIVO • PRÓXIMA AÇÃO PROFISSIONAL',
    title: 'Se você está esperando alguém abrir espaço para você avançar, comece definindo o que consegue praticar agora.',
    description:
      'Em vez de depender de mais uma oportunidade aparecer no laboratório, organize sua realidade, escolha uma prioridade e monte um plano de 30 dias para construir a próxima competência de forma intencional.',
    cta: 'QUERO SAIR DA ESPERA COM UM PLANO — R$ 47',
  },
}

export const sharedCopy = {
  identity: {
    title: 'Workshop Seu Próximo Passo na Prótese',
    details: 'Método R.O.T.A • Cerâmica integrada ao digital • Plano de 30 dias',
    meta: 'Entrada: R$ 47 • Ao vivo • 2h30 • Replay por 72 horas',
  },
  process:
    'Durante a aula: desenho 3D → impressão → adaptação na bancada → caso finalizado em cerâmica.',
  problem: {
    title: 'O problema não é falta de conteúdo',
    paragraphs: [
      'Você pode ter feito curso, acompanhado profissionais, salvo dezenas de vídeos e até trabalhar todos os dias em laboratório. Mesmo assim, uma pergunta continua aberta: o que eu deveria desenvolver primeiro para realmente avançar?',
      'Cerâmica? Desenho 3D? Impressão? Fresagem? Mais um curso? Um equipamento? Esperar alguém no laboratório abrir espaço?',
      'Quando tudo parece importante ao mesmo tempo, o risco é transformar evolução em acúmulo: mais conteúdo, mais materiais e mais decisões sem sequência.',
    ],
    principle:
      'Direção vem antes de volume: primeiro você escolhe a próxima competência; depois decide o que estudar, praticar e comprar.',
  },
  method: {
    title: 'O Método R.O.T.A',
    description:
      'O workshop organiza a decisão em quatro perguntas simples. Não é uma promessa de dominar cerâmica ou digital em poucas horas. É um processo para transformar dúvida em uma próxima ação observável.',
    steps: [
      {
        code: 'R',
        title: 'R — Realidade',
        text: 'Onde você está hoje: formação, rotina, acesso à prática, experiência e recursos.',
      },
      {
        code: 'O',
        title: 'O — Objetivo',
        text: 'Qual competência faz sentido priorizar agora, sem tentar abraçar todas as frentes.',
      },
      {
        code: 'T',
        title: 'T — Trajetória',
        text: 'Como essa prioridade se encaixa no caminho entre cerâmica, desenho digital, produção e acabamento.',
      },
      {
        code: 'A',
        title: 'A — Ação',
        text: 'O que fazer nas próximas semanas para sair da intenção e entrar em prática deliberada.',
      },
    ],
    note:
      'O mapa das etapas serve para orientar sequência. Ele não substitui formação técnica, prática de bancada ou experiência profissional.',
  },
  schedule: {
    title: 'O que acontece nas 2h30',
    blocks: [
      {
        title: 'Bloco 1 — Realidade + Objetivo',
        items: [
          'Localizar seu estágio atual sem comparar sua carreira com a de quem já está anos à frente.',
          'Separar interesse de prioridade: aquilo que parece atraente não é necessariamente o que precisa vir primeiro.',
          'Escolher uma competência principal para o próximo ciclo de desenvolvimento.',
        ],
      },
      {
        title: 'Bloco 2 — Trajetória: da tela à peça',
        items: [
          'Entender por que cerâmica e digital não precisam ser tratados como carreiras rivais.',
          'Acompanhar a montagem de um caso simples em desenho 3D.',
          'Ver o mesmo caso seguir para impressão e adaptação na bancada.',
          'Fechar o raciocínio com um caso finalizado em cerâmica que nasceu de um desenho digital.',
        ],
      },
      {
        title: 'Bloco 3 — Ação: próximos 30 dias',
        items: [
          'Definir uma ação semanal coerente com sua prioridade.',
          'Decidir o que estudar agora e o que pode esperar.',
          'Evitar compras por impulso antes de entender a função de cada material, curso ou equipamento na sua rota.',
        ],
      },
    ],
    cta: 'QUERO PARTICIPAR DO WORKSHOP AO VIVO',
  },
  fit: {
    title: 'Para quem é',
    items: [
      'Quem está no fim da formação ou acabou de se formar e ainda não enxerga uma sequência clara.',
      'TPDs que já trabalham em funções básicas ou com resina e querem avançar para cerâmica e/ou fluxo digital.',
      'Profissionais que acompanham CAD/CAM, impressão e fresagem, mas ainda não sabem o que priorizar.',
      'Quem quer tomar uma decisão mais consciente antes de investir em novos cursos, materiais ou equipamentos.',
    ],
  },
  notFit: {
    title: 'Para quem não é',
    items: [
      'Quem procura uma formação completa em cerâmica ou desenho 3D dentro de uma única aula.',
      'Quem espera promessa de emprego, aumento de renda, contratação ou resultado garantido.',
      'Quem quer uma lista universal de equipamentos sem considerar estágio, objetivo e estrutura de trabalho.',
      'Quem não pretende colocar nenhuma ação em prática depois do workshop.',
    ],
  },
  authority: {
    title: 'Por que aprender com Cleiton Prata',
    paragraphs: [
      'Cleiton reúne 20 anos de profissão com prática de bancada em cerâmica e experiência no fluxo digital. No dia a dia, trabalha com desenho 3D e acompanha o caminho que vai do planejamento digital à produção e à adaptação.',
      'O ponto central da aula não é exibir uma peça bonita isolada. É mostrar a lógica do processo: como decisões digitais e execução de bancada precisam conversar para chegar a um trabalho final coerente.',
    ],
    proof:
      'A prova principal do workshop é o processo demonstrado ao vivo: tela, impressão, bancada e peça final.',
  },
  offer: {
    title: 'Sua inscrição',
    countdown: {
      label: 'Tempo restante',
      expired: 'Prazo encerrado',
      units: ['Dias', 'Horas', 'Minutos', 'Segundos'],
    },
    lots: [
      ['Lote 1', 'R$ 47'],
      ['Lote 2', 'R$ 97'],
      ['Lote 3', 'R$ 147'],
    ],
    rows: [
      ['Workshop', 'Seu Próximo Passo na Prótese'],
      ['Formato', 'Ao vivo, em grupo'],
      ['Duração', '2h30'],
      ['Método', 'R.O.T.A — Realidade, Objetivo, Trajetória e Ação'],
      ['Demonstração', 'Desenho 3D → impressão → adaptação → caso final em cerâmica'],
      ['Replay', 'Disponível por 72 horas'],
      ['Investimento', 'R$ 47'],
    ],
    cta: 'GARANTIR MINHA INSCRIÇÃO — R$ 47',
    note:
      'Não há promessa de emprego, renda, domínio completo de técnica ou execução sem erro. O resultado do workshop é direção, priorização e um plano inicial de ação.',
  },
  faq: {
    title: 'Perguntas frequentes',
    items: [
      ['Preciso já trabalhar como TPD?', 'Não. O workshop foi pensado para quem está em formação final, recém-formado ou já atua e quer organizar a próxima etapa.'],
      ['Vou aprender desenho 3D do zero?', 'Você verá uma demonstração prática de um caso simples e como o desenho entra no fluxo. O workshop não substitui um curso completo de desenho 3D.'],
      ['A aula é só sobre digital?', 'Não. A proposta é justamente mostrar a conexão entre o digital e a execução de bancada, com foco em cerâmica.'],
      ['Preciso ter impressora ou fresadora?', 'Não. A aula ajuda a entender a função das etapas antes de transformar equipamento em ponto de partida.'],
      ['Tem replay?', 'Sim. O replay do workshop ficará disponível por 72 horas.'],
      ['Quanto custa?', 'A inscrição no workshop custa R$ 47.'],
      ['O workshop garante emprego ou aumento de renda?', 'Não. Esses resultados dependem de fatores que nenhuma aula controla. O workshop ajuda a organizar competências e próximos passos.'],
      ['Vai haver oferta de outro curso?', 'Ao final, quem quiser aprofundar o estudo poderá conhecer o DNA Direto no Alvo, um curso gravado e sem mentoria, oferecido separadamente por R$ 1.497. A compra do DNA é opcional.'],
      ['O DNA inclui acompanhamento individual?', 'Não. O DNA é um curso gravado. Mentoria e acompanhamento, quando oferecidos, são produtos separados e não fazem parte do DNA.'],
    ],
  },
  complements: {
    title: 'Checkout — complementos opcionais',
    description: 'Os itens abaixo são ofertas adicionais e não são necessários para participar do workshop.',
    items: [
      ['Matriz da Próxima Competência', 'Ferramenta para comparar interesse, acesso à prática, custo e impacto profissional antes de escolher uma especialidade.  + R$ 19'],
      ['Agenda de Prática por 30 Dias', 'Roteiro semanal para encaixar estudo e exercício na rotina sem tentar aprender várias áreas ao mesmo tempo.  + R$ 27'],
      ['Checklist do Que Não Comprar Agora', 'Critérios para evitar investimento em material, equipamento ou curso antes de compreender sua função na rota escolhida.  + R$ 17'],
    ],
  },
  closing: {
    title: 'Fechamento',
    paragraphs: [
      'Você não precisa decidir hoje como será toda a sua carreira. Precisa identificar qual competência merece sua atenção agora e qual ação cabe na sua realidade.',
      'No Workshop Seu Próximo Passo na Prótese, a proposta é fazer essa decisão diante de um fluxo real — do desenho digital à peça em cerâmica — e sair com um caminho mais claro para os próximos 30 dias.',
    ],
    cta: 'QUERO DEFINIR MEU PRÓXIMO PASSO — R$ 47',
  },
}
