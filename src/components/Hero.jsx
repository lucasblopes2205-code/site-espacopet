import { Phone, Camera } from 'lucide-react'
import { Ornament } from './ui'
import { PHONE, PHONE_LABEL, INSTAGRAM_URL, whatsapp } from '../contact'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__glow" />
      <div className="sparkles" />

      <div className="container hero__grid">
        <div className="hero__text">
          <span className="eyebrow">Banho &amp; Estética Pet</span>

          <h1 className="hero__title">
            A arte de cuidar
            <span className="script--gold hero__script">do seu pet</span>
          </h1>

          <p className="hero__lead">
            Uma experiência de beleza e bem-estar pensada nos mínimos detalhes.
            Produtos premium, mãos experientes e um ambiente acolhedor para
            quem faz parte da sua família.
          </p>

          <div className="hero__buttons">
            <a
              href={whatsapp('Olá! Gostaria de agendar uma experiência para meu pet 🐾')}
              target="_blank"
              rel="noreferrer"
              className="btn btn--gold"
            >
              Agendar experiência
            </a>
            <a href={`tel:+${PHONE}`} className="btn btn--ghost">
              <Phone size={15} strokeWidth={1.8} />
              {PHONE_LABEL}
            </a>
          </div>

          <div className="hero__meta">
            <div>
              <strong>Seg – Sex</strong>
              <span>8h às 18h</span>
            </div>
            <div className="hero__meta-sep" />
            <div>
              <strong>Sábado</strong>
              <span>8h às 16h</span>
            </div>
            <div className="hero__meta-sep" />
            <div>
              <strong>Ribeirão Claro</strong>
              <span>Paraná</span>
            </div>
            <div className="hero__meta-sep" />
            <div>
              <strong>Santa Cruz do Rio Pardo</strong>
              <span>São Paulo</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="photo-frame hero__frame">
            <img src="/images/fachada.png" alt="Fachada do Espaço Pet da Mel" />
          </div>


          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="pill hero__pill-bottom">
            <Camera size={14} strokeWidth={1.6} />
            @espacopetdamel
          </a>
        </div>
      </div>

      <div className="hero__bottom">
        <Ornament />
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 140px 0 70px;
          overflow: hidden;
          background:
            radial-gradient(ellipse 60% 70% at 85% 30%, rgba(166, 75, 223, 0.28), transparent 70%),
            radial-gradient(ellipse 50% 60% at 5% 90%, rgba(240, 64, 158, 0.16), transparent 70%),
            linear-gradient(180deg, #0F0518 0%, #1A0828 55%, #0F0518 100%);
        }
        .hero__glow {
          position: absolute;
          width: 700px; height: 700px;
          right: -200px; top: -120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232, 194, 103, 0.10), transparent 65%);
          pointer-events: none;
        }
        .hero__grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 72px;
          align-items: center;
        }
        .hero__title {
          font-size: clamp(44px, 6.4vw, 78px);
          font-weight: 700;
          letter-spacing: -0.01em;
          margin: 26px 0 0;
        }
        .hero__script {
          display: block;
          font-size: 1.22em;
          line-height: 1.05;
          margin-top: 4px;
        }
        .hero__lead {
          margin: 28px 0 0;
          max-width: 520px;
          font-size: 17px;
          font-weight: 300;
          color: var(--text-soft);
        }
        .hero__buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 40px;
        }
        .hero__meta {
          display: flex;
          align-items: center;
          gap: 22px;
          margin-top: 52px;
          padding-top: 28px;
          border-top: 1px solid rgba(232, 194, 103, 0.18);
          max-width: 640px;
        }
        .hero__meta strong {
          display: block;
          font-family: var(--serif);
          font-size: 17px;
          font-weight: 600;
          color: var(--gold-light);
          white-space: nowrap;
        }
        .hero__meta span {
          white-space: nowrap;
          font-size: 13px;
          color: var(--text-muted);
          letter-spacing: 0.06em;
        }
        .hero__meta-sep {
          width: 1px;
          height: 36px;
          background: rgba(232, 194, 103, 0.3);
        }
        .hero__visual {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .hero__frame {
          width: 100%;
          max-width: 440px;
          height: 560px;
        }
        .hero__pill-bottom {
          position: absolute;
          bottom: 40px;
          right: -10px;
        }
        .hero__bottom {
          position: relative;
          z-index: 2;
          margin-top: 64px;
        }

        @media (max-width: 1240px) {
          .hero__meta {
            display: grid;
            grid-template-columns: auto auto;
            justify-content: start;
            gap: 20px 56px;
          }
          .hero__meta-sep { display: none; }
        }
        @media (max-width: 960px) {
          .hero { padding: 120px 0 56px; }
          .hero__grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 56px;
          }
          .hero__lead, .hero__meta { margin-left: auto; margin-right: auto; }
          .hero__buttons, .hero__meta { justify-content: center; }
          /* No celular a moldura segue a proporção da foto (3:4) e o arco fica mais suave, sem cortar a fachada */
          .hero__frame {
            height: auto;
            max-width: 380px;
            aspect-ratio: 3 / 4;
            border-radius: 50% 50% 24px 24px / 22% 22% 24px 24px;
          }
          .hero__frame img {
            border-radius: 50% 50% 16px 16px / 21% 21% 16px 16px;
          }
          .hero__pill-bottom { right: 0; }
        }
        @media (max-width: 480px) {
          .hero__meta { gap: 18px 28px; }
          .hero__meta strong { font-size: 15px; }
          .hero__meta span { font-size: 12px; }
          .hero__buttons .btn { width: 100%; }
          .hero__pill-bottom { font-size: 11px; }
        }
      `}</style>
    </section>
  )
}
