import type { InputHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: ReactNode
  illustration: 'login' | 'register'
}

/**
 * Kirish/ro'yxat sahifalari uchun ikki ustunli ramka:
 * chapda bej fonli illyustratsiya, o'ngda oq fonli forma.
 * (Figmada bu ikki sahifa saytning to'q uslubidan farq qiladi.)
 */
export default function AuthLayout({ children, illustration }: Props) {
  return (
    <div className="grid min-h-screen bg-white lg:grid-cols-2">
      <div className="hidden items-center justify-center bg-sand p-12 lg:flex">
        {illustration === 'login' ? <LoginArt /> : <RegisterArt />}
      </div>

      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          {children}

          <Link
            to="/"
            className="mt-10 block text-center text-sm text-slate-400 hover:text-slate-600"
          >
            ← Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </div>
  )
}

/** Formadagi bir xil ko'rinishdagi input */
export function AuthField(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="h-12 w-full rounded-lg border border-slate-200 px-4 text-[15px] text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-navy"
    />
  )
}

/** Kirish sahifasi illyustratsiyasi — "Login" kartasi */
function LoginArt() {
  return (
    <svg viewBox="0 0 320 300" className="w-full max-w-sm" aria-hidden="true">
      <rect x="80" y="40" width="200" height="200" rx="10" fill="#ffffff" />
      <text x="180" y="78" textAnchor="middle" fontSize="20" fontWeight="700" fill="#16213e">
        Login
      </text>
      <rect x="104" y="100" width="152" height="10" rx="5" fill="#e6e8ee" />
      <rect x="104" y="128" width="152" height="10" rx="5" fill="#e6e8ee" />
      <rect x="104" y="160" width="152" height="26" rx="13" fill="#f4623a" />
      <rect x="104" y="198" width="152" height="22" rx="11" fill="#eef0f4" />

      <circle cx="70" cy="120" r="26" fill="#2b2b3c" />
      <path d="M44 250c0-34 12-84 26-84s26 50 26 84z" fill="#f4623a" />
      <path d="M232 150c22-26 46-32 58-22-14 18-36 28-58 22z" fill="#e8e2d8" />
      <path d="M262 232c-8-24-2-46 10-52 4 22 0 42-10 52z" fill="#f4623a" />
    </svg>
  )
}

/** Ro'yxat sahifasi illyustratsiyasi — "kod kiritish" sahnasi */
function RegisterArt() {
  return (
    <svg viewBox="0 0 320 300" className="w-full max-w-sm" aria-hidden="true">
      <rect x="120" y="30" width="170" height="90" rx="8" fill="#ffffff" />
      <circle cx="134" cy="44" r="3" fill="#f4623a" />
      <circle cx="145" cy="44" r="3" fill="#e6e8ee" />
      <circle cx="156" cy="44" r="3" fill="#e6e8ee" />
      <rect x="192" y="58" width="26" height="22" rx="4" fill="#f4623a" />
      <rect x="152" y="92" width="106" height="8" rx="4" fill="#e6e8ee" />

      <rect x="130" y="150" width="140" height="70" rx="8" fill="#ffffff" />
      <text x="200" y="175" textAnchor="middle" fontSize="11" fill="#7a8194">
        ENTER CODE
      </text>
      <g fill="#eef0f4">
        <rect x="150" y="186" width="22" height="22" rx="4" />
        <rect x="178" y="186" width="22" height="22" rx="4" />
        <rect x="206" y="186" width="22" height="22" rx="4" />
        <rect x="234" y="186" width="22" height="22" rx="4" />
      </g>

      <path d="M40 40h50v60c0 18-14 30-25 34-11-4-25-16-25-34z" fill="#e8e2d8" />
      <circle cx="65" cy="72" r="10" fill="#ffffff" />
      <circle cx="72" cy="180" r="24" fill="#2b2b3c" />
      <path d="M36 268c0-38 16-64 36-64s36 26 36 64z" fill="#2b2b3c" />
      <rect x="28" y="236" width="70" height="40" rx="10" fill="#f4623a" />
    </svg>
  )
}
