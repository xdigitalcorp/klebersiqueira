import { experiences } from '../data/resume'

export default function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-semibold text-ink">Experiência profissional</h2>

      <ol className="mt-10 space-y-10 border-l border-line pl-8">
        {experiences.map((exp) => (
          <li key={exp.company + exp.period} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-signal" />
            <p className="font-mono text-xs text-slate">{exp.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-ink">
              {exp.role} <span className="font-normal text-slate">— {exp.company}</span>
            </h3>
            <p className="text-sm text-slate">{exp.contract}</p>
            <p className="mt-3 max-w-2xl text-slate">{exp.description}</p>
            <ul className="mt-3 space-y-1.5">
              {exp.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-ink/80">
                  <span aria-hidden className="text-signal">›</span>
                  {h}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
