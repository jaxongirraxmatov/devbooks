import { NavLink, Link } from 'react-router-dom'
import { ChevronDownIcon } from './Icons'
import SmartImage from './SmartImage'
import { currentUser } from '../data/user'

const links = [
  { to: '/', label: 'Bosh sahifa', end: true },
  { to: '/nasr', label: 'Nasr' },
  { to: '/nazm', label: 'Nazm' },
  { to: '/maqolalar', label: 'Maqolalar' },
  { to: '/forum', label: 'Forum' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-ink/90 backdrop-blur">
      <div className="container-page flex h-[76px] items-center justify-between gap-6">
        <Link to="/" className="font-display text-2xl tracking-[0.12em] text-gold">
          BADIIYAT
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                [
                  'relative py-6 text-[15px] transition-colors',
                  isActive ? 'text-cream' : 'text-muted hover:text-cream',
                  isActive
                    ? 'after:absolute after:inset-x-0 after:bottom-4 after:h-px after:bg-cream'
                    : '',
                ].join(' ')
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/kabinet" className="flex items-center gap-2 text-muted hover:text-cream">
          <SmartImage
            src={currentUser.avatar}
            alt={currentUser.name}
            fallbackText={currentUser.name}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-line"
          />
          <ChevronDownIcon />
        </Link>
      </div>
    </header>
  )
}
