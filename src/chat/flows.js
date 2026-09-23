// Menu do assistente do site. Cada tela tem um texto e opções.
// Uma opção leva a outra tela (`next`) e pode guardar uma resposta (`set`).
// A tela final (`final`) monta a mensagem que será enviada para o WhatsApp.

const PORTE = [
  { label: 'Cachorro pequeno', set: { porte: 'Cachorro de porte pequeno' } },
  { label: 'Cachorro médio',   set: { porte: 'Cachorro de porte médio' } },
  { label: 'Cachorro grande',  set: { porte: 'Cachorro de porte grande' } },
  { label: 'Gato',             set: { porte: 'Gato' } },
]

const CIDADE = [
  { label: 'Ribeirão Claro - PR',          set: { cidade: 'Ribeirão Claro - PR' } },
  { label: 'Santa Cruz do Rio Pardo - SP', set: { cidade: 'Santa Cruz do Rio Pardo - SP' } },
]

const PERIODO = [
  { label: 'Seg a sex · manhã', set: { periodo: 'Segunda a sexta, de manhã' } },
  { label: 'Seg a sex · tarde', set: { periodo: 'Segunda a sexta, à tarde' } },
  { label: 'Sábado',            set: { periodo: 'Sábado' } },
  { label: 'Tanto faz',         set: { periodo: 'Qualquer dia disponível' } },
]

const withNext = (options, next) => options.map((o) => ({ ...o, next }))

const agendamento = (a) => [
  'Olá! Vim pelo site e gostaria de agendar 🐾',
  '',
  `• Serviço: ${a.servico}`,
  a.porte && `• Pet: ${a.porte}`,
  a.cidade && `• Cidade: ${a.cidade}`,
  a.periodo && `• Preferência: ${a.periodo}`,
  '',
  'Nome do pet: ',
  'Podem me confirmar horário e valor?',
].filter((l) => l !== undefined && l !== false && l !== null).join('\n')

export const START = 'inicio'

export const FLOWS = {
  inicio: {
    text: 'Olá! Eu sou a Mel, assistente do Espaço Pet da Mel. 🐾 Como posso te ajudar?',
    options: [
      { label: '✨ Conhecer as experiências de banho', next: 'banhos' },
      { label: '✂️ Agendar tosa', next: 'tosa' },
      { label: '🎁 Planos e pacotes', next: 'planos' },
      { label: '📅 Remarcar ou cancelar', next: 'remarcar' },
      { label: '📍 Horários e endereço', next: 'info' },
      { label: '💜 Deixar um feedback', next: 'feedback' },
      { label: '💬 Falar com a equipe', next: 'equipe' },
    ],
  },

  // ---------- Banhos ----------
  banhos: {
    text: 'Temos três experiências de banho, pensadas para cada momento do seu pet:',
    cards: [
      { title: 'Banho Clássico', desc: 'Banho com condicionador hidratante, corte de unhas, perfume pet, bandana e cromoterapia.' },
      { title: 'Banho Signature', desc: 'O mais escolhido: shampoo premium, tosa higiênica, limpeza de ouvidos, hidratação da pelagem, perfume exclusivo e acessório premium.', featured: true },
      { title: 'Spa Day', desc: 'O ritual completo: máscara de hidratação profunda, escovação de dentes, limpeza profunda de ouvidos, perfume importado e acessório exclusivo.' },
    ],
    options: [
      { label: 'Agendar Banho Clássico',  set: { servico: 'Banho Clássico' },  next: 'porte' },
      { label: 'Agendar Banho Signature', set: { servico: 'Banho Signature' }, next: 'porte' },
      { label: 'Agendar Spa Day',         set: { servico: 'Spa Day' },         next: 'porte' },
    ],
  },

  // ---------- Tosa ----------
  tosa: {
    text: 'Que tipo de tosa você procura?',
    options: [
      { label: 'Tosa higiênica',        set: { servico: 'Tosa higiênica' },        next: 'porte' },
      { label: 'Tosa na tesoura',       set: { servico: 'Tosa na tesoura' },       next: 'porte' },
      { label: 'Tosa padrão da raça',   set: { servico: 'Tosa no padrão da raça' }, next: 'porte' },
      { label: 'Tosa bebê',             set: { servico: 'Tosa bebê' },             next: 'porte' },
      { label: 'Ainda não sei',         set: { servico: 'Tosa (quero uma indicação)' }, next: 'porte' },
    ],
  },

  // ---------- Etapas comuns de agendamento ----------
  porte: {
    text: 'Perfeito! Seu pet é:',
    options: withNext(PORTE, 'cidade'),
  },
  cidade: {
    text: 'Em qual cidade você prefere o atendimento?',
    options: withNext(CIDADE, 'periodo'),
  },
  periodo: {
    text: 'Qual dia e período ficam melhores? Atendemos de segunda a sexta das 8h às 18h e aos sábados das 8h às 16h.',
    options: withNext(PERIODO, 'agendar'),
  },
  agendar: {
    text: (a) => `Tudo certo! Preparei seu pedido de ${a.servico}. Toque no botão abaixo para enviar pelo WhatsApp. Nossa equipe confirma o horário e o valor com você. 💜`,
    final: agendamento,
    summary: true,
  },

  // ---------- Planos ----------
  planos: {
    text: 'Temos condições especiais para quem cuida do pet com frequência. Qual serviço te interessa?',
    options: [
      { label: 'Pacote de banhos', set: { plano: 'pacote de banhos' }, next: 'planos_fim' },
      { label: 'Pacote de tosas',  set: { plano: 'pacote de tosas' },  next: 'planos_fim' },
      { label: 'Plano para filhote', set: { plano: 'plano para filhote' }, next: 'planos_fim' },
      { label: 'Quero conhecer todos', set: { plano: 'planos e pacotes disponíveis' }, next: 'planos_fim' },
    ],
  },
  planos_fim: {
    text: 'Ótimo! Nossa equipe te apresenta as opções e condições pelo WhatsApp.',
    final: (a) => `Olá! Vim pelo site e gostaria de conhecer as condições do ${a.plano}. 🐾`,
  },

  // ---------- Remarcar / cancelar ----------
  remarcar: {
    text: 'Sem problemas! O que você precisa fazer?',
    options: [
      { label: 'Remarcar horário',     set: { acao: 'remarcar' }, next: 'remarcar_fim' },
      { label: 'Cancelar agendamento', set: { acao: 'cancelar' }, next: 'remarcar_fim' },
    ],
  },
  remarcar_fim: {
    text: (a) => a.acao === 'cancelar'
      ? 'Vou preparar a mensagem de cancelamento. No WhatsApp, é só completar o nome do pet e a data do agendamento.'
      : 'Vou preparar a mensagem para remarcar. No WhatsApp, é só completar os dados e sugerir um novo dia.',
    final: (a) => a.acao === 'cancelar'
      ? 'Olá! Preciso cancelar um agendamento.\n\nNome do pet: \nData e horário agendados: '
      : 'Olá! Gostaria de remarcar um agendamento.\n\nNome do pet: \nData e horário agendados: \nNova preferência de dia/horário: ',
  },

  // ---------- Informações ----------
  info: {
    text: 'Atendemos de segunda a sexta das 8h às 18h e aos sábados das 8h às 16h, sempre com hora marcada. Estamos na R. Cel. Emílio Gomes, 219, em Ribeirão Claro - PR, e também atendemos Santa Cruz do Rio Pardo - SP. Busca e entrega em domicílio sob consulta.',
    options: [
      { label: 'Agendar um horário', next: 'agendar_menu' },
      { label: 'Abrir no mapa', href: 'https://maps.google.com/?q=R.+Cel.+Emilio+Gomes,+219,+Ribeirao+Claro,+PR' },
      { label: 'Perguntar sobre busca e entrega', next: 'busca' },
    ],
  },
  agendar_menu: {
    text: 'O que vamos agendar?',
    options: [
      { label: 'Banho', next: 'banhos' },
      { label: 'Tosa',  next: 'tosa' },
    ],
  },
  busca: {
    text: 'A busca e entrega depende do seu endereço. Nossa equipe confirma pelo WhatsApp.',
    final: () => 'Olá! Gostaria de saber sobre a busca e entrega em domicílio. 🐾\n\nMeu bairro/cidade: ',
  },

  // ---------- Feedback ----------
  feedback: {
    text: 'Sua opinião é muito importante para nós. Como foi sua experiência?',
    options: [
      { label: '😍 Amei o atendimento', set: { feedback: 'elogio' },   next: 'feedback_fim' },
      { label: '💡 Tenho uma sugestão', set: { feedback: 'sugestao' }, next: 'feedback_fim' },
      { label: '😕 Algo não saiu bem',  set: { feedback: 'problema' }, next: 'feedback_fim' },
    ],
  },
  feedback_fim: {
    text: (a) => ({
      elogio: 'Que alegria! 💜 Adoraríamos ler seu elogio. Se puder, marque também o @espacopetdamel no Instagram.',
      sugestao: 'Obrigada! Toda sugestão nos ajuda a cuidar ainda melhor dos pets.',
      problema: 'Sentimos muito. Queremos entender o que aconteceu e resolver com você o quanto antes.',
    })[a.feedback],
    final: (a) => ({
      elogio: 'Olá! Vim pelo site deixar um elogio 💜\n\n',
      sugestao: 'Olá! Vim pelo site deixar uma sugestão 💡\n\n',
      problema: 'Olá! Vim pelo site falar sobre um atendimento que não saiu como esperado.\n\nNome do pet: \nData do atendimento: \nO que aconteceu: ',
    })[a.feedback],
  },

  // ---------- Equipe ----------
  equipe: {
    text: 'Claro! Toque no botão abaixo e nossa equipe continua o atendimento pelo WhatsApp.',
    final: () => 'Olá! Vim pelo site do Espaço Pet da Mel e gostaria de falar com vocês. 🐾',
  },
}

export const SUMMARY_LABELS = {
  servico: 'Serviço',
  porte: 'Pet',
  cidade: 'Cidade',
  periodo: 'Preferência',
}
