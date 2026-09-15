# BADIIYAT — devbooks.uz

Figma dizayni asosida qurilgan o'zbek adabiyoti sayti.
**React 19 + TypeScript + Vite + Tailwind v4 + React Router.**

## Ishga tushirish

```bash
npm install
npm run dev
```

Sayt: http://localhost:5173

## Sahifalar

| Manzil | Fayl | Nima |
|---|---|---|
| `/` | `src/pages/Home.tsx` | Bosh sahifa — banner, qidiruv, kategoriyalar, kitoblar gridi |
| `/adiblar` | `src/pages/Authors.tsx` | Adiblar ro'yxati |
| `/adiblar/:id` | `src/pages/AuthorDetails.tsx` | Bitta adib: portret, biografiya, IJODI, ASARLARI |
| `/kabinet` | `src/pages/MyHome.tsx` | Kirgan foydalanuvchi sahifasi: profil, "Hozir o'qilmoqda", audio pleyer |
| `/kirish` | `src/pages/SignIn.tsx` | Sign in |
| `/royxat` | `src/pages/SignUp.tsx` | Sign up |

## Tuzilma

```
src/
  main.tsx              — routing (barcha manzillar shu yerda)
  index.css             — dizayn tokenlari: ranglar, shriftlar, radius
  layouts/SiteLayout    — Navbar + sahifa
  components/           — Navbar, Hero, SearchBox, CategoryTabs,
                          AuthorCard, BookCard, AuthLayout, SmartImage, Icons
  data/                 — vaqtinchalik ma'lumotlar (authors, books, user)
  pages/                — sahifalar
```

## Dizayn tokenlari

Hammasi `src/index.css` ichida, `@theme` blokida. Rangni o'zgartirish uchun
faqat shu yerni tahrirlash kifoya:

| Token | Qiymat | Qayerda |
|---|---|---|
| `--color-ink` | `#191919` | sahifa foni |
| `--color-surface` | `#202020` | kartalar |
| `--color-gold` | `#c9ac8c` | sarlavha, tugma, link |
| `--color-cream` | `#ece7e1` | asosiy matn |
| `--color-muted` | `#9b9b9b` | ikkilamchi matn |
| `--radius-card` | `25px` | Figmadagi burchak radiusi |

## Hali qilinishi kerak

1. **Rasmlar.** `public/images/authors/` va `public/images/books/` bo'sh.
   Rasm nomi ma'lumotdagi `id` bilan bir xil bo'lishi kerak, masalan
   `public/images/books/ikki-eshik-orasi.jpg`. Rasm bo'lmasa `SmartImage`
   komponenti bosh harflardan zaxira blok chizadi — sayt buzilmaydi.
2. **Shriftlar.** Figmada `Rotterburg Stylish FREE` (sarlavha) va `Steinbeck`
   (matn) ishlatilgan; ular Google Fonts'da yo'q. Hozir zaxira sifatida
   `Poiret One` va `Poppins` turibdi. Asl `.otf/.ttf` fayllarni qo'shsangiz,
   `index.css` dagi `--font-display` / `--font-sans` ularni avtomatik oladi.
3. **Backend.** `src/data/` ichidagilar vaqtinchalik. Keyin API yoki
   Supabase'ga ulanadi; formalar hozir hech narsa yubormaydi.
4. **Nasr / Nazm / Maqolalar / Forum** bo'limlari hali bo'sh (`Soon.tsx`).
