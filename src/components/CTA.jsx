import { Phone, Clock, MapPin } from 'lucide-react'
import { Ornament } from './ui'
import { PHONE, PHONE_LABEL, whatsapp } from '../contact'

const MAPS_URL = 'https://maps.google.com/?q=R.+Cel.+Emilio+Gomes,+219,+Ribeirao+Claro,+PR'

const info = [
  {
    icon: Phone,
    title: PHONE_LABEL,
    desc: 'WhatsApp e telefone',
    link: `tel:+${PHONE}`,
  },
  {
    icon: Clock,
    title: 'Horários',
    desc: (
      <>
        Seg – Sex · 8h às 18h
        <br />
        Sábado · 8h às 16h
      </>
    ),
  },
  {
    icon: MapPin,
    title: 'Visite o Espaço',
    desc: 'R. Cel. Emílio Gomes, 219 · Ribeirão Claro, PR',
    link: MAPS_URL,
    external: true,
  },
]

export default function CTA() {
  return (
    <section className="section cta" id="contato">
      <div className="cta__glow" />
      <div className="sparkles" />

      <div className="container" style={{ position: 'relative' }}>
        <div className="cta__head">
          <span className="eyebrow">Reserve seu horário</span>
          <h2>
            Seu pet merece
            <span className="script--gold">o melhor</span>
          </h2>
          <Ornament />
          <p>
            Profissionais dedicados, produtos selecionados e um ambiente
            tranquilo. Agende agora e proporcione uma experiência única ao seu melhor amigo.
          </p>
          <div className="cta__buttons">
            <a
              href={whatsapp('Olá! Gostaria de agendar um horário para meu pet 🐾')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold"
            >
              Agendar pelo WhatsApp
            </a>
            <a href={`tel:+${PHONE}`} className="btn btn--ghost">
              <Phone size={15} strokeWidth={1.8} />
              Ligar agora
            </a>
          </div>
        </div>

        <div className="cta__grid">
          {info.map(({ icon: Icon, title, desc, link, external }) => {
            const content = (
              <>
                <div className="cta__icon">
                  <Icon size={22} strokeWidth={1.4} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </>
            )
            return link ? (
              <a
                key={title}
                href={link}
                className="cta__card"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {content}
              </a>
            ) : (
              <div key={title} className="cta__card">{content}</div>
            )
          })}
        </div>
      </div>

      <style>{`
        .cta {
          background:
            radial-gradient(ellipse 60% 55% at 50% 30%, rgba(240, 64, 158, 0.16), transparent 70%),
            var(--bg);
        }
        .cta__glow {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 900px;
          height: 500px;
          background: radial-gradient(ellipse, rgba(166, 75, 223, 0.18), transparent 65%);
          pointer-events: none;
        }
        .cta__head {
          text-align: center;
          max-width: 660px;
          margin: 0 auto 72px;
        }
        .cta__head h2 {
          font-size: clamp(38px, 5.4vw, 60px);
          margin: 20px 0 18px;
        }
        .cta__head h2 .script--gold {
          display: block;
          font-size: 1.3em;
          line-height: 1.1;
        }
        .cta__head p {
          margin: 24px auto 0;
          color: var(--text-muted);
          font-size: 16px;
          max-width: 540px;
        }
        .cta__buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 40px;
        }
        .cta__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .cta__card {
          display: block;
          text-align: center;
          padding: 36px 24px;
          border-radius: 22px;
          background: rgba(30, 9, 44, 0.55);
          border: 1px solid rgba(232, 194, 103, 0.22);
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .cta__card:hover {
          border-color: rgba(232, 194, 103, 0.6);
          box-shadow: 0 0 30px rgba(232, 194, 103, 0.12);
          transform: translateY(-4px);
        }
        .cta__icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          border: 1px solid rgba(232, 194, 103, 0.45);
        }
        .cta__card h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .cta__card p {
          font-size: 14px;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .cta__grid { grid-template-columns: 1fr; }
          .cta__buttons .btn { width: 100%; }
        }
      `}</style>
    </section>
  )
}
