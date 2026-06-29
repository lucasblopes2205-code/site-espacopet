import {
  Phone,
  MapPin,
  Clock,
  PawPrint,
  Camera,
} from 'lucide-react'

const footerLinks = {
  Serviços: [
    'Banho',
    'Tosa',
    'Hidratação',
    'Perfumes',
    'Acessórios',
  ],

  Empresa: [
    'Sobre nós',
    'Promoções',
    'Blog',
    'Trabalhe conosco',
  ],

  Suporte: [
    'Agendamento',
    'Cancelamentos',
    'Dúvidas frequentes',
    'Fale conosco',
  ],
}

export default function Footer() {
  return (
    <footer style={styles.footer}>

      <div style={styles.container}>

        {/* TOP */}
        <div style={styles.top} className="footer-top">

          {/* Brand */}
          <div style={styles.brand}>

            {/* Logo */}
            <div style={styles.logo}>

              <div style={styles.logoIcon}>
                <PawPrint size={22} color="#F160A9" />
              </div>
<div>
<div style={styles.logoName}>
  Espaço Pet{' '}
  <span style={{
    fontFamily: "'Dancing Script', cursive",
    color: '#EC4899',
    fontWeight: '700',
    fontStyle: 'italic',
  }}>
    da Mel
  </span>
</div>

                <span style={styles.logoSubtitle}>
                  BANHO & TOSA
                </span>
              </div>
            </div>

            {/* Description */}
            <p style={styles.description}>
              Amor, carinho e cuidado para o seu melhor amigo.
              Atendimento especializado para deixar seu pet
              feliz, saudável e cheiroso.
            </p>

            {/* Contact */}
            <div style={styles.contactList}>

              <a
                href="tel:+5543991820171"
                style={styles.contactItem}
              >
                <Phone size={16} />
                (43) 99182-0171
              </a>

              <a
                href="https://instagram.com/espacopetdamel"
                target="_blank"
                rel="noreferrer"
                style={styles.contactItem}
              >
                <Camera size={16} />
                @espacopetdamel
              </a>

              <div style={styles.contactItem}>
                <MapPin size={16} />
                R. Cel. Emílio Gomes, 219 - Ribeirão Claro, PR, 86410-000
              </div>

              <div style={styles.contactItem}>
  <Clock size={16} />

  <div>
    <div>Seg–Sex • 8h às 18h</div>
    <div>Sáb • 8h às 16h</div>
  </div>
</div>
</div>

          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div
              key={title}
              style={styles.column}
            >

              <h3 style={styles.columnTitle}>
                {title}
              </h3>

              <div style={styles.links}>
                {items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={styles.link}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Bottom */}
        <div style={styles.bottom} className="footer-bottom">

          <span style={styles.bottomText}>
            © 2026 Espaço Pet da Mel.
            Todos os direitos reservados.
          </span>

          <span style={styles.bottomText}>
            Feito com ❤️ para os pets
          </span>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
 <style>{`
        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </footer>
  )
}

const styles = {
  footer: {
    background:
      'linear-gradient(135deg, #4C1D95 0%, #6D28D9 100%)',
    padding: '80px 24px 28px',
    color: 'white',
  },

  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },

  top: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    gap: '48px',
    marginBottom: '50px',
  },

  brand: {},

  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    marginBottom: '24px',
  },

  logoIcon: {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    background:
      'linear-gradient(135deg, #F9A8D4, #C084FC)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  logoTitle: {
    margin: 0,
    fontSize: '22px',
    fontWeight: '800',
    lineHeight: 1,
  },

  logoSubtitle: {
    color: '#F9A8D4',
    fontSize: '10px',
    letterSpacing: '2px',
    fontWeight: '700',
  },

  description: {
    color: '#DDD6FE',
    fontSize: '15px',
    lineHeight: 1.8,
    maxWidth: '320px',
    marginBottom: '28px',
  },

  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },

  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#DDD6FE',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
  },

  column: {},

  columnTitle: {
    margin: '0 0 20px',
    fontSize: '16px',
    fontWeight: '700',
    color: 'white',
  },

  links: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },

  link: {
    textDecoration: 'none',
    color: '#DDD6FE',
    fontSize: '14px',
    transition: '0.2s',
  },

  divider: {
    height: '1px',
    background: 'rgba(255,255,255,0.12)',
    marginBottom: '26px',
  },

  bottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '12px',
  },

  bottomText: {
    color: '#C4B5FD',
    fontSize: '13px',
  },
}