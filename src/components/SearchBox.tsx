import { useState, type FormEvent } from 'react'
import { SearchIcon } from './Icons'

type Props = {
  onSearch?: (query: string) => void
}

/** Banner ustiga chiqib turadigan qidiruv kartasi */
export default function SearchBox({ onSearch }: Props) {
  const [query, setQuery] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    onSearch?.(query.trim())
  }

  return (
    <div className="container-page">
      <div className="-mt-16 rounded-card bg-surface/95 px-8 py-10 shadow-2xl shadow-black/40 backdrop-blur">
        <h2 className="text-center font-display text-3xl">QIDIRISH</h2>

        <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-3xl gap-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Adiblar, kitoblar, audiolar, maqolalar…"
            className="h-14 flex-1 rounded-full border border-line bg-surface-2 px-6 text-[15px] text-cream outline-none placeholder:text-muted focus:border-gold/60"
          />
          <button
            type="submit"
            className="flex h-14 items-center gap-2 rounded-full bg-gold px-8 font-medium text-ink transition-colors hover:bg-gold-strong"
          >
            <SearchIcon className="h-5 w-5" />
            Izlash
          </button>
        </form>
      </div>
    </div>
  )
}
