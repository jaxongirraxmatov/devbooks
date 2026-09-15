import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

/** Navbar + sahifa tarkibi — barcha "ichki" sahifalar uchun umumiy ramka */
export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
