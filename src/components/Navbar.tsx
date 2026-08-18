import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { navLinks } from '@/data/nav'
import { site } from '@/data/site'
import { useTheme } from '@/hooks/useTheme'
import { useActiveSection } from '@/hooks/useActiveSection'
import { Container } from './Container'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const activeId = useActiveSection(navLinks.map((link) => link.href.slice(1)))

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-heading text-sm font-semibold tracking-tight text-text"
          onClick={() => setIsOpen(false)}
        >
          James Darrigo
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-text ${
                  isActive ? 'text-text' : 'text-muted'
                }`}
                aria-current={isActive ? 'true' : undefined}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.resumeUrl}
            download
            className="hidden rounded-full border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent sm:inline-block"
          >
            Resume
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-full border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <nav className="border-t border-border bg-bg md:hidden" aria-label="Mobile">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-text"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.resumeUrl}
              download
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-lg border border-border px-3 py-2.5 text-center text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              Download Resume
            </a>
          </Container>
        </nav>
      )}
    </header>
  )
}
