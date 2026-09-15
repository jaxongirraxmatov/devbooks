import { useState } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
  /** Rasm topilmasa ko'rsatiladigan bosh harflar */
  fallbackText?: string
}

/**
 * Rasm hali qo'shilmagan bo'lsa (public/images/... bo'sh), xatolik o'rniga
 * chiroyli zaxira blok chiziladi — layout buzilmaydi.
 */
export default function SmartImage({ src, alt, className = '', fallbackText }: Props) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    const initials = (fallbackText ?? alt)
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
      .toUpperCase()

    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-line to-surface-2 ${className}`}
        aria-label={alt}
        role="img"
      >
        <span className="font-display text-3xl text-gold/60">{initials}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}
