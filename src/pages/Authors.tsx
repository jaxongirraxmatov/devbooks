import { useMemo, useState } from 'react'
import Hero from '../components/Hero'
import SearchBox from '../components/SearchBox'
import CategoryTabs from '../components/CategoryTabs'
import AuthorCard from '../components/AuthorCard'
import { authors } from '../data/authors'
import type { CategoryId } from '../data/types'

/** Adiblar sahifasi — bosh sahifa bilan bir xil tuzilma, gridda adiblar */
export default function Authors() {
  const [category, setCategory] = useState<CategoryId>('jadid')
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const q = query.toLowerCase()
    if (q) return authors.filter((a) => a.name.toLowerCase().includes(q))
    return authors.filter((a) => a.category === category)
  }, [category, query])

  return (
    <>
      <Hero />
      <SearchBox onSearch={setQuery} />

      <section className="container-page py-14">
        <h2 className="text-center font-display text-3xl">ASOSIY KATEGORIYALAR</h2>

        <div className="mt-6">
          <CategoryTabs active={category} onChange={setCategory} />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {visible.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-12 text-center text-muted">Bu bo‘limda hozircha adib yo‘q.</p>
        )}
      </section>
    </>
  )
}
