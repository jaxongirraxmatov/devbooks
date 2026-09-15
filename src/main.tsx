import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

import SiteLayout from './layouts/SiteLayout'
import Home from './pages/Home'
import Authors from './pages/Authors'
import AuthorDetails from './pages/AuthorDetails'
import MyHome from './pages/MyHome'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Soon from './pages/Soon'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Navbar bilan ochiladigan sahifalar */}
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/adiblar" element={<Authors />} />
          <Route path="/adiblar/:id" element={<AuthorDetails />} />
          <Route path="/kabinet" element={<MyHome />} />

          {/* Menyudagi qolgan bo'limlar — keyin to'ldiriladi */}
          <Route path="/nasr" element={<Soon title="Nasr" />} />
          <Route path="/nazm" element={<Soon title="Nazm" />} />
          <Route path="/maqolalar" element={<Soon title="Maqolalar" />} />
          <Route path="/forum" element={<Soon title="Forum" />} />
          <Route path="*" element={<Soon title="Sahifa topilmadi" />} />
        </Route>

        {/* Navbarsiz, alohida maketdagi sahifalar */}
        <Route path="/kirish" element={<SignIn />} />
        <Route path="/royxat" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
