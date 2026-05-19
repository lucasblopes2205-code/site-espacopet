import { useState } from 'react'
import {
  Menu,
  X,
  Phone,
  PawPrint,
  Camera,
} from 'lucide-react'

const LINKS = [
  { label: 'Serviços',   href: '#servicos'   },
  { label: 'Promoções',  href: '#promocoes'  },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato',    href: '#contato'    },
]

const WHATSAPP_URL =
  'https://wa.me/5543991820171?text=Olá! Gostaria de agendar um banho e tosa para meu pet 🐾'

const INSTAGRAM_URL =
  'https://instagram.com/espacopetdamel'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={styles.navbar}>

        <div style={styles.container}>

          {/* LOGO */}
          <div style={styles.logo}>

            <div style={styles.logoIcon}>
              <PawPrint size={20} color="#4C1D95" />
            </div>
<div>
<h1 style={styles.logoTitle}>
  Espaço Pet{' '}
  <span style={{
    fontFamily: "'Dancing Script', cursive",
    color: '#EC4899',
    fontWeight: '700',
    fontStyle: 'italic',
  }}>
    da Mel
  </span>
</h1>

              <span style={styles.logoSubtitle}>
                BANHO & TOSA
              </span>
            </div>
          </div>

          {/* DESKTOP */}
          <div
            style={styles.desktopMenu}
            className="desktop-menu"
          >

            {/* LINKS */}
  {LINKS.map((item) => (
  <a
    key={item.label}
    href={item.href}
    style={styles.link}
  >
    {item.label}
  </a>
))}

            {/* INSTAGRAM */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              style={styles.iconButton}
            >
              <Camera size={18} />
            </a>

            {/* PHONE */}
            <a
              href="tel:+5543991820171"
              style={styles.phone}
            >
              <Phone size={16} />
              (43) 99182-0171
            </a>

            {/* BUTTON */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              Agendar
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={styles.mobileButton}
            className="mobile-button"
          >
            {menuOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div style={styles.mobileMenu}>

            {LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* PHONE */}
            <a
              href="tel:+5543991820171"
              style={styles.mobilePhone}
            >
              <Phone size={16} />
              (43) 99182-0171
            </a>

            {/* BUTTON */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              style={styles.mobileBtn}
            >
              Agendar Agora
            </a>
          </div>
        )}
      </nav>

      {/* RESPONSIVE */}
      <style>{`
        .mobile-button {
          display: none;
        }

        @media (max-width: 900px) {
          .desktop-menu {
            display: none !important;
          }

          .mobile-button {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}

const styles = {
  navbar: {
    position: 'sticky',
    top: 0,
    zIndex: 999,
    width: '100%',
    background: 'rgba(255,255,255,0.96)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(0,0,0,0.05)',
  },

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    height: '78px',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },

  logoIcon: {
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    background:
      'linear-gradient(135deg, #F9A8D4, #C084FC)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 20px rgba(192,132,252,0.35)',
  },

  logoTitle: {
    margin: 0,
    fontSize: '18px',
    fontWeight: '800',
    color: '#4C1D95',
    lineHeight: 1,
  },

  logoSubtitle: {
    color: '#A855F7',
    fontSize: '10px',
    fontWeight: '700',
    letterSpacing: '2px',
  },

  desktopMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },

  link: {
    textDecoration: 'none',
    color: '#4C1D95',
    fontSize: '14px',
    fontWeight: '600',
    transition: '0.2s',
  },

  iconButton: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#F3E8FF',
    color: '#7E22CE',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
  },

  phone: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    textDecoration: 'none',
    color: '#7E22CE',
    fontSize: '14px',
    fontWeight: '700',
  },

  button: {
    textDecoration: 'none',
    background:
      'linear-gradient(135deg, #EC4899, #A855F7)',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '14px',
    boxShadow: '0 10px 25px rgba(236,72,153,0.25)',
  },

  mobileButton: {
    display: 'none',
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    border: 'none',
    background: '#F3E8FF',
    color: '#4C1D95',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },

  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    padding: '24px',
    background: 'white',
    borderTop: '1px solid rgba(0,0,0,0.05)',
  },

  mobileLink: {
    textDecoration: 'none',
    color: '#4C1D95',
    fontSize: '15px',
    fontWeight: '700',
  },

  mobilePhone: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    color: '#A855F7',
    fontWeight: '700',
  },

  mobileBtn: {
    textDecoration: 'none',
    textAlign: 'center',
    background:
      'linear-gradient(135deg, #EC4899, #A855F7)',
    color: 'white',
    padding: '14px',
    borderRadius: '999px',
    fontWeight: '700',
    marginTop: '6px',
  },
}