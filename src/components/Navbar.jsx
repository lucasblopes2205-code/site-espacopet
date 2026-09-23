import { useEffect, useState } from 'react'
import { Menu, X, Phone, Camera } from 'lucide-react'
import { Logo } from './ui'
import { PHONE, PHONE_LABEL, INSTAGRAM_URL, whatsapp } from '../contact'

const LINKS = [
  { label: 'O Espaço', href: '#espaco'   },
  { label: 'Ritual',   href: '#ritual'   },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Planos',   href: '#planos'   },
  { label: 'Contato',  href: '#contato'  },
]

const WHATSAPP_URL = whatsapp('Olá! Gostaria de agendar um horário para meu pet 🐾')

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled || menuOpen ? 'nav--solid' : ''}`}>
      <div className="container nav__inner">
        <a href="#" className="nav__brand" aria-label="Espaço Pet da Mel — início">
          <Logo size={30} />
        </a>

        <div className="nav__links">
          {LINKS.map((item) => (
            <a key={item.label} href={item.href} className="nav__link">
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav__actions">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="nav__icon" aria-label="Instagram">
            <Camera size={17} strokeWidth={1.6} />
          </a>
          <a href={`tel:+${PHONE}`} className="nav__icon" aria-label={`Ligar ${PHONE_LABEL}`}>
            <Phone size={16} strokeWidth={1.6} />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn--gold nav__cta">
            Agendar
          </a>
        </div>

        <button
          className="nav__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="nav__mobile">
          {LINKS.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={`tel:+${PHONE}`} className="nav__mobile-phone">
            <Phone size={15} /> {PHONE_LABEL}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn--gold btn--block">
            Agendar horário
          </a>
        </div>
      )}

      <style>{`
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 999;
          transition: background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease;
          border-bottom: 1px solid transparent;
        }
        .nav--solid {
          background: rgba(15, 5, 24, 0.86);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom-color: rgba(232, 194, 103, 0.18);
        }
        .nav__inner {
          height: 84px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .logo { line-height: 1; white-space: nowrap; }
        .nav__links { display: flex; gap: 34px; }
        .nav__link {
          position: relative;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--text-soft);
          transition: color 0.2s;
        }
        .nav__link::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -8px;
          height: 1px;
          background: var(--gold);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .nav__link:hover { color: var(--gold-light); }
        .nav__link:hover::after { transform: scaleX(1); }
        .nav__actions { display: flex; align-items: center; gap: 12px; }
        .nav__icon {
          width: 40px; height: 40px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(232, 194, 103, 0.35);
          color: var(--gold);
          transition: background 0.2s;
        }
        .nav__icon:hover { background: rgba(232, 194, 103, 0.12); }
        .nav__cta { padding: 12px 24px; font-size: 11px; margin-left: 6px; }
        .nav__toggle {
          display: none;
          width: 44px; height: 44px;
          border-radius: 12px;
          border: 1px solid rgba(232, 194, 103, 0.35);
          color: var(--gold);
          align-items: center; justify-content: center;
        }
        .nav__mobile {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 12px 24px 28px;
          border-top: 1px solid rgba(232, 194, 103, 0.15);
        }
        .nav__mobile a:not(.btn) {
          font-size: 13px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--text-soft);
        }
        .nav__mobile .nav__mobile-phone {
          display: flex; align-items: center; gap: 8px;
          color: var(--gold) !important;
          letter-spacing: 0.08em !important;
        }
        @media (max-width: 1020px) {
          .nav__links, .nav__actions { display: none; }
          .nav__toggle { display: flex; }
          .nav__inner { height: 72px; }
        }
      `}</style>
    </nav>
  )
}
