import { Bath, Wind, Scissors, Sparkles } from 'lucide-react'
import { SectionHeader } from './ui'

const steps = [
  {
    icon: Bath,
    number: 'I',
    title: 'Banho',
    desc: 'Shampoo e condicionador premium escolhidos para o tipo de pelo e a raça do seu pet.',
  },
  {
    icon: Wind,
    number: 'II',
    title: 'Secagem',
    desc: 'Secagem cuidadosa, com temperatura controlada e distância segura.',
  },
  {
    icon: Scissors,
    number: 'III',
    title: 'Tosa',
    desc: 'Escovação completa e corte no padrão da raça ou do jeito que você preferir.',
  },
  {
    icon: Sparkles,
    number: 'IV',
    title: 'Finalização',
    desc: 'Limpeza de ouvidos, corte de unhas e perfume para o toque final.',
  },
]

export default function Steps() {
  return (
    <section className="section" id="ritual">
      <div className="container">
        <SectionHeader eyebrow="Passo a passo" title="O ritual" script="de cuidado" scriptColor="magenta">
          Cada etapa é feita com calma e atenção, pensando no conforto e no bem-estar do seu pet.
        </SectionHeader>

        <div className="ritual">
          {steps.map(({ icon: Icon, number, title, desc }) => (
            <div key={number} className="ritual__step">
              <div className="ritual__icon">
                <Icon size={28} strokeWidth={1.3} />
              </div>
              <span className="ritual__number">{number}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ritual {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        .ritual::before {
          content: '';
          position: absolute;
          top: 44px;
          left: 12%;
          right: 12%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232, 194, 103, 0.5), rgba(240, 64, 158, 0.5), rgba(232, 194, 103, 0.5), transparent);
        }
        .ritual__step {
          position: relative;
          text-align: center;
        }
        .ritual__icon {
          width: 88px;
          height: 88px;
          margin: 0 auto 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          background: radial-gradient(circle at 50% 30%, #2E0F44, #13051E);
          border: 1px solid rgba(232, 194, 103, 0.6);
          box-shadow: 0 0 28px rgba(232, 194, 103, 0.18), inset 0 0 20px rgba(166, 75, 223, 0.25);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .ritual__step:hover .ritual__icon {
          transform: translateY(-4px);
          box-shadow: 0 0 40px rgba(232, 194, 103, 0.35), inset 0 0 20px rgba(166, 75, 223, 0.35);
        }
        .ritual__number {
          display: block;
          font-family: var(--serif);
          font-size: 13px;
          letter-spacing: 0.3em;
          color: var(--magenta);
          margin-bottom: 8px;
        }
        .ritual__step h3 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .ritual__step p {
          font-size: 14px;
          color: var(--text-muted);
          max-width: 240px;
          margin: 0 auto;
        }

        @media (max-width: 860px) {
          .ritual { grid-template-columns: 1fr 1fr; row-gap: 56px; }
          .ritual::before { display: none; }
        }
        @media (max-width: 480px) {
          .ritual { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
