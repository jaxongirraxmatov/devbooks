import { useMemo, useState } from 'react'
import Hero from '../components/Hero'
import SearchBox from '../components/SearchBox'
import CategoryTabs from '../components/CategoryTabs'
import BookCard from '../components/BookCard'
import { books } from '../data/books'
import type { CategoryId } from '../data/types'

/** Bosh sahifa — banner, qidiruv, kategoriyalar va kitoblar gridi */
export default function Home() {
  const [category, setCategory] = useState<CategoryId>('jadid')
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const q = query.toLowerCase()
    return books.filter((b) => {
      const matchesQuery =
        !q || b.title.toLowerCase().includes(q) || b.authorName.toLowerCase().includes(q)
      // Qidiruv paytida kategoriya cheklovi olib tashlanadi
      return q ? matchesQuery : true
    })
  }, [query])

  return (
    <>
      <Hero />
      <SearchBox onSearch={setQuery} />

      <section className="container-page py-14">
        <h2 className="text-center font-display text-3xl">ASOSIY KATEGORIYALAR</h2>

        <div className="mt-6">
          <CategoryTabs active={category} onChange={setCategory} />
        </div>

        {query && (
          <p className="mt-6 text-center text-sm text-muted">
            “{query}” bo‘yicha {visible.length} ta natija
          </p>
        )}

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {visible.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-12 text-center text-muted">Hech narsa topilmadi.</p>
        )}
      </section>
    </>
  )
}
