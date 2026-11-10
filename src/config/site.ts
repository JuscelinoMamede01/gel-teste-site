/**
 * ============================================================================
 *  CONFIGURAÇÃO DO SITE: O Manual da Fertilidade
 * ============================================================================
 *
 *  Este é o ÚNICO arquivo que você precisa editar para mudar textos, preço,
 *  link de compra, dados do autor, casos e perguntas frequentes.
 *
 *  Regras rápidas:
 *  - Tudo que estiver como "[PREENCHER]" precisa ser preenchido antes de publicar.
 *  - Campos marcados como (opcional) podem ficar vazios (""), e aí não aparecem.
 *  - Mantenha as aspas e as vírgulas no fim de cada linha.
 *  - Publicidade médica (CFM): não prometa cura, gravidez ou resultado.
 *    Não use nome, foto ou qualquer dado que identifique pacientes.
 * ============================================================================
 */

export type Topico = { titulo: string; texto: string };

export type Caso = {
  /** Rótulo curto do card, ex.: "Caso 1" */
  rotulo: string;
  /** Título do caso */
  titulo: string;
  /** Perfil genérico. NUNCA use nome, cidade ou detalhe que identifique o paciente. */
  perfil: string;
  /** Tema do caso, ex.: "Mioma uterino" (opcional, "" = não exibe) */
  tema: string;
  /** A situação inicial */
  situacao: string;
  /** O que aconteceu */
  oQueAconteceu: string;
  /** O que o caso ensina. Sem prometer resultado. */
  aprendizado: string;
};

export type Pergunta = { pergunta: string; resposta: string };

export const site = {
  // --------------------------------------------------------------------------
  // LINK DE COMPRA (KIWIFY)
  // Copie o link do checkout no painel da Kiwify (Produtos > seu produto >
  // Links). Enquanto contiver "SEU-CODIGO" ou "[PREENCHER]", os botões NÃO
  // levam ao checkout: só rolam até a seção de oferta e avisam no console.
  // --------------------------------------------------------------------------
  checkoutUrl: "https://pay.kiwify.com.br/ryVUKnL",

  // --------------------------------------------------------------------------
  // PREÇO
  // --------------------------------------------------------------------------
  preco: "R$ 39,90",
  precoParcelado: "", // (opcional) ex.: "ou em até 12x de R$ 4,12 no cartão". Use o valor exato mostrado no checkout da Kiwify. Vazio = não exibe.
  precoAntigo: "", // (opcional) ex.: "R$ 97,00". Vazio = não exibe. Só use se o preço antigo for real.

  // --------------------------------------------------------------------------
  // AUTOR
  // ⚠️ O nome do autor é um pseudônimo. NÃO atribua a ele credenciais que ele
  // não tem: sem "Dr.", sem "Médico", sem CRM, sem "consultório" ou "pacientes".
  // Apresentar alguém como médico sem ser é publicidade enganosa (CDC) e pode
  // configurar crime. Os campos tratamento/profissao/crm/uf/rqe/especialidade
  // só devem ser preenchidos se o autor for, de fato, médico com registro ativo.
  // --------------------------------------------------------------------------
  autor: {
    tratamento: "",
    nome: "Rodrigo Zangriane",
    profissao: "",
    crm: "",
    uf: "",
    rqe: "",
    especialidade: "",
    fotoUrl: "", // (opcional) Não use foto de outra pessoa nem rosto gerado por IA como se fosse o autor. Vazio = iniciais.
    // Bio sem credenciais: fale do livro e do propósito, não de formação ou experiência clínica.
    bio: [
      "Rodrigo Zangriane é o autor do Manual da Fertilidade. O livro reúne, em linguagem simples, informações sobre fertilidade masculina e feminina, hormônios e hábitos de vida.",
      "O objetivo é ajudar casais a entender melhor o tema e a chegar mais preparados às conversas com seus médicos.",
    ],
  },

  // --------------------------------------------------------------------------
  // CONTATO
  // --------------------------------------------------------------------------
  emailContato: "[PREENCHER]@[PREENCHER]", // ex.: "contato@manualdafertilidade.com.br"

  // --------------------------------------------------------------------------
  // SEO / COMPARTILHAMENTO (Google, WhatsApp, Instagram, Facebook)
  // --------------------------------------------------------------------------
  seo: {
    urlDoSite: "https://manualdafertilidade.com.br",
    titulo: "O Manual da Fertilidade | E-book de Rodrigo Zangriane",
    descricao:
      "E-book com informações para homens e mulheres que querem entender melhor a fertilidade do casal, incluindo quem usa ou já usou hormônios.",
  },

  // --------------------------------------------------------------------------
  // CAPA DO LIVRO (arquivo em public/capa.jpg)
  // Se a imagem real tiver outra proporção, ajuste largura e altura (em pixels).
  // --------------------------------------------------------------------------
  capa: {
    src: "/capa.jpg",
    largura: 802,
    altura: 1280,
    alt: "Capa do e-book O Manual da Fertilidade, de Rodrigo Zangriane",
  },

  // --------------------------------------------------------------------------
  // ANALYTICS (opcional). Veja src/components/Analytics.tsx e src/lib/tracking.ts.
  // --------------------------------------------------------------------------
  analytics: {
    metaPixelId: "", // ex.: "123456789012345"
    googleAnalyticsId: "", // ex.: "G-XXXXXXXXXX"
  },

  // ==========================================================================
  // TEXTOS DA PÁGINA
  // ==========================================================================

  // 1. HERO (topo da página)
  hero: {
    selo: "E-book digital",
    nomeProduto: "O Manual da Fertilidade", // aparece em verde, acima do título
    titulo: "O sonho de ter um filho merece mais do que respostas vagas.",
    subtitulo: "Um guia para melhorar a fertilidade de homens e mulheres",
    prefixoAutor: "por",
    textoBotao: "Comprar o e-book",
    linhaPagamento: "Pagamento seguro pela Kiwify. Pix, cartão ou boleto.",
  },

  // 1.1 APRESENTAÇÃO (logo abaixo do topo)
  // Use **texto** para destacar em negrito.
  apresentacao: {
    // Título visível da seção (opcional). Vazio = a seção começa direto no
    // primeiro parágrafo (a frase de abertura agora é o título do topo).
    titulo: "",
    rotuloAcessivel: "Apresentação do livro", // lido por leitores de tela quando não há título
    // O primeiro parágrafo aparece maior, como abertura.
    paragrafos: [
      "**Quando a gravidez não acontece, cada mês pode trazer uma nova esperança e, com ela, novas dúvidas, frustrações e perguntas que parecem não ter fim.**",
      "Entre exames, consultas, tentativas e conselhos contraditórios, muitos casais acabam percorrendo um caminho desgastante, sem compreender plenamente os fatores que podem influenciar sua fertilidade.",
      "**Foi pensando nessa jornada que nasceu o Manual da Fertilidade.**",
      "Um guia desenvolvido para ajudar o casal a compreender melhor a fertilidade feminina e masculina, organizar informações importantes e conhecer aspectos que merecem atenção durante a busca pela gravidez.",
    ],
    // Frase em destaque, com barra verde ao lado.
    destaque: "Porque a fertilidade não é uma questão apenas da mulher. **É uma jornada do casal.**",
    paragrafosFinais: [
      "O Manual da Fertilidade não oferece promessas milagrosas nem substitui o acompanhamento médico. Ele oferece algo fundamental para quem está tentando engravidar: **informação, clareza e orientação para tomar decisões mais conscientes.**",
    ],
    chamada:
      "**Antes de dar o próximo passo, descubra o que você precisa compreender sobre a fertilidade do casal.**",
    textoBotao: "Conheça o Manual da Fertilidade",
    // Para onde o botão leva: "#conteudo" (o que tem no livro) ou "#oferta" (preço e compra).
    destinoBotao: "#conteudo",
  },

  // 2. PARA QUEM É
  paraQuem: {
    titulo: "Para quem é este livro",
    introducao:
      "Um material educativo, em linguagem simples, para quem quer entender melhor a própria fertilidade.",
    itens: [
      "Homens e mulheres que querem cuidar da fertilidade",
      "Casais que estão tentando engravidar",
      "Pessoas que usam ou já usaram hormônios e querem entender os possíveis efeitos na fertilidade",
    ],
  },

  // 2.1 PARA QUEM USA OU JÁ USOU HORMÔNIOS
  // Use **texto** para destacar em negrito.
  hormonios: {
    rotulo: "Hormônios e anabolizantes",
    titulo: "Seu corpo mudou. Seus sonhos também.",
    paragrafos: [
      "Talvez, em algum momento da sua vida, você tenha recorrido ao uso de hormônios e anabolizantes em busca de um corpo mais forte e bem construído. Mas agora, uma nova prioridade ocupa seu coração: **o sonho de ter um filho.**",
      "Se você está preocupado com os possíveis impactos dessas escolhas sobre sua fertilidade, saiba que **existem caminhos que podem ser investigados, possibilidades de recuperação e alternativas que merecem ser conhecidas.**",
      "O **Manual da Fertilidade** também foi pensado para somar nessa jornada, oferecendo informação e orientação para que você e seu parceiro ou parceira compreendam melhor os próximos passos.",
    ],
    // Frase final, em destaque.
    fechamento:
      "Seu passado não determina, necessariamente, suas possibilidades de ser pai. **E o primeiro passo é compreender o que pode ser feito.**",
  },

  // 3. O QUE VOCÊ VAI ENCONTRAR
  // [REVISAR] Textos de rascunho. Ajuste para refletir os capítulos reais do livro.
  conteudo: {
    titulo: "O que você vai encontrar",
    introducao:
      "Informações práticas sobre fertilidade masculina e feminina, organizadas em linguagem simples.",
    topicos: [
      {
        titulo: "Fertilidade masculina",
        texto:
          "O que influencia a produção e a qualidade dos espermatozoides e quais cuidados do dia a dia merecem atenção.",
      },
      {
        titulo: "Fertilidade feminina",
        texto:
          "Ciclo menstrual, ovulação e fatores que podem interferir na fertilidade da mulher, explicados de forma clara.",
      },
      {
        titulo: "Hormônios",
        texto:
          "Como o uso de hormônios, atual ou passado, pode afetar a fertilidade, e por que conversar com um médico antes de qualquer decisão.",
      },
      {
        titulo: "Hábitos",
        texto:
          "Sono, alimentação, atividade física, álcool, cigarro e outros hábitos que fazem parte da conversa sobre fertilidade.",
      },
    ] satisfies Topico[],
  },

  // 4. CASOS
  // Casos devem ser aprovados pelo autor e totalmente anonimizados: sem nome,
  // iniciais, foto, cidade ou qualquer detalhe que permita reconhecer o paciente.
  // Não descreva resultados como garantidos.
  casos: {
    // Relatos REAIS de pessoas com quem conversamos (não são pacientes do autor,
    // que não é médico). Regras para manter esta seção:
    // - Tenha a autorização de cada pessoa para usar o relato.
    // - Nada de nome, cidade, profissão ou detalhe que identifique alguém.
    // - Não dizer que o autor atendeu/tratou ninguém.
    // - Não sugerir cura ou que o livro garante gravidez. Tratamentos sempre
    //   "indicados pelo médico que acompanhava", nunca como receita do livro.
    exibir: true,
    titulo: "Casos",
    introducao:
      "Situações reais de pessoas com quem conversamos. Elas ajudaram a dar forma ao conteúdo do livro.",
    aviso:
      "Relatos reais, apresentados sem identificação das pessoas envolvidas. Cada história é única: os resultados não representam garantia de gravidez ou de resposta a qualquer intervenção. O conteúdo do livro é educativo e não substitui avaliação médica individualizada.",
    rotuloSituacao: "A situação",
    rotuloOQueAconteceu: "O que aconteceu",
    rotuloAprendizado: "O que esse caso ensina",
    lista: [
      {
        rotulo: "Caso 1",
        titulo: "Quando o diagnóstico parecia encerrar o sonho",
        perfil: "Mulher, 32 anos",
        tema: "Mioma uterino",
        situacao:
          "Aos 32 anos, ela convivia com um mioma de grandes proporções e havia recebido avaliações médicas bastante pessimistas sobre suas chances de engravidar. O sonho da maternidade parecia cada vez mais distante.",
        oQueAconteceu:
          "Ela fez mudanças pontuais na alimentação e seguiu o tratamento indicado pelo médico que a acompanhava. Algum tempo depois, veio a notícia tão esperada: a gravidez foi confirmada.",
        aprendizado:
          "Um diagnóstico difícil merece investigação cuidadosa. Compreender as particularidades de cada situação pode revelar possibilidades que inicialmente pareciam distantes.",
      },
      {
        rotulo: "Caso 2",
        titulo: "Quando o sonho já havia custado tanto",
        perfil: "Casal, 38 e 27 anos",
        tema: "Tentativas sem sucesso",
        situacao:
          "Meses de tentativas, consultas, tratamentos e despesas crescentes. A cada novo ciclo, a esperança se renovava, mas a gravidez não chegava. O desgaste financeiro começava a se somar ao emocional.",
        oQueAconteceu:
          "O casal passou a dar atenção também à alimentação, à rotina, aos hábitos de vida e à avaliação de necessidades nutricionais, incluindo vitaminas e outras substâncias utilizadas em seu acompanhamento. Algum tempo depois, veio a notícia tão aguardada: estavam esperando um bebê.",
        aprendizado:
          "A investigação da fertilidade deve considerar o casal como um todo. Hábitos, saúde metabólica, fatores nutricionais e acompanhamento adequado podem fazer parte de uma abordagem mais abrangente.",
      },
      {
        rotulo: "Caso 3",
        titulo: "Quando o corpo não acompanhava um novo sonho",
        perfil: "Casal, 34 e 33 anos",
        tema: "Histórico de uso hormonal",
        situacao:
          "Ambos atletas, com histórico de utilização de hormônios, incluindo testosterona. Quando decidiram ter um filho, interromperam o uso, acreditando que o organismo retomaria naturalmente seu funcionamento. Mas a recuperação não aconteceu como esperavam.",
        oQueAconteceu:
          "Com acompanhamento médico, o casal buscou uma abordagem que considerasse a recuperação hormonal, a avaliação de minerais, o uso de medicamentos e o controle da ansiedade que acompanhava as tentativas. Alguns meses depois, chegou a notícia: finalmente estavam comemorando a gravidez tão desejada.",
        aprendizado:
          "Interromper o uso de hormônios nem sempre significa recuperação imediata da função reprodutiva. A avaliação individualizada e o acompanhamento especializado são fundamentais nessa jornada.",
      },
    ] satisfies Caso[],
  },

  // 5. SOBRE O AUTOR
  sobreAutor: {
    titulo: "Sobre o autor",
    rotuloRqe: "RQE",
  },

  // 6. OFERTA
  oferta: {
    // Imagem do e-book em tablet e celular (public/mockup.webp). src "" = não exibe.
    mockup: {
      src: "/mockup.webp",
      largura: 1040,
      altura: 1060,
      alt: "O e-book O Manual da Fertilidade aberto em um tablet e em um celular",
    },
    titulo: "Garanta o seu e-book",
    rotuloIncluso: "O que está incluso",
    incluso: [
      "E-book completo, com leitura na plataforma da Kiwify",
      "Leitura no celular, tablet ou computador",
      "Acesso imediato: o link de acesso chega no seu e-mail após a confirmação do pagamento",
    ],
    rotuloPreco: "Investimento",
    textoBotao: "Comprar o e-book",
    linhaPagamento: "Pagamento seguro pela Kiwify. Pix, cartão ou boleto.",
    garantiaTitulo: "Garantia de 7 dias",
    garantiaTexto:
      "Se o conteúdo não for o que você esperava, peça o reembolso em até 7 dias após a compra, diretamente pela Kiwify.",
  },

  // 7. PERGUNTAS FREQUENTES
  // Use {email} no texto para inserir o e-mail de contato automaticamente.
  faq: {
    titulo: "Perguntas frequentes",
    // Usado no lugar de {email} enquanto emailContato não estiver preenchido.
    semEmailContato: "o contato do produtor informado no e-mail de compra da Kiwify",
    perguntas: [
      {
        pergunta: "Como recebo o livro?",
        resposta:
          "Após a confirmação do pagamento, você recebe no e-mail informado na compra o acesso ao livro na plataforma da Kiwify. No Pix e no cartão a confirmação costuma ser rápida. No boleto, pode levar até 3 dias úteis.",
      },
      {
        pergunta: "O livro é físico ou digital?",
        resposta:
          "É um e-book digital. A leitura é feita pela plataforma da Kiwify, no celular, tablet ou computador. O conteúdo é protegido: não é possível baixar, imprimir ou copiar o texto.",
      },
      {
        pergunta: "O livro substitui uma consulta médica?",
        resposta:
          "Não. O conteúdo é informativo e educativo. Ele não substitui consulta, diagnóstico ou tratamento. Para avaliar o seu caso, procure um médico.",
      },
      {
        pergunta: "Como funciona a garantia?",
        resposta:
          "Você tem 7 dias após a compra para pedir o reembolso, se o conteúdo não for o que esperava. O pedido é feito diretamente pela Kiwify, pelo link que chega no e-mail de compra.",
      },
      {
        pergunta: "Não recebi o e-mail. O que faço?",
        resposta:
          "Confira as pastas de spam, lixo eletrônico e promoções, e verifique se o e-mail foi digitado corretamente na compra. Se ainda assim não encontrar, escreva para {email} informando o nome e o e-mail usados na compra.",
      },
    ] satisfies Pergunta[],
  },

  // 8. RODAPÉ
  rodape: {
    aviso: "Conteúdo informativo. Não substitui consulta, diagnóstico ou tratamento médico.",
    rotuloContato: "Contato",
    direitos: "Todos os direitos reservados.",
  },

  // 9. BARRA FIXA DE COMPRA (só no celular)
  barraMobile: {
    textoBotao: "Comprar o e-book",
  },
};

export type Site = typeof site;
