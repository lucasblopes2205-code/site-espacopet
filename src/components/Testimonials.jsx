import { Star } from 'lucide-react'

const reviews = [
  {
    initial: 'M',
    name: 'Maria S.',
    role: 'Dona da Mel 🐩',
    text: 'Minha cachorra sai sempre linda e perfumada! O atendimento é impecável e os profissionais são super carinhosos. Recomendo muito!',
    color: '#F3E8FF',
    textColor: '#7C3AED',
  },
  {
    initial: 'J',
    name: 'João P.',
    role: 'Dono do Rex 🐕',
    text: 'Profissionais extremamente cuidadosos. O Rex é bem agitado mas ficou tranquilo durante todo o atendimento. Voltaremos com certeza!',
    color: '#FCE7F3',
    textColor: '#EC4899',
  },
  {
    initial: 'A',
    name: 'Ana L.',
    role: 'Dona da Luna 🐱',
    text: 'Melhor pet shop da cidade! Preço justo, qualidade excelente e agendamento super fácil. A Luna ama vir aqui!',
    color: '#FEF3C7',
    textColor: '#D97706',
  },
  {
    initial: 'C',
    name: 'Carlos R.',
    role: 'Dono do Thor 🐶',
    text: 'Trouxe o Thor pela primeira vez e já agendei o próximo. Ambiente limpo, organizado e os profissionais passam muita confiança.',
    color: '#F3E8FF',
    textColor: '#7C3AED',
  },
  {
    initial: 'F',
    name: 'Fernanda T.',
    role: 'Dona da Docinho 🐈',
    text: 'Achei que seria difícil dar banho na minha gata, mas a equipe foi incrível. Ela saiu relaxada e cheirosinha. Nota 10!',
    color: '#FCE7F3',
    textColor: '#EC4899',
  },
  {
    initial: 'R',
    name: 'Roberto M.',
    role: 'Dono do Bolinha 🐩',
    text: 'Contratei o pacote de banhos e o custo-benefício é excelente. Atendimento pontual e o resultado sempre impecável.',
    color: '#FEF3C7',
    textColor: '#D97706',
  },
]

function StarRating() {
  return (
    <div style={styles.stars}>
      {Array(5).fill(0).map((_, i) => (
        <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
<section id="avaliacoes" style={styles.section}>
      <div style={styles.container}>

        {/* Cabeçalho */}
        <div style={styles.header}>
          <div style={styles.tag}>💬 Depoimentos</div>
          <h2 style={styles.title}>Tutores que amam o resultado</h2>
          <p style={styles.subtitle}>
            Veja o que os tutores estão falando sobre o cuidado com seus pets.
          </p>
        </div>

        {/* Grid de reviews */}
        <div style={styles.grid} className="testimonials-grid">
          {reviews.map(({ initial, name, role, text, color, textColor }) => (
            <div key={name} style={styles.card}>

              <StarRating />

              <p style={styles.text}>"{text}"</p>

              <div style={styles.author}>
                <div style={{ ...styles.avatar, background: color, color: textColor }}>
                  {initial}
                </div>
                <div>
                  <div style={styles.authorName}>{name}</div>
                  <div style={styles.authorRole}>{role}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Média geral */}
        <div style={styles.average} className="testimonials-average">
          <div style={styles.averageStars}>
            {Array(5).fill(0).map((_, i) => (
              <Star key={i} size={28} fill="#F59E0B" color="#F59E0B" />
            ))}
          </div>
          <div style={styles.averageDivider} />
          <div>
            <div style={styles.averageNumber}>4.9</div>
            <div style={styles.averageSub}>de 5.0 — baseado em 200+ avaliações</div>
          </div>
          <div style={styles.averageDivider} />
          <div>
            <div style={styles.averagePercent}>98% de satisfação</div>
            <div style={styles.averageSub}>entre todos os tutores atendidos</div>
          </div>
        </div>

     <style>{`
          @media (max-width: 768px) {
            .testimonials-grid {
              grid-template-columns: 1fr !important;
            }
            .testimonials-average {
              flex-direction: column !important;
              text-align: center !important;
              gap: 16px !important;
            }
          }

          @media (max-width: 480px) {
            .testimonials-average > div {
              width: 100% !important;
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
    margin: '0 0 12px 0',
  },
  subtitle: {
    fontFamily: "'Nunito', sans-serif",
    color: '#6B7280',
    fontSize: '16px',
    lineHeight: 1.7,
    maxWidth: '460px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginBottom: '48px',
  },
  card: {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '28px',
    border: '1.5px solid #DDD6FE',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  },
  stars: {
    display: 'flex',
    gap: '3px',
    marginBottom: '14px',
  },
  text: {
    fontFamily: "'Nunito', sans-serif",
    color: '#374151',
    fontSize: '14px',
    lineHeight: 1.75,
    fontStyle: 'italic',
    flexGrow: 1,
    margin: '0 0 20px 0',
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  avatar: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '700',
    fontSize: '18px',
    flexShrink: 0,
  },
  authorName: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '15px',
    color: '#4C1D95',
    margin: 0,
  },
  authorRole: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: '12px',
    color: '#6B7280',
    margin: 0,
  },
  average: {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '28px 40px',
    border: '1.5px solid #DDD6FE',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px',
    flexWrap: 'wrap',
  },
  averageStars: {
    display: 'flex',
    gap: '4px',
  },
  averageDivider: {
    width: '1px',
    height: '48px',
    background: '#DDD6FE',
  },
  averageNumber: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '700',
    fontSize: '40px',
    color: '#4C1D95',
    lineHeight: 1,
    margin: '0 0 4px 0',
  },
  averagePercent: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: '600',
    fontSize: '20px',
    color: '#4C1D95',
    margin: '0 0 4px 0',
  },
  averageSub: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: '13px',
    color: '#6B7280',
    margin: 0,
  },
}