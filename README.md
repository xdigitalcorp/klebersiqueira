# Portfólio — Kleber Siqueira

Site de portfólio/currículo em React + TypeScript + Vite + Tailwind.

## Rodar localmente
```bash
npm install
npm run dev
```

## Build de produção
```bash
npm run build
```
Gera a pasta `dist/` pronta para deploy.

## Deploy sugerido (grátis)
- **Vercel**: importe o repositório no vercel.com, ele detecta Vite automaticamente.
- **Netlify**: `netlify deploy`, build command `npm run build`, publish dir `dist`.

## Editar conteúdo
Todo o conteúdo do currículo (experiências, formação, skills, contato) está em
`src/data/resume.ts` — um único arquivo tipado, fácil de atualizar sem mexer nos componentes.

## Trocar a foto
Substitua `public/kleber.jpg` por uma imagem em melhor resolução (quadrada, mín. 400x400px).

## Atualizar o currículo em PDF
O PDF baixável (`public/Curriculum_Kleber_Siqueira.pdf`) é a versão ATS-friendly (sem foto,
coluna única), gerada pelo script `build_cv_ats.py`. Para regenerar depois de editar o texto
do script:
```bash
pip install reportlab
python3 build_cv_ats.py
```
O script já grava o PDF direto em `public/Curriculum_Kleber_Siqueira.pdf`.
