import { Phone, MapPin, Clock, Camera } from 'lucide-react'
import { Logo, Ornament } from './ui'
import { PHONE, PHONE_LABEL, INSTAGRAM_URL, whatsapp } from '../contact'

const footerLinks = {
  Serviços: [
    { label: 'Banho Clássico',  href: '#servicos' },
    { label: 'Banho Signature', href: '#servicos' },
    { label: 'Spa Day',         href: '#servicos' },
    { label: 'Planos',          href: '#planos' },
  ],
  Atendimento: [
    { label: 'Agendamento',   href: whatsapp('Olá, gostaria de realizar um agendamento'), external: true },
    { label: 'Cancelamentos', href: whatsapp('Olá, gostaria de realizar um cancelamento'), external: true },
    { label: 'Fale conosco',  href: whatsapp('Olá, gostaria de falar com vocês'), external: true },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo size={44} />
            <p>
              Banho e estética pet com carinho, técnica e produtos selecionados.
              Um espaço pensado para o bem-estar do seu melhor amigo.
            </p>
            <div className="footer__contact">
              <a href={`tel:+${PHONE}`}><Phone size={15} strokeWidth={1.6} /> {PHONE_LABEL}</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                <Camera size={15} strokeWidth={1.6} /> @espacopetdamel
              </a>
              <span><MapPin size={15} strokeWidth={1.6} /> R. Cel. Emílio Gomes, 219 · Ribeirão Claro, PR, 86410-000</span>
              <span><Clock size={15} strokeWidth={1.6} /> Seg – Sex 8h às 18h · Sáb 8h às 16h</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title} className="footer__col">
              <h4>{title}</h4>
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer__sign">
          <Ornament />
          <span>Ribeirão Claro · PR</span>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Espaço Pet da Mel. Todos os direitos reservados.</span>
          <span>Feito com amor para os pets</span>
        </div>
      </div>

      <style>{`
        .footer {
          position: relative;
          padding: 96px 0 32px;
          background: linear-gradient(180deg, var(--bg-2), #0A0310);
          border-top: 1px solid rgba(232, 194, 103, 0.2);
        }
        .footer__top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 56px;
        }
        .footer__brand p {
          margin: 20px 0 28px;
          max-width: 380px;
          font-size: 14px;
          color: var(--text-muted);
        }
        .footer__contact {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 13px;
          color: var(--text-soft);
        }
        .footer__contact > * {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer__contact svg { color: var(--gold); flex-shrink: 0; }
        .footer__contact a:hover { color: var(--gold-light); }
        .footer__col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer__col h4 {
          font-family: var(--sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 8px;
        }
        .footer__col a {
          font-size: 14px;
          color: var(--text-muted);
          transition: color 0.2s;
        }
        .footer__col a:hover { color: var(--text); }
        .footer__sign {
          margin: 72px 0 40px;
          text-align: center;
        }
        .footer__sign span {
          display: block;
          margin-top: 14px;
          font-size: 12px;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: var(--text-soft);
        }
        .footer__bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding-top: 24px;
          border-top: 1px solid rgba(232, 194, 103, 0.12);
          font-size: 12px;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .footer__top { grid-template-columns: 1fr 1fr; gap: 40px; }
          .footer__brand { grid-column: 1 / -1; }
          .footer__bottom { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  )
}
