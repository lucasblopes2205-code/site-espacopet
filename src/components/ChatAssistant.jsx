import { useEffect, useRef, useState } from 'react'
import { MessageCircle, X, PawPrint, RotateCcw, ArrowLeft, Sparkles, ExternalLink } from 'lucide-react'
import { whatsapp } from '../contact'
import { FLOWS, START, SUMMARY_LABELS } from '../chat/flows'

const TEASER_KEY = 'mel-chat-teaser'

const resolve = (value, answers) => (typeof value === 'function' ? value(answers) : value)

function botMessage(nodeId, answers) {
  const node = FLOWS[nodeId]
  return { role: 'assistant', text: resolve(node.text, answers) }
}

function initialState() {
  return {
    node: START,
    answers: {},
    log: [botMessage(START, {})],
    history: [],
  }
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState(initialState)
  const [typing, setTyping] = useState(false)
  const [teaser, setTeaser] = useState(false)
  const bodyRef = useRef(null)

  const { node: nodeId, answers, log, history } = state
  const node = FLOWS[nodeId]
  const finalMessage = node.final ? resolve(node.final, answers) : null
  const summary = node.summary ? Object.entries(SUMMARY_LABELS).filter(([k]) => answers[k]) : []

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
  }, [log, typing, open])

  // Convite discreto depois de alguns segundos, uma vez por sessão
  useEffect(() => {
    let seen = false
    try { seen = !!sessionStorage.getItem(TEASER_KEY) } catch { /* sem sessionStorage */ }
    if (seen) return
    const t = setTimeout(() => setTeaser(true), 9000)
    return () => clearTimeout(t)
  }, [])

  function dismissTeaser() {
    setTeaser(false)
    try { sessionStorage.setItem(TEASER_KEY, '1') } catch { /* sem sessionStorage */ }
  }

  function toggle() {
    dismissTeaser()
    setOpen((o) => !o)
  }

  function choose(option) {
    if (typing) return
    if (option.href) {
      window.open(option.href, '_blank', 'noopener,noreferrer')
      return
    }
    const nextAnswers = { ...answers, ...(option.set || {}) }
    const label = option.label.replace(/^\p{Extended_Pictographic}️?\s*/u, '')

    setState((s) => ({
      ...s,
      log: [...s.log, { role: 'user', text: label }],
      history: [...s.history, { node: s.node, answers: s.answers, logLength: s.log.length }],
    }))
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      setState((s) => ({
        ...s,
        node: option.next,
        answers: nextAnswers,
        log: [...s.log, botMessage(option.next, nextAnswers)],
      }))
    }, 500)
  }

  function back() {
    const last = history[history.length - 1]
    if (!last || typing) return
    setState({
      node: last.node,
      answers: last.answers,
      log: log.slice(0, last.logLength),
      history: history.slice(0, -1),
    })
  }

  function restart() {
    if (typing) return
    setState(initialState())
  }

  return (
    <>
      {teaser && !open && (
        <div className="chat__teaser" role="status">
          <button className="chat__teaser-close" onClick={dismissTeaser} aria-label="Fechar convite">
            <X size={13} />
          </button>
          <button className="chat__teaser-text" onClick={toggle}>
            Olá! Posso te ajudar a agendar um horário? 🐾
          </button>
        </div>
      )}

      {open && (
        <div className="chat" role="dialog" aria-label="Assistente virtual do Espaço Pet da Mel">
          <div className="chat__header">
            <div className="chat__avatar">
              <PawPrint size={18} strokeWidth={1.6} />
            </div>
            <div className="chat__who">
              <div className="chat__name">Mel</div>
              <div className="chat__status">
                <span className="dot-live" /> Assistente virtual · online
              </div>
            </div>
            <button onClick={restart} className="chat__icon-btn" aria-label="Voltar ao início" title="Voltar ao início">
              <RotateCcw size={16} />
            </button>
            <button onClick={() => setOpen(false)} className="chat__icon-btn" aria-label="Fechar">
              <X size={18} />
            </button>
          </div>

          <div className="chat__body" ref={bodyRef}>
            {log.map((m, i) => (
              <div key={i} className={`chat__msg chat__msg--${m.role}`}>
                {m.text}
              </div>
            ))}

            {typing && (
              <div className="chat__msg chat__msg--assistant chat__typing" aria-label="Digitando">
                <span /><span /><span />
              </div>
            )}

            {!typing && summary.length > 0 && (
              <div className="chat__summary">
                <div className="chat__summary-title">
                  <Sparkles size={14} /> Seu pedido
                </div>
                {summary.map(([k, label]) => (
                  <div key={k} className="chat__summary-row">
                    <span>{label}</span>
                    <strong>{answers[k]}</strong>
                  </div>
                ))}
              </div>
            )}

            {!typing && node.options && (
              <div className={`chat__options ${node.layout === 'grid' ? 'chat__options--grid' : ''}`}>
                {node.options.map((o) => (
                  <button key={o.label} className="chat__option" onClick={() => choose(o)}>
                    {o.label}
                    {o.href && <ExternalLink size={13} />}
                  </button>
                ))}
              </div>
            )}

            {!typing && finalMessage && (
              <a
                href={whatsapp(finalMessage)}
                target="_blank"
                rel="noreferrer"
                className="btn btn--gold btn--block chat__wa"
              >
                <MessageCircle size={16} />
                Enviar para o WhatsApp
              </a>
            )}
          </div>

          <div className="chat__footer">
            <button className="chat__nav" onClick={back} disabled={!history.length || typing}>
              <ArrowLeft size={14} /> Voltar
            </button>
            <a
              className="chat__nav"
              href={whatsapp('Olá! Vim pelo site do Espaço Pet da Mel e gostaria de falar com vocês. 🐾')}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={14} /> WhatsApp direto
            </a>
          </div>
        </div>
      )}

      <button
        onClick={toggle}
        className="chat__fab"
        aria-label={open ? 'Fechar assistente' : 'Abrir assistente virtual'}
      >
        {open ? <X size={26} /> : <MessageCircle size={26} strokeWidth={1.8} />}
      </button>

      <style>{`
        .chat__fab {
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
        .chat__fab:hover { transform: scale(1.06); }

        .chat__teaser {
          position: fixed;
          right: 100px;
          bottom: 36px;
          max-width: 260px;
          z-index: 9998;
          animation: chatIn 0.35s ease;
        }
        .chat__teaser-text {
          padding: 12px 16px;
          border-radius: 16px 16px 4px 16px;
          background: var(--bg-2);
          border: 1px solid rgba(232, 194, 103, 0.45);
          box-shadow: 0 0 28px rgba(166, 75, 223, 0.3);
          color: var(--text);
          font-size: 13px;
          line-height: 1.5;
          text-align: left;
        }
        .chat__teaser-close {
          position: absolute;
          top: -9px;
          left: -9px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-3);
          border: 1px solid rgba(232, 194, 103, 0.4);
          color: var(--text-muted);
        }

        .chat {
          position: fixed;
          right: 24px;
          bottom: 104px;
          width: 380px;
          height: min(620px, calc(100vh - 140px));
          display: flex;
          flex-direction: column;
          border-radius: 22px;
          overflow: hidden;
          background: var(--bg-2);
          border: 1px solid rgba(232, 194, 103, 0.4);
          box-shadow: 0 0 40px rgba(166, 75, 223, 0.25), 0 24px 60px rgba(0, 0, 0, 0.6);
          z-index: 9999;
          animation: chatIn 0.25s ease;
        }
        @keyframes chatIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .chat__header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 14px 16px 18px;
          background: linear-gradient(135deg, #2A0E3A, #1A0828);
          border-bottom: 1px solid rgba(232, 194, 103, 0.2);
        }
        .chat__avatar {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          border: 1px solid rgba(232, 194, 103, 0.6);
        }
        .chat__who { flex: 1; min-width: 0; }
        .chat__name {
          font-family: var(--script);
          font-size: 28px;
          line-height: 1;
          background: var(--gold-grad);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .chat__status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: var(--text-muted);
          white-space: nowrap;
        }
        .chat__icon-btn {
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: background 0.2s, color 0.2s;
        }
        .chat__icon-btn:hover { background: rgba(232, 194, 103, 0.1); color: var(--gold-light); }

        .chat__body {
          flex: 1;
          overflow-y: auto;
          padding: 18px 16px 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          scrollbar-width: thin;
          scrollbar-color: rgba(232, 194, 103, 0.3) transparent;
        }
        .chat__msg {
          max-width: 88%;
          padding: 11px 14px;
          font-size: 14px;
          line-height: 1.55;
          animation: chatIn 0.2s ease;
        }
        .chat__msg--assistant {
          align-self: flex-start;
          border-radius: 4px 18px 18px 18px;
          background: rgba(58, 18, 82, 0.6);
          border: 1px solid rgba(214, 166, 245, 0.15);
          color: var(--text-soft);
        }
        .chat__msg--user {
          align-self: flex-end;
          border-radius: 18px 4px 18px 18px;
          background: var(--gold-grad);
          color: #2A0E3A;
          font-weight: 500;
        }
        .chat__typing {
          display: flex;
          gap: 5px;
          padding: 14px 16px;
        }
        .chat__typing span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold);
          animation: chatDot 1.2s infinite ease-in-out;
        }
        .chat__typing span:nth-child(2) { animation-delay: 0.15s; }
        .chat__typing span:nth-child(3) { animation-delay: 0.3s; }
        @keyframes chatDot {
          0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-4px); }
        }

        .chat__summary {
          padding: 14px 16px;
          border-radius: 16px;
          border: 1px solid rgba(232, 194, 103, 0.5);
          background: rgba(232, 194, 103, 0.06);
          animation: chatIn 0.25s ease;
        }
        .chat__summary-title {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .chat__summary-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 5px 0;
          font-size: 13px;
          border-top: 1px solid rgba(232, 194, 103, 0.1);
        }
        .chat__summary-row:first-of-type { border-top: none; }
        .chat__summary-row span { color: var(--text-muted); flex-shrink: 0; }
        .chat__summary-row strong {
          font-family: var(--elegant);
          font-size: 15px;
          font-weight: 600;
          color: var(--text);
          text-align: right;
        }

        .chat__options {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 8px;
          margin-top: 4px;
          animation: chatIn 0.25s ease;
        }
        .chat__option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 11px 16px;
          border-radius: 14px;
          border: 1px solid rgba(232, 194, 103, 0.4);
          background: rgba(15, 5, 24, 0.4);
          color: var(--gold-light);
          font-size: 13.5px;
          font-weight: 500;
          text-align: left;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .chat__options--grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .chat__options--grid .chat__option {
          justify-content: center;
          text-align: center;
          padding: 10px 8px;
          font-size: 13px;
        }
        .chat__options--grid .chat__option:hover { transform: none; }
        .chat__options--grid .chat__option:nth-last-child(-n+2) {
          grid-column: 1 / -1;
        }
        .chat__option:hover {
          background: rgba(232, 194, 103, 0.12);
          border-color: rgba(232, 194, 103, 0.8);
          transform: translateX(3px);
        }

        .chat__wa {
          margin-top: 4px;
          padding: 14px 16px;
          font-size: 11.5px;
          letter-spacing: 0.14em;
          animation: chatIn 0.25s ease, chatPulse 2.4s ease-in-out 0.3s infinite;
        }
        @keyframes chatPulse {
          0%, 100% { box-shadow: 0 10px 30px rgba(232, 194, 103, 0.25); }
          50% { box-shadow: 0 0 0 6px rgba(232, 194, 103, 0.12), 0 10px 30px rgba(232, 194, 103, 0.4); }
        }

        .chat__footer {
          display: flex;
          justify-content: space-between;
          padding: 10px 14px;
          border-top: 1px solid rgba(232, 194, 103, 0.14);
        }
        .chat__nav {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 12px;
          color: var(--text-muted);
          transition: color 0.2s, background 0.2s;
        }
        .chat__nav:hover:not(:disabled) { color: var(--gold-light); background: rgba(232, 194, 103, 0.08); }
        .chat__nav:disabled { opacity: 0.35; cursor: default; }

        @media (max-width: 520px) {
          .chat {
            right: 8px;
            left: 8px;
            bottom: 96px;
            width: auto;
            height: min(640px, calc(100dvh - 116px));
          }
          .chat__teaser { right: 96px; max-width: 200px; }
        }
      `}</style>
    </>
  )
}
