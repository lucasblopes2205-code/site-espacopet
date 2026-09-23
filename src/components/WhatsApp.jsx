import { useState } from 'react'
import { MessageCircle, X, PawPrint } from 'lucide-react'
import { whatsapp } from '../contact'

const WHATSAPP_URL = whatsapp('Olá! Gostaria de agendar um horário para meu pet 🐾')

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <div className="wa__box">
          <div className="wa__header">
            <div className="wa__avatar">
              <PawPrint size={18} strokeWidth={1.6} />
            </div>
            <div>
              <div className="wa__name">Espaço Pet da Mel</div>
              <div className="wa__status"><span className="dot-live" /> Respondemos rapidinho</div>
            </div>
            <button onClick={() => setOpen(false)} className="wa__close" aria-label="Fechar">
              <X size={18} />
            </button>
          </div>

          <div className="wa__body">
            <div className="wa__msg">
              Olá! Seja bem-vindo ao Espaço Pet da Mel.
              <br />
              Como podemos cuidar do seu pet hoje?
            </div>
          </div>

          <div className="wa__footer">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn--gold btn--block">
              <MessageCircle size={16} />
              Iniciar conversa
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="wa__fab"
        aria-label={open ? 'Fechar conversa' : 'Conversar no WhatsApp'}
      >
        {open ? <X size={26} /> : <MessageCircle size={26} strokeWidth={1.8} />}
      </button>

      <style>{`
        .wa__fab {
          position: fixed;
          right: 24px;
          bottom: 24px;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2A0E3A;
          background: var(--gold-grad);
          box-shadow: 0 0 0 4px rgba(15, 5, 24, 0.9), 0 0 0 5px rgba(232, 194, 103, 0.5), 0 12px 32px rgba(232, 194, 103, 0.3);
          z-index: 9999;
          transition: transform 0.25s ease;
        }
        .wa__fab:hover { transform: scale(1.06); }
        .wa__box {
          position: fixed;
          right: 24px;
          bottom: 104px;
          width: 340px;
          max-width: calc(100vw - 48px);
          border-radius: 22px;
          overflow: hidden;
          background: var(--bg-2);
          border: 1px solid rgba(232, 194, 103, 0.4);
          box-shadow: 0 0 40px rgba(166, 75, 223, 0.25), 0 24px 60px rgba(0, 0, 0, 0.6);
          z-index: 9999;
          animation: waIn 0.25s ease;
        }
        @keyframes waIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .wa__header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px;
          background: linear-gradient(135deg, #2A0E3A, #1A0828);
          border-bottom: 1px solid rgba(232, 194, 103, 0.2);
        }
        .wa__avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          border: 1px solid rgba(232, 194, 103, 0.6);
        }
        .wa__name {
          font-family: var(--serif);
          font-size: 16px;
          font-weight: 600;
          color: var(--text);
        }
        .wa__status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--text-muted);
        }
        .wa__close { margin-left: auto; color: var(--text-muted); display: flex; }
        .wa__body { padding: 20px; }
        .wa__msg {
          padding: 14px 16px;
          border-radius: 4px 18px 18px 18px;
          background: rgba(58, 18, 82, 0.6);
          border: 1px solid rgba(214, 166, 245, 0.15);
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-soft);
        }
        .wa__footer { padding: 0 20px 20px; }
      `}</style>
    </>
  )
}
