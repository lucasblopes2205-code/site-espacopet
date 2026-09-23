// Menu do assistente do site. Cada tela tem um texto e opções.
// Uma opção leva a outra tela (`next`) e pode guardar uma resposta (`set`).
// A tela final (`final`) monta a mensagem que será enviada para o WhatsApp.
// `next` também pode ser uma função das respostas, para caminhos que compartilham telas.

const RACAS = [
  'Shih-tzu', 'Lhasa Apso', 'Yorkshire', 'Maltês', 'Poodle', 'Spitz Alemão',
  'Pinscher', 'Schnauzer', 'Chihuahua', 'Dachshund', 'Bulldog Francês', 'Pug',
  'Husky Siberiano', 'Golden Retriever', 'Labrador', 'Border Collie',
]

const PORTE = [
  { label: 'Pequeno', set: { porte: 'Pequeno' } },
  { label: 'Médio',   set: { porte: 'Médio' } },
  { label: 'Grande',  set: { porte: 'Grande' } },
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
  `• Pet: ${a.pet}`,
  `• Serviço: ${a.servico}`,
  a.raca ? `• Raça: ${a.raca}` : null,
  a.porte ? `• Porte: ${a.porte}` : null,
  a.cidade ? `• Cidade: ${a.cidade}` : null,
  a.periodo ? `• Preferência: ${a.periodo}` : null,
  '',
  'Podem me confirmar horário e valor?',
].filter((l) => l !== null).join('\n')

export const START = 'inicio'

export const FLOWS = {
  inicio: {
    text: 'Olá! Eu sou a Mel, assistente do Espaço Pet da Mel. 🐾 Como posso te ajudar?',
    options: [
      { label: '🛁 Agendar banho', set: { tipo: 'agendamento', servico: 'Banho' }, next: 'raca' },
      { label: '✂️ Agendar tosa', set: { tipo: 'agendamento', servico: 'Tosa' }, next: 'raca' },
      { label: '🎁 Planos e pacotes', set: { tipo: 'plano', servico: 'Planos e pacotes' }, next: 'raca' },
      { label: '📅 Remarcar ou cancelar', next: 'remarcar' },
      { label: '📍 Horários e endereço', next: 'info' },
      { label: '💜 Deixar um feedback', next: 'feedback' },
      { label: '💬 Falar com a equipe', next: 'equipe' },
    ],
  },

  // ---------- Etapas comuns de agendamento ----------
  raca: {
    text: (a) => a.tipo === 'plano'
      ? 'Temos condições especiais para quem cuida do pet com frequência. Para indicarmos o melhor plano, qual é a raça do seu pet?'
      : 'Qual é a raça do seu pet?',
    layout: 'grid',
    options: [
      // O porte só é perguntado para SRD e Outra; nas raças da lista ele já é conhecido
      ...RACAS.map((r) => ({ label: r, set: { raca: r, porte: '' }, next: (a) => (a.tipo === 'plano' ? 'planos_fim' : 'cidade') })),
      { label: 'SRD (sem raça definida)', set: { raca: 'SRD (sem raça definida)' }, next: 'porte' },
      { label: 'Outra', set: { raca: 'Outra' }, next: 'porte' },
    ],
  },
  porte: {
    text: 'E qual é o porte dele(a)?',
    options: withNext(PORTE, (a) => (a.tipo === 'plano' ? 'planos_fim' : 'cidade')),
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
    text: (a) => `Tudo certo! Preparei seu pedido de ${a.servico}. Só falta escrever o nome do seu pet abaixo e enviar pelo WhatsApp. Nossa equipe confirma o horário e o valor com você. 💜`,
    final: agendamento,
    summary: true,
    askPetName: true,
  },

  // ---------- Planos ----------
  planos_fim: {
    text: 'Perfeito! Escreva o nome do seu pet abaixo e nossa equipe te apresenta os planos ideais para ele(a) pelo WhatsApp. 💜',
    summary: true,
    askPetName: true,
    final: (a) => [
      'Olá! Vim pelo site e gostaria de conhecer os planos e pacotes 🐾',
      '',
      `• Pet: ${a.pet}`,
      `• Raça: ${a.raca}`,
      a.porte ? `• Porte: ${a.porte}` : null,
    ].filter((l) => l !== null).join('\n'),
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
      ? 'Vou preparar a mensagem de cancelamento. Me diga o nome do pet e, no WhatsApp, é só completar a data do agendamento.'
      : 'Vou preparar a mensagem para remarcar. Me diga o nome do pet e, no WhatsApp, é só completar a data e sugerir um novo dia.',
    askPetName: true,
    final: (a) => a.acao === 'cancelar'
      ? `Olá! Preciso cancelar um agendamento.\n\nNome do pet: ${a.pet}\nData e horário agendados: `
      : `Olá! Gostaria de remarcar um agendamento.\n\nNome do pet: ${a.pet}\nData e horário agendados: \nNova preferência de dia/horário: `,
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
      { label: 'Banho', set: { tipo: 'agendamento', servico: 'Banho' }, next: 'raca' },
      { label: 'Tosa',  set: { tipo: 'agendamento', servico: 'Tosa' }, next: 'raca' },
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
  raca: 'Raça',
  porte: 'Porte',
  cidade: 'Cidade',
  periodo: 'Preferência',
}
