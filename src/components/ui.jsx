import { PawPrint } from 'lucide-react'

export function Paw({ size = 16 }) {
  return <PawPrint size={size} strokeWidth={1.5} />
}

export function Ornament({ size = 18 }) {
  return (
    <div className="ornament" aria-hidden="true">
      <PawPrint size={size} strokeWidth={1.5} fill="currentColor" />
    </div>
  )
}

export function SectionHeader({ eyebrow, title, script, scriptColor = 'gold', children }) {
  return (
    <div className="section-header">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>
        {title}
        {script && <span className={`script--${scriptColor}`}>{script}</span>}
      </h2>
      <Ornament />
      {children && <p>{children}</p>}
    </div>
  )
}

export function Logo({ size = 30 }) {
  return (
    <span className="logo" style={{ fontSize: size }}>
      <span className="script--gold">Espaço Pet da Mel</span>
    </span>
  )
}
