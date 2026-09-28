const links = [
  { href: '#experiencia', label: 'Experiência' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#formacao', label: 'Formação' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#topo" className="font-semibold tracking-tight text-ink">
          Kleber Siqueira
        </a>
        <nav className="hidden gap-6 text-sm text-slate sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring rounded transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="/Curriculum_Kleber_Siqueira.pdf"
          download
          className="focus-ring rounded-sm border border-ink px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Baixar CV
        </a>
      </div>
    </header>
  )
}
