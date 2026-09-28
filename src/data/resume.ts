export interface Experience {
  role: string
  company: string
  period: string
  contract: string
  description: string
  highlights: string[]
}

export interface EducationItem {
  title: string
  institution: string
  period: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export const profile = {
  name: 'Kleber Siqueira',
  titles: [
    'Gerente de Projetos',
    'Scrum Master',
    'Líder Técnico',
    'Engenheiro de Software',
    'Squad Leader',
  ],
  city: 'Laranjal Paulista, SP',
  email: 'klebis1985@gmail.com',
  whatsapp: '(15) 9 9707-9661',
  linkedin: 'https://www.linkedin.com/in/klebereng',
  summary:
    'Profissional de tecnologia e gestão de projetos com ampla experiência em transformação digital, desenvolvimento de produtos e metodologias ágeis. Líder de equipes multifuncionais, especialista em planejamento estratégico, mitigação de riscos e melhoria contínua de processos, com histórico comprovado de entregas aderentes a prazo, escopo, orçamento, aumento de produtividade e retorno sobre investimento.',
}

// Metrics pulled straight from the CV/LinkedIn — used as the hero's proof strip
export const keyMetrics = [
  { value: '20+', label: 'anos de experiência profissional na área de tecnologia' },
  { value: '50+', label: 'projetos entregues com sucesso e excelência' },
  { value: '42%', label: 'ganho de produtividade em times ágeis e melhoria contínua' },
  { value: '33%', label: 'redução de falhas e retrabalho com melhoria contínua de processos' },
]

export const experiences: Experience[] = [
  {
    role: 'Gerente de Projetos',
    company: 'Developers Softwares',
    period: 'Janeiro 2026 — Atualmente',
    contract: 'Terceirizado · Remoto',
    description:
      'Lidero projetos estratégicos de tecnologia e inovação, conduzindo equipes multidisciplinares e garantindo alinhamento entre objetivos de negócio, escopo, prazos e orçamento. Implantei práticas ágeis combinando Scrum e Kanban.',
    highlights: [
      'Produtividade da equipe aumentada em 42%',
      'Custos dos projetos reduzidos em 25%',
      '100% de aderência das entregas a prazo, escopo e orçamento',
    ],
  },
  {
    role: 'Squad Leader',
    company: 'Developers Softwares',
    period: 'Abril 2025 — Janeiro 2026',
    contract: 'Terceirizado · Remoto',
    description:
      'Liderei times ágeis multidisciplinares na entrega de soluções digitais de alto impacto, conduzindo priorização, backlog e alinhamento entre stakeholders.',
    highlights: [
      'Previsibilidade de entregas aumentada em 14%',
      'Lead time reduzido em 7%',
      'Engajamento do time elevado em 20%',
    ],
  },
  {
    role: 'Analista de Projetos Pleno',
    company: 'Grupo Zaaz',
    period: 'Agosto 2021 — Abril 2025',
    contract: 'Tempo integral · Remoto',
    description:
      'Planejamento, execução e monitoramento de projetos de redes de fibra óptica, garantindo entrega dentro do prazo, orçamento e qualidade técnica.',
    highlights: [
      'Mais de 20 projetos de rede coordenados com sucesso',
      'Falhas e retrabalhos reduzidos em 33%',
      'Empresa entre os 20 maiores provedores de internet do Brasil (Anatel); 2º lugar ABRINT 2023/24 e 1º lugar 2024/25',
    ],
  },
  {
    role: 'Líder Técnico',
    company: 'FDNET',
    period: 'Março 2020 — Agosto 2021',
    contract: 'Terceirizado · Híbrido',
    description:
      'Liderança da equipe de infraestrutura, garantindo disponibilidade, performance e segurança da rede de fibra óptica e a execução de projetos estratégicos.',
    highlights: [
      '95,3% de disponibilidade com plantões operacionais',
      'Incidentes críticos reduzidos em 37%',
      'Upgrades e migrações sem impacto ao negócio',
    ],
  },
  {
    role: 'Técnico de Infraestrutura',
    company: 'FDNET',
    period: 'Março 2019 — Abril 2020',
    contract: 'Terceirizado · Híbrido',
    description:
      'Instalação, manutenção e reparo de redes de fibra óptica, testes de certificação de cabos e OTDR, e documentação técnica de infraestrutura.',
    highlights: [
      'Alta disponibilidade e desempenho de rede sustentados',
      'Conformidade com padrões técnicos em testes de certificação',
    ],
  },
  {
    role: 'Scrum Master',
    company: 'Orangetec Sistemas',
    period: 'Janeiro 2016 — Julho 2021',
    contract: 'Tempo integral · Remoto',
    description:
      'Orientação de stakeholders e equipes na mentalidade ágil, garantindo entregas incrementais de valor e equipes autônomas e engajadas.',
    highlights: [
      'Velocidade de entrega aumentada em 40%',
      'Retrabalho reduzido em 26%',
    ],
  },
  {
    role: 'Analista de Requisitos',
    company: 'PI-Tec Sistemas',
    period: 'Fevereiro 2013 — Março 2016',
    contract: 'Tempo integral · Remoto',
    description:
      'Levantamento, análise e documentação de requisitos de negócio, transformando demandas dos usuários em especificações funcionais e técnicas.',
    highlights: [
      'Assertividade das entregas aumentada em 16%',
      'Ganho de produtividade de 9% nas áreas atendidas',
    ],
  },
  {
    role: 'Assistente Administrativo',
    company: 'Aliança Materiais de Construção e Artefatos de Cimento',
    period: 'Maio 2010 — Janeiro 2013',
    contract: 'Tempo integral · Presencial',
    description:
      'Suporte administrativo com ênfase em sistemas corporativos, apoiando rotinas financeiras e operacionais com foco em automação e melhoria contínua.',
    highlights: [
      'Falhas em registros administrativos reduzidas em 10%',
      'Produtividade da equipe aumentada em 18% com melhorias em relatórios',
    ],
  },
  {
    role: 'Analista de Planejamento',
    company: 'Irmãos Salto Produtos Cerâmicos',
    period: 'Maio 2009 — Abril 2010',
    contract: 'Temporário · Presencial',
    description:
      'Planejamento, acompanhamento e controle de processos de produção e logística, com elaboração de cronogramas e monitoramento de KPIs.',
    highlights: [
      'Eficiência operacional aumentada em 60%',
      'Redução de desperdícios na produção',
    ],
  },
  {
    role: 'Analista de Suporte',
    company: 'Alfa Soluções e Tecnologia',
    period: 'Março 2009 — Abril 2010',
    contract: 'Temporário · Presencial',
    description:
      'Atendimento e suporte técnico a clientes, análise de problemas, implantação de sistemas e documentação de soluções.',
    highlights: [
      'Tempo médio de resolução de chamados reduzido',
      'Documentação técnica padronizada para a equipe',
    ],
  },
  {
    role: 'Analista de Helpdesk',
    company: 'VR Internet Telecomunicações',
    period: 'Janeiro 2004 — Novembro 2008',
    contract: 'Tempo integral · Presencial',
    description:
      'Suporte técnico a clientes de internet discada e via rádio, com instalação de equipamentos, configuração de conexões e troubleshooting.',
    highlights: [
      'Tempo médio de resolução de chamados reduzido',
      'Quase 5 anos garantindo continuidade dos serviços',
    ],
  },
]

export const education: EducationItem[] = [
  { title: 'Pós-Graduação em Desenvolvimento Web Full Stack', institution: 'Universidade Anhanguera', period: '2025' },
  { title: 'Pós-Graduação em Gestão de Projetos e Metodologias Ágeis', institution: 'Faculdade IMES', period: '2024–2025' },
  { title: 'Pós-Graduação em ESG: Sustentabilidade Ambiental, Social e Compliance', institution: 'Faculdade IMES', period: 'Jun 2024 – Jan 2025' },
  { title: 'MBA em Empreendedorismo e Novos Negócios', institution: 'Faculdade IMES', period: '2024' },
  { title: 'Pós-Graduação em Engenharia de Software', institution: 'Universidade Anhanguera', period: '2023–2024' },
  { title: 'Bacharelado em Engenharia de Computação', institution: 'UNIVESP', period: '2018–2023' },
]

export interface Certification {
  title: string
  issuer: string
  date: string
}

export const certifications: Certification[] = [
  { title: 'Lifelong Learning 2026', issuer: 'Certiprof', date: 'jan 2026' },
  { title: 'Registered Scrum Basics™', issuer: 'Agile Education by Scrum Inc.™', date: 'set 2025' },
  { title: 'Agile Explorer', issuer: 'IBM', date: 'ago 2024' },
  { title: 'Cybersecurity Awareness (CAPC)', issuer: 'Certiprof', date: 'ago 2024' },
  { title: 'Arquitetura da informação e projeto de sistemas', issuer: 'TIM Brasil', date: 'ago 2024' },
  { title: 'Soft Skills na Transformação Digital', issuer: 'Enap', date: 'ago 2024' },
  { title: 'Governança de Dados', issuer: 'Enap', date: 'jul 2024' },
  { title: 'Boas práticas em desenvolvimento de software', issuer: 'TIM Brasil', date: 'jul 2024' },
  { title: 'UX e UI Design', issuer: 'TIM Brasil', date: 'jul 2024' },
  { title: 'Python', issuer: 'FIAP', date: 'jul 2024' },
  { title: 'Agile Master', issuer: 'Alison', date: 'jul 2024' },
  { title: 'Desenvolvimento de API em REST', issuer: 'TIM Brasil', date: 'jul 2024' },
  { title: 'Gestão Financeira de Empresas', issuer: 'FIAP', date: 'jul 2024' },
  { title: 'Comunicação Não Violenta, Empatia e Cooperação', issuer: 'PUCRS', date: 'jul 2024' },
  { title: 'Inteligência Artificial e Computacional', issuer: 'FIAP', date: 'jul 2024' },
  { title: 'Gestão de Mudanças', issuer: 'PUCRS', date: 'jul 2024' },
  { title: 'Front-end em React', issuer: 'Ada', date: 'jul 2024' },
  { title: 'Gestão de Infraestrutura de TI', issuer: 'FIAP', date: 'jul 2024' },
  { title: 'Back-end em Node.js', issuer: 'Ada', date: 'jul 2024' },
  { title: 'Blockchain Advanced', issuer: 'FIAP', date: 'jul 2024' },
  { title: 'Git e Versionamento', issuer: 'Ada', date: 'jul 2024' },
  { title: 'Business Intelligence (BI)', issuer: 'FIAP', date: 'jul 2024' },
  { title: 'Design Thinking & Sprint', issuer: 'FIAP', date: 'jul 2024' },
  { title: 'API Rest', issuer: 'Ada', date: 'jun 2024' },
  { title: 'Slack Basics', issuer: 'Slack', date: 'jun 2024' },
  { title: 'Cybersecurity', issuer: 'FIAP', date: 'jun 2024' },
  { title: 'Customer Experience Management', issuer: 'FIAP', date: 'jun 2024' },
  { title: 'DevOps & Agile Culture', issuer: 'FIAP', date: 'jun 2024' },
  { title: 'User Experience', issuer: 'FIAP', date: 'jun 2024' },
  { title: 'Leadership Communication', issuer: 'FIAP', date: 'jun 2024' },
  { title: 'Project Management Fundamentals', issuer: 'IBM', date: 'jun 2024' },
  { title: 'Confluence Fundamentals', issuer: 'Atlassian', date: 'mai 2024' },
  { title: 'Big Data & Analytics', issuer: 'FIAP', date: 'mai 2024' },
  { title: 'Liderança', issuer: 'Santander Open Academy', date: 'mai 2024' },
  { title: 'Jira Fundamentals', issuer: 'Atlassian', date: 'mai 2024' },
  { title: 'BI – Business Intelligence', issuer: 'Certiprof', date: 'mai 2024' },
  { title: 'Negotiation Associate', issuer: 'VMEdu Inc.', date: 'mai 2024' },
  { title: 'High Performance Management', issuer: 'Fiberschool', date: 'mai 2024' },
  { title: 'Gerenciamento de Equipe Remoto', issuer: 'Certiprof', date: 'mai 2024' },
  { title: 'Six Sigma Yellow Belt', issuer: '6sigmastudy', date: 'mai 2024' },
  { title: 'Certificação Ágile Scrum', issuer: 'Certiprof', date: 'mai 2024' },
  { title: 'Gestão Estratégica de Pessoas', issuer: 'Estácio', date: 'abr 2024' },
  { title: 'Gestão Estratégica de Processos', issuer: 'Estácio', date: 'abr 2024' },
  { title: 'Projetos FTTH 3.0', issuer: 'Fiberschool', date: 'dez 2023' },
  { title: 'Lógica de Programação', issuer: 'Senai São Paulo', date: 'jan 2018' },
  { title: 'MCSA: SQL Server 2012/2014', issuer: 'Cursos iPED', date: 'jan 2016' },
  { title: 'Técnico em Informática e Internet', issuer: 'Micronova', date: 'nov 1997' },
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Gestão de projetos',
    items: ['Waterfall', 'PMBOK', 'PMO', 'Prince2', 'KPIs e OKRs', 'Balanced Scorecard', 'Análise SWOT/FOFA'],
  },
  {
    label: 'Metodologias ágeis',
    items: ['Scrum', 'Kanban', 'SAFe', 'LeSS', 'Nexus', 'TDD', 'XP', 'Backlog grooming', 'DoR & DoD'],
  },
  {
    label: 'Processos & melhoria contínua',
    items: ['BPM', 'Lean', 'Kaizen', 'Six Sigma', 'PDCA', '5S', 'Diagrama de Ishikawa', '5W2H'],
  },
  {
    label: 'Liderança & pessoas',
    items: ['Coaching de equipes', 'Negociação', 'Resolução de conflitos', 'Comunicação assertiva', 'Inteligência emocional'],
  },
  {
    label: 'Ferramentas',
    items: ['Jira', 'Confluence', 'Trello', 'Asana', 'Monday', 'Notion', 'ClickUp', 'MS Project', 'Bizagi', 'Visio', 'ARIS', 'Miro', 'Power BI', 'n8n', 'Slack', 'Excel'],
  },
  {
    label: 'Desenvolvimento & tecnologia',
    items: ['Python', 'React', 'Node.js', 'API REST', 'Git', 'SQL Server', 'Blockchain (noções)', 'HTML'],
  },
  {
    label: 'Cloud, dados & segurança',
    items: ['AWS Cloud Fundamentals', 'Cloud Architecture', 'Big Data & Analytics', 'Business Intelligence', 'Governança de Dados', 'Cybersecurity Awareness', 'CI/CD (noções)', 'Azure DevOps'],
  },
  {
    label: 'Produto & experiência do usuário',
    items: ['UX', 'UI Design', 'Design Thinking & Sprint', 'Customer Experience Management', 'Arquitetura da informação'],
  },
  {
    label: 'Infraestrutura',
    items: ['Infraestrutura de rede', 'Redes de fibra óptica', 'OTDR'],
  },
]

export const languages = ['Inglês técnico', 'Espanhol técnico']
