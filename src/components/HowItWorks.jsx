import {
  Clock,
  Heart,
  CheckCircle,
  Star,
  Phone,
} from 'lucide-react'

const WHATSAPP_URL =
  'https://wa.me/5543991820171?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20para%20meu%20pet%20🐾'

const steps = [
  {
    number: '01',
    icon: Clock,
    title: 'Agende um horário',
    desc:
      'Marque pelo site, WhatsApp ou ligue para nós. Escolha o melhor horário para sua rotina.',
    color: '#F3E8FF',
    iconColor: '#7C3AED',
  },

  {
    number: '02',
    icon: Heart,
    title: 'Traga seu pet ou buscamos',
    desc:
      'Você pode trazer seu pet até nossa loja ou solicitar busca em domicílio.',
    color: '#FCE7F3',
    iconColor: '#EC4899',
  },

  {
    number: '03',
    icon: CheckCircle,
    title: 'Check-in personalizado',
    desc:
      'Confirmamos todos os cuidados necessários antes do atendimento.',
    color: '#F3E8FF',
    iconColor: '#7C3AED',
  },

  {
    number: '04',
    icon: Star,
    title: 'Retire ou receba em casa',
    desc:
      'Seu pet volta limpo, cheiroso e feliz com toda praticidade.',
    color: '#FCE7F3',
    iconColor: '#EC4899',
  },
]

export default function HowItWorks() {
  return (
    <section style={styles.section}>

      <div style={styles.container}>

        {/* HEADER */}
        <div style={styles.header}>

          <div style={styles.tag}>
            🗓 Simples assim
          </div>

          <h2 style={styles.title}>
            Como funciona o atendimento
          </h2>

          <p style={styles.subtitle}>
            Em apenas 4 passos seu pet recebe
            todo o carinho e cuidado que merece.
          </p>
        </div>

        {/* GRID */}
        <div
          style={styles.grid}
          className="how-grid"
        >

          {steps.map((step) => {
            const Icon = step.icon

            return (
              <div
                key={step.number}
                style={styles.card}
              >

                <div style={styles.number}>
                  {step.number}
                </div>

                <div
                  style={{
                    ...styles.iconWrap,
                    background: step.color,
                  }}
                >
                  <Icon
                    size={24}
                    color={step.iconColor}
                    strokeWidth={1.8}
                  />
                </div>

                <h3 style={styles.cardTitle}>
                  {step.title}
                </h3>

                <p style={styles.cardDesc}>
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* BANNER */}
        <div
          style={styles.banner}
          className="how-banner"
        >

          {/* Left */}
          <div>

            <div style={styles.bannerTitle}>
              Pronto para agendar?
            </div>

            <p style={styles.bannerSub}>
              Atendimento de segunda a sábado,
              com horários flexíveis e serviço
              de busca e entrega sob consulta.
            </p>
          </div>

          {/* Buttons */}
          <div
            style={styles.bannerButtons}
            className="how-banner-buttons"
          >

            {/* WhatsApp */}
            <a
  href={WHATSAPP_URL}
  target="_blank"
  rel="noopener noreferrer"
  style={styles.btnPrimary}
>
  Agendar agora →
</a>

            {/* Phone */}
            <a
              href="tel:+5543991820171"
              style={styles.btnOutline}
            >
              <Phone
                size={15}
                style={{ marginRight: 6 }}
              />

              (43) 99182-0171
            </a>
          </div>
        </div>

        {/* RESPONSIVE */}
        <style>{`
          @media (max-width: 768px) {
            .how-grid {
              grid-template-columns: 1fr 1fr !important;
            }

            .how-banner {
              flex-direction: column !important;
              text-align: center !important;
              padding: 28px 20px !important;
            }

            .how-banner-buttons {
              justify-content: center !important;
              width: 100% !important;
            }
          }

          @media (max-width: 480px) {
            .how-grid {
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
    background: '#FAF5FF',
    padding: '88px 24px',
  },

  container: {
    maxWidth: '1100px',
    margin: '0 auto',
  },

  header: {
    textAlign: 'center',
    marginBottom: '52px',
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
    margin: '0 0 12px 0',
  },

  subtitle: {
    fontFamily: "'Nunito', sans-serif",
    color: '#6B7280',
    fontSize: '16px',
    lineHeight: 1.7,
    maxWidth: '500px',
    margin: '0 auto',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
  },

  card: {
    background: '#ffffff',
    borderRadius: '22px',
    padding: '28px 22px',
    border: '1.5px solid #DDD6FE',
    textAlign: 'center',
    boxShadow: '0 8px 20px rgba(0,0,0,0.04)',
  },

  number: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '700',
    fontSize: '44px',
    color: '#DDD6FE',
    lineHeight: 1,
    marginBottom: '14px',
  },

  iconWrap: {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 18px',
  },

  cardTitle: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '17px',
    color: '#4C1D95',
    margin: '0 0 10px 0',
    lineHeight: 1.3,
  },

  cardDesc: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: '13px',
    color: '#6B7280',
    lineHeight: 1.7,
    margin: 0,
  },

  banner: {
    marginTop: '48px',
    background:
      'linear-gradient(135deg, #4C1D95, #7C3AED)',
    borderRadius: '24px',
    padding: '36px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '24px',
    flexWrap: 'wrap',
  },

  bannerTitle: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '24px',
    color: 'white',
    marginBottom: '8px',
  },

  bannerSub: {
    fontFamily: "'Nunito', sans-serif",
    color: '#C4B5FD',
    fontSize: '14px',
    lineHeight: 1.6,
    margin: 0,
    maxWidth: '480px',
  },

  bannerButtons: {
    display: 'flex',
    gap: '14px',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  btnPrimary: {
    background:
      'linear-gradient(135deg, #EC4899, #F472B6)',
    color: 'white',
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '16px',
    padding: '13px 28px',
    borderRadius: '30px',
    textDecoration: 'none',
    display: 'inline-block',
    whiteSpace: 'nowrap',
  },

  btnOutline: {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'transparent',
    border: '2px solid rgba(255,255,255,0.4)',
    color: 'white',
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '15px',
    padding: '12px 22px',
    borderRadius: '30px',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  },
}