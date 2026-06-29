import { Phone, Calendar, PawPrint } from 'lucide-react'


export default function Hero() {
  return (
    <section style={styles.hero}>

      {/* Background gradiente */}
      <div style={styles.background} />

      {/* Conteúdo */}
      <div style={styles.container} className="hero-container">

        {/* LEFT */}
        <div style={styles.left}>

          <div style={styles.badge}>
            <PawPrint size={14} />
            Seu pet, nossa estrela!
          </div>

          <h1 style={styles.title}>
            Banho & Tosa com
            <span style={styles.highlight}> amor e carinho</span>
          </h1>

          <p style={styles.subtitle}>
            Atendimento especializado para deixar seu pet feliz,
            cheiroso e saudável. Profissionais apaixonados por animais.
          </p>

          <div style={styles.buttons} className="hero-buttons">
            <a
  href="https://wa.me/5543991820171"
  target="_blank"
  rel="noreferrer"
  style={styles.primaryButton}
>
  <Calendar size={18} />
  Agendar agora
</a>
            <a href="tel:+5543991820171" style={styles.phoneButton}>
              <Phone size={18} />
              (43) 99182-0171
            </a>
          </div>

        </div>

        {/* RIGHT — Fachada */}
        <div style={styles.right}>

          <div style={styles.fachadaWrap}>

            <img
              src="/images/fachada.png"
              alt="Espaço Pet da Mel"
              style={styles.fachadaImg}
            />

            {/* Badge aberto agora */}
            <div style={styles.badgeAberto}>
              <span style={styles.badgeDot} />
              <span style={styles.badgeAbertoText}>
                Seg–Sex 8h às 18h | Sáb 8h às 16h
              </span>
            </div>


            {/* Badge instagram */}
            <a
  href="https://instagram.com/espacopetdamel"
  target="_blank"
  rel="noreferrer"
  style={styles.badgeInsta}
>
  <span style={styles.instaText}>
    @espacopetdamel
  </span>
</a>

          </div>
        </div>
      </div>

      {/* Onda */}
      <div style={styles.wave}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '80px', display: 'block' }}
        >
          <path
            d="M0,40 C300,80 1100,0 1440,40 L1440,80 L0,80 Z"
            fill="#FAF5FF"
          />
        </svg>
      </div>

<style>{`
  .hero-container {
    padding: 100px 20px 120px !important;
  }

  @media (max-width: 960px) {
    .hero-container {
      grid-template-columns: 1fr !important;
      text-align: center;
      padding: 80px 20px 100px !important;
    }

    .hero-container h1 {
      font-size: 42px !important;
    }

    .hero-buttons {
      justify-content: center;
    }

    .hero-stats {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .hero-container h1 {
      font-size: 34px !important;
    }
  }
`}</style>
    </section>
  )
}

const styles = {
  hero: {
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 50%, #EC4899 100%)',
  },
  background: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at top right, rgba(255,255,255,0.12), transparent 40%)',
  },
  container: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '120px 24px 140px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  left: {},
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(255,255,255,0.12)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: '#FBCFE8',
    padding: '8px 18px',
    borderRadius: '999px',
    fontSize: '13px',
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    marginBottom: '26px',
  },
  title: {
    color: 'white',
    fontSize: '62px',
    lineHeight: 1.05,
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '700',
    margin: '0 0 24px 0',
  },
  highlight: {
    color: '#F9A8D4',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.82)',
    fontFamily: "'Nunito', sans-serif",
    fontSize: '18px',
    lineHeight: 1.8,
    maxWidth: '520px',
    margin: '0 0 38px 0',
  },
  buttons: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    marginBottom: '48px',
  },
  primaryButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    border: 'none',
    background: 'linear-gradient(135deg, #EC4899, #F472B6)',
    color: 'white',
    padding: '15px 28px',
    borderRadius: '999px',
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(236,72,153,0.4)',
  },
  phoneButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    border: '2px solid rgba(255,255,255,0.35)',
    color: 'white',
    padding: '13px 24px',
    borderRadius: '999px',
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '15px',
  },
  stats: {
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap',
  },
  statCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  statValue: {
    color: '#F9A8D4',
    fontFamily: "'Fredoka', sans-serif",
    fontSize: '32px',
    fontWeight: '700',
    lineHeight: 1,
  },
  statLabel: {
    color: 'rgba(255,255,255,0.65)',
    fontFamily: "'Nunito', sans-serif",
    fontSize: '13px',
  },
  right: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fachadaWrap: {
    position: 'relative',
    width: '100%',
    maxWidth: '520px',
    borderRadius: '28px',
    overflow: 'hidden',
    boxShadow: '0 32px 80px rgba(0,0,0,0.45)',
  },
  fachadaImg: {
    width: '100%',
    height: '520px',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },
  badgeAberto: {
    position: 'absolute',
    top: '18px',
    left: '18px',
    background: 'rgba(255,255,255,0.96)',
    borderRadius: '999px',
    padding: '8px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
  },
  badgeDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#22C55E',
    flexShrink: 0,
    display: 'inline-block',
  },
  badgeAbertoText: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '12px',
    color: '#4C1D95',
  },
  badgeRating: {
    position: 'absolute',
    bottom: '18px',
    left: '18px',
    background: 'rgba(255,255,255,0.96)',
    borderRadius: '16px',
    padding: '10px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
  },
  ratingStars: {
    color: '#F59E0B',
    fontSize: '14px',
  },
  ratingText: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '12px',
    color: '#4C1D95',
  },
 badgeInsta: {
  position: 'absolute',
  bottom: '18px',
  right: '18px',
  background: 'linear-gradient(135deg, #EC4899, #7C3AED)',
  borderRadius: '16px',
  padding: '10px 16px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
  textDecoration: 'none',
},
  instaText: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '12px',
    color: 'white',
  },
  wave: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
}