import { skillGroups, languages } from '../data/resume'

export default function Skills() {
  return (
    <section id="habilidades" className="border-t border-line bg-ink/[0.03] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold text-ink">Habilidades & competências</h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs uppercase tracking-wide text-slate">
                {group.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-line bg-paper px-2.5 py-1 text-xs text-ink/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate">
          Idiomas: {languages.join(' · ')}
        </p>
      </div>
    </section>
  )
}
