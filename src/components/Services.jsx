import { Bath, Scissors, Sparkles } from 'lucide-react'
import { Ornament, Paw, SectionHeader } from './ui'
import { whatsapp } from '../contact'

const services = [
  {
    icon: Bath,
    title: 'Banho',
    script: 'Clássico',
    variant: 'magenta',
    items: [
      'Banho com condicionador hidratante',
      'Corte de unhas',
      'Perfume pet',
      'Bandana comum',
      'Cromoterapia',
    ],
  },
  {
    icon: Scissors,
    title: 'Banho',
    script: 'Signature',
    variant: 'gold',
    featured: true,
    items: [
      'Banho com shampoo premium',
      'Corte de unhas',
      'Tosa higiênica',
      'Limpeza superficial de ouvidos',
      'Hidratação da pelagem',
      'Perfume exclusivo pet',
      'Acessório premium',
      'Cromoterapia',
    ],
  },
  {
    icon: Sparkles,
    title: 'Spa',
    script: 'Day',
    variant: 'lilac',
    items: [
      'Banho com shampoo para o tipo de pelo',
      'Corte e lixamento de unhas',
      'Tosa higiênica',
      'Limpeza profunda de ouvidos',
      'Escovação de dentes (se possível)',
      'Máscara de hidratação profunda',
      'Perfume importado pet',
      'Cromoterapia',
      'Acessório exclusivo',
    ],
  },
]

export default function Services() {
  return (
    <section className="section section--alt" id="servicos">
      <div className="sparkles" />

      <div className="container" style={{ position: 'relative' }}>
        <SectionHeader eyebrow="Menu de serviços" title="Experiências" script="para cada pet">
          Três níveis de cuidado, do banho essencial ao dia de spa completo.
          Escolha a experiência ideal para o seu melhor amigo.
        </SectionHeader>

        <div className="menu">
          {services.map(({ icon: Icon, title, script, variant, featured, items }) => (
            <article
              key={script}
              className={`glow-card glow-card--${variant} menu__card ${featured ? 'menu__card--featured' : ''}`}
            >
              {featured && <span className="menu__badge">Mais escolhido</span>}

              <div className="menu__icon">
                <Icon size={featured ? 54 : 46} strokeWidth={1.1} />
              </div>

              <h3 className={`menu__title ${featured ? 'gold-text' : ''}`}>{title}</h3>
              <span className={`menu__script ${variant === 'magenta' ? 'script--magenta' : 'script--gold'}`}>
                {script}
              </span>

              <div className="menu__divider">
                <Ornament size={16} />
              </div>

              <ul className="paw-list menu__list">
                {items.map((item) => (
                  <li key={item}>
                    <Paw size={16} />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={whatsapp(`Olá! Gostaria de agendar o ${title} ${script} 🐾`)}
                target="_blank"
                rel="noreferrer"
                className={`btn btn--block ${featured ? 'btn--gold' : 'btn--ghost'}`}
              >
                Agendar
              </a>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .menu {
          display: grid;
          grid-template-columns: 1fr 1.08fr 1fr;
          gap: 28px;
          align-items: stretch;
        }
        .menu__card {
          display: flex;
          flex-direction: column;
          text-align: center;
          padding: 48px 32px 36px;
        }
        .menu__card--featured {
          padding-top: 60px;
          margin: -18px 0;
          background:
            radial-gradient(ellipse 90% 45% at 50% 0%, rgba(232, 194, 103, 0.16), transparent 70%),
            linear-gradient(180deg, rgba(38, 12, 50, 0.95), rgba(18, 5, 28, 0.97));
        }
        .menu__badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          padding: 7px 20px;
          border-radius: 999px;
          background: var(--gold-grad);
          color: #2A0E3A;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          white-space: nowrap;
          box-shadow: 0 6px 20px rgba(232, 194, 103, 0.35);
        }
        .menu__icon {
          color: var(--gold);
          display: flex;
          justify-content: center;
          margin-bottom: 22px;
          filter: drop-shadow(0 0 12px rgba(232, 194, 103, 0.45));
        }
        .menu__title {
          font-size: 50px;
          font-weight: 800;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          line-height: 1;
        }
        .menu__card--featured .menu__title { font-size: 56px; }
        .menu__script {
          display: block;
          font-size: 56px;
          line-height: 1.1;
          margin-top: -4px;
        }
        .menu__divider { margin: 18px 0 28px; }
        .menu__list {
          text-align: left;
          flex-grow: 1;
          margin-bottom: 36px;
        }

        @media (max-width: 960px) {
          .menu {
            grid-template-columns: 1fr;
            max-width: 460px;
            margin: 0 auto;
            gap: 44px;
          }
          .menu__card--featured { margin: 0; order: -1; }
        }
        @media (max-width: 480px) {
          .menu__card { padding: 44px 24px 28px; }
          .menu__title, .menu__card--featured .menu__title { font-size: 42px; }
          .menu__script { font-size: 48px; }
        }
      `}</style>
    </section>
  )
}
