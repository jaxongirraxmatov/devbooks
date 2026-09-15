import { categories } from '../data/authors'
import type { CategoryId } from '../data/types'

type Props = {
  active: CategoryId
  onChange: (id: CategoryId) => void
}

/** "ASOSIY KATEGORIYALAR" ostidagi filtr tablari */
export default function CategoryTabs({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
      {categories.map((c) => (
        <button
          key={c.id}
          type="button"
          onClick={() => onChange(c.id)}
          className={`text-lg transition-colors ${
            c.id === active ? 'text-gold' : 'text-cream/80 hover:text-cream'
          }`}
        >
          {c.title}
        </button>
      ))}
    </div>
  )
}
