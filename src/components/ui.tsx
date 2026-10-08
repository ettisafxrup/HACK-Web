import type { ReactNode } from 'react'
import { DieArt, type Hue } from './DieArt'

/** Chip-with-an-H mark, redrawn from the club logo so it stays crisp at header size. */
export function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        d="M11 2v4M16 2v4M21 2v4M11 26v4M16 26v4M21 26v4M2 11h4M2 16h4M2 21h4M26 11h4M26 16h4M26 21h4"
        stroke="var(--mark, var(--blue-600))"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="6" y="6" width="20" height="20" rx="3" fill="var(--mark, var(--blue-600))" />
      <path
        d="M12 11v10M20 11v10M12 16h8"
        stroke="var(--mark-ink, #fff)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** A real photo when one exists, generated artwork until then. */
export function Media({
  image,
  alt,
  seed,
  hue,
  className = '',
}: {
  image?: string
  alt: string
  seed: number
  hue: Hue
  className?: string
}) {
  if (image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className={`media ${className}`} src={image} alt={alt} loading="lazy" decoding="async" />
  }
  return <DieArt className={`media ${className}`} seed={seed} hue={hue} />
}

/** Section label written as a register address, the site's recurring motif. */
export function SectionHead({
  id,
  addr,
  label,
  title,
  children,
}: {
  id: string
  addr: string
  label: string
  title: string
  children?: ReactNode
}) {
  return (
    <header className="section-head">
      <p className="addr">
        <span>{addr}</span>
        {label}
      </p>
      <h2 id={id}>{title}</h2>
      {children}
    </header>
  )
}

export function Notice({
  tone,
  title,
  children,
}: {
  tone: 'success' | 'error'
  title: string
  children?: ReactNode
}) {
  return (
    <div className={`notice notice--${tone}`} role={tone === 'error' ? 'alert' : 'status'}>
      <p className="notice__title">{title}</p>
      {children && <div className="notice__body">{children}</div>}
    </div>
  )
}

export function EmptyState({ title, body, action }: { title: string; body: string; action?: ReactNode }) {
  return (
    <div className="empty">
      <p className="empty__title">{title}</p>
      <p className="empty__body">{body}</p>
      {action}
    </div>
  )
}
