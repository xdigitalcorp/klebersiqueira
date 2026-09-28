import { education, certifications } from '../data/resume'

export default function Education() {
  return (
    <section id="formacao" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-semibold text-ink">Formação acadêmica</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {education.map((e) => (
          <div key={e.title} className="border border-line bg-paper p-4">
            <p className="font-mono text-xs text-slate">{e.period}</p>
            <h3 className="mt-1 font-medium text-ink">{e.title}</h3>
            <p className="text-sm text-slate">{e.institution}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex items-baseline justify-between">
        <h3 className="text-lg font-semibold text-ink">Cursos & certificações</h3>
        <span className="font-mono text-xs text-slate">{certifications.length} certificações</span>
      </div>
      <ul className="mt-5 columns-1 gap-x-8 text-sm text-slate sm:columns-2">
        {certifications.map((c) => (
          <li key={c.title + c.issuer} className="mb-2.5 flex break-inside-avoid gap-2">
            <span aria-hidden className="mt-0.5 shrink-0 text-signal">›</span>
            <span>
              <span className="text-ink/80">{c.title}</span> — {c.issuer}{' '}
              <span className="font-mono text-xs text-slate/70">({c.date})</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
