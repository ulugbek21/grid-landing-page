import { useRef, useState } from 'react'
import './App.css'
import iconMenu from './assets/icon-menu.svg'
import iconClose from './assets/icon-close.svg'
import NavMenu from './components/NavMenu'
import StatCard from './components/StatCard'
import { stats } from './stats'

const MENU_ID = 'site-menu'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  function closeMenu() {
    setIsMenuOpen(false)
    toggleRef.current?.focus()
  }

  return (
    <div className="page">
      <header className="site-header">
        <a className="logo" href="/">
          Bridge Collective
        </a>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls={MENU_ID}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => (isMenuOpen ? closeMenu() : setIsMenuOpen(true))}
        >
          <img src={isMenuOpen ? iconClose : iconMenu} alt="" width={24} height={24} />
        </button>
      </header>

      <main className="content" inert={isMenuOpen}>
        <section className="hero">
          <h1 className="hero__title">A classroom for every child.</h1>
          <p className="hero__text">
            We fund the schools, train the teachers, and measure what works — so every
            child we reach today becomes a graduate tomorrow.
          </p>
        </section>

        <ul className="stats" aria-label="Our impact">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </ul>
      </main>

      <footer className="site-footer" inert={isMenuOpen}>
        <p>© 2026 Bridge Collective</p>
        <p>Registered charity 12345678</p>
      </footer>

      {isMenuOpen && <NavMenu id={MENU_ID} onClose={closeMenu} />}
    </div>
  )
}

export default App
