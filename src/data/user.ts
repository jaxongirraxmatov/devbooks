/** Kirgan foydalanuvchi — hozircha mock, keyin backenddan keladi */
export const currentUser = {
  name: 'Farruxbek Abdullayev',
  birthDate: 'February 08, 1999',
  address: 'Jizzax',
  bio: 'Graphic designer and Developer',
  avatar: '/images/authors/user.jpg',
  badge: 'Oltin kitobxon',
  booksRead: 186,
}

/** "Hozir o'qilmoqda…" ro'yxati */
export const reading = [
  { id: 'ikki-eshik-orasi-1', title: 'Ikki eshik orasi', cover: '/images/books/ikki-eshik-orasi.jpg', progress: 30 },
  { id: 'ikki-eshik-orasi-2', title: 'Ikki eshik orasi', cover: '/images/books/ikki-eshik-orasi.jpg', progress: 70 },
  { id: 'ikki-eshik-orasi-3', title: 'Ikki eshik orasi', cover: '/images/books/ikki-eshik-orasi.jpg', progress: 96 },
  { id: 'ikki-eshik-orasi-4', title: 'Ikki eshik orasi', cover: '/images/books/ikki-eshik-orasi.jpg', progress: 45 },
]

/** Audio kitob pleyeri uchun treklar */
export const audioBook = {
  title: 'Dunyoning ishlari 5-track',
  author: 'O‘tkir Hoshimov',
  cover: '/images/books/dunyoning-ishlari.jpg',
  tracks: [
    { id: 5, title: 'Dunyoning ishlari 5-track', author: 'O‘tkir Hoshimov', duration: '00:22:18' },
    { id: 4, title: 'Dunyoning ishlari 4-track', author: 'O‘tkir Hoshimov', duration: '02:18:09' },
    { id: 3, title: 'Dunyoning ishlari 3-track', author: 'O‘tkir Hoshimov', duration: '02:09:05' },
    { id: 2, title: 'Dunyoning ishlari 2-track', author: 'O‘tkir Hoshimov', duration: '01:47:31' },
  ],
}
