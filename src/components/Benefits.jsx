import { CheckCircle, Star } from 'lucide-react'

const items = [
  'O banho é um aliado no tratamento de doenças de pele nos pets.',
  'A tosa higiênica facilita a limpeza do pet e evita a contaminação do ambiente.',
  'A escovação do pelo reduz a queda habitual e elimina os nós.',
  'O banho ajuda a manter a pelagem bem cuidada e evita maus cheiros.',
]

export default function Benefits() {
  return (
    <section style={styles.section}>
      <div style={styles.container} className="benefits-container">

        {/* Imagem */}
        <div style={styles.imageWrap}>
          <div style={styles.imageBg} className="benefits-image">

            <img
              src="/images/benefits.jpg"
              alt="Cuidado com o pet"
              style={styles.photo}
            />

            {/* Badge inferior */}
            <div style={styles.badgeBottom}>
              <Star size={18} color="#F59E0B" fill="#F59E0B" />
              <div>
                <div style={styles.badgeTitle}>Indicado por veterinários</div>
                <div style={styles.badgeSub}>Cuidado preventivo certificado</div>
              </div>
            </div>

            {/* Badge superior */}
            <div style={styles.badgeTop}>
              <div style={styles.badgeTopNumber}>100%</div>
              <div style={styles.badgeTopLabel}>SEGURO</div>
            </div>

          </div>
        </div>

        {/* Texto */}
        <div style={styles.content}>

          <div style={styles.tag}>
            🩺 Saúde em primeiro lugar
          </div>

          <h2 style={styles.title}>
            A higiene do pet é indicada por veterinários
          </h2>

          <p style={styles.subtitle}>
            Com cuidados preventivos, a higiene reduz a transmissão de
            doenças para pets e humanos, garantindo mais saúde e qualidade
            de vida para toda a família.
          </p>

          {items.map((item, i) => (
            <div key={i} style={styles.checkItem}>
              <CheckCircle
                size={20}
                color="#7C3AED"
                style={{ flexShrink: 0, marginTop: 2 }}
              />
              <span style={styles.checkText}>{item}</span>
            </div>
          ))}

<a
  href="#servicos"
  style={styles.button}
>
  Conhecer nossos serviços →
</a>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .benefits-container {
            grid-template-columns: 1fr !important;
          }
          .benefits-image {
            height: 280px !important;
          }
        }
      `}</style>
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
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '64px',
    alignItems: 'center',
  },
  imageWrap: {
    position: 'relative',
  },
  imageBg: {
    width: '100%',
    height: '420px',
    borderRadius: '28px',
    background: 'linear-gradient(135deg, #7C3AED, #EC4899)',
    position: 'relative',
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '28px',
    display: 'block',
  },
  badgeBottom: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    background: 'rgba(255,255,255,0.97)',
    borderRadius: '16px',
    padding: '12px 18px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
  },
  badgeTitle: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '700',
    fontSize: '13px',
    color: '#4C1D95',
    margin: 0,
  },
  badgeSub: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: '11px',
    color: '#6B7280',
    margin: 0,
  },
  badgeTop: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
    borderRadius: '14px',
    padding: '10px 16px',
    textAlign: 'center',
    boxShadow: '0 4px 16px rgba(245,158,11,0.4)',
  },
  badgeTopNumber: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '700',
    fontSize: '22px',
    color: '#4C1D95',
    lineHeight: 1,
    margin: 0,
  },
  badgeTopLabel: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '700',
    fontSize: '10px',
    color: '#78350f',
    letterSpacing: '1px',
    margin: 0,
  },
  content: {},
  tag: {
    display: 'inline-block',
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
    fontSize: '38px',
    color: '#4C1D95',
    lineHeight: 1.2,
    marginBottom: '16px',
    margin: '0 0 16px 0',
  },
  subtitle: {
    fontFamily: "'Nunito', sans-serif",
    color: '#6B7280',
    fontSize: '16px',
    lineHeight: 1.75,
    marginBottom: '28px',
    margin: '0 0 28px 0',
  },
  checkItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    marginBottom: '12px',
  },
  checkText: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: '15px',
    color: '#374151',
    lineHeight: 1.6,
  },
button: {
  marginTop: '28px',
  background: 'linear-gradient(135deg, #EC4899, #F472B6)',
  color: 'white',
  border: 'none',
  fontFamily: "'Fredoka', sans-serif",
  fontWeight: '600',
  fontSize: '16px',
  padding: '13px 30px',
  borderRadius: '30px',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-block',
},
}