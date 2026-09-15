import type { Author, Category } from './types'

export const categories: Category[] = [
  { id: 'temuriylar', title: 'Temuriylar davri' },
  { id: 'jadid', title: 'Jadid adabiyoti' },
  { id: 'sovet', title: 'Sovet davri' },
  { id: 'mustaqillik', title: 'Mustaqillik davri' },
]

/** Qisqa yozuv: har bir adib uchun bir xil takrorlanadigan maydonlarni to'ldiradi */
function jadid(
  id: string,
  name: string,
  extra: Partial<Author> = {},
): Author {
  return {
    id,
    name,
    born: '1878',
    died: '1934',
    years: '1878–1934',
    birthPlace: 'Toshkent, O‘zbekiston',
    deathPlace: 'Toshkent, O‘zbekiston',
    category: 'jadid',
    photo: `/images/authors/${id}.jpg`,
    booksCount: 34,
    audioCount: 13,
    bio: `${name} — jadid adabiyoti namoyandasi. Ma’rifatparvar shoir va yozuvchi sifatida o‘zbek adabiyoti va matbuoti rivojiga katta hissa qo‘shgan.`,
    work: `Yozuvchining asarlari jadidchilik harakati g‘oyalari bilan sug‘orilgan bo‘lib, xalq ma’rifati va milliy uyg‘onish mavzularini o‘z ichiga oladi.`,
    ...extra,
  }
}

export const authors: Author[] = [
  jadid('abdulla-avloniy', 'Abdulla Avloniy'),
  jadid('nusrat-rahmat', 'Nusrat Rahmat'),
  jadid('rahmonberdi-madazimov', 'Rahmonberdi Madazimov'),
  jadid('hamza-hakimzoda-niyoziy', 'Hamza Hakimzoda Niyoziy'),
  jadid('abdulhamid-cholpon', 'Abdulhamid Cho‘lpon'),
  jadid('abdurauf-fitrat', 'Abdurauf Fitrat'),
  jadid('abdulmajid-qodiriy', 'Abdulmajid Qodiriy'),
  jadid('munavvarqori-abdurashidxonov', 'Munavvarqori Abdurashidxonov'),
  jadid('abdulla-qodiriy', 'Abdulla Qodiriy'),
  jadid('mahmuxoja-behbudiy', 'Mahmuxo‘ja Behbudiy'),
  jadid('hoji-muin', 'Hoji Muin'),
  {
    id: 'otkir-hoshimov',
    name: 'O‘tkir Hoshimov',
    born: '1941',
    died: '2013',
    years: '1941–2013',
    birthPlace: 'Toshkent, O‘zbekiston',
    deathPlace: 'Toshkent, O‘zbekiston',
    category: 'sovet',
    photo: '/images/authors/otkir-hoshimov.jpg',
    booksCount: 34,
    audioCount: 13,
    bio: `O‘tkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi Chilonzor) tumanidagi Do‘mbirovot mavzeida tug‘ildi. O‘. Hoshimov mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti (hozirgi O‘zbekiston Milliy universiteti)ning jurnalistika kulliyotida o‘qish bilan baravar gazeta tahririyatida ishladi. 1959 yildan 1963 yilgacha “Temiryo‘lchi”, “Qizil O‘zbekiston”, “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih, tarjimon bo‘lib ishladi. So‘ng “Toshkent haqiqati” gazetasida adabiy xodim (1963–1966), “Toshkent oqshomi” gazetasida bo‘lim mudiri (1966–1982), G‘. G‘ulom nomidagi Adabiyot va san’at nashriyotida bosh muharrir o‘rinbosari (1982–1985) bo‘ldi. 1985–1995 yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan 2005 yilgacha O‘zbekiston Respublikasi Oliy Majlisining Matbuot va axborot qo‘mitasi raisi lavozimida ishladi. 2005 yildan “Teatr” jurnalida bosh muharrir bo‘lib ishladi.`,
    work: `Yozuvchining ilk asari 1962-yilda „Po‘lat chavandoz“ nomida ocherklar to‘plami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi bo‘ldi.`,
  },
]

export function getAuthor(id: string): Author | undefined {
  return authors.find((a) => a.id === id)
}
