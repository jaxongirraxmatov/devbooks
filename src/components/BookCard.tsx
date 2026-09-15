import SmartImage from './SmartImage'
import { StarIcon } from './Icons'
import type { Book } from '../data/types'

/** Kitoblar gridi uchun karta: muqova, nom, muallif, reyting */
export default function BookCard({ book }: { book: Book }) {
  return (
    <article className="group cursor-pointer">
      <SmartImage
        src={book.cover}
        alt={book.title}
        fallbackText={book.title}
        className="aspect-[2/3] w-full rounded-xl object-cover transition-transform duration-300 group-hover:-translate-y-1"
      />

      <h3 className="mt-3 font-display text-lg leading-tight text-cream/90 uppercase">
        {book.title}
      </h3>
      <p className="mt-1 text-sm text-muted">{book.authorName}</p>

      <p className="mt-2 flex items-center gap-1.5 text-sm text-cream/90">
        <StarIcon className="h-4 w-4" />
        {book.rating.toFixed(1)} · {book.reviews} ta fikrlar
      </p>
    </article>
  )
}
