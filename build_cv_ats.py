# -*- coding: utf-8 -*-
"""Currículo ATS-friendly (Gupy e similares): coluna única, sem foto, sem tabelas,
sem ícones, títulos de seção padrão, datas MM/AAAA e texto 100% selecionável."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether

BLACK = colors.black
GRAY = colors.HexColor('#333333')

name_s = ParagraphStyle('n', fontName='Helvetica-Bold', fontSize=18, leading=22, textColor=BLACK)
head_s = ParagraphStyle('h', fontName='Helvetica', fontSize=10.5, leading=14, textColor=BLACK)
contact_s = ParagraphStyle('c', fontName='Helvetica', fontSize=9.5, leading=13, textColor=BLACK)
sec_s = ParagraphStyle('s', fontName='Helvetica-Bold', fontSize=11.5, leading=14, textColor=BLACK, spaceBefore=8, spaceAfter=3, keepWithNext=1)
body_s = ParagraphStyle('b', fontName='Helvetica', fontSize=9.5, leading=12, textColor=BLACK, spaceAfter=1.5)
role_s = ParagraphStyle('r', fontName='Helvetica-Bold', fontSize=10.5, leading=13, textColor=BLACK, spaceBefore=5)
meta_s = ParagraphStyle('m', fontName='Helvetica', fontSize=9.5, leading=12.5, textColor=GRAY, spaceAfter=2)
bul_s = ParagraphStyle('bu', parent=body_s, leftIndent=12, bulletIndent=2, spaceAfter=1.5)
skl_s = ParagraphStyle('k', parent=body_s, spaceAfter=3)

NAME = 'Kleber Siqueira'
HEADLINE = 'Gerente de Projetos | Scrum Master | Squad Leader | Líder Técnico | Metodologias Ágeis'
CONTACT = ('Laranjal Paulista, SP | klebis1985@gmail.com | (15) 99707-9661 | '
           'linkedin.com/in/klebereng')

SUMMARY = (
    'Gerente de Projetos e Scrum Master com mais de 20 anos de atuação em tecnologia, '
    'telecomunicações e infraestrutura. Experiência em gestão de projetos de tecnologia, '
    'liderança de squads e equipes multidisciplinares, implantação de Scrum e Kanban, '
    'gestão de stakeholders, planejamento de escopo, prazo e orçamento, gestão de riscos '
    'e melhoria contínua de processos.'
)

SKILLS = [
    ('Gestão de projetos', 'PMBOK, PMO, Waterfall, planejamento estratégico, '
     'cronograma, orçamento, gestão de riscos, gestão de stakeholders, KPIs, OKRs, Balanced Scorecard, análise SWOT'),
    ('Metodologias ágeis', 'Scrum, Kanban, refinamento de backlog, user stories, '
     'DoR e DoD, Sprint Planning, Daily, Sprint Review, Retrospectiva, Product Backlog'),
    ('Melhoria contínua', 'Lean, Kaizen, Six Sigma Yellow Belt, BPM, PDCA, 5S, 5W2H, Diagrama de Ishikawa, '
     'mapeamento de processos, gestão de mudanças'),
    ('Liderança e pessoas', 'Liderança de equipes, coaching, mentoria, negociação, resolução de conflitos, '
     'comunicação assertiva, gestão de pessoas, transformação digital'),
    ('Ferramentas', 'Jira, Confluence, Azure DevOps, Trello, Asana, Monday, ClickUp, Notion, MS Project, '
     'Power BI, Miro, Slack, Excel, Bizagi, Visio, n8n'),
    ('Tecnologia', 'Python, React, Node.js, Git, API REST, SQL Server, CI/CD (noções), '
     'redes de fibra óptica, infraestrutura de redes'),
]

# (cargo, empresa, local, período, descrição, [resultados])
JOBS = [
    ('Gerente de Projetos', 'Developers Softwares', 'São Paulo, SP (Remoto)', '01/2026 – Atual',
     'Liderança de projetos estratégicos de tecnologia e inovação com equipes multidisciplinares, '
     'alinhando escopo, prazo e orçamento com stakeholders.',
     ['Implantação de framework combinando Scrum e Kanban, com maior transparência e fluidez na execução dos projetos.',
      'Melhoria da produtividade da equipe com práticas ágeis e otimização de processos.',
      'Redução de custos dos projetos com melhor gestão de recursos e prioridades.']),
    ('Squad Leader', 'Developers Softwares', 'São Paulo, SP (Remoto)', '04/2025 – 01/2026',
     'Liderança de squads ágeis multidisciplinares na entrega de soluções digitais, com priorização e '
     'organização do backlog e alinhamento entre stakeholders.',
     ['Aumento de 14% na previsibilidade das entregas.',
      'Redução de 7% no lead time das entregas.',
      'Aumento de 20% no engajamento do time.']),
    ('Analista de Projetos Pleno', 'Grupo Zaaz', 'Osasco, SP (Remoto)', '08/2021 – 04/2025',
     'Planejamento, execução e monitoramento de projetos de redes de fibra óptica, com controle de '
     'cronogramas, análise de viabilidade, coordenação de equipes técnicas e comunicação com stakeholders.',
     ['Coordenação de mais de 20 projetos de rede de fibra óptica dentro de prazo e escopo.',
      'Redução de 33% em falhas e retrabalhos com acompanhamento e verificação técnica.',
      'Contribuição para a posição da empresa entre os 10 maiores provedores de internet do Brasil (ranking Anatel) '
      'e para os prêmios ABRINT: 2º lugar em 2023/24 e 1º lugar em 2024/25 (categoria até 200 mil clientes).']),
    ('Líder Técnico de Infraestrutura', 'FDNET', 'Conchas, SP (Híbrido)', '03/2020 – 08/2021',
     'Liderança da equipe de infraestrutura, responsável por disponibilidade, performance e segurança da '
     'rede de fibra óptica e por projetos de expansão e manutenção.',
     ['Implantação de plantões operacionais que aumentaram a disponibilidade da rede de 93,2% para 98,3%.',
      'Redução de 37% em incidentes críticos com monitoramento e manutenção preventiva.',
      'Condução de upgrades e migrações de infraestrutura dentro do prazo e sem impacto ao negócio.']),
    ('Técnico de Infraestrutura', 'FDNET', 'Conchas, SP (Híbrido)', '03/2019 – 04/2020',
     'Instalação, manutenção e reparo de redes de fibra óptica; testes de certificação de cabos e OTDR; '
     'documentação técnica de redes e serviços.',
     []),
    ('Scrum Master', 'Orangetec Sistemas', 'Tietê, SP (Remoto)', '01/2016 – 03/2019',
     'Facilitação de equipes ágeis e orientação de stakeholders na mentalidade ágil, com entregas '
     'incrementais de valor e remoção de impedimentos.',
     ['Aumento de 40% na velocidade de entrega com cerimônias ágeis e acompanhamento de métricas.',
      'Redução de 26% no retrabalho com melhoria contínua e retrospectivas.']),
    ('Analista de Requisitos', 'PI-Tec Sistemas', 'Cerquilho, SP (Remoto)', '02/2013 – 03/2016',
     'Levantamento, análise e documentação de requisitos de negócio, convertendo demandas dos usuários '
     'em especificações funcionais e técnicas.',
     []),
    ('Assistente Administrativo', 'Aliança Materiais de Construção e Artefatos de Cimento',
     'Laranjal Paulista, SP', '2011 – 2013',
     '',
     []),
    ('Analista de Planejamento', 'Irmãos Salto Produtos Cerâmicos', 'Laranjal Paulista, SP', '2010 – 2011',
     '', []),
    ('Analista de Suporte', 'Alfa Soluções e Tecnologia', 'Laranjal Paulista, SP', '03/2009 – 04/2010',
     '', []),
    ('Analista de Helpdesk', 'VR Internet Telecomunicações', 'Laranjal Paulista, SP', '01/2004 – 11/2008',
     '', []),
]

EDU = [
    ('Pós-Graduação em Desenvolvimento Web Full Stack', 'Universidade Anhanguera', '2025'),
    ('Pós-Graduação em Gestão de Projetos e Metodologias Ágeis', 'Faculdade IMES', '2024 – 2025'),
    ('Pós-Graduação em ESG: Sustentabilidade Ambiental, Social e Compliance', 'Faculdade IMES', '2024'),
    ('MBA em Empreendedorismo e Novos Negócios', 'Faculdade IMES', '2024'),
    ('Pós-Graduação em Engenharia de Software', 'Universidade Anhanguera', '2023 – 2024'),
    ('Bacharelado em Engenharia de Computação', 'UNIVESP', '2018 – 2023'),
]

CERTS = [
    ('Registered Scrum Basics', 'Scrum Inc.', '2025'),
    ('Certificação Ágile Scrum (Scrum Foundation)', 'Certiprof', '2024'),
    ('Agile Explorer', 'IBM', '2024'),
    ('Project Management Fundamentals', 'IBM', '2024'),
    ('Six Sigma Yellow Belt', '6sigmastudy', '2024'),
    ('Jira Fundamentals', 'Atlassian', '2024'),
    ('Confluence Fundamentals', 'Atlassian', '2024'),
    ('Agile Master', 'Alison', '2024'),
    ('Gestão de Mudanças', 'PUCRS', '2024'),
    ('Gestão Estratégica de Pessoas', 'Estácio', '2024'),
    ('Gestão Estratégica de Processos', 'Estácio', '2024'),
    ('Negotiation Associate', 'VMEdu', '2024'),
    ('DevOps & Agile Culture', 'FIAP', '2024'),
    ('Design Thinking & Sprint', 'FIAP', '2024'),
    ('Python', 'FIAP', '2024'),
    ('Front-end em React', 'Ada', '2024'),
    ('Back-end em Node.js', 'Ada', '2024'),
    ('Projetos FTTH 3.0', 'Fiberschool', '2023'),
]


def build(path):
    doc = SimpleDocTemplate(path, pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm,
                            topMargin=13 * mm, bottomMargin=13 * mm,
                            title='Currículo - Kleber Siqueira', author=NAME,
                            subject='Gerente de Projetos | Scrum Master')
    s = []
    s.append(Paragraph(NAME, name_s))
    s.append(Paragraph(HEADLINE, head_s))
    s.append(Paragraph(CONTACT, contact_s))
    s.append(Paragraph('Portfólio: <link href="https://klebersiqueira.vercel.app">'
                       'klebersiqueira.vercel.app</link> | GitHub: '
                       '<link href="https://github.com/Klebisss/klebersiqueira">'
                       'github.com/Klebisss/klebersiqueira</link>', contact_s))

    s.append(Paragraph('RESUMO PROFISSIONAL', sec_s))
    s.append(Paragraph(SUMMARY, body_s))

    s.append(Paragraph('COMPETÊNCIAS', sec_s))
    for label, items in SKILLS:
        s.append(Paragraph(f'<b>{label}:</b> {items}.', skl_s))

    s.append(Paragraph('EXPERIÊNCIA PROFISSIONAL', sec_s))
    for role, company, loc, period, desc, bullets in JOBS:
        block = [Paragraph(f'{role} – {company}', role_s),
                 Paragraph(f'{period} | {loc}', meta_s)]
        if desc:
            block.append(Paragraph(desc, body_s))
        for b in bullets:
            block.append(Paragraph(b, bul_s, bulletText='•'))
        s.append(KeepTogether(block))

    s.append(Paragraph('FORMAÇÃO ACADÊMICA', sec_s))
    for title, inst, per in EDU:
        s.append(Paragraph(f'{title} – {inst} ({per}) – Concluído', body_s))

    s.append(Paragraph('CURSOS E CERTIFICAÇÕES', sec_s))
    for t, i, y in CERTS:
        s.append(Paragraph(f'{t} – {i} ({y})', bul_s, bulletText='•'))
    s.append(Paragraph('Lista completa de cursos e certificados disponível no LinkedIn.', body_s))

    s.append(Paragraph('IDIOMAS', sec_s))
    s.append(Paragraph('Inglês: básico | Espanhol: básico', body_s))

    doc.build(s)


if __name__ == '__main__':
    build('public/Curriculum_Kleber_Siqueira.pdf')
