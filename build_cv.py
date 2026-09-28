# -*- coding: utf-8 -*-
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
)
from reportlab.lib.enums import TA_LEFT

INK = colors.HexColor('#14181C')
SLATE = colors.HexColor('#4A5560')
SIGNAL = colors.HexColor('#2F6F5E')
LINE = colors.HexColor('#DEDAD1')
PAPER = colors.HexColor('#F7F5F1')

styles = getSampleStyleSheet()

name_style = ParagraphStyle('Name', fontName='Helvetica-Bold', fontSize=22, textColor=INK, leading=26)
titles_style = ParagraphStyle('Titles', fontName='Helvetica', fontSize=10.5, textColor=SIGNAL, leading=14, spaceAfter=2)
contact_style = ParagraphStyle('Contact', fontName='Helvetica', fontSize=9, textColor=SLATE, leading=12)
summary_style = ParagraphStyle('Summary', fontName='Helvetica', fontSize=9.5, textColor=INK, leading=14, spaceBefore=8, spaceAfter=4)

section_style = ParagraphStyle('Section', fontName='Helvetica-Bold', fontSize=12.5, textColor=INK, spaceBefore=14, spaceAfter=6, leading=15)

role_style = ParagraphStyle('Role', fontName='Helvetica-Bold', fontSize=10, textColor=INK, leading=13)
meta_style = ParagraphStyle('Meta', fontName='Helvetica-Oblique', fontSize=8.5, textColor=SLATE, leading=11, spaceAfter=3)
desc_style = ParagraphStyle('Desc', fontName='Helvetica', fontSize=9, textColor=INK, leading=12.5, spaceAfter=3)
bullet_style = ParagraphStyle('Bullet', fontName='Helvetica', fontSize=8.8, textColor=INK, leading=12, leftIndent=10, spaceAfter=1.5)

edu_title_style = ParagraphStyle('EduTitle', fontName='Helvetica-Bold', fontSize=9.3, textColor=INK, leading=12)
edu_meta_style = ParagraphStyle('EduMeta', fontName='Helvetica', fontSize=8.3, textColor=SLATE, leading=11, spaceAfter=6)

skill_label_style = ParagraphStyle('SkillLabel', fontName='Helvetica-Bold', fontSize=9, textColor=SIGNAL, leading=12, spaceBefore=6, spaceAfter=2)
skill_items_style = ParagraphStyle('SkillItems', fontName='Helvetica', fontSize=8.8, textColor=INK, leading=12.5, spaceAfter=2)

cert_style = ParagraphStyle('Cert', fontName='Helvetica', fontSize=8, textColor=SLATE, leading=11.5)

metric_value_style = ParagraphStyle('MetricValue', fontName='Helvetica-Bold', fontSize=15, textColor=SIGNAL, leading=17, alignment=TA_LEFT)
metric_label_style = ParagraphStyle('MetricLabel', fontName='Helvetica', fontSize=7, textColor=SLATE, leading=9)


def hr():
    return HRFlowable(width="100%", thickness=0.75, color=LINE, spaceBefore=2, spaceAfter=8)


def build():
    from data import profile, key_metrics, experiences, education, certifications, skill_groups, languages

    doc = SimpleDocTemplate(
        "output/Curriculum_Kleber_Siqueira.pdf",
        pagesize=A4,
        leftMargin=18 * mm, rightMargin=18 * mm,
        topMargin=16 * mm, bottomMargin=16 * mm,
        title=f"Currículo — {profile['name']}",
        author=profile['name'],
    )

    story = []

    # Header
    story.append(Paragraph(profile['name'], name_style))
    story.append(Paragraph(' · '.join(profile['titles']), titles_style))
    contact_line = f"{profile['city']} &nbsp;|&nbsp; {profile['email']} &nbsp;|&nbsp; {profile['whatsapp']} &nbsp;|&nbsp; {profile['linkedin']}"
    story.append(Paragraph(contact_line, contact_style))
    story.append(hr())

    # Summary
    story.append(Paragraph(profile['summary'], summary_style))

    # Key metrics strip
    cells = []
    for m in key_metrics:
        cell = [Paragraph(m['value'], metric_value_style), Paragraph(m['label'], metric_label_style)]
        cells.append(cell)
    mt = Table([cells], colWidths=[(A4[0] - 36 * mm) / 4.0] * 4)
    mt.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LINEABOVE', (0, 0), (-1, 0), 0.75, LINE),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
    ]))
    story.append(mt)
    story.append(Spacer(1, 4))

    # Experience
    story.append(Paragraph('EXPERIÊNCIA PROFISSIONAL', section_style))
    for exp in experiences:
        block = []
        block.append(Paragraph(f"{exp['role']} <font color='#4A5560'>— {exp['company']}</font>", role_style))
        block.append(Paragraph(f"{exp['period']} &nbsp;·&nbsp; {exp['contract']}", meta_style))
        block.append(Paragraph(exp['description'], desc_style))
        for h in exp['highlights']:
            block.append(Paragraph(f"› {h}", bullet_style))
        block.append(Spacer(1, 7))
        story.append(KeepTogether(block) if len(exp['highlights']) <= 3 else block)

    # Education
    story.append(Paragraph('FORMAÇÃO ACADÊMICA', section_style))
    for e in education:
        story.append(Paragraph(e['title'], edu_title_style))
        story.append(Paragraph(f"{e['institution']} &nbsp;·&nbsp; {e['period']}", edu_meta_style))

    # Skills
    story.append(Paragraph('HABILIDADES & COMPETÊNCIAS', section_style))
    for g in skill_groups:
        story.append(Paragraph(g['label'].upper(), skill_label_style))
        story.append(Paragraph(' · '.join(g['items']), skill_items_style))
    story.append(Paragraph(f"<b>Idiomas:</b> {' · '.join(languages)}", skill_items_style))

    # Certifications — single flowing column so it paginates naturally
    story.append(Paragraph('CURSOS & CERTIFICAÇÕES', section_style))
    for c in certifications:
        story.append(Paragraph(f"› <b>{c['title']}</b> — {c['issuer']} ({c['date']})", cert_style))
        story.append(Spacer(1, 2))

    doc.build(story)


if __name__ == '__main__':
    build()
