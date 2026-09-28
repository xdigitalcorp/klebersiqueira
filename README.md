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
O PDF baixável em `public/Curriculum_Kleber_Siqueira.pdf` é gerado a partir do mesmo
conteúdo do site. Para regenerar depois de editar `src/data/resume.ts`, atualize também
`data.py` (mesmos dados, em Python) e rode:
```bash
pip install reportlab
python3 build_cv.py
cp output/Curriculum_Kleber_Siqueira.pdf public/Curriculum_Kleber_Siqueira.pdf
```
