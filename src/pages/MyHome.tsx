import { useState } from 'react'
import SmartImage from '../components/SmartImage'
import BookCard from '../components/BookCard'
import AuthorCard from '../components/AuthorCard'
import {
  GridIcon,
  ListIcon,
  NextIcon,
  PlayIcon,
  PrevIcon,
  RefreshIcon,
  StarIcon,
  VolumeIcon,
} from '../components/Icons'
import { audioBook, currentUser, reading } from '../data/user'
import { books } from '../data/books'
import { authors } from '../data/authors'

const tabs = ['O‘qilganlar', 'O‘qishni xohlayman', 'O‘qilmoqda', 'Adiblar'] as const
type Tab = (typeof tabs)[number]

/** Kirgan foydalanuvchining shaxsiy sahifasi */
export default function MyHome() {
  const [tab, setTab] = useState<Tab>('O‘qishni xohlayman')

  return (
    <div className="container-page space-y-8 py-8">
      <ProfileHero />

      <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
        <div className="space-y-8">
          <ReadingCard />
          <AudioCard />
        </div>

        <div>
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`text-lg transition-colors ${
                  t === tab ? 'text-gold' : 'text-cream/80 hover:text-cream'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-8">
            {tab === 'Adiblar' ? (
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                {authors.slice(0, 10).map((a) => (
                  <AuthorCard key={a.id} author={a} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
                {books.map((b) => (
                  <BookCard key={b.id} book={b} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/** Yuqoridagi profil kartasi — avatar, ism va ma'lumotlar */
function ProfileHero() {
  return (
    <section className="relative overflow-hidden rounded-card bg-surface px-10 py-10">
      <Mandala />

      <div className="relative flex flex-col items-center gap-8 sm:flex-row sm:items-start">
        <div className="text-center">
          <div className="relative inline-block">
            <SmartImage
              src={currentUser.avatar}
              alt={currentUser.name}
              fallbackText={currentUser.name}
              className="h-[170px] w-[170px] rounded-full object-cover ring-2 ring-cream/80"
            />
            <span className="absolute right-1 bottom-1 flex h-11 w-11 items-center justify-center rounded-full bg-surface ring-2 ring-gold">
              <StarIcon className="h-5 w-5 text-gold" />
            </span>
          </div>
          <p className="mt-3 text-gold">{currentUser.badge}</p>
          <p className="text-sm text-cream/90">{currentUser.booksRead} ta kitob o‘qigan</p>
        </div>

        <div className="pt-2">
          <h1 className="font-display text-4xl">{currentUser.name}</h1>
          <dl className="mt-4 space-y-1.5 text-[15px]">
            <Row label="Tavallud" value={currentUser.birthDate} />
            <Row label="Manzili" value={currentUser.address} />
            <Row label="Bio" value={currentUser.bio} />
          </dl>
        </div>
      </div>
    </section>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <dt className="text-cream">{label}:</dt>
      <dd className="text-muted">{value}</dd>
    </div>
  )
}

/** "Hozir o'qilmoqda…" — progress barli ro'yxat */
function ReadingCard() {
  return (
    <section className="rounded-card bg-surface p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl">Hozir o‘qilmoqda...</h2>
        <GridIcon className="h-5 w-5 text-muted" />
      </div>

      <ul className="mt-5 space-y-4">
        {reading.map((item) => (
          <li key={item.id} className="flex items-start gap-3">
            <SmartImage
              src={item.cover}
              alt={item.title}
              fallbackText={item.title}
              className="h-12 w-9 shrink-0 rounded object-cover"
            />

            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="truncate text-sm text-cream">{item.title}</p>
                <span className="text-xs text-muted">{item.progress}%</span>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-cream">
                  <div
                    className="h-full rounded-full bg-gold"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <button
                  type="button"
                  className="flex items-center gap-1 rounded bg-surface-2 px-2 py-1 text-[11px] text-cream/80 hover:text-gold"
                >
                  Yangilash
                  <RefreshIcon className="h-3 w-3" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-6 h-12 w-full rounded-xl bg-gold text-ink transition-colors hover:bg-gold-strong"
      >
        Barchasini ko‘rish
      </button>
    </section>
  )
}

/** Audio kitob pleyeri */
function AudioCard() {
  return (
    <section className="rounded-card bg-surface p-6">
      <h2 className="font-display text-2xl">Audio kitob</h2>

      <div className="mt-5 flex items-end justify-center gap-3">
        <SmartImage
          src={audioBook.cover}
          alt={audioBook.title}
          fallbackText={audioBook.title}
          className="h-20 w-14 rounded object-cover opacity-60"
        />
        <SmartImage
          src={audioBook.cover}
          alt={audioBook.title}
          fallbackText={audioBook.title}
          className="h-28 w-20 rounded object-cover"
        />
        <SmartImage
          src={audioBook.cover}
          alt={audioBook.title}
          fallbackText={audioBook.title}
          className="h-20 w-14 rounded object-cover opacity-60"
        />
      </div>

      <p className="mt-4 text-center text-sm text-cream">{audioBook.title}</p>
      <p className="text-center text-xs text-muted">{audioBook.author}</p>

      <Waveform />

      <div className="mt-4 flex items-center justify-center gap-6 text-cream/80">
        <button type="button" aria-label="Ro‘yxat">
          <ListIcon />
        </button>
        <button type="button" aria-label="Oldingi">
          <PrevIcon />
        </button>
        <button
          type="button"
          aria-label="Ijro"
          className="flex h-10 w-10 items-center justify-center rounded bg-gold text-ink"
        >
          <PlayIcon />
        </button>
        <button type="button" aria-label="Keyingi">
          <NextIcon />
        </button>
        <button type="button" aria-label="Ovoz">
          <VolumeIcon />
        </button>
      </div>

      <ul className="mt-5 space-y-2">
        {audioBook.tracks.map((t, i) => (
          <li
            key={t.id}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
              i === 0 ? 'bg-surface-2 ring-1 ring-gold/50' : 'bg-surface-2/60'
            }`}
          >
            <SmartImage
              src={audioBook.cover}
              alt={t.title}
              fallbackText={t.title}
              className="h-9 w-7 shrink-0 rounded object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs text-gold">{t.title}</p>
              <p className="truncate text-[11px] text-muted">{t.author}</p>
            </div>
            <span className="text-[11px] text-muted">{t.duration}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

/** Pleyer ostidagi to'lqin chizig'i */
function Waveform() {
  const bars = Array.from({ length: 64 }, (_, i) => 4 + Math.abs(Math.sin(i * 1.7)) * 20)

  return (
    <div className="mt-5 flex h-8 items-center justify-center gap-[3px]">
      {bars.map((h, i) => (
        <span
          key={i}
          className={`w-[2px] rounded-full ${i < 26 ? 'bg-gold' : 'bg-cream/30'}`}
          style={{ height: `${h}px` }}
        />
      ))}
    </div>
  )
}

/** Profil kartasi fonidagi naqsh */
function Mandala() {
  const rings = [40, 70, 100, 130]

  return (
    <svg
      className="pointer-events-none absolute -top-10 right-6 h-[320px] w-[320px] text-white/[0.05]"
      viewBox="-160 -160 320 320"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="2" fill="none">
        {rings.map((r) => (
          <circle key={r} r={r} />
        ))}
        {Array.from({ length: 16 }, (_, i) => {
          const a = (Math.PI / 8) * i
          return (
            <line
              key={i}
              x1={Math.cos(a) * 40}
              y1={Math.sin(a) * 40}
              x2={Math.cos(a) * 130}
              y2={Math.sin(a) * 130}
            />
          )
        })}
        {Array.from({ length: 8 }, (_, i) => {
          const a = (Math.PI / 4) * i
          return <circle key={i} cx={Math.cos(a) * 85} cy={Math.sin(a) * 85} r="14" />
        })}
      </g>
    </svg>
  )
}
