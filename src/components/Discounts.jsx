import {
  Bath,
  Scissors,
  Heart,
} from 'lucide-react'

const discounts = [
  {
    icon: Bath,
    percent: '15%',
    tag: 'Plano MEL BANHO',
    desc:
      'No pacote de 4 banhos para usar em até 4 meses. Economize e mantenha a higiene do pet sempre em dia.',
    featured: false,
    whatsapp:
      'https://wa.me/5543991820171?text=Olá,%20gostaria%20de%20aquirir%20o%20Plano%20Mel%20Banho.',
  },

  {
    icon: Scissors,
    percent: '20%',
    tag: 'Plano Mel Aparadinho',
    desc:
      'Pacote de 3 tosas para usar em até 6 meses. Seu pet sempre bonito e bem cuidado.',
    featured: true,
    whatsapp:
      'https://wa.me/5543991820171?text=Olá,%20gostaria%20de%20aquirir%20o%20Plano%20Mel%20Aparadinho.',
  },

  {
    icon: Heart,
    percent: '10%',
    tag: 'Plano Mel Bebê',
    desc:
      'Especial para filhotes de até 6 meses com atendimento delicado e cuidadoso.',
    featured: false,
    whatsapp:
      'https://wa.me/5543991820171?text=Olá,%20gostaria%20de%20adquirir%20o%20Plano%20Mel%20Bebê.',
  },
]

export default function Discounts() {
  return (
    <section
      id="promocoes"
      style={styles.section}
    >

      <div style={styles.circleTop} />
      <div style={styles.circleBottom} />

      <div style={styles.container}>

        {/* HEADER */}
        <div style={styles.header}>

          <div style={styles.tag}>
            🎉 Promoções especiais
          </div>

          <h2 style={styles.title}>
            Economize com nossas ofertas
          </h2>

          <p style={styles.subtitle}>
            Aproveite nossas promoções e cuide
            do seu pet gastando menos.
          </p>
        </div>

        {/* GRID */}
        <div
          style={styles.grid}
          className="discounts-grid"
        >

          {discounts.map((discount) => {
            const Icon = discount.icon

            return (
              <div
                key={discount.tag}
                style={{
                  ...styles.card,

                  border: discount.featured
                    ? '1.5px solid rgba(249,168,212,0.5)'
                    : '1px solid rgba(255,255,255,0.15)',

                  background: discount.featured
                    ? 'rgba(255,255,255,0.16)'
                    : 'rgba(255,255,255,0.08)',
                }}
              >

                {/* BADGE */}
                {discount.featured && (
                  <div style={styles.featuredBadge}>
                    ⭐ MAIS PROCURADO
                  </div>
                )}

                {/* ICON */}
                <div style={styles.iconWrap}>
                  <Icon
                    size={26}
                    color="#F9A8D4"
                    strokeWidth={1.8}
                  />
                </div>

                {/* PERCENT */}
                <div style={styles.percent}>
                  {discount.percent}
                </div>

                <div style={styles.off}>
                  OFF
                </div>

                {/* TAG */}
                <div style={styles.tagBadge}>
                  {discount.tag.toUpperCase()}
                </div>

                {/* DESCRIPTION */}
                <p style={styles.desc}>
                  {discount.desc}
                </p>

                {/* BUTTON */}
                <a
                  href={discount.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.button}
                >
                  Aproveitar oferta
                </a>
              </div>
            )
          })}
        </div>

        {/* FOOTER */}
        <p style={styles.footer}>
          * Promoções não cumulativas.
          Consulte condições completas em loja.
        </p>

        {/* RESPONSIVE */}
        <style>{`
          @media (max-width: 768px) {
            .discounts-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '88px 24px',
    background:
      'linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)',
    position: 'relative',
    overflow: 'hidden',
  },

  circleTop: {
    position: 'absolute',
    top: '-80px',
    right: '-80px',
    width: '320px',
    height: '320px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.04)',
  },

  circleBottom: {
    position: 'absolute',
    bottom: '-60px',
    left: '-60px',
    width: '260px',
    height: '260px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.04)',
  },

  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },

  header: {
    textAlign: 'center',
    marginBottom: '52px',
  },

  tag: {
    display: 'inline-block',
    background: 'rgba(245,158,11,0.2)',
    border: '1px solid rgba(251,191,36,0.3)',
    color: '#FDE68A',
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '14px',
    padding: '5px 16px',
    borderRadius: '20px',
    marginBottom: '16px',
  },

  title: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '40px',
    color: 'white',
    margin: '0 0 12px 0',
  },

  subtitle: {
    fontFamily: "'Nunito', sans-serif",
    color: '#C4B5FD',
    fontSize: '16px',
    lineHeight: 1.7,
    maxWidth: '440px',
    margin: '0 auto',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },

  /* ALTERAÇÃO PRINCIPAL */
  card: {
    borderRadius: '24px',
    padding: '36px 28px',
    textAlign: 'center',
    position: 'relative',
    backdropFilter: 'blur(10px)',

    display: 'flex',
    flexDirection: 'column',
  },

  featuredBadge: {
    position: 'absolute',
    top: '-14px',
    left: '50%',
    transform: 'translateX(-50%)',
    background:
      'linear-gradient(135deg, #EC4899, #F472B6)',
    color: 'white',
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '11px',
    padding: '4px 16px',
    borderRadius: '20px',
    whiteSpace: 'nowrap',
    boxShadow:
      '0 4px 12px rgba(236,72,153,0.35)',
  },

  iconWrap: {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
  },

  percent: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '700',
    fontSize: '64px',
    color: '#FCD34D',
    lineHeight: 1,
    marginBottom: '4px',
  },

  off: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '700',
    fontSize: '22px',
    color: 'white',
    marginBottom: '12px',
  },

  tagBadge: {
    display: 'inline-block',
    background: 'rgba(251,191,36,0.15)',
    border: '1px solid rgba(251,191,36,0.3)',
    color: '#FDE68A',
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '11px',
    padding: '3px 14px',
    borderRadius: '20px',
    letterSpacing: '1px',
    marginBottom: '16px',
  },

  /* ALTERAÇÃO PRINCIPAL */
  desc: {
    fontFamily: "'Nunito', sans-serif",
    color: '#C4B5FD',
    fontSize: '14px',
    lineHeight: 1.7,
    margin: '0 0 24px 0',

    flexGrow: 1,
  },

  button: {
    width: '100%',
    background:
      'linear-gradient(135deg, #EC4899, #F472B6)',
    color: 'white',
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '16px',
    padding: '13px',
    borderRadius: '14px',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
    boxSizing: 'border-box',
  },

  footer: {
    textAlign: 'center',
    marginTop: '36px',
    fontFamily: "'Nunito', sans-serif",
    color: '#A78BFA',
    fontSize: '13px',
  },
}