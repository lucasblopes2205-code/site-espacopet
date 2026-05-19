import { useState } from 'react'
import { MessageCircle, X, PawPrint } from 'lucide-react'

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  const phone = '5543991820171'

  const message =
    'Olá! Gostaria de agendar um banho e tosa para meu pet 🐾'

  const whatsappUrl =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <>
      {/* Chat box */}
      {open && (
        <div style={styles.chatBox}>

          {/* Header */}
          <div style={styles.header}>

            <div style={styles.headerLeft}>

              <div style={styles.avatar}>
                <PawPrint size={18} color="white" />
              </div>

              <div>
                <div style={styles.name}>
                  Espaço Pet da Mel
                </div>

                <div style={styles.status}>
                  <span style={styles.dot} />
                  Online agora
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              style={styles.closeButton}
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div style={styles.body}>

            <div style={styles.message}>
              👋 Olá! Bem-vindo ao Espaço Pet da Mel.
              <br />
              Como podemos ajudar você hoje?
            </div>

            <span style={styles.time}>
              agora
            </span>
          </div>

          {/* Footer */}
          <div style={styles.footer}>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              <MessageCircle size={18} />
              Iniciar conversa
            </a>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        style={styles.fab}
        aria-label="WhatsApp"
      >
        {open ? (
          <X size={28} color="white" />
        ) : (
          <MessageCircle size={28} color="white" />
        )}
      </button>
    </>
  )
}

const styles = {
  fab: {
    position: 'fixed',
    right: '24px',
    bottom: '24px',
    width: '68px',
    height: '68px',
    borderRadius: '50%',
    border: 'none',
    background:
      'linear-gradient(135deg, #22C55E, #16A34A)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 9999,
    boxShadow: '0 10px 30px rgba(34,197,94,0.35)',
  },

  chatBox: {
    position: 'fixed',
    right: '24px',
    bottom: '105px',
    width: '340px',
    background: 'white',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
    zIndex: 9999,
    animation: 'fadeIn 0.2s ease',
  },

  header: {
    background:
      'linear-gradient(135deg, #4C1D95, #7C3AED)',
    padding: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },

  avatar: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background:
      'linear-gradient(135deg, #EC4899, #F472B6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    color: 'white',
    fontWeight: '700',
    fontSize: '15px',
  },

  status: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: 'rgba(255,255,255,0.8)',
    fontSize: '12px',
    marginTop: '2px',
  },

  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#22C55E',
  },

  closeButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    padding: '20px',
    background: '#F8FAFC',
  },

  message: {
    background: 'white',
    padding: '14px 16px',
    borderRadius: '18px',
    color: '#334155',
    fontSize: '14px',
    lineHeight: 1.6,
    boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
  },

  time: {
    display: 'block',
    marginTop: '8px',
    fontSize: '11px',
    color: '#94A3B8',
    textAlign: 'right',
  },

  footer: {
    padding: '18px',
    borderTop: '1px solid #E2E8F0',
  },

  button: {
    width: '100%',
    background:
      'linear-gradient(135deg, #22C55E, #16A34A)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '14px',
    padding: '14px 18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontWeight: '700',
    fontSize: '15px',
  },
}