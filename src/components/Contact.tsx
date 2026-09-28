import { profile } from '../data/resume'

export default function Contact() {
  const whatsappDigits = profile.whatsapp.replace(/\D/g, '')

  return (
    <section id="contato" className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Vamos conversar</h2>
        <p className="mt-2 max-w-md text-paper/70">
          Aberto a novas oportunidades em gestão de projetos, liderança ágil e transformação digital.
        </p>

        <div className="mt-8 flex flex-col gap-3 text-sm sm:flex-row sm:gap-8">
          <a
            className="focus-ring rounded transition-colors hover:text-signal"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
          <a
            className="focus-ring rounded transition-colors hover:text-signal"
            href={`https://wa.me/55${whatsappDigits}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp: {profile.whatsapp}
          </a>
          <a
            className="focus-ring rounded transition-colors hover:text-signal"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-10 text-xs text-paper/40">
          {profile.city} · © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </section>
  )
}
