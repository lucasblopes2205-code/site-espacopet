import { Bath, Wind, Scissors, Ear, PawPrint } from 'lucide-react'

const steps = [
  {
    icon: Bath,
    number: '01',
    title: 'Banho',
    desc: 'Shampoo e condicionador premium adequados ao tipo e raça do pet.',
    color: '#F3E8FF',
    iconColor: '#7C3AED',
  },
  {
    icon: Wind,
    number: '02',
    title: 'Secagem',
    desc: 'Secagem cuidadosa com temperatura controlada e distância segura.',
    color: '#FCE7F3',
    iconColor: '#EC4899',
  },
  {
    icon: Scissors,
    number: '03',
    title: 'Tosa',
    desc: 'Escovação completa e corte conforme o padrão da raça do pet.',
    color: '#F3E8FF',
    iconColor: '#7C3AED',
  },
  {
    icon: Ear,
    number: '04',
    title: 'Higiene Completa',
    desc: 'Limpeza de ouvidos, corte de unhas e perfume finalizador.',
    color: '#FCE7F3',
    iconColor: '#EC4899',
  },
]

export default function Steps() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>

        {/* Cabeçalho */}
        <div style={styles.header}>
          <div style={styles.tag}>
            <PawPrint size={13} style={{ marginRight: 6 }} />
            Passo a passo
          </div>
          <h2 style={styles.title}>Conheça as etapas do banho</h2>
          <p style={styles.subtitle}>
            Cada etapa é realizada com cuidado e atenção para garantir
            o conforto e bem-estar do seu pet.
          </p>
        </div>

        {/* Steps */}
        <div style={styles.grid} className="steps-grid">

          {/* Linha conectora */}
          <div style={styles.connector} />

          {steps.map(({ icon: Icon, number, title, desc, color, iconColor }) => (
            <div key={number} style={styles.card}>

              {/* Número */}
              <div style={styles.number}>{number}</div>

              {/* Ícone */}
              <div style={{ ...styles.iconWrap, background: color }}>
                <Icon size={26} color={iconColor} strokeWidth={1.8} />
              </div>

              {/* Texto */}
              <h3 style={styles.cardTitle}>{title}</h3>
              <p style={styles.cardDesc}>{desc}</p>

            </div>
          ))}
        </div>

        {/* Banner inferior */}
        <div style={styles.banner} className="steps-banner">
          <div>
            <div style={styles.bannerTitle}>
              Quer um cuidado ainda mais completo?
            </div>
            <p style={styles.bannerSub}>
              Adicione hidratação, perfume ou tosa especial ao pacote do seu pet.
            </p>
          </div>
<a href="#servicos" style={styles.bannerBtn}>
  Ver pacotes completos →
</a>
 </div>

        <style>{`
          @media (max-width: 768px) {
            .steps-grid {
              grid-template-columns: 1fr 1fr !important;
            }
            .steps-banner {
              flex-direction: column !important;
              text-align: center !important;
              padding: 28px 20px !important;
            }
          }

          @media (max-width: 480px) {
            .steps-grid {
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
    marginBottom: '56px',
  },
  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #F3E8FF, #DDD6FE)',
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
    marginBottom: '12px',
    margin: '0 0 12px 0',
  },
  subtitle: {
    fontFamily: "'Nunito', sans-serif",
    color: '#6B7280',
    fontSize: '16px',
    lineHeight: 1.7,
    maxWidth: '480px',
    margin: '12px auto 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px',
    position: 'relative',
  },
  connector: {
    position: 'absolute',
    top: '44px',
    left: 'calc(12.5% + 8px)',
    width: '75%',
    height: '2px',
    background: 'linear-gradient(90deg, #7C3AED, #EC4899, #DDD6FE)',
    zIndex: 0,
  },
  card: {
    background: '#ffffff',
    borderRadius: '22px',
    padding: '28px 22px',
    border: '1.5px solid #DDD6FE',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
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
    width: '60px',
    height: '60px',
    borderRadius: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 18px',
  },
  cardTitle: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '18px',
    color: '#4C1D95',
    marginBottom: '8px',
    margin: '0 0 8px 0',
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
    background: 'linear-gradient(135deg, #4C1D95, #7C3AED)',
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
    fontSize: '22px',
    color: 'white',
    marginBottom: '6px',
  },
  bannerSub: {
    fontFamily: "'Nunito', sans-serif",
    color: '#C4B5FD',
    fontSize: '14px',
    margin: 0,
  },
bannerBtn: {
  background: 'linear-gradient(135deg, #EC4899, #F472B6)',
  color: 'white',
  border: 'none',
  fontFamily: "'Fredoka', sans-serif",
  fontWeight: '600',
  fontSize: '16px',
  padding: '13px 28px',
  borderRadius: '30px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  display: 'inline-block',
},
}