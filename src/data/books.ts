import type { Book, CategoryId } from './types'

function book(
  id: string,
  title: string,
  authorId: string,
  authorName: string,
  rating: number,
  reviews: number,
  category: CategoryId = 'sovet',
): Book {
  return {
    id,
    title,
    authorId,
    authorName,
    category,
    cover: `/images/books/${id}.jpg`,
    rating,
    reviews,
  }
}

export const books: Book[] = [
  book('dunyoning-ishlari', 'Dunyoning ishlari', 'otkir-hoshimov', 'O‘tkir Hoshimov', 4.1, 3400),
  book('ikki-eshik-orasi', 'Ikki eshik orasi', 'otkir-hoshimov', 'O‘tkir Hoshimov', 4.3, 300),
  book('tushda-kechgan-umrlar', 'Tushda kechgan umrlar', 'otkir-hoshimov', 'O‘tkir Hoshimov', 4.4, 5200),
  book('ajdarning-tavbasi', '“Ajdar”ning tavbasi', 'otkir-hoshimov', 'O‘tkir Hoshimov', 3.9, 1400),
  book('ulugbek-xazinasi', 'Ulug‘bek xazinasi', 'odil-yoqubov', 'Odil Yoqubov', 3.9, 1400),
  book('ajdodlarimiz-fojiasi', 'Ajdodlarimiz fojiasi', 'mirkarim-osim', 'Mirkarim Osim', 4.1, 3400),
  book('yulduzli-tunlar', 'Yulduzli tunlar', 'pirimqul-qodirov', 'Pirimqul Qodirov', 4.3, 300, 'temuriylar'),
  book('otkan-kunlar', 'O‘tkan kunlar', 'abdulla-qodiriy', 'Abdulla Qodiriy', 4.4, 5200, 'jadid'),
  book('ruhlar-isyoni', 'Ruhlar isyoni', 'erkin-vohidov', 'Erkin Vohidov', 3.9, 1400),
  book('ufq', 'Ufq', 'said-ahmad', 'Said Ahmad', 3.9, 1400),
]

export function booksByAuthor(authorId: string): Book[] {
  return books.filter((b) => b.authorId === authorId)
}
