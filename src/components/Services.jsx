import {
  CheckCircle,
  Bath,
  Scissors,
  Sparkles,
} from 'lucide-react'

const services = [
  {
    icon: Bath,
    title: 'Banho Básico',
    desc: 'Ideal para a higiene do dia a dia do seu pet.',
    color: '#F3E8FF',
    iconColor: '#7C3AED',
    whatsapp:
      'https://wa.me/5543991820171?text=Olá,%20gostaria%20de%20agendar%20um%20Banho%20Básico',
    items: [
      'Shampoo adequado ao tipo de pelo',
      'Condicionador hidratante',
      'Secagem completa',
      'Escovação leve',
    ],
  },

  {
    icon: Scissors,
    title: 'Banho & Tosa',
    desc: 'O pacote mais completo para deixar seu pet impecável.',
    color: '#FCE7F3',
    iconColor: '#EC4899',
    featured: true,
    whatsapp:
      'https://wa.me/5543991820171?text=Olá,%20gostaria%20de%20agendar%20Banho%20e%20Tosa',
    items: [
      'Tudo do Banho Básico',
      'Tosa higiênica ou no padrão',
      'Limpeza de ouvidos',
      'Corte de unhas',
    ],
  },

  {
    icon: Sparkles,
    title: 'Spa Premium',
    desc: 'Experiência de luxo para um pet ainda mais feliz.',
    color: '#FEF3C7',
    iconColor: '#F59E0B',
    whatsapp:
      'https://wa.me/5543991820171?text=Olá,%20gostaria%20de%20agendar%20Spa%20Premium',
    items: [
      'Tudo do Banho & Tosa',
      'Hidratação profunda',
      'Perfume especial',
      'Bandana temática',
    ],
  },
]

export default function Services() {
  return (
    <section
      id="servicos"
      style={styles.section}
    >
      <div style={styles.container}>

        {/* Header */}
        <div style={styles.header}>

          <div style={styles.tag}>
            💫 Nossos serviços
          </div>

          <h2 style={styles.title}>
            Pacotes para cada necessidade
          </h2>

          <p style={styles.subtitle}>
            Escolha o pacote ideal para o seu pet.
            Todos realizados por profissionais especializados
            com produtos de qualidade.
          </p>
        </div>

        {/* Grid */}
        <div
          style={styles.grid}
          className="services-grid"
        >

          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                style={{
                  ...styles.card,
                  border: service.featured
                    ? '2px solid #EC4899'
                    : '1.5px solid #DDD6FE',
                }}
              >

                {/* Badge */}
                {service.featured && (
                  <div style={styles.popularBadge}>
                    ⭐ MAIS POPULAR
                  </div>
                )}

                {/* Icon */}
                <div
                  style={{
                    ...styles.iconWrap,
                    background: service.color,
                  }}
                >
                  <Icon
                    size={26}
                    color={service.iconColor}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3 style={styles.cardTitle}>
                  {service.title}
                </h3>

                {/* Description */}
                <p style={styles.cardDesc}>
                  {service.desc}
                </p>

                {/* Items */}
                <div style={styles.itemsList}>
                  {service.items.map((item) => (
                    <div
                      key={item}
                      style={styles.item}
                    >

                      <CheckCircle
                        size={16}
                        color="#7C3AED"
                        style={{
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      />

                      <span style={styles.itemText}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={service.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.button}
                >
                  Agendar este pacote
                </a>
              </div>
            )
          })}
        </div>

        {/* Responsive */}
        <style>{`
          @media (max-width: 900px) {
            .services-grid {
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
    background: '#ffffff',
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
    maxWidth: '520px',
    margin: '0 auto',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },

  card: {
    background: '#ffffff',
    borderRadius: '24px',
    padding: '32px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    transition:
      'transform 0.25s ease, box-shadow 0.25s ease',
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
  },

  popularBadge: {
    position: 'absolute',
    top: '-14px',
    left: '50%',
    transform: 'translateX(-50%)',
    background:
      'linear-gradient(135deg, #EC4899, #F472B6)',
    color: 'white',
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '12px',
    padding: '5px 18px',
    borderRadius: '20px',
    whiteSpace: 'nowrap',
    boxShadow: '0 4px 12px rgba(236,72,153,0.35)',
  },

  iconWrap: {
    width: '60px',
    height: '60px',
    borderRadius: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },

  cardTitle: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '22px',
    color: '#4C1D95',
    margin: '0 0 8px 0',
  },

  cardDesc: {
    fontFamily: "'Nunito', sans-serif",
    color: '#6B7280',
    fontSize: '14px',
    lineHeight: 1.65,
    margin: '0 0 20px 0',
  },

  itemsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '24px',
    flexGrow: 1,
  },

  item: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
  },

  itemText: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: '14px',
    color: '#374151',
    lineHeight: 1.5,
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
    borderRadius: '16px',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
    boxSizing: 'border-box',
  },
}