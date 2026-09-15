import { Link, useParams } from 'react-router-dom'
import SmartImage from '../components/SmartImage'
import { BookmarkIcon, StarIcon } from '../components/Icons'
import { getAuthor } from '../data/authors'
import { books } from '../data/books'

/** Bitta adib sahifasi: portret, biografiya, "IJODI" va "ASARLARI" */
export default function AuthorDetails() {
  const { id = '' } = useParams()
  const author = getAuthor(id)

  if (!author) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="font-display text-4xl">Adib topilmadi</h1>
        <Link to="/adiblar" className="mt-6 inline-block text-gold hover:underline">
          ← Adiblar ro‘yxatiga qaytish
        </Link>
      </div>
    )
  }

  // Shu adibning asarlari; hali kitob biriktirilmagan bo'lsa, umumiy ro'yxatdan namuna
  const authorBooks = books.filter((b) => b.authorId === author.id)
  const shown = authorBooks.length > 0 ? authorBooks : books.slice(0, 4)

  return (
    <div className="container-page grid gap-12 py-10 lg:grid-cols-[440px_1fr]">
      {/* Chap ustun — portret va sanalar */}
      <div>
        <SmartImage
          src={author.photo}
          alt={author.name}
          fallbackText={author.name}
          className="aspect-[3/4] w-full rounded-card object-cover grayscale"
        />

        <div className="mt-8 grid grid-cols-2 gap-6">
          <DateBlock label="Tavallud sanasi" value={author.born} place={author.birthPlace} />
          <DateBlock label="Vafot sanasi" value={author.died} place={author.deathPlace} />
        </div>
      </div>

      {/* O'ng ustun — ism, biografiya, ijod, asarlar */}
      <div>
        <h1 className="font-display text-5xl uppercase">{author.name}</h1>

        <p className="mt-6 text-[15px] leading-8 text-cream/80">{author.bio}</p>

        <div className="mt-8">
          <p className="flex items-center gap-2 font-display text-xl">
            <BookmarkIcon className="h-5 w-5 text-gold" />
            IJODI
          </p>
          <p className="mt-3 max-w-2xl pl-7 text-sm leading-7 text-cream/70">{author.work}</p>
        </div>

        <div className="mt-12">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-3xl">ASARLARI</h2>
            <button type="button" className="text-sm text-cream/80 hover:text-gold">
              Barchasini ko‘rish
            </button>
          </div>

          <div className="mt-6 flex gap-6 overflow-x-auto pb-4">
            {shown.map((book) => (
              <article key={book.id} className="w-[180px] shrink-0">
                <SmartImage
                  src={book.cover}
                  alt={book.title}
                  fallbackText={book.title}
                  className="aspect-[2/3] w-full rounded-xl object-cover"
                />
                <h3 className="mt-3 font-display text-base leading-tight text-cream/90 uppercase">
                  {book.title}
                </h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-cream/80">
                  <StarIcon className="h-4 w-4" />
                  {book.rating.toFixed(1)} · {book.reviews} ta fikrlar
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function DateBlock({ label, value, place }: { label: string; value: string; place: string }) {
  return (
    <div>
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 font-display text-3xl text-gold">{value}</p>
      <p className="mt-1 text-xs text-muted">{place}</p>
    </div>
  )
}
