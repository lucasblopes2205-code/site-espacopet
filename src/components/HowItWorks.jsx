import { CalendarHeart, Car, ClipboardCheck, Home, Phone } from 'lucide-react'
import { SectionHeader } from './ui'
import { PHONE, PHONE_LABEL, whatsapp } from '../contact'

const steps = [
  {
    number: '01',
    icon: CalendarHeart,
    title: 'Agende seu horário',
    desc: 'Pelo WhatsApp ou por telefone, no horário que encaixa na sua rotina.',
  },
  {
    number: '02',
    icon: Car,
    title: 'Traga ou buscamos',
    desc: 'Traga seu pet até o Espaço ou peça a busca em domicílio.',
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Check-in personalizado',
    desc: 'Conversamos sobre as preferências e necessidades do seu pet antes de começar.',
  },
  {
    number: '04',
    icon: Home,
    title: 'Retire ou receba em casa',
    desc: 'Seu pet volta limpo, perfumado e feliz, do jeito que você preferir.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Atendimento" title="Como funciona" script="a experiência">
          Em quatro passos seu pet recebe todo o cuidado que merece, sem complicação.
        </SectionHeader>

        <div className="how">
          {steps.map(({ number, icon: Icon, title, desc }) => (
            <div key={number} className="how__card">
              <span className="how__number gold-text">{number}</span>
              <Icon size={24} strokeWidth={1.4} className="how__icon" />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <div className="glow-card glow-card--gold how__banner">
          <div>
            <h3>
              Pronto para <span className="script--gold">agendar?</span>
            </h3>
            <p>
              Atendimento de segunda a sábado, com hora marcada e serviço de
              busca e entrega sob consulta.
            </p>
          </div>
          <div className="how__buttons">
            <a
              href={whatsapp('Olá! Gostaria de agendar um horário para meu pet 🐾')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold"
            >
              Agendar agora
            </a>
            <a href={`tel:+${PHONE}`} className="btn btn--ghost">
              <Phone size={15} strokeWidth={1.8} />
              {PHONE_LABEL}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .how {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .how__card {
          position: relative;
          padding: 34px 26px;
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(38, 12, 56, 0.55), rgba(20, 6, 30, 0.5));
          border: 1px solid rgba(214, 166, 245, 0.16);
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .how__card:hover {
          border-color: rgba(232, 194, 103, 0.5);
          transform: translateY(-4px);
        }
        .how__number {
          display: block;
          font-family: var(--serif);
          font-size: 46px;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 22px;
        }
        .how__icon {
          position: absolute;
          top: 36px;
          right: 26px;
          color: var(--magenta);
        }
        .how__card h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
          line-height: 1.25;
        }
        .how__card p {
          font-size: 14px;
          color: var(--text-muted);
        }
        .how__banner {
          margin-top: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding: 44px 48px;
        }
        .how__banner:hover { transform: none; }
        .how__banner h3 {
          font-size: 34px;
          font-weight: 600;
        }
        .how__banner h3 .script--gold { font-size: 1.3em; }
        .how__banner p {
          margin-top: 10px;
          color: var(--text-muted);
          max-width: 460px;
          font-size: 15px;
        }
        .how__buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        @media (max-width: 960px) {
          .how { grid-template-columns: 1fr 1fr; }
          .how__banner {
            flex-direction: column;
            text-align: center;
            padding: 40px 28px;
          }
          .how__banner p { margin-left: auto; margin-right: auto; }
          .how__buttons { justify-content: center; }
        }
        @media (max-width: 560px) {
          .how { grid-template-columns: 1fr; }
          .how__buttons .btn { width: 100%; }
          .how__banner h3 { font-size: 28px; }
        }
      `}</style>
    </section>
  )
}
