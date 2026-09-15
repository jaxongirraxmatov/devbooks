import { Link } from 'react-router-dom'

/** Hali tayyor bo'lmagan bo'limlar uchun oddiy sahifa */
export default function Soon({ title }: { title: string }) {
  return (
    <div className="container-page py-32 text-center">
      <h1 className="font-display text-5xl">{title}</h1>
      <p className="mt-4 text-muted">Bu bo‘lim hozircha tayyorlanmoqda.</p>
      <Link to="/" className="mt-8 inline-block text-gold hover:underline">
        ← Bosh sahifaga qaytish
      </Link>
    </div>
  )
}
