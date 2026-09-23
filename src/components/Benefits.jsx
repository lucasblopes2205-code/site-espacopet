import { ShieldCheck } from 'lucide-react'
import { Paw } from './ui'

const items = [
  'O banho é um aliado no tratamento de doenças de pele nos pets.',
  'A tosa higiênica facilita a limpeza do pet e evita a contaminação do ambiente.',
  'A escovação do pelo reduz a queda habitual e elimina os nós.',
  'O banho ajuda a manter a pelagem bem cuidada e evita maus cheiros.',
]

export default function Benefits() {
  return (
    <section className="section section--alt" id="espaco">
      <div className="sparkles" />

      <div className="container benefits">
        <div className="benefits__visual">
          <div className="benefits__frame">
            <img src="/images/benefits.jpg" alt="Pet recebendo cuidados no Espaço Pet da Mel" />
          </div>

          <div className="benefits__badge">
            <ShieldCheck size={22} strokeWidth={1.5} />
            <div>
              <strong>Indicado por veterinários</strong>
              <span>Cuidado preventivo e seguro</span>
            </div>
          </div>
        </div>

        <div className="benefits__text">
          <span className="eyebrow">Saúde &amp; Bem-estar</span>

          <h2 className="benefits__title">
            Beleza que começa
            <span className="script--magenta">pela saúde</span>
          </h2>

          <p className="benefits__lead">
            A higiene regular é recomendada por veterinários: previne doenças,
            protege pets e humanos e garante mais qualidade de vida para toda a família.
          </p>

          <ul className="paw-list">
            {items.map((item) => (
              <li key={item}>
                <Paw size={18} />
                {item}
              </li>
            ))}
          </ul>

          <a href="#servicos" className="btn btn--ghost benefits__btn">
            Conhecer o menu de serviços
          </a>
        </div>
      </div>

      <style>{`
        .benefits {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .benefits__visual { position: relative; }
        .benefits__frame {
          position: relative;
          border-radius: var(--radius);
          overflow: hidden;
          height: 520px;
          border: 1.5px solid rgba(240, 64, 158, 0.6);
          box-shadow: 0 0 40px rgba(240, 64, 158, 0.25), 0 30px 80px rgba(0, 0, 0, 0.55);
        }
        .benefits__frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 55%, rgba(15, 5, 24, 0.7));
        }
        .benefits__frame img { width: 100%; height: 100%; object-fit: cover; }
        .benefits__badge {
          position: absolute;
          left: 50%;
          bottom: -28px;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 24px;
          border-radius: 18px;
          background: rgba(20, 6, 30, 0.95);
          border: 1px solid rgba(232, 194, 103, 0.5);
          box-shadow: 0 0 30px rgba(232, 194, 103, 0.18);
          color: var(--gold);
          white-space: nowrap;
          z-index: 2;
        }
        .benefits__badge strong {
          display: block;
          font-family: var(--serif);
          font-size: 16px;
          font-weight: 600;
          color: var(--text);
        }
        .benefits__badge span { font-size: 12px; color: var(--text-muted); }
        .benefits__title {
          font-size: clamp(34px, 4.6vw, 50px);
          margin: 20px 0 0;
        }
        .benefits__title .script--magenta {
          display: block;
          font-size: 1.25em;
          line-height: 1.1;
        }
        .benefits__lead {
          margin: 24px 0 32px;
          color: var(--text-muted);
          font-size: 16px;
        }
        .benefits__btn { margin-top: 40px; }

        @media (max-width: 860px) {
          .benefits { grid-template-columns: 1fr; gap: 72px; }
          .benefits__frame { height: 380px; }
          .benefits__text { text-align: center; }
          .benefits__text .paw-list { text-align: left; max-width: 480px; margin: 0 auto; }
        }
        @media (max-width: 480px) {
          .benefits__badge { padding: 14px 18px; }
          .benefits__badge strong { font-size: 14px; }
          .benefits__btn { width: 100%; white-space: normal; }
        }
      `}</style>
    </section>
  )
}
