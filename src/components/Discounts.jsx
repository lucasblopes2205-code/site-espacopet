import { Bath, Scissors, Heart } from 'lucide-react'
import { SectionHeader } from './ui'
import { whatsapp } from '../contact'

const plans = [
  {
    icon: Bath,
    percent: '15',
    name: 'Mel',
    script: 'Banho',
    desc: 'Pacote de 4 banhos para usar em até 4 meses. A higiene do seu pet sempre em dia, com economia.',
  },
  {
    icon: Scissors,
    percent: '20',
    name: 'Mel',
    script: 'Aparadinho',
    featured: true,
    desc: 'Pacote de 3 tosas para usar em até 6 meses. Seu pet sempre elegante e bem cuidado.',
  },
  {
    icon: Heart,
    percent: '10',
    name: 'Mel',
    script: 'Bebê',
    desc: 'Especial para filhotes de até 6 meses, com um atendimento delicado e muito paciente.',
  },
]

export default function Discounts() {
  return (
    <section className="section section--alt" id="planos">
      <div className="sparkles" />

      <div className="container" style={{ position: 'relative' }}>
        <SectionHeader eyebrow="Clube Mel" title="Planos" script="exclusivos" scriptColor="magenta">
          Cuidado contínuo com condições especiais para quem faz parte da nossa família.
        </SectionHeader>

        <div className="plans">
          {plans.map(({ icon: Icon, percent, name, script, featured, desc }) => (
            <article
              key={script}
              className={`glow-card ${featured ? 'glow-card--gold' : ''} plan`}
            >
              {featured && <span className="menu__badge">Mais procurado</span>}

              <Icon size={26} strokeWidth={1.3} className="plan__icon" />

              <div className="plan__name">
                <span className="plan__label">Plano</span>
                {name} <span className="script--gold">{script}</span>
              </div>

              <div className="plan__percent">
                <span className="gold-text">{percent}</span>
                <small>
                  <span className="gold-text">%</span>
                  <em>off</em>
                </small>
              </div>

              <p>{desc}</p>

              <a
                href={whatsapp(`Olá! Gostaria de adquirir o Plano ${name} ${script}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn--block ${featured ? 'btn--gold' : 'btn--ghost'}`}
              >
                Quero este plano
              </a>
            </article>
          ))}
        </div>

        <p className="plans__note">
          * Planos não cumulativos. Consulte as condições completas no Espaço.
        </p>
      </div>

      <style>{`
        .plans {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .plan {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 48px 32px 36px;
        }
        .plan__icon {
          color: var(--gold);
          margin-bottom: 18px;
        }
        .plan__name {
          font-family: var(--serif);
          font-size: 26px;
          font-weight: 600;
          color: var(--text);
          line-height: 1.2;
        }
        .plan__name .script--gold { font-size: 1.45em; }
        .plan__label {
          display: block;
          font-family: var(--sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 6px;
        }
        .plan__percent {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          margin: 20px 0 16px;
          font-family: var(--serif);
          line-height: 0.9;
        }
        .plan__percent > span {
          font-size: 96px;
          font-weight: 700;
        }
        .plan__percent small {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-left: 4px;
          padding-top: 10px;
        }
        .plan__percent small > span {
          font-size: 40px;
          font-weight: 700;
        }
        .plan__percent em {
          font-family: var(--sans);
          font-style: normal;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--magenta);
          margin-top: 6px;
        }
        .plan p {
          font-size: 14px;
          color: var(--text-muted);
          flex-grow: 1;
          margin-bottom: 30px;
        }
        .plans__note {
          text-align: center;
          margin-top: 40px;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .plans {
            grid-template-columns: 1fr;
            max-width: 440px;
            margin: 0 auto;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  )
}
