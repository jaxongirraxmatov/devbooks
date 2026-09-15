import { Link } from 'react-router-dom'
import SmartImage from './SmartImage'
import { BookIcon, HeadphonesIcon } from './Icons'
import type { Author } from '../data/types'

/** Adiblar gridi uchun karta: rasm, ism, yillar, kitob va audio soni */
export default function AuthorCard({ author }: { author: Author }) {
  return (
    <Link
      to={`/adiblar/${author.id}`}
      className="group block overflow-hidden rounded-2xl bg-surface transition-transform duration-300 hover:-translate-y-1 hover:bg-surface-2"
    >
      <SmartImage
        src={author.photo}
        alt={author.name}
        fallbackText={author.name}
        className="aspect-[4/5] w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
      />

      <div className="px-4 py-4 text-center">
        <p className="font-display text-lg leading-tight text-gold">{author.name}</p>
        <p className="mt-1 text-xs text-muted">{author.years}</p>

        <div className="mt-3 flex items-center justify-center gap-5 text-sm text-cream/90">
          <span className="flex items-center gap-1.5">
            <BookIcon className="h-4 w-4" />
            {author.booksCount}
          </span>
          <span className="flex items-center gap-1.5">
            <HeadphonesIcon className="h-4 w-4" />
            {author.audioCount}
          </span>
        </div>
      </div>
    </Link>
  )
}
