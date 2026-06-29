import {
  Phone,
  Calendar,
  MapPin,
} from 'lucide-react'

const WHATSAPP_URL =
  'https://wa.me/5543991820171?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20para%20meu%20pet%20🐾'

const info = [
  {
    icon: Calendar,
    title: 'Agendamento online',
    desc: 'Pelo WhatsApp, 24h por dia',
    color: '#F3E8FF',
    iconColor: '#7C3AED',
  },

  {
    icon: Phone,
    title: '(43) 99182-0171',
desc: (
  <>
    Seg–Sex das 8h às 18h
    <br />
    Sáb das 8h às 16h
  </>
),
    color: '#FCE7F3',
    iconColor: '#EC4899',
  },

  {
    icon: MapPin,
    title: 'Visite nossa loja',
    desc: 'R. Cel. Emílio Gomes, 219 - Ribeirão Claro, PR, 86410-000',
    color: '#FEF3C7',
    iconColor: '#D97706',
    link: 'https://maps.google.com/?q=R.+Cel.+Emilio+Gomes,+219,+Ribeirao+Claro,+PR',
  },
]

export default function CTA() {
  return (
    <section
      id="contato"
      style={styles.section}
    >

      <div style={styles.container}>

        {/* HEADER */}
        <div style={styles.header}>

          <div style={styles.paw}>
            🐾
          </div>

          <div style={styles.tag}>
            💛 Bora mimar o pet?
          </div>

          <h2 style={styles.title}>
            Pronto para cuidar do seu melhor amigo?
          </h2>

          <p style={styles.subtitle}>
            Agende agora e garanta o melhor cuidado
            para o seu pet. Profissionais especializados,
            ambiente seguro e muito carinho.
          </p>

          {/* BUTTONS */}
          <div
            style={styles.buttons}
            className="cta-buttons"
          >

            {/* WHATSAPP */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.btnPrimary}
            >
              <Calendar
                size={16}
                style={{ marginRight: 8 }}
              />

              Agendar agora
            </a>

            {/* PHONE */}
            <a
              href="tel:+5543991820171"
              style={styles.btnOutline}
            >
              <Phone
                size={16}
                style={{ marginRight: 8 }}
              />

              Ligar agora
            </a>
          </div>
        </div>

        {/* INFO GRID */}
       <div style={styles.grid} className="cta-grid">
  {info.map((item) => {
    const Icon = item.icon

    const content = (
      <>
        <div
          style={{
            ...styles.iconWrap,
            background: item.color,
          }}
        >
          <Icon
            size={24}
            color={item.iconColor}
            strokeWidth={1.8}
          />
        </div>

        <div style={styles.cardTitle}>
          {item.title}
        </div>

        <div style={styles.cardDesc}>
          {item.desc}
        </div>
      </>
    )

    if (item.link) {
      return (
        <a
          key={item.title}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.card,
            textDecoration: 'none',
          }}
        >
          {content}
        </a>
      )
    }

    return (
      <div
        key={item.title}
        style={styles.card}
      >
        {content}
      </div>
    )
  })}
</div>
        {/* RESPONSIVE */}
        <style>{`
          @media (max-width: 768px) {
            .cta-grid {
              grid-template-columns: 1fr !important;
            }

            .cta-buttons {
              flex-direction: column !important;
              align-items: center !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}

const styles = {
  section: {
    background: '#ffffff',
    padding: '88px 24px',
  },

  container: {
    maxWidth: '1100px',
    margin: '0 auto',
  },

  header: {
    textAlign: 'center',
    maxWidth: '640px',
    margin: '0 auto 64px',
  },

  paw: {
    fontSize: '64px',
    marginBottom: '20px',
    display: 'block',
  },

  tag: {
    display: 'inline-block',
    background:
      'linear-gradient(135deg, #F3E8FF, #DDD6FE)',

    color: '#6D28D9',
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
    color: '#4C1D95',
    lineHeight: 1.2,
    margin: '0 0 16px 0',
  },

  subtitle: {
    fontFamily: "'Nunito', sans-serif",
    color: '#6B7280',
    fontSize: '17px',
    lineHeight: 1.75,
    margin: '0 0 36px 0',
  },

  buttons: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    background:
      'linear-gradient(135deg, #EC4899, #F472B6)',

    color: 'white',
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '17px',
    padding: '14px 36px',
    borderRadius: '30px',
    textDecoration: 'none',

    boxShadow:
      '0 10px 25px rgba(236,72,153,0.25)',
  },

  btnOutline: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: '#FAF5FF',
    border: '2px solid #DDD6FE',
    color: '#7C3AED',

    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '16px',

    padding: '13px 28px',
    borderRadius: '30px',
    textDecoration: 'none',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },

  card: {
    background: '#FAF5FF',
    borderRadius: '20px',
    padding: '28px 24px',
    border: '1.5px solid #DDD6FE',
    textAlign: 'center',

    transition:
      'transform 0.25s ease, box-shadow 0.25s ease',
  },

  iconWrap: {
    width: '56px',
    height: '56px',
    borderRadius: '16px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    margin: '0 auto 16px',
  },

  cardTitle: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '17px',
    color: '#4C1D95',
    marginBottom: '6px',
  },

  cardDesc: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: '13px',
    color: '#6B7280',
  },
}