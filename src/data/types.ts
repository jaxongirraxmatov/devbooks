export type CategoryId = 'temuriylar' | 'jadid' | 'sovet' | 'mustaqillik'

export type Category = {
  id: CategoryId
  title: string
}

export type Author = {
  id: string
  name: string
  born: string
  died: string
  /** Kartada ko'rinadigan qisqa yillar: "1878–1934" */
  years: string
  birthPlace: string
  deathPlace: string
  category: CategoryId
  /** public/images/authors/... ichidagi rasm; bo'lmasa fallback chiziladi */
  photo: string
  booksCount: number
  audioCount: number
  bio: string
  /** "IJODI" bloki uchun qisqa matn */
  work: string
}

export type Book = {
  id: string
  title: string
  authorId: string
  authorName: string
  category: CategoryId
  cover: string
  rating: number
  reviews: number
}
