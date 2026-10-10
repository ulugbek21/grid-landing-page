import { useEffect, useRef } from 'react'

const links = ['About', 'Our Work', 'Partners', 'Annual Report', 'Donate']

type NavMenuProps = {
  id: string
  onClose: () => void
}

function NavMenu({ id, onClose }: NavMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    firstLinkRef.current?.focus()
  }, [])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <>
      <div className="nav-overlay" onClick={onClose} aria-hidden="true" />
      <nav id={id} className="nav-menu" aria-label="Main">
        <ul className="nav-menu__list">
          {links.map((link, index) => (
            <li key={link}>
              <a
                ref={index === 0 ? firstLinkRef : undefined}
                className="nav-menu__link"
                href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
                onClick={onClose}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default NavMenu
