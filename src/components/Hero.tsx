import { profile, keyMetrics } from '../data/resume'

export default function Hero() {
  return (
    <section id="topo" className="border-b border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-[1fr_auto] sm:items-center sm:py-24">
        <div>
          <p className="font-mono text-sm text-signal">Currículo & Portfólio</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 max-w-xl text-lg text-paper/70">
            {profile.titles.join(' · ')}
          </p>
          <p className="mt-6 max-w-xl text-paper/80">{profile.summary}</p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-paper/15 pt-8 sm:grid-cols-4">
            {keyMetrics.map((m) => (
              <div key={m.label}>
                <p className="font-mono text-2xl font-medium text-signal">{m.value}</p>
                <p className="mt-1 text-xs leading-snug text-paper/60">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        <img
          src="/kleber.jpg"
          alt={profile.name}
          className="h-32 w-32 justify-self-start rounded-full border-2 border-signal object-cover sm:h-40 sm:w-40 sm:justify-self-end"
        />
      </div>
    </section>
  )
}
